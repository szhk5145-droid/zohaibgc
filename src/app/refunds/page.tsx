import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Refund & Cancellation Policy</h1>
          <div className="space-y-8 text-[14px] text-[#a1a1aa] leading-relaxed">
            <p className="text-[#71717a] text-[13px]">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Cancellation Before Project Start</h2>
              <p>If you cancel your order before development has begun (within the 48-hour kickoff window), you are eligible for a full refund minus a 5% processing fee to cover payment gateway charges.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. Cancellation During Development</h2>
              <p>If you cancel after development has started, refunds will be calculated based on the percentage of work completed. You will be invoiced for the work delivered up to the point of cancellation, and the remaining balance will be refunded.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. Non-Refundable Services</h2>
              <p>The following are non-refundable once delivered:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Consulting and strategy sessions that have been conducted</li>
                <li>UI/UX design deliverables that have been approved</li>
                <li>Monthly maintenance and support fees for the current billing period</li>
                <li>Third-party licenses or services procured on your behalf</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Refund Process</h2>
              <p>Approved refunds will be processed within 7–14 business days. Refunds will be returned via the same payment method used for the original transaction (JazzCash, Easypaisa, or bank transfer).</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. Dispute Resolution</h2>
              <p>If you are dissatisfied with the delivered work, we encourage you to reach out to our support team first. We will work with you to resolve any concerns. If a resolution cannot be reached, both parties agree to seek mediation before pursuing legal action.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. How to Request a Refund</h2>
              <p>To request a refund, please contact us through our Contact page with your order number and reason for the refund request. Our team will review your request and respond within 48 hours.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
