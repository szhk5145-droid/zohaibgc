import { NextRequest, NextResponse } from "next/server";

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

    if (!method || !orderId || !amount) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: method, orderId, amount" },
        { status: 400 }
      );
    }

    switch (method) {
      case "jazzcash": {
        // ──── JAZZCASH INTEGRATION ────
        // When you have credentials, this will:
        // 1. Generate a secure hash using HMAC-SHA256 with the integrity salt
        // 2. POST to JazzCash API with transaction details
        // 3. Return redirect URL or MWALLET prompt
        if (!GATEWAY_CONFIG.jazzcash.merchantId) {
          return NextResponse.json(
            { success: false, error: "JazzCash gateway not configured yet. Contact support.", code: "GATEWAY_NOT_CONFIGURED" },
            { status: 503 }
          );
        }

        // TODO: Implement actual JazzCash API call
        // const hash = generateJazzCashHash(params, GATEWAY_CONFIG.jazzcash.integritySalt);
        // const response = await fetch(GATEWAY_CONFIG.jazzcash.apiUrl, { ... });

        return NextResponse.json({
          success: true,
          gateway: "jazzcash",
          redirectUrl: null,
          message: "JazzCash payment initiated",
        });
      }

      case "easypaisa": {
        // ──── EASYPAISA INTEGRATION ────
        // When you have credentials, this will:
        // 1. Generate a hash token using the hash key
        // 2. POST to Easypaisa API
        // 3. Return redirect URL to Easypaisa payment page
        if (!GATEWAY_CONFIG.easypaisa.storeId) {
          return NextResponse.json(
            { success: false, error: "Easypaisa gateway not configured yet. Contact support.", code: "GATEWAY_NOT_CONFIGURED" },
            { status: 503 }
          );
        }

        // TODO: Implement actual Easypaisa API call
        // const hash = generateEasypaisaHash(params, GATEWAY_CONFIG.easypaisa.hashKey);
        // const response = await fetch(GATEWAY_CONFIG.easypaisa.apiUrl, { ... });

        return NextResponse.json({
          success: true,
          gateway: "easypaisa",
          redirectUrl: null,
          message: "Easypaisa payment initiated",
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
