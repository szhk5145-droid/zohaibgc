import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1c1c1c] bg-[#0a0a0a]">
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo-new.webp" alt="Zohaib Global Enterprises (SMC private) Limited" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="text-sm font-semibold leading-tight max-w-[150px]">Zohaib Global Enterprises (SMC private) Limited</span>
            </div>
            <p className="text-[13px] text-[#71717a] leading-relaxed max-w-xs mb-6">
              Engineering digital products with fixed pricing and full transparency. From startups to enterprises.
            </p>
            <div className="flex flex-wrap gap-2">
              {["JazzCash", "Easypaisa", "Bank Transfer"].map((m) => (
                <span key={m} className="text-[11px] text-[#555] border border-[#1c1c1c] px-3 py-1.5">{m}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Software Development", href: "/services/software-development" },
                { label: "Mobile Apps", href: "/services/mobile-app-development" },
                { label: "Web Design", href: "/services/website-design-development" },
                { label: "SaaS Solutions", href: "/services/saas-solutions" },
                { label: "IT Consulting", href: "/services/it-consulting" },
                { label: "Maintenance", href: "/services/maintenance-support" },
                { label: "Pay Custom Invoice", href: "/pay-invoice" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors duration-300">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors duration-300">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-5">Legal</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Refunds", href: "/refunds" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[13px] text-[#555] hover:text-white transition-colors duration-300">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1c1c1c] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-[#444]">© {new Date().getFullYear()} Zohaib Global Enterprises (SMC private) Limited. All rights reserved.</span>
          <span className="text-[12px] text-[#444]">All prices are in USD</span>
        </div>
      </div>
    </footer>
  );
}
