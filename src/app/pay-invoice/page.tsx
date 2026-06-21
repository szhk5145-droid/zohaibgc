"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PaymentMethod = "jazzcash" | "easypaisa" | "bank" | null;
type Step = "details" | "payment" | "confirmation";

export default function PayInvoicePage() {
  const [step, setStep] = useState<Step>("details");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  
  const [form, setForm] = useState({
    invoiceNumber: "",
    email: "",
    phone: "",
    amount: "",
    transactionRef: "",
  });

  const updateForm = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.invoiceNumber && form.amount) {
      setStep("payment");
    }
  };

  const handleSubmitPayment = async () => {
    // In production, this would call your API route with the custom invoice details
    // await fetch('/api/payments', { ... });
    setStep("confirmation");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      <section className="pt-32 pb-16 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Zohaib Global Enterprises</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            {step === "confirmation" ? "Payment Processed" : "Secure Invoice Payment"}
          </h1>

          {/* Progress Steps */}
          {step !== "confirmation" && (
            <div className="flex items-center gap-0 text-[12px] uppercase tracking-[0.15em]">
              {(["details", "payment"] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center">
                  <span className={`px-4 py-2 border ${
                    step === s ? "border-[#F48B47] text-[#F48B47] bg-[#F48B47]/5" :
                    (step === "payment" && s === "details" ? "border-[#1c1c1c] text-white" : "border-[#1c1c1c] text-[#555]")
                  }`}>
                    {i + 1}. {s === "details" ? "Invoice Details" : "Payment"}
                  </span>
                  {i < 1 && <div className="w-8 h-px bg-[#1c1c1c]" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          
          {/* ──── STEP 1: INVOICE DETAILS ──── */}
          {step === "details" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
              <div className="border border-[#1c1c1c] p-8 bg-[#0d0d0d]">
                <div className="flex items-center gap-3 mb-6 border-b border-[#1c1c1c] pb-6">
                  <div className="w-8 h-8 rounded bg-[#111] border border-[#1c1c1c] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F48B47]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">Pay by Invoice</h2>
                    <p className="text-[13px] text-[#71717a]">Enter your invoice details to proceed with payment.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmitDetails} className="space-y-6">
                  <div>
                    <label className="text-[13px] font-medium block mb-2">
                      Invoice Number <span className="text-[#F48B47]">*</span>
                    </label>
                    <input required type="text" value={form.invoiceNumber} onChange={(e) => updateForm("invoiceNumber", e.target.value)}
                      placeholder="Enter invoice number"
                      className="w-full bg-[#0a0a0a] border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                  
                  <div>
                    <label className="text-[13px] font-medium block mb-2">
                      Email <span className="text-[#71717a]">(Optional)</span>
                    </label>
                    <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="Enter email address"
                      className="w-full bg-[#0a0a0a] border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                  
                  <div>
                    <label className="text-[13px] font-medium block mb-2">
                      Phone Number <span className="text-[#71717a]">(Optional)</span>
                    </label>
                    <input type="tel" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="Enter phone number"
                      className="w-full bg-[#0a0a0a] border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                  </div>
                  
                  <div>
                    <label className="text-[13px] font-medium block mb-2">
                      Amount (USD) <span className="text-[#F48B47]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#71717a]">$</span>
                      <input required type="number" min="1" step="0.01" value={form.amount} onChange={(e) => updateForm("amount", e.target.value)}
                        placeholder="Enter amount"
                        className="w-full bg-[#0a0a0a] border border-[#1c1c1c] pl-8 pr-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full bg-[#F48B47] text-black font-semibold text-sm py-4 hover:bg-[#e07a38] transition-colors duration-300 mt-4">
                    Proceed to Pay
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* ──── STEP 2: PAYMENT ──── */}
          {step === "payment" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-lg font-semibold mb-6">Select Payment Method</h2>

                <div className="space-y-3 mb-8">
                  {([
                    { id: "jazzcash" as PaymentMethod, name: "JazzCash", desc: "Pay securely via JazzCash mobile wallet", tag: "Coming Soon" },
                    { id: "easypaisa" as PaymentMethod, name: "Easypaisa", desc: "Pay securely via Easypaisa mobile wallet", tag: "Coming Soon" },
                    { id: "bank" as PaymentMethod, name: "Bank Transfer", desc: "Direct bank transfer via IBAN", tag: "Available" },
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

                {/* Bank Transfer Details */}
                {paymentMethod === "bank" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="border border-[#1c1c1c] p-8 bg-[#0d0d0d] space-y-6">
                    <h3 className="font-semibold mb-4">Bank Transfer Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                      {[
                        { label: "Bank Name", value: "— To be configured —" },
                        { label: "Account Title", value: "— To be configured —" },
                        { label: "Account Number", value: "— To be configured —" },
                        { label: "IBAN", value: "— To be configured —" },
                      ].map((field) => (
                        <div key={field.label} className="py-3 border-b border-[#1c1c1c]">
                          <span className="text-[#71717a] block text-[11px] uppercase tracking-wider mb-1">{field.label}</span>
                          <span className="font-medium">{field.value}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Transaction Reference / ID *</label>
                      <input type="text" value={form.transactionRef} onChange={(e) => updateForm("transactionRef", e.target.value)}
                        className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors"
                        placeholder="Enter the transaction reference from your bank" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Summary */}
              <div className="border border-[#1c1c1c] p-8 h-fit bg-[#0d0d0d]">
                <h3 className="text-lg font-semibold mb-6">Payment Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-[#71717a]">Invoice No.</span>
                    <span className="font-mono">{form.invoiceNumber}</span>
                  </div>
                  {form.email && (
                    <div className="flex justify-between text-[13px]">
                      <span className="text-[#71717a]">Email</span>
                      <span className="">{form.email}</span>
                    </div>
                  )}
                  <div className="border-t border-[#1c1c1c] pt-4 flex justify-between">
                    <span className="text-[13px] text-[#71717a] uppercase tracking-wider">Total</span>
                    <span className="text-xl font-bold text-[#F48B47]">${Number(form.amount).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <button onClick={() => setStep("details")}
                    className="w-full border border-[#2a2a2a] text-sm py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
                    Back
                  </button>
                  <button
                    onClick={handleSubmitPayment}
                    disabled={!paymentMethod}
                    className="w-full bg-[#F48B47] text-black font-semibold text-sm py-4 hover:bg-[#e07a38] transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                    Submit Payment
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ──── STEP 3: CONFIRMATION ──── */}
          {step === "confirmation" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center py-16">
              <div className="w-16 h-16 bg-[#F48B47]/10 border border-[#F48B47]/30 flex items-center justify-center mx-auto mb-8">
                <span className="text-[#F48B47] text-2xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Payment Submitted Successfully</h2>
              <p className="text-[#71717a] mb-2">Invoice paid:</p>
              <p className="text-2xl font-bold text-[#F48B47] mb-8 font-mono">{form.invoiceNumber}</p>

              <div className="border border-[#1c1c1c] p-8 bg-[#0d0d0d] text-left mb-8 space-y-4">
                <h3 className="font-semibold">What happens next?</h3>
                <div className="space-y-3 text-[13px] text-[#71717a]">
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">1.</span> Our accounting team will verify your payment against the invoice within 24 hours.</p>
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">2.</span> A digital receipt will be sent to your provided email address.</p>
                  <p className="flex items-start gap-3"><span className="text-[#F48B47] font-semibold">3.</span> Your project manager will be notified that the milestone/invoice has been cleared.</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
                  Back to Home
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
