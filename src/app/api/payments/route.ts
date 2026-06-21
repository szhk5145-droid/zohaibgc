import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ──────────────────────────────────────────────────────────
// PAYMENT GATEWAY CONFIGURATION
// Replace these with your actual credentials when ready.
// ──────────────────────────────────────────────────────────
const GATEWAY_CONFIG = {
  jazzcash: {
    merchantId: process.env.JAZZCASH_MERCHANT_ID || "",
    password: process.env.JAZZCASH_PASSWORD || "",
    integritySalt: process.env.JAZZCASH_INTEGRITY_SALT || "",
    apiUrl: process.env.JAZZCASH_API_URL || "https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction",
    returnUrl: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/jazzcash/callback` : "http://localhost:3000/api/payments/jazzcash/callback",
  },
  easypaisa: {
    storeId: process.env.EASYPAISA_STORE_ID || "",
    hashKey: process.env.EASYPAISA_HASH_KEY || "",
    apiUrl: process.env.EASYPAISA_API_URL || "https://easypay.easypaisa.com.pk/easypay/Index.jsf",
    returnUrl: process.env.NEXT_PUBLIC_BASE_URL ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/easypaisa/callback` : "http://localhost:3000/api/payments/easypaisa/callback",
  },
  bank: {
    bankName: process.env.BANK_NAME || "Your Bank Name",
    accountTitle: process.env.BANK_ACCOUNT_TITLE || "Zohaib Global",
    accountNumber: process.env.BANK_ACCOUNT_NUMBER || "XXXX-XXXX-XXXX",
    iban: process.env.BANK_IBAN || "PK00XXXX0000000000000000",
    branchCode: process.env.BANK_BRANCH_CODE || "",
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, orderId, amount, customerInfo } = body;

    // Send Admin Notification Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER || '"Zohaib Global System" <noreply@zohaibglobal.com>',
        to: 'zhk5145@gmail.com',
        subject: `New Payment Initiated - Order: ${orderId || 'N/A'}`,
        html: `
          <h3>Payment Attempt Detected</h3>
          <p><strong>Method:</strong> ${method}</p>
          <p><strong>Amount:</strong> $${amount}</p>
          <p><strong>Order ID:</strong> ${orderId || 'N/A'}</p>
          <p><strong>Customer Info:</strong> ${JSON.stringify(customerInfo || {})}</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send payment alert email:", emailError);
    }

    if (!method || !orderId || !amount) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: method, orderId, amount" },
        { status: 400 }
      );
    }

    let pkrAmount = amount;
    let livePkrRate = 1;

    // Convert USD to PKR for local gateways before sending to their portal
    if (method === "easypaisa" || method === "jazzcash") {
      try {
        const rateResponse = await fetch("https://open.er-api.com/v6/latest/USD", { cache: "no-store" });
        const rateData = await rateResponse.json();
        livePkrRate = rateData.rates?.PKR || 278.50;
        pkrAmount = Math.round(parseFloat(amount) * livePkrRate);
      } catch (e) {
        console.error("Exchange rate API failed. Using fallback rate.");
        livePkrRate = 278.50;
        pkrAmount = Math.round(parseFloat(amount) * livePkrRate);
      }
    }

    switch (method) {
      case "jazzcash": {
        if (!GATEWAY_CONFIG.jazzcash.merchantId) {
          return NextResponse.json(
            { success: false, error: "JazzCash gateway not configured.", code: "GATEWAY_NOT_CONFIGURED" },
            { status: 503 }
          );
        }

        return NextResponse.json({
          success: true,
          gateway: "jazzcash",
          redirectUrl: null,
          message: "JazzCash payment initiated.",
          originalAmountUsd: amount,
          convertedAmountPkr: pkrAmount,
          exchangeRateUsed: livePkrRate
        });
      }

      case "easypaisa": {
        if (!GATEWAY_CONFIG.easypaisa.storeId) {
          return NextResponse.json(
            { success: false, error: "Easypaisa gateway not configured.", code: "GATEWAY_NOT_CONFIGURED" },
            { status: 503 }
          );
        }

        return NextResponse.json({
          success: true,
          gateway: "easypaisa",
          redirectUrl: null,
          message: "Easypaisa payment initiated.",
          originalAmountUsd: amount,
          convertedAmountPkr: pkrAmount,
          exchangeRateUsed: livePkrRate
        });
      }

      case "bank": {
        // ──── BANK TRANSFER ────
        // Returns bank details for manual transfer.
        // After user transfers, they submit a transaction reference.
        // Admin manually verifies and marks as paid.
        return NextResponse.json({
          success: true,
          gateway: "bank",
          bankDetails: GATEWAY_CONFIG.bank,
          orderId,
          amount,
          message: "Transfer to the account below and submit your transaction reference.",
        });
      }

      default:
        return NextResponse.json(
          { success: false, error: "Invalid payment method" },
          { status: 400 }
        );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
