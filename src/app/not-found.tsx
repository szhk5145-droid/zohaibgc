import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col selection:bg-[#F48B47] selection:text-white">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center relative overflow-hidden pt-32 pb-24">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        </div>

        {/* Abstract Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F48B47]/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
          <div className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#333] mb-4">
            404
          </div>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F48B47]/30 bg-[#F48B47]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#F48B47] animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-[#F48B47] uppercase">System Override</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sector Not Found
          </h1>
          
          <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-12 leading-relaxed">
            The endpoint you are requesting has either been decommissioned or never existed in our current architecture. Let's get you back to familiar coordinates.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/" 
              className="px-8 py-4 bg-[#F48B47] text-white font-bold rounded-lg hover:bg-[#e07a3e] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(244,139,71,0.3)] w-full sm:w-auto"
            >
              Return to Core System
            </Link>
            <Link 
              href="/blog" 
              className="px-8 py-4 bg-[#1c1c1c] text-white font-bold rounded-lg hover:bg-[#333] border border-[#333] transition-all w-full sm:w-auto"
            >
              Read Engineering Blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
