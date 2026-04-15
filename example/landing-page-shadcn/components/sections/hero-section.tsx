"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Floating Orb Background */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -top-20 -left-20"
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-xs font-medium tracking-[0.2em] uppercase mb-8">
            The Future of Design
          </span>
          
          <h1 className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] font-bold tracking-tighter text-mask mb-10">
            RADICAL<br/>SYNERGY.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-12">
            Breaking the boundaries of generic web design. We assemble high-performance digital architectures for the next generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-16 px-10 rounded-full bg-white text-black hover:scale-105 transition-transform text-lg font-semibold group">
              Start Building
              <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost" className="h-16 px-10 rounded-full glass border-white/5 hover:bg-white/10 transition-colors text-lg">
              View Showcase
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
