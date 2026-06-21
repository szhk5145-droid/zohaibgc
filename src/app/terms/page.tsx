import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Terms of Service</h1>
          <div className="space-y-8 text-[14px] text-[#a1a1aa] leading-relaxed">
            <p className="text-[#71717a] text-[13px]">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Services</h2>
              <p>Zohaib Global Enterprises (SMC private) Limited provides software development, mobile app development, website design, SaaS solutions, IT consulting, and maintenance & support services. All services are delivered based on the package selected and the scope agreed upon during the project kickoff.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. Fixed Pricing</h2>
              <p>All prices listed on our website are fixed starting package prices for standard projects. Prices are quoted in US Dollars (USD). Advanced features, third-party integrations, AI capabilities, or large-scale enterprise requirements may require a custom quotation and separate agreement.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. Payment Terms</h2>
              <p>Payment is required before project commencement. We accept payments via JazzCash, Easypaisa, and direct bank transfer. For projects above $15,000 milestone-based payment schedules may be arranged upon mutual agreement.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Project Timeline</h2>
              <p>Project development begins within 48 hours of payment verification. Delivery timelines are communicated during the discovery phase and depend on project complexity. Delays caused by client-side requirements changes or delayed feedback may extend the timeline.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. Intellectual Property</h2>
              <p>Upon full payment, all intellectual property rights for the deliverables are transferred to the client. Zohaib Global Enterprises (SMC private) Limited retains the right to showcase the project in its portfolio unless explicitly restricted by a non-disclosure agreement.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. Warranties</h2>
              <p>We provide a 30-day bug-fix warranty after project delivery. This covers functional bugs identified in the delivered scope. It does not cover new feature requests, design changes, or issues arising from third-party services.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>Zohaib Global Enterprises (SMC private) Limited&apos;s total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific service in question.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">8. Modifications</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
