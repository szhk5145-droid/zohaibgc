"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import { useCart, CartItem } from "@/context/CartContext";

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

function isRecurring(price: string): boolean {
  const lower = price.toLowerCase();
  return lower.includes("month") || lower.includes("/mo");
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].slug);
  const { addItem, items } = useCart();

  const activeCat = serviceCategories.find((c) => c.slug === activeTab)!;

  const handleAdd = (serviceName: string, price: string, category: typeof activeCat) => {
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

  const isInCart = (serviceName: string, category: typeof activeCat) => {
    const id = `${category.slug}--${serviceName.replace(/\s+/g, "-").toLowerCase()}`;
    return items.some((i) => i.id === id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Fixed Price <span className="text-[#71717a]">Packages</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Over 70 transparent, fixed-price service packages across 6 verticals. 
            No hidden fees. No scope creep. Choose a package and get started today.
          </motion.p>
        </div>
      </section>

      {/* Tabs & Content */}
      <section className="py-12 min-h-[800px]">
        <div className="max-w-[1400px] mx-auto px-8">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-[#1c1c1c] mb-12 scrollbar-hide">
            <div className="flex gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveTab(cat.slug)}
                  className={`px-6 py-4 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                    activeTab === cat.slug 
                      ? "border-[#F48B47] text-[#F48B47] bg-[#F48B47]/5" 
                      : "border-transparent text-[#71717a] hover:text-white hover:bg-[#111]"
                  }`}
                >
                  {`${cat.title} ${cat.highlight.replace(/\s*Services?/gi, "")}`.trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    {activeCat.title} <span className="text-[#F48B47]">{activeCat.highlight}</span>
                  </h2>
                  <p className="text-[14px] text-[#71717a] mt-2 max-w-xl">{activeCat.subtitle}</p>
                </div>
              </div>

              {/* Pricing Table */}
              <div className="border border-[#1c1c1c] overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-12 bg-[#111] px-6 py-3 text-[11px] uppercase tracking-[0.15em] text-[#71717a] border-b border-[#1c1c1c]">
                  <div className="col-span-4">Service</div>
                  <div className="col-span-4">Description</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-2 text-right">Action</div>
                </div>

                {/* Rows */}
                {activeCat.services.map((service, i) => {
                  const inCart = isInCart(service.name, activeCat);
                  return (
                    <motion.div key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.02, duration: 0.4 }}
                      className="flex flex-col md:grid md:grid-cols-12 px-6 py-5 border-b border-[#1c1c1c] last:border-b-0 hover:bg-[#111] transition-colors duration-300 group md:items-center gap-3 md:gap-0"
                    >
                      <div className="md:col-span-4">
                        <span className="text-[15px] font-semibold group-hover:text-[#F48B47] transition-colors duration-300">
                          {service.name}
                        </span>
                        <p className="text-[13px] text-[#71717a] mt-1 md:hidden">{service.description}</p>
                      </div>
                      <div className="hidden md:block md:col-span-4">
                        <span className="text-[13px] text-[#71717a]">{service.description}</span>
                      </div>
                      <div className="md:col-span-2 md:text-right flex items-center md:block gap-2">
                        <span className="text-[#F48B47] font-semibold text-[15px]">{service.price}</span>
                        <span className="text-[12px] text-[#71717a] md:block mt-0.5">
                          PKR {Math.round(parsePrice(service.price) * 278.5).toLocaleString()}
                        </span>
                      </div>
                      <div className="md:col-span-2 md:text-right mt-2 md:mt-0">
                        {inCart ? (
                          <span className="text-[12px] text-[#71717a] border border-[#1c1c1c] px-4 py-2.5 inline-block w-fit">
                            ✓ Added
                          </span>
                        ) : (
                          <button
                            onClick={() => handleAdd(service.name, service.price, activeCat)}
                            className="text-[12px] text-black bg-white hover:bg-[#F48B47] px-5 py-2.5 font-medium transition-colors duration-300 w-fit"
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
              <div className="mt-6 flex flex-col gap-1.5">
                {activeCat.notes.map((note, i) => (
                  <p key={i} className="text-[12px] text-[#555] flex items-start gap-2">
                    <span className="text-[#F48B47] mt-0.5">✓</span> {note}
                  </p>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-[#1c1c1c] relative overflow-hidden bg-[#0d0d0d]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#F48B47] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Need a custom quote?</h2>
          <p className="text-[#71717a] text-lg mb-8 max-w-md mx-auto">
            Enterprise-scale projects and custom integrations are quoted individually.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300 inline-block">
              Contact Us
            </Link>
            <Link href="/pay-invoice" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300 inline-block">
              Pay Custom Invoice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
