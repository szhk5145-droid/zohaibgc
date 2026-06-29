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

    console.log(`[EASYPAISA CALLBACK] Payment received for Order ${orderId}: PKR ${amount_pkr}`);

    // 2. SAVE TO DATABASE (Prisma / Mongoose)
    // Here you would connect to your database and update the invoice:
    /*
      await prisma.order.update({
        where: { id: orderId },
        data: { 
          status: "PAID", 
          paidInPkr: parseFloat(amount_pkr),
          recordedPkrRevenue: parseFloat(amount_pkr), // The main accounting currency
          paymentGateway: "EASYPAISA",
          transactionId: transactionId
        }
      });
    */

    // Return a success response to Easypaisa to acknowledge receipt
    return NextResponse.json({
      success: true,
      message: "Callback processed and revenue reconciled in PKR.",
      reconciliation: {
        orderId,
        received_pkr: parseFloat(amount_pkr),
        final_recorded_pkr: parseFloat(amount_pkr)
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
