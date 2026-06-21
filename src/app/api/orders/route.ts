import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, clientInfo, paymentMethod, transactionRef } = body;

    if (!items || !clientInfo || !paymentMethod) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate order number
    const orderNumber = `ZG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Calculate total
    const total = items.reduce((sum: number, item: { priceValue: number }) => sum + item.priceValue, 0);

    const order = {
      orderNumber,
      status: paymentMethod === "bank" ? "pending_verification" : "pending_payment",
      items,
      clientInfo: {
        fullName: clientInfo.fullName,
        email: clientInfo.email,
        phone: clientInfo.phone,
        company: clientInfo.company || null,
        projectDetails: clientInfo.projectDetails,
      },
      payment: {
        method: paymentMethod,
        amount: total,
        currency: "USD",
        transactionRef: transactionRef || null,
        status: "pending",
      },
      createdAt: new Date().toISOString(),
    };

    // ──────────────────────────────────────────────────────
    // DATABASE INTEGRATION
    // In production, save this order to your database:
    //   await prisma.order.create({ data: order });
    // For now, we just return the order data.
    // ──────────────────────────────────────────────────────

    // ──────────────────────────────────────────────────────
    // EMAIL NOTIFICATION
    // In production, send confirmation emails:
    //   await sendEmail({ to: clientInfo.email, template: 'order-confirmation', data: order });
    //   await sendEmail({ to: 'admin@zohaibglobal.com', template: 'new-order', data: order });
    // ──────────────────────────────────────────────────────

    return NextResponse.json({
      success: true,
      order: {
        orderNumber: order.orderNumber,
        status: order.status,
        total: order.payment.amount,
        createdAt: order.createdAt,
      },
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
