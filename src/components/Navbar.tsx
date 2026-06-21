"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1c1c1c]">
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-new.webp" alt="Zohaib Global Enterprises (SMC private) Limited" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="text-sm font-semibold tracking-tight hidden lg:block">Zohaib Global Enterprises (SMC private) Limited</span>
            <span className="text-sm font-semibold tracking-tight lg:hidden">Zohaib Global</span>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[13px] text-[#71717a]">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors duration-300">{l.label}</Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button onClick={() => setIsOpen(true)}
              className="relative text-[#71717a] hover:text-white transition-colors duration-300 p-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#F48B47] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <Link href="/contact" className="hidden md:block text-[13px] font-medium bg-white text-black px-5 py-2 hover:bg-[#F48B47] transition-colors duration-300">
              Get Started
            </Link>
            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
              <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-semibold">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-white/80 hover:text-[#F48B47] transition-colors">{l.label}</Link>
              ))}
              <button onClick={() => { setMobileOpen(false); setIsOpen(true); }}
                className="text-left text-white/80 hover:text-[#F48B47] transition-colors">
                Cart {itemCount > 0 && `(${itemCount})`}
              </button>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="bg-[#F48B47] text-black px-6 py-3 text-base font-semibold mt-4 inline-block w-fit">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
