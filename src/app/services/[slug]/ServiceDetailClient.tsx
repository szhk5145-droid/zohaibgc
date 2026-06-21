"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart, CartItem } from "@/context/CartContext";
import type { ServiceCategory } from "@/data/services";

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

function isRecurring(price: string): boolean {
  const lower = price.toLowerCase();
  return lower.includes("month") || lower.includes("/mo");
}

export default function ServiceDetailClient({ category }: { category: ServiceCategory }) {
  const { addItem, items } = useCart();

  const handleAdd = (serviceName: string, price: string) => {
    const item: CartItem = {
      id: `${category.slug}--${serviceName.replace(/\s+/g, "-").toLowerCase()}`,
      serviceName,
      categorySlug: category.slug,
      categoryTitle: `${category.title} ${category.highlight}`,
      price,
      priceValue: parsePrice(price),
      isRecurring: isRecurring(price),
    };
    addItem(item);
  };

  const isInCart = (serviceName: string) => {
    const id = `${category.slug}--${serviceName.replace(/\s+/g, "-").toLowerCase()}`;
    return items.some((i) => i.id === id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <Link href="/services" className="text-[13px] text-[#71717a] hover:text-[#F48B47] transition-colors duration-300 mb-6 inline-block">
            ← All Services
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {category.title} <span className="text-[#F48B47]">{category.highlight}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            {category.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-6 mt-8 text-[13px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F48B47] rounded-full" />
              <span className="text-[#71717a]">Fixed Price Packages</span>
            </div>
            <span className="text-[#71717a]">All prices are in USD</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="border border-[#1c1c1c] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 bg-[#F48B47] px-6 py-3 text-[11px] uppercase tracking-[0.15em] text-black font-semibold">
              <div className="col-span-4 md:col-span-3">Service</div>
              <div className="col-span-4 hidden md:block">Description</div>
              <div className="col-span-4 md:col-span-2 text-right">Price (USD)</div>
              <div className="col-span-4 md:col-span-3 text-right">Action</div>
            </div>

            {/* Rows */}
            {category.services.map((service, i) => {
              const inCart = isInCart(service.name);
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  className="grid grid-cols-12 px-6 py-5 border-b border-[#1c1c1c] last:border-b-0 hover:bg-[#111] transition-colors duration-300 group items-center"
                >
                  <div className="col-span-4 md:col-span-3">
                    <span className="text-[14px] font-semibold group-hover:text-[#F48B47] transition-colors duration-300">
                      {service.name}
                    </span>
                    <p className="text-[12px] text-[#71717a] mt-1 md:hidden">{service.description}</p>
                  </div>
                  <div className="col-span-4 hidden md:block">
                    <span className="text-[13px] text-[#71717a]">{service.description}</span>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right">
                    <span className="text-[#F48B47] font-bold text-[15px]">{service.price}</span>
                  </div>
                  <div className="col-span-4 md:col-span-3 text-right">
                    {inCart ? (
                      <span className="text-[12px] text-[#71717a] border border-[#1c1c1c] px-4 py-2 inline-block">
                        ✓ Added
                      </span>
                    ) : (
                      <button
                        onClick={() => handleAdd(service.name, service.price)}
                        className="text-[12px] text-black bg-white hover:bg-[#F48B47] px-4 py-2 font-medium transition-colors duration-300"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Notes */}
          <div className="mt-8 p-6 border border-[#1c1c1c] bg-[#0d0d0d]">
            <p className="text-[13px] font-semibold text-[#F48B47] mb-3">Notes:</p>
            <div className="flex flex-col gap-2">
              {category.notes.map((note, i) => (
                <p key={i} className="text-[13px] text-[#71717a] flex items-start gap-2">
                  <span className="text-[#F48B47]">✓</span> {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1c1c1c] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#F48B47] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-[#71717a] mb-8 max-w-md mx-auto">
            Select a package, pay via JazzCash, Easypaisa, or bank transfer, and we kick off within 48 hours.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/checkout" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
              Go to Checkout
            </Link>
            <Link href="/services" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
              Browse Other Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
