import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // 1. Easypaisa sends a callback with the payment details in PKR
    // In a real scenario, this is typically sent as Form Data or JSON.
    const body = await request.json();
    const { orderId, amount_pkr, status, transactionId } = body;

    // Security Check: Verify Easypaisa Signature / Hash here in production.
    if (status !== "SUCCESS") {
      return NextResponse.json({ success: false, error: "Payment failed or pending." }, { status: 400 });
    }

    if (!orderId || !amount_pkr) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    // 2. Fetch the LIVE exchange rate from a Free API (Google Finance equivalent)
    // We are using the ExchangeRate-API (Open Access) to get the USD base rates.
    console.log(`[EASYPAISA CALLBACK] Payment received for Order ${orderId}: PKR ${amount_pkr}`);
    console.log(`[EASYPAISA CALLBACK] Fetching live USD to PKR exchange rate...`);
    
    const rateResponse = await fetch("https://open.er-api.com/v6/latest/USD", {
      cache: "no-store", // Ensure we always get the live rate, no caching
    });
    
    if (!rateResponse.ok) {
      throw new Error("Failed to fetch live exchange rates.");
    }

    const rateData = await rateResponse.json();
    const livePkrRate = rateData.rates.PKR; // e.g., 278.50

    if (!livePkrRate) {
      throw new Error("PKR rate not available from exchange API.");
    }

    // 3. Convert the exact PKR amount paid into USD based on the live millisecond rate
    const amount_usd = (parseFloat(amount_pkr) / livePkrRate).toFixed(2);

    console.log(`[EASYPAISA CALLBACK] Live Rate: 1 USD = ${livePkrRate} PKR`);
    console.log(`[EASYPAISA CALLBACK] Converted PKR ${amount_pkr} -> USD $${amount_usd}`);

    // 4. SAVE TO DATABASE (Prisma / Mongoose)
    // Here you would connect to your database and update the invoice:
    /*
      await prisma.order.update({
        where: { id: orderId },
        data: { 
          status: "PAID", 
          paidInPkr: parseFloat(amount_pkr),
          recordedUsdRevenue: parseFloat(amount_usd), // The main accounting currency
          exchangeRateUsed: livePkrRate,
          paymentGateway: "EASYPAISA",
          transactionId: transactionId
        }
      });
    */

    // Return a success response to Easypaisa to acknowledge receipt
    return NextResponse.json({
      success: true,
      message: "Callback processed and revenue reconciled in USD.",
      reconciliation: {
        orderId,
        received_pkr: parseFloat(amount_pkr),
        live_exchange_rate: livePkrRate,
        final_recorded_usd: parseFloat(amount_usd)
      }
    });

  } catch (error) {
    console.error("[EASYPAISA CALLBACK ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error during reconciliation." },
      { status: 500 }
    );
  }
}
