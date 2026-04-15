"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Github, ArrowUp, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "What is Claw", href: "#what-is-claw" },
    { label: "Hardware", href: "#hardware" },
    { label: "Managed Service", href: "https://koompi.cloud" },
    { label: "Pricing", href: "#pricing" },
  ],
  resources: [
    { label: "Documentation", href: "https://docs.openclaw.ai" },
    { label: "ClawHub Skills", href: "https://clawhub.ai" },
    { label: "GitHub Repo", href: "https://github.com/openclaw/openclaw" },
    { label: "About OpenClaw", href: "#" },
  ],
  company: [
    { label: "About KOOMPI", href: "https://koompi.com" },
    { label: "KOOMPI Cloud", href: "https://koompi.cloud" },
    { label: "Contact Support", href: "https://t.me/koompix" },
  ]
};

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6 whitespace-nowrap">
    <span>PERSONAL AI ARCHITECTURE</span> <span className="text-claw-red/60">✦</span>
    <span>SELF-HOSTED PRIVACY</span> <span className="text-claw-orange/60">✦</span>
    <span>OPEN SOURCE CORE</span> <span className="text-claw-red/60">✦</span>
    <span>20+ APP CHANNELS</span> <span className="text-claw-orange/60">✦</span>
    <span>ZERO DATA HARVESTING</span> <span className="text-claw-red/60">✦</span>
  </div>
);

export function Footer() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const giantTextY = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);
  const giantTextScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const giantTextOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0.2]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full mt-24">
      <footer className="sticky bottom-0 left-0 h-[80vh] w-full overflow-hidden bg-[#050505] text-white flex flex-col justify-between">
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[#e81b25]/10 rounded-full blur-[120px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          style={{ 
            y: giantTextY, 
            scale: giantTextScale, 
            opacity: giantTextOpacity,
            WebkitTextStroke: "1px rgba(255,255,255,0.1)"
          } as any}
          className="absolute -bottom-[5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none text-[26vw] font-black tracking-tighter text-transparent"
        >
          CLAW.
        </motion.div>

        <div className="absolute top-12 left-0 w-full overflow-hidden border-y border-white/5 bg-white/[0.02] backdrop-blur-md py-4 z-10 -rotate-1 scale-110">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex w-max text-xs font-bold tracking-[0.3em] text-white/30 uppercase"
          >
            <MarqueeItem /><MarqueeItem /><MarqueeItem />
          </motion.div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 mt-32 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-3xl">🦞</span>
                        <span className="text-3xl font-bold tracking-tighter text-gradient">KOOMPI Claw</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/openclaw/openclaw" target="_blank" className="size-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                            <Github className="size-5 text-white/60" />
                        </a>
                        <a href="https://t.me/koompix" target="_blank" className="size-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                            <MessageCircle className="size-5 text-white/60" />
                        </a>
                    </div>
                </div>

                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[10px] opacity-40">{title}</h4>
                        <ul className="space-y-4">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="relative z-20 w-full pb-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-8 bg-[#050505]/50 backdrop-blur-sm">
            <div className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase order-2 md:order-1">
                © 2025 KOOMPI. ALL RIGHTS RESERVED.
            </div>

            <div className="glass px-6 py-3 rounded-full flex items-center gap-2 order-1 md:order-2 border-white/5">
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Architected with</span>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Heart className="size-3 text-[#e81b25] fill-[#e81b25]" />
                </motion.div>
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">in Cambodia</span>
            </div>

            <motion.button
                whileHover={{ y: -5, scale: 1.1 }}
                onClick={scrollToTop}
                className="size-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white border-white/5 order-3"
            >
                <ArrowUp className="size-5" />
            </motion.button>
        </div>
      </footer>
    </div>
  );
}
