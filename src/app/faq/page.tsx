"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  // General & Company
  {
    question: "What industries do you specialize in?",
    answer: "Zohaib Global Enterprises has extensive experience delivering solutions across various industries including FinTech, E-Commerce, Healthcare, Logistics, and Enterprise SaaS. Our cross-industry expertise allows us to engineer robust, scalable architectures tailored to your specific market demands."
  },
  {
    question: "Where is Zohaib Global Enterprises headquartered?",
    answer: "Our operations are global, but we are officially registered as an SMC private limited company. We serve clients across North America, Europe, the Middle East, and Asia with a distributed network of top-tier software engineers and project managers."
  },
  
  // Pricing & Contracts
  {
    question: "Do you offer fixed-price contracts?",
    answer: "Yes, we provide transparent, fixed-price contracts ranging from comprehensive MVP deployments ($800 - $2,500) to complete Enterprise Ecosystem architectures ($15,000 - $50,000+). This ensures budget predictability and strict adherence to project timelines."
  },
  {
    question: "What are your payment terms?",
    answer: "For standard projects, we operate on a milestone-based payment structure (typically 30% upfront, 40% upon beta delivery, and 30% upon final deployment and source code transfer). For enterprise retainers, we offer customized monthly billing schedules."
  },
  {
    question: "Are there any hidden fees or ongoing server costs?",
    answer: "There are no hidden fees. All development costs are outlined in our initial contract. However, third-party infrastructure costs (like AWS or Vercel hosting) are owned by the client. We will architect your system to minimize these operational expenditures."
  },

  // Technical & Development
  {
    question: "What technologies does your engineering team use?",
    answer: "We utilize modern, highly scalable technology stacks. Our frontend expertise includes React, Next.js, and React Native. For backend and cloud infrastructure, we leverage Node.js, Python, PostgreSQL, AWS, and Docker/Kubernetes to ensure high availability."
  },
  {
    question: "How do you handle mobile app development?",
    answer: "We utilize React Native and Flutter to build high-performance, cross-platform mobile applications. This allows us to deploy simultaneously to both the Apple App Store and Google Play Store from a single codebase, drastically reducing your development costs and time-to-market."
  },
  {
    question: "Can you rescue or scale an existing codebase?",
    answer: "Yes. Our engineering team frequently takes over legacy codebases. We begin with a comprehensive technical audit, identifying security vulnerabilities and performance bottlenecks, before systematically refactoring the system into a modern microservices architecture."
  },

  // Security & IP
  {
    question: "How do you handle intellectual property (IP) and confidentiality?",
    answer: "We adhere to strict Non-Disclosure Agreements (NDAs) before any technical discussions begin. Upon project completion and final payment, 100% of the Intellectual Property rights and source code are legally transferred to your organization."
  },
  {
    question: "What are your security protocols for FinTech and HealthTech applications?",
    answer: "We implement bank-grade security protocols including AES-256 encryption at rest, strict Role-Based Access Control (RBAC), and continuous dependency vulnerability scanning. For healthcare applications, we architect systems to be strictly HIPAA-compliant from day one."
  },

  // Process & Delivery
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on the complexity of the project. A standard minimum viable product (MVP) can be delivered in 4 to 8 weeks, whereas a fully custom enterprise software suite or cloud migration may take 3 to 6 months. A precise timeline is established during our initial scoping phase."
  },
  {
    question: "How is project communication handled?",
    answer: "You will be assigned a dedicated technical project manager. We utilize Slack/Microsoft Teams for day-to-day communication, GitHub for code transparency, and provide weekly sprint review meetings to demonstrate progress on staging servers."
  },
  {
    question: "Do you provide post-deployment maintenance?",
    answer: "Absolutely. We offer dedicated Service Level Agreements (SLAs) ranging from standard bug-fixing and security patching to 24/7 dedicated engineering support to ensure 99.999% uptime for mission-critical applications."
  },
  {
    question: "What happens if a critical bug occurs in production?",
    answer: "If you are on an active SLA, our automated monitoring systems (like Datadog or Sentry) will likely detect the anomaly before you do. Critical priority bugs are immediately routed to our emergency engineering team for rapid patching."
  },
  {
    question: "How do we start a project?",
    answer: "It begins with a technical discovery call. You can reach out via our Contact page. We will discuss your operational bottlenecks, outline a proposed architecture, and provide a comprehensive fixed-price quotation within 48 hours."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      <Navbar />

      <section className="pt-40 pb-24 border-b border-[#1c1c1c]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#F48B47] text-[13px] font-medium tracking-[0.15em] uppercase mb-4">
            Support & Information
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Frequently Asked <span className="text-[#71717a]">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-[#71717a] text-lg max-w-2xl leading-relaxed">
            Find answers to common questions about our engineering processes, pricing models, and enterprise support frameworks.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1000px] mx-auto px-8 md:px-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index} 
                  className="border border-[#1c1c1c] bg-[#0d0d0d] overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-[#111] transition-colors"
                  >
                    <span className={`font-semibold pr-8 transition-colors ${isOpen ? 'text-[#F48B47]' : 'text-white'}`}>
                      {faq.question}
                    </span>
                    <span className={`text-2xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#F48B47]' : 'text-[#71717a]'}`}>
                      +
                    </span>
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-[#71717a] leading-relaxed text-[15px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
