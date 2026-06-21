"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolioItems = [
  { id: "p1", title: "Global Payments Infrastructure", category: "Backend", desc: "Scalable mobile banking ecosystem processing 100k+ daily transactions.", img: "/portfolio/1.webp" },
  { id: "p2", title: "Enterprise Revenue Intelligence", category: "SaaS", desc: "Data visualization dashboard reducing manual reporting by 85%.", img: "/portfolio/2.webp" },
  { id: "p3", title: "High-Volume Luxury Storefront", category: "E-Commerce", desc: "Headless commerce experience achieving sub-second global load times.", img: "/portfolio/3.webp" },
  { id: "p4", title: "Automated B2B CRM Suite", category: "Software", desc: "End-to-end CRM with intelligent lead scoring and pipeline tracking.", img: "/portfolio/4.webp" },
  { id: "p5", title: "Cloud Migration Architecture", category: "IT Consulting", desc: "Zero-downtime AWS migration for 50k+ active concurrent users.", img: "/portfolio/7.webp" },
  { id: "p6", title: "Biometric Health Companion", category: "Mobile App", desc: "Cross-platform fitness app syncing with BLE wearable devices.", img: "/portfolio/5.webp" },
  { id: "p7", title: "Global Freight Command Center", category: "Web App", desc: "Mission-critical app for tracking international shipping fleets.", img: "/portfolio/6.webp" },
  { id: "p8", title: "Enterprise Uptime Protocol", category: "Maintenance", desc: "Automated failovers and threat detection for 99.999% availability.", img: "/portfolio/8.webp" },
  { id: "p9", title: "Decentralized Asset Exchange", category: "Blockchain", desc: "Secure crypto trading platform with real-time order matching.", img: "/portfolio/9.webp" },
  { id: "p10", title: "AI-Powered Customer Hub", category: "AI Integration", desc: "NLP-driven support portal handling 10,000 queries per minute.", img: "/portfolio/10.webp" },
  { id: "p11", title: "Secure Identity Verification", category: "API Design", desc: "OAuth2 and biometric API gateway for banking institutions.", img: "/portfolio/11.webp" },
  { id: "p12", title: "Global Real Estate Portal", category: "Web Platform", desc: "High-resolution property tours and dynamic contract generation.", img: "/portfolio/12.webp" },
  { id: "p13", title: "Edge Computing Deployment", category: "Infrastructure", desc: "Distributed server nodes reducing latency for Asian markets.", img: "/portfolio/13.webp" },
  { id: "p14", title: "Telemedicine Video Protocol", category: "Healthcare", desc: "HIPAA-compliant WebRTC streaming for doctor consultations.", img: "/portfolio/14.webp" },
  { id: "p15", title: "Automotive Telematics", category: "IoT", desc: "Live vehicle tracking and predictive maintenance AI.", img: "/portfolio/15.webp" },
  { id: "p16", title: "Fintech Compliance Engine", category: "Backend", desc: "Real-time transaction auditing against AML/KYC databases.", img: "/portfolio/16.webp" },
  { id: "p17", title: "Machine Learning Pipeline", category: "Data Science", desc: "Automated data cleaning and model training architecture.", img: "/portfolio/2.webp", hue: "hue-rotate-[220deg]" },
  { id: "p18", title: "Smart City Optimization", category: "Web App", desc: "Traffic light synchronization using live computer vision data.", img: "/portfolio/6.webp", hue: "hue-rotate-[280deg]" },
  { id: "p19", title: "Virtual Reality Tours", category: "Mobile App", desc: "Immersive 3D environment viewer for mobile devices.", img: "/portfolio/5.webp", hue: "hue-rotate-[320deg] invert" },
  { id: "p20", title: "Cyber Threat Matrix", category: "Security", desc: "Live DDoS mitigation and penetration tracking dashboard.", img: "/portfolio/7.webp", hue: "hue-rotate-[45deg]" },
];

const layouts = [
  { span: "col-span-1 md:col-span-8", aspect: "aspect-video" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-square" },
  { span: "col-span-1 md:col-span-5", aspect: "aspect-[4/5]" },
  { span: "col-span-1 md:col-span-7", aspect: "aspect-video" },
  { span: "col-span-1 md:col-span-12", aspect: "aspect-[21/9]" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-[4/5]" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-square" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-[4/5]" },
  { span: "col-span-1 md:col-span-8", aspect: "aspect-video" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-[3/4]" },
  { span: "col-span-1 md:col-span-6", aspect: "aspect-square" },
  { span: "col-span-1 md:col-span-6", aspect: "aspect-[4/3]" },
  { span: "col-span-1 md:col-span-12", aspect: "aspect-[21/9]" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-[4/5]" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-square" },
  { span: "col-span-1 md:col-span-4", aspect: "aspect-video" },
  { span: "col-span-1 md:col-span-7", aspect: "aspect-[4/3]" },
  { span: "col-span-1 md:col-span-5", aspect: "aspect-square" },
  { span: "col-span-1 md:col-span-6", aspect: "aspect-video" },
  { span: "col-span-1 md:col-span-6", aspect: "aspect-[4/3]" }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">
            Zohaib Global Enterprises
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl md:leading-tight font-bold tracking-tight mb-6 max-w-3xl">
            Our <span className="text-[#71717a]">Portfolio</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Explore our curated selection of enterprise-grade software solutions, mobile applications, and IT infrastructure deployments delivered to our global clients.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 relative">
        <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {portfolioItems.map((item, i) => {
              const layout = layouts[i % layouts.length];
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`group cursor-pointer ${layout.span}`}
                >
                  <Link href="/contact" className="w-full h-full block">
                    <div className={`relative w-full overflow-hidden bg-[#111] border border-[#1c1c1c] mb-6 ${layout.aspect}`}>
                      <div className="absolute inset-0 bg-[#F48B47]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                      <div className={`absolute inset-0 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 ${item.hue || ''}`}>
                        <Image 
                          src={item.img} 
                          alt={item.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                          className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        />
                      </div>
                      
                      {/* Project Number Float */}
                      <div className="absolute top-6 left-6 z-20 overflow-hidden">
                        <motion.div 
                          initial={{ y: "100%" }} 
                          whileInView={{ y: 0 }} 
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-4xl md:text-6xl font-black text-white/30 tracking-tighter mix-blend-overlay drop-shadow-md"
                        >
                          {(i + 1).toString().padStart(2, '0')}
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="max-w-[85%] pr-4">
                        <p className="text-[10px] md:text-[11px] text-[#F48B47] uppercase tracking-[0.2em] font-semibold mb-3">{item.category}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#F48B47] transition-colors tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-[13px] md:text-[14px] text-[#71717a] leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:bg-[#F48B47] group-hover:border-[#F48B47] transition-all duration-500 shrink-0 mt-2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-black transition-colors">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-[#1c1c1c] relative overflow-hidden bg-[#0d0d0d]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F48B47] opacity-[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let&apos;s build yours.</h2>
          <p className="text-[#71717a] text-lg mb-10 max-w-md mx-auto">
            Ready to start your next big project? Browse our fixed-price packages or get a custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="w-full sm:w-auto bg-[#F48B47] text-black font-semibold text-sm px-10 py-4 hover:bg-[#e07a38] transition-colors duration-300 inline-block">
              View Pricing
            </Link>
            <Link href="/contact" className="w-full sm:w-auto border border-[#2a2a2a] text-sm px-10 py-4 text-[#a1a1aa] hover:text-white hover:border-[#444] transition-all duration-300 inline-block">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
