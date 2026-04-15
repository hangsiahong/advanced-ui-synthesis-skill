"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      delay, 
      ease: [0.22, 1, 0.36, 1] as any 
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-20">
      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#e81b25]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[100px]"
        />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute left-1/4 top-0 w-[1px] h-full bg-white/20" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20" />
        <div className="absolute left-3/4 top-0 w-[1px] h-full bg-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mb-10">
            Your AI. Your Hardware. Your Rules.
          </span>
        </motion.div>

        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-[clamp(3rem,12vw,8.5rem)] leading-[0.85] font-extrabold tracking-tighter text-mask mb-10">
            THE AI SERVER<br />THAT FITS ON<br />YOUR DESK.
          </h1>
        </motion.div>

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/50 leading-relaxed mb-12 px-4">
            KOOMPI Claw — the personal AI server powered by OpenClaw. 
            Self-hosted, privacy-first, connected to 20+ chat apps. 
            No subscriptions. No data harvesting. Just powerful AI that belongs to you.
          </p>
        </motion.div>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold text-lg glow-red-sm group">
              <a href="https://t.me/koompix" target="_blank">
                Order Hardware — $450
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-16 px-10 rounded-full glass border-white/10 hover:bg-white/5 transition-colors text-lg font-bold">
              <a href="https://koompi.cloud" target="_blank">
                Go Managed
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
