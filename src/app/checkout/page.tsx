"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

type PaymentMethod = "jazzcash" | "easypaisa" | "bank" | null;
type Step = "review" | "details" | "payment" | "confirmation";

export default function CheckoutPage() {
  const { items, removeItem, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>("review");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [orderNumber, setOrderNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Form state
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", company: "",
    projectDetails: "", transactionRef: "",
  });

  const updateForm = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmitOrder = async () => {
    setIsProcessing(true);
    try {
      const num = `ZG-${Date.now().toString(36).toUpperCase()}`;
      setOrderNumber(num);

      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          method: paymentMethod,
          orderId: num,
          amount: total.toString(),
          customerInfo: form
        })
      });

      const data = await response.json();
      
      if (data.redirectUrl) {
         window.location.href = data.redirectUrl;
         return;
      }

      clearCart();
      setStep("confirmation");
    } catch (err) {
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
        <Navbar />
        <section className="pt-32 pb-32 text-center">
          <div className="max-w-[1400px] mx-auto px-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Your cart is empty</h1>
            <p className="text-[#71717a] mb-8">Browse our services to add packages to your cart.</p>
            <Link href="/services" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300 inline-block">
              Browse Services
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      <section className="pt-32 pb-8 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Checkout</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            {step === "confirmation" ? "Order Confirmed" : "Complete Your Order"}
          </h1>

          {/* Progress Steps */}
          {step !== "confirmation" && (
            <div className="flex items-center gap-0 text-[12px] uppercase tracking-[0.15em]">
              {(["review", "details", "payment"] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center">
                  <span className={`px-4 py-2 border ${
                    step === s ? "border-[#F48B47] text-[#F48B47] bg-[#F48B47]/5" :
                    (["review", "details", "payment"].indexOf(step) > i ? "border-[#1c1c1c] text-white" : "border-[#1c1c1c] text-[#555]")
                  }`}>
                    {i + 1}. {s === "review" ? "Review" : s === "details" ? "Details" : "Payment"}
                  </span>
                  {i < 2 && <div className="w-8 h-px bg-[#1c1c1c]" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-8">

          {/* ──── STEP 1: REVIEW ──── */}
          {step === "review" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold mb-6">Selected Packages</h2>
                <div className="border border-[#1c1c1c] overflow-hidden">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between px-6 py-5 border-b border-[#1c1c1c] last:border-b-0 hover:bg-[#111] transition-colors gap-4 md:gap-0">
                      <div>
                        <p className="text-[14px] font-semibold">{item.serviceName}</p>
                        <p className="text-[12px] text-[#71717a] mt-0.5">{item.categoryTitle}</p>
                        {item.isRecurring && <span className="text-[10px] text-[#F48B47] uppercase tracking-wider mt-1 inline-block">Recurring</span>}
                      </div>
                      <div className="flex items-center justify-between md:justify-end md:gap-6 w-full md:w-auto">
                        <div className="flex flex-col md:items-end">
                          <span className="text-[#F48B47] font-semibold">{item.price}</span>
                          <span className="text-[11px] text-[#71717a]">PKR {Math.round(item.priceValue * 278.5).toLocaleString()}</span>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-[#555] hover:text-red-400 transition-colors text-xs border border-[#1c1c1c] px-3 py-1.5 md:border-none md:px-0 md:py-0">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary sidebar */}
              <div className="border border-[#1c1c1c] p-8 h-fit bg-[#0d0d0d]">
                <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-[13px]">
                      <span className="text-[#71717a] truncate max-w-[60%]">{item.serviceName}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#1c1c1c] pt-4 flex flex-col items-end gap-1">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-[13px] text-[#71717a] uppercase tracking-wider">Total</span>
                    <span className="text-xl font-bold">${total.toLocaleString()}</span>
                  </div>
                  <span className="text-[12px] text-[#F48B47]">PKR {Math.round(total * 278.5).toLocaleString()}</span>
                </div>
                <button onClick={() => setStep("details")}
                  className="w-full mt-6 bg-[#F48B47] text-black font-semibold text-sm py-4 hover:bg-[#e07a38] transition-colors duration-300">
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* ──── STEP 2: CLIENT DETAILS ──── */}
          {step === "details" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
              <h2 className="text-lg font-semibold mb-6">Client Information</h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Full Name *</label>
                    <input required type="text" value={form.fullName} onChange={(e) => updateForm("fullName", e.target.value)}
                      className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Phone *</label>
                    <input required type="tel" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Company</label>
                    <input type="text" value={form.company} onChange={(e) => updateForm("company", e.target.value)}
                      className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Project Requirements *</label>
                  <textarea required rows={5} value={form.projectDetails} onChange={(e) => updateForm("projectDetails", e.target.value)}
                    className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors resize-none"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..." />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <button onClick={() => setStep("review")} className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
                  Back
                </button>
                <button
                  onClick={() => { if (form.fullName && form.email && form.phone && form.projectDetails) setStep("payment"); }}
                  className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
                  Continue to Payment
                </button>
              </div>
            </motion.div>
          )}

          {/* ──── STEP 3: PAYMENT ──── */}
          {step === "payment" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold mb-6">Select Payment Method</h2>

                <div className="space-y-3 mb-8">
                  {([
                    { id: "jazzcash" as PaymentMethod, name: "JazzCash", desc: "Pay securely via JazzCash mobile wallet", tag: "Coming Soon" },
                    { id: "easypaisa" as PaymentMethod, name: "Easypaisa", desc: "Pay securely via Easypaisa mobile wallet", tag: "Coming Soon" },
                    { id: "bank" as PaymentMethod, name: "Bank Transfer", desc: "Secure bank payment via API gateway", tag: "Available" },
                  ]).map((method) => (
                    <button key={method.id}
                      onClick={() => method.tag === "Available" ? setPaymentMethod(method.id) : null}
                      className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between ${
                        paymentMethod === method.id
                          ? "border-[#F48B47] bg-[#F48B47]/5"
                          : method.tag === "Available"
                            ? "border-[#1c1c1c] hover:border-[#333]"
                            : "border-[#1c1c1c] opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div>
                        <p className="text-[14px] font-semibold">{method.name}</p>
                        <p className="text-[12px] text-[#71717a] mt-0.5">{method.desc}</p>
                      </div>
                      <span className={`text-[11px] uppercase tracking-wider px-3 py-1 border ${
                        method.tag === "Available" ? "border-green-800 text-green-500" : "border-[#1c1c1c] text-[#555]"
                      }`}>{method.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border border-[#1c1c1c] p-8 h-fit bg-[#0d0d0d]">
                <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-[13px]">
                      <span className="text-[#71717a] truncate max-w-[60%]">{item.serviceName}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#1c1c1c] pt-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-[13px] text-[#71717a]">Client</span>
                    <span className="text-[13px]">{form.fullName}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[13px] text-[#71717a]">Email</span>
                    <span className="text-[13px]">{form.email}</span>
                  </div>
                </div>
                <div className="border-t border-[#1c1c1c] pt-4 flex flex-col items-end gap-1">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-[13px] text-[#71717a] uppercase tracking-wider">Total</span>
                    <span className="text-xl font-bold">${total.toLocaleString()}</span>
                  </div>
                  <span className="text-[12px] text-[#F48B47]">PKR {Math.round(total * 278.5).toLocaleString()}</span>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button onClick={() => setStep("details")}
                    className="w-full border border-[#2a2a2a] text-sm py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
                    Back
                  </button>
                  <button
                    onClick={handleSubmitOrder}
                    disabled={!paymentMethod || isProcessing}
                    className="w-full bg-[#F48B47] text-black font-semibold text-sm py-4 hover:bg-[#e07a38] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                    {isProcessing ? "Processing..." : "Submit Order"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ──── STEP 4: CONFIRMATION ──── */}
          {step === "confirmation" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center py-16">
              <div className="w-16 h-16 bg-[#F48B47]/10 border border-[#F48B47]/30 flex items-center justify-center mx-auto mb-8">
                <span className="text-[#F48B47] text-2xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Submitted Successfully</h2>
              <p className="text-[#71717a] mb-2">Your order number is:</p>
              <p className="text-2xl font-bold text-[#F48B47] mb-8 font-mono">{orderNumber}</p>

              <div className="border border-[#1c1c1c] p-8 bg-[#0d0d0d] text-left mb-8 space-y-4">
                <h3 className="font-semibold">What happens next?</h3>
                <div className="space-y-3 text-[13px] text-[#71717a]">
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">1.</span> Our team will verify your payment within 24 hours.</p>
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">2.</span> You will receive a confirmation email with project details.</p>
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">3.</span> A dedicated project manager will be assigned to your project.</p>
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">4.</span> Development kicks off within 48 hours of payment verification.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
                  Back to Home
                </Link>
                <Link href="/services" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
                  Browse More Services
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
