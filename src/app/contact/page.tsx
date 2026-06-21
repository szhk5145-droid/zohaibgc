"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s Build <span className="text-[#71717a]">Together</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Have a project in mind? Need a custom quote? Fill out the form below and our team will get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="border border-[#F48B47]/30 bg-[#F48B47]/5 p-12 text-center">
                  <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                  <p className="text-[#71717a]">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Full Name *</label>
                      <input required type="text" placeholder="John Doe"
                        className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Email *</label>
                      <input required type="email" placeholder="john@company.com"
                        className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Company</label>
                      <input type="text" placeholder="Your company"
                        className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Budget Range</label>
                      <select className="w-full bg-[#0a0a0a] border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-[#71717a] focus:border-[#F48B47] focus:outline-none transition-colors duration-300 appearance-none">
                        <option>Select a range</option>
                        <option>Under $5,000</option>
                        <option>$5,000 – $15,000</option>
                        <option>$15,000 – $30,000</option>
                        <option>$30,000 – $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Service Interested In</label>
                    <select className="w-full bg-[#0a0a0a] border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-[#71717a] focus:border-[#F48B47] focus:outline-none transition-colors duration-300 appearance-none">
                      <option>Select a service</option>
                      <option>Software Development</option>
                      <option>Mobile App Development</option>
                      <option>Website Design & Development</option>
                      <option>SaaS Solutions</option>
                      <option>IT Consulting</option>
                      <option>Maintenance & Support</option>
                      <option>Custom / Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] block mb-2">Project Details *</label>
                    <textarea required rows={6} placeholder="Tell us about your project, requirements, and timeline..."
                      className="w-full bg-transparent border border-[#1c1c1c] px-4 py-3.5 text-[14px] text-white placeholder:text-[#444] focus:border-[#F48B47] focus:outline-none transition-colors duration-300 resize-none" />
                  </div>
                  <button type="submit"
                    className="bg-[#F48B47] text-black font-semibold text-sm px-10 py-4 hover:bg-[#e07a38] transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-4">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-[#1c1c1c]">
                    <span className="text-[13px] text-[#71717a]">Email</span>
                    <a href="mailto:hello@zohaibglobal.com" className="text-[14px] font-semibold hover:text-[#F48B47] transition-colors">hello@zohaibglobal.com</a>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#1c1c1c]">
                    <span className="text-[13px] text-[#71717a]">Phone</span>
                    <a href="tel:+1234567890" className="text-[14px] font-semibold hover:text-[#F48B47] transition-colors">+1 (234) 567-890</a>
                  </div>
                  <div className="flex flex-col py-3 border-b border-[#1c1c1c] gap-1">
                    <span className="text-[13px] text-[#71717a]">Headquarters</span>
                    <span className="text-[14px] font-semibold leading-relaxed">Zohaib Global Enterprises (SMC private) Limited<br/>123 Innovation Drive, Tech Park<br/>Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-4">Payment Methods</h3>
                <div className="space-y-3">
                  {[
                    { method: "JazzCash", detail: "Instant mobile payment" },
                    { method: "Easypaisa", detail: "Secure mobile wallet" },
                    { method: "Bank Transfer", detail: "Direct IBAN transfer" },
                  ].map((p) => (
                    <div key={p.method} className="flex items-center justify-between py-3 border-b border-[#1c1c1c]">
                      <span className="text-[14px] font-semibold">{p.method}</span>
                      <span className="text-[13px] text-[#71717a]">{p.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[12px] text-[#71717a] uppercase tracking-[0.15em] mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  {[
                    { label: "Response Time", value: "Within 24 hours" },
                    { label: "Project Kickoff", value: "Within 48 hours" },
                    { label: "Packages Available", value: "70+" },
                    { label: "Price Range", value: "$800 – $50,000+" },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-center justify-between py-3 border-b border-[#1c1c1c]">
                      <span className="text-[13px] text-[#71717a]">{fact.label}</span>
                      <span className="text-[14px] font-semibold">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border border-[#1c1c1c] bg-[#0d0d0d]">
                <h3 className="font-semibold mb-2">Enterprise Projects</h3>
                <p className="text-[13px] text-[#71717a] leading-relaxed">
                  For projects over $50,000 or with complex requirements, we provide custom quotations with detailed SOW documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
