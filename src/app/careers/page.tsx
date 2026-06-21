import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

const values = [
  {
    title: "Zero Downtime Culture",
    desc: "We engineer systems that survive anything. Our architecture must withstand catastrophic failures without the end-user ever noticing.",
    icon: "ShieldAlert"
  },
  {
    title: "Pragmatic Innovation",
    desc: "We don't chase shiny new frameworks unless they solve real business problems. We build on solid, proven foundations.",
    icon: "Rocket"
  },
  {
    title: "Radical Transparency",
    desc: "No black boxes. We document every decision, log every variable, and maintain absolute visibility across our entire stack.",
    icon: "Eye"
  }
];

const roles: any[] = [];

export const metadata = {
  title: "Careers | Zohaib Global Enterprises",
  description: "Join the elite engineering team at Zohaib Global Enterprises. We are building the future of B2B SaaS and enterprise infrastructure.",
};

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] selection:bg-[#F48B47] selection:text-white">
      <Navbar />

      <main className="pt-40 pb-24">
        {/* Header Section */}
        <section className="max-w-[1200px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F48B47]/10 blur-[150px] rounded-full pointer-events-none" />
          
          <ScrollReveal>
            <div className="max-w-3xl relative z-10">
              <span className="text-[#F48B47] font-bold tracking-widest uppercase text-sm mb-6 block">
                Join The Engineering Hub
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-white">
                Build the systems that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F48B47] to-[#f7b083]">run the world.</span>
              </h1>
              <p className="text-xl text-[#a1a1aa] leading-relaxed mb-12 font-light">
                We are a collective of hardcore software engineers, cloud architects, and security researchers. We don't just write code; we engineer resilience.
              </p>
              <a href="#open-roles" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#F48B47] hover:text-white transition-all transform hover:scale-105">
                View Open Roles
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#121212] border-y border-[#1c1c1c] py-32 mb-32">
          <div className="max-w-[1200px] mx-auto px-8">
            <ScrollReveal>
              <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Engineering DNA</h2>
                <p className="text-[#a1a1aa] text-lg max-w-2xl leading-relaxed">
                  We demand excellence. Our culture is built on deep technical rigor, peer review, and a relentless pursuit of architectural perfection.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, i) => (
                  <div key={i} className="p-8 border border-[#1c1c1c] bg-[#0a0a0a] rounded-2xl hover:border-[#F48B47]/50 transition-colors group">
                    <div className="w-14 h-14 bg-[#1c1c1c] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#F48B47]/20 transition-colors">
                      {/* Abstract SVG Icon */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F48B47]">
                        {value.icon === "ShieldAlert" ? <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></> : value.icon === "Rocket" ? <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></> : <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>}
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-[#a1a1aa] leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Open Roles Section */}
        <section id="open-roles" className="max-w-[1200px] mx-auto px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">Open Positions</h2>
            
            <div className="flex flex-col gap-6">
              {roles.length > 0 ? (
                roles.map((role, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-[#1c1c1c] bg-[#121212] rounded-2xl hover:border-[#F48B47] transition-all group">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F48B47] transition-colors">{role.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-[#71717a] font-medium mb-4">
                        <span>{role.type}</span>
                        <span className="w-1 h-1 rounded-full bg-[#333]" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex gap-2">
                        {role.tags.map((tag: string) => (
                          <span key={tag} className="text-xs px-3 py-1 border border-[#333] rounded-full text-[#a1a1aa] bg-[#0a0a0a]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 md:mt-0">
                      <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#1c1c1c] text-white font-semibold rounded-lg hover:bg-[#F48B47] transition-colors whitespace-nowrap border border-[#333]">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 border border-[#1c1c1c] bg-[#121212] rounded-2xl text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1c1c1c] mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#71717a]">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">No open roles at the moment</h3>
                  <p className="text-[#a1a1aa] max-w-md mx-auto">
                    We are not actively hiring right now, but our engineering team is always expanding. Check back later or send an open application below.
                  </p>
                </div>
              )}
            </div>
            
            <div className="mt-16 p-8 bg-[#140b05] border border-[#F48B47]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Don't see your role?</h3>
                <p className="text-[#a1a1aa]">We are always looking for exceptional engineering talent.</p>
              </div>
              <Link href="/contact" className="text-[#F48B47] font-bold hover:text-white transition-colors">
                Send an Open Application &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
