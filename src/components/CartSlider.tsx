"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CartSlider() {
  const { items, removeItem, total, isOpen, setIsOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />

          {/* Slider */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-[#1c1c1c] z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1c1c1c]">
              <h2 className="text-lg font-semibold">Selected Packages ({items.length})</h2>
              <button onClick={() => setIsOpen(false)} className="text-[#71717a] hover:text-white transition-colors text-xl">&times;</button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="text-[#71717a] text-sm mb-4">No packages selected yet.</p>
                  <Link href="/services" onClick={() => setIsOpen(false)}
                    className="text-[#F48B47] text-sm border-b border-[#F48B47] hover:opacity-80 transition-opacity">
                    Browse Services →
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start justify-between py-4 border-b border-[#1c1c1c] last:border-b-0">
                      <div className="flex-1 pr-4">
                        <p className="text-[14px] font-semibold leading-snug">{item.serviceName}</p>
                        <p className="text-[12px] text-[#71717a] mt-1">{item.categoryTitle}</p>
                        {item.isRecurring && (
                          <span className="inline-block mt-1 text-[10px] uppercase tracking-wider text-[#F48B47] border border-[#F48B47]/30 px-1.5 py-0.5">
                            Recurring
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#F48B47] font-semibold text-sm whitespace-nowrap">{item.price}</span>
                        <button onClick={() => removeItem(item.id)}
                          className="text-[#555] hover:text-red-400 transition-colors text-xs">✕</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#1c1c1c] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#71717a] uppercase tracking-wider">Subtotal</span>
                  <span className="text-xl font-bold">PKR {total.toLocaleString()}</span>
                </div>
                <Link href="/checkout" onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#F48B47] text-black text-center font-semibold text-sm py-4 hover:bg-[#e07a38] transition-colors duration-300">
                  Proceed to Checkout
                </Link>
                <button onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-[13px] text-[#71717a] hover:text-white transition-colors">
                  Continue Browsing
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
