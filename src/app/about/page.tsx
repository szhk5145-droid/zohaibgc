"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">About Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Building Digital <span className="text-[#71717a]">Empires</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Zohaib Global is a full-service technology agency specializing in enterprise software development, 
            mobile applications, SaaS platforms, and IT consulting. We deliver fixed-price, 
            transparent solutions for businesses of all sizes.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1c1c1c]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[#0a0a0a] p-12">
              <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Mission</p>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Democratize enterprise software</h2>
              <p className="text-[14px] text-[#71717a] leading-relaxed">
                We believe every business — from a local startup to a growing enterprise — deserves 
                access to world-class software at transparent, fixed prices. We eliminate the guesswork 
                from technology investments.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#0a0a0a] p-12">
              <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Vision</p>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Be the most trusted tech partner globally</h2>
              <p className="text-[14px] text-[#71717a] leading-relaxed">
                We are building Zohaib Global to become the go-to technology partner for businesses 
                that value clarity, quality, and speed. We aim to set the global standard for 
                fixed-price software delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#0d0d0d] border-t border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">How We Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your requirements and define a clear project scope." },
              { step: "02", title: "Design", desc: "UI/UX prototypes and architecture planning before a single line of code." },
              { step: "03", title: "Development", desc: "Agile sprints with regular updates and transparent progress tracking." },
              { step: "04", title: "Testing & QA", desc: "Rigorous quality assurance to ensure bug-free, performant delivery." },
              { step: "05", title: "Deploy & Support", desc: "Production deployment with ongoing maintenance and support." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative">
                <span className="text-[#F48B47] text-[12px] font-mono">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#71717a] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <p className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Our Values</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1c1c1c]">
            {[
              { title: "Transparency", desc: "Fixed pricing, clear scope, and honest communication at every step." },
              { title: "Quality", desc: "Enterprise-grade code, thorough testing, and meticulous attention to detail." },
              { title: "Speed", desc: "48-hour kickoff, agile delivery, and minimal time-to-market." },
              { title: "Ownership", desc: "We treat every project like our own. Full lifecycle responsibility." },
              { title: "Innovation", desc: "Modern tech stacks, scalable architectures, and future-proof solutions." },
              { title: "Support", desc: "We don't disappear after deployment. Ongoing maintenance and growth." },
            ].map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-[#0a0a0a] p-10 group hover:bg-[#0f0f0f] transition-colors duration-500">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#F48B47] transition-colors duration-500">{val.title}</h3>
                <p className="text-[13px] text-[#71717a] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1c1c1c] py-24 text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Want to work with us?</h2>
          <p className="text-[#71717a] mb-8 max-w-md mx-auto">
            Explore our packages or reach out to discuss your project.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/services" className="bg-[#F48B47] text-black font-semibold text-sm px-8 py-3.5 hover:bg-[#e07a38] transition-colors duration-300">
              View Services
            </Link>
            <Link href="/contact" className="border border-[#2a2a2a] text-sm px-8 py-3.5 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
