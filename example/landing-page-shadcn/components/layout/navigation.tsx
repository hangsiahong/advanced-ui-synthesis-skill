"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const y = useTransform(scrollY, [0, 100], [0, 24]);
  const blur = useTransform(scrollY, [0, 100], [0, 16]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.header
      style={{ width, y }}
      className="fixed left-1/2 -translate-x-1/2 z-50 px-6 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          LUMINA<span className="text-primary">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Work", "Process", "Studio", "Pricing"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
          Connect
        </button>
      </div>
    </motion.header>
  );
}
