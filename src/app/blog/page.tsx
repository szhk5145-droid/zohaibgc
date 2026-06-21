"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      <section className="pt-40 pb-24 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">
            Insights & Engineering
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            The <span className="text-[#71717a]">Engineering Blog</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Technical deep-dives, architectural strategies, and industry insights written by the lead engineers at Zohaib Global Enterprises.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link href={`/blog/${blog.slug}`} className="flex flex-col flex-grow">
                  <div className="border border-[#1c1c1c] bg-[#0d0d0d] p-8 md:p-10 flex flex-col flex-grow relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#F48B47]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F48B47]">
                          {blog.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#333]" />
                        <span className="text-[12px] text-[#71717a]">
                          {blog.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#F48B47] transition-colors leading-tight">
                        {blog.title}
                      </h2>
                      
                      <p className="text-[#71717a] leading-relaxed mb-8 flex-grow">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-[#1c1c1c] pt-6 mt-auto">
                        <span className="text-[13px] text-[#555]">
                          {blog.date}
                        </span>
                        <span className="text-[13px] font-semibold uppercase tracking-wider text-white group-hover:text-[#F48B47] transition-colors flex items-center gap-2">
                          Read Article 
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
