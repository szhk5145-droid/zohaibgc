import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Privacy Policy</h1>
          <div className="prose-custom space-y-8 text-[14px] text-[#a1a1aa] leading-relaxed">
            <p className="text-[#71717a] text-[13px]">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, phone number, company name, and project details when you fill out our contact or checkout forms. We also collect payment transaction references when you make a purchase.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Process and fulfill your service orders</li>
                <li>Communicate with you about your projects</li>
                <li>Send you order confirmations and project updates</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Improve our services and website experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. Payment Information</h2>
              <p>We accept payments through JazzCash, Easypaisa, and direct bank transfers. We do not store your complete payment credentials on our servers. Payment processing is handled securely by the respective payment gateway providers. We only store transaction reference numbers for order verification purposes.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at the email address provided on our Contact page.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
              <p>If you have any questions about this Privacy Policy, please contact Zohaib Global Enterprises through our Contact page or email us directly.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
