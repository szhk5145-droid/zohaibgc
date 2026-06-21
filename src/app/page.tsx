"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { serviceCategories } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const serviceSummary = [
    { category: "Software Development", from: "Rs. 1,392,500", count: 20, slug: "software-development" },
    { category: "Mobile Applications", from: "Rs. 557,000", count: 10, slug: "mobile-app-development" },
    { category: "Website Design & Development", from: "Rs. 222,800", count: 10, slug: "website-design-development" },
    { category: "SaaS Solutions", from: "Rs. 1,671,000", count: 10, slug: "saas-solutions" },
    { category: "IT Consulting", from: "Rs. 557,000", count: 10, slug: "it-consulting" },
    { category: "Maintenance & Support", from: "Rs. 83,550/mo", count: 10, slug: "maintenance-support" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* ──── HERO ──── */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#F48B47] opacity-[0.04] rounded-full blur-[150px] pointer-events-none" />

        <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-8 pt-32 pb-20 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-10">
              Software · Mobile · SaaS · Consulting
            </motion.p>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-[clamp(2.8rem,7.5vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em] max-w-5xl">
              We build software
              <br />
              <span className="text-[#71717a]">that builds</span>
              <br />
              <span className="text-[#71717a]">businesses</span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="mt-10 text-[#71717a] text-lg max-w-lg leading-relaxed">
              Fixed-price packages from Rs. 222,800 to Rs. 13,925,000+.
              <br />Enterprise-grade quality. Transparent from day one.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="mt-12 flex items-center gap-4">
              <Link href="/services" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
                View Packages
              </Link>
              <Link href="/contact" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
                Book a Call
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-8 bg-gradient-to-b from-[#71717a] to-transparent" />
        </motion.div>
      </section>

      {/* ──── STATS ──── */}
      <div className="border-t border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Projects delivered" },
            { value: "70+", label: "Service packages" },
            { value: "48h", label: "Avg. kickoff time" },
            { value: "3", label: "Payment methods" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}>
              <span className="text-2xl font-bold">{stat.value}</span>
              <p className="text-[13px] text-[#71717a] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ──── SERVICES OVERVIEW ──── */}
      <section className="border-t border-[#1c1c1c] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Services</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Fixed-price packages,<br />
                <span className="text-[#71717a]">built for scale.</span>
              </h2>
            </div>
            <Link href="/services" className="text-[13px] text-[#71717a] border-b border-[#71717a] hover:text-[#F48B47] hover:border-[#F48B47] transition-colors duration-300 pb-0.5 self-start md:self-auto">
              View all services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1c1c1c]">
            {serviceSummary.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}>
                <Link href={`/services/${service.slug}`} className="block bg-[#0a0a0a] p-10 h-full group hover:bg-[#0f0f0f] transition-colors duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[12px] text-[#71717a] font-mono tracking-wider uppercase">From</span>
                    <span className="text-[#F48B47] font-semibold text-lg">{service.from}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[#F48B47] transition-colors duration-500">
                    {service.category}
                  </h3>
                  <p className="text-[13px] text-[#71717a] leading-relaxed">
                    {service.count} packages available — view full pricing →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WHY US ──── */}
      <section className="border-t border-[#1c1c1c] py-28 bg-[#0d0d0d]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Why us</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Transparent pricing.
                <br />
                <span className="text-[#71717a]">End-to-end delivery.</span>
              </h2>
            </div>
            <div className="flex flex-col">
              {[
                { title: "Fixed Pricing, Zero Surprises", body: "Every package comes with an upfront price tag. No scope creep, no hidden fees, no renegotiations." },
                { title: "Pay Via JazzCash, Easypaisa, or Bank", body: "We accept all major Pakistani payment methods plus international wire for global clients." },
                { title: "48-Hour Project Kickoff", body: "Once payment is confirmed we start within two business days. Every. Single. Time." },
                { title: "Full Lifecycle Ownership", body: "Concept → Design → Code → QA → Deploy → Maintain. One team. One point of contact." },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="py-8 border-b border-[#1c1c1c] last:border-b-0">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#71717a] leading-relaxed max-w-md">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="border-t border-[#1c1c1c] py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F48B47] opacity-[0.035] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to start?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[#71717a] text-lg mb-10 max-w-md mx-auto">
            Pick a package. Make a payment. We start building within 48 hours.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4">
            <Link href="/services" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
              Browse Packages
            </Link>
            <Link href="/contact" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
              Talk to Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
