"use client";

import { motion, Variants } from "framer-motion";
import { Shield, MessageSquare, Code, Brain, Zap, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  { title: "Self-Hosted Privacy", desc: "Your AI runs on hardware YOU control. No cloud, no data harvesting, no third-party access.", icon: Shield },
  { title: "20+ Chat Apps", desc: "Telegram, WhatsApp, Discord, Slack, and more. One AI brain, every conversation.", icon: MessageSquare },
  { title: "Open Source", desc: "Built on OpenClaw. Inspect the code, customize it, make it yours. Zero lock-in.", icon: Code },
  { title: "Long-Term Memory", desc: "Your AI remembers. Preferences, past conversations, and context — stored locally.", icon: Brain },
  { title: "Automation Engine", desc: "Cron jobs, browser control, live canvas. Your AI doesn't just chat — it works.", icon: Zap },
  { title: "AI Gateway", desc: "Access GLM-5, Gemini, and more through KOOMPI AI Gateway. Or bring your own API keys.", icon: Network },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      delay, 
      ease: [0.22, 1, 0.36, 1] as any 
    },
  }),
};

export function WhatIsClawSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row items-baseline gap-4 mb-24">
        <motion.h2 custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-7xl md:text-9xl font-black tracking-tighter text-mask">WHAT IS</motion.h2>
        <motion.h2 custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-7xl md:text-9xl font-black tracking-tighter text-gradient">CLAW?</motion.h2>
      </div>

      <motion.p custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-2xl text-xl md:text-2xl text-white/60 mb-20 leading-relaxed">
        KOOMPI Claw is a personal AI server built on OpenClaw. Connect it to Telegram, WhatsApp, Discord, and 20+ chat apps. Your data stays on YOUR hardware. Self-hosted, open source, privacy-first.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div key={feature.title} custom={0.3 + i * 0.05} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="glass p-8 h-full border-white/5 hover:border-white/20 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-xl bg-[#e81b25]/10 flex items-center justify-center mb-6 group-hover:bg-[#e81b25]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#e81b25]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
