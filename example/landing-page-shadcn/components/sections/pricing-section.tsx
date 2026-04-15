"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Cloud, Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const tokenPricing = [
  { model: "GLM-5 Turbo", input: "$0.07", output: "$0.20", context: "128k" },
  { model: "GLM-5", input: "$0.30", output: "$1.00", context: "1M" },
  { model: "Gemini 3 Flash", input: "$0.075", output: "$0.30", context: "1M" },
  { model: "Gemini 3.1 Pro", input: "$1.25", output: "$5.00", context: "2M" },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-mask mb-4"
          >
            SIMPLE PRICING.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            No monthly AI subscription. Buy credits and use any model. Credits never expire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {/* Card 1 — Hardware */}
          <Card className="h-full glass rounded-[2.5rem] p-10 flex flex-col border-white/5 hover:border-claw-red/30 transition-all duration-500 hover:glow-red bg-white/[0.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Monitor className="w-24 h-24" />
            </div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block">Best for Privacy</span>
              <h3 className="text-3xl font-bold tracking-tighter mb-2">KOOMPI Mini + Claw</h3>
              <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter text-gradient">$450</span>
                  <span className="text-white/40 font-medium">one-time</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                  "Full data privacy (your hardware)",
                  "20+ chat channels",
                  "Long-term memory system",
                  "Cron jobs & automation",
                  "Browser control & live canvas",
                  "1-year hardware warranty"
              ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-claw-red" />
                      <span className="text-white/80 font-medium">{feature}</span>
                  </div>
              ))}
            </div>

            <Button asChild className="w-full h-16 rounded-full bg-claw-red hover:bg-claw-hover text-white text-lg font-bold shadow-lg shadow-claw-red/20 transition-transform hover:scale-[1.02]">
              <a href="https://t.me/koompix" target="_blank">Order via Telegram</a>
            </Button>
          </Card>

          {/* Card 2 — Managed */}
          <Card className="h-full glass rounded-[2.5rem] p-10 flex flex-col border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cloud className="w-24 h-24" />
            </div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 block">Scalable & Zero Maintenance</span>
              <h3 className="text-3xl font-bold tracking-tighter mb-2">Managed Claw</h3>
              <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tighter">Custom</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {[
                  "Secure KOOMPI Cloud hosting",
                  "24/7 uptime monitoring",
                  "Automatic software updates",
                  "Multi-channel configuration",
                  "Priority support SLA",
                  "Custom integrations"
              ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-white/40" />
                      <span className="text-white/70 font-medium">{feature}</span>
                  </div>
              ))}
            </div>

            <Button asChild variant="outline" className="w-full h-16 rounded-full border-white/10 glass hover:bg-white/5 text-white text-lg font-bold transition-transform hover:scale-[1.02]">
              <a href="https://koompi.cloud" target="_blank">Deploy on Cloud</a>
            </Button>
          </Card>
        </div>

        {/* Token Pricing Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight mb-2">AI Gateway Usage</h3>
            <p className="text-white/40">Pay only for what you use. Start with as little as $1. Credits never expire.</p>
          </div>
          <div className="glass rounded-[2rem] overflow-hidden border-white/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5">
                    <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/40">Model</th>
                    <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/40 text-right">Input / 1M Tokens</th>
                    <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/40 text-right">Output / 1M Tokens</th>
                    <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-white/40 text-right">Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {tokenPricing.map((item) => (
                    <tr key={item.model} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-8 py-5 font-bold text-white">{item.model}</td>
                      <td className="px-8 py-5 text-right text-white/60 font-mono">{item.input}</td>
                      <td className="px-8 py-5 text-right text-white/60 font-mono">{item.output}</td>
                      <td className="px-8 py-5 text-right text-claw-red font-bold font-mono">{item.context}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-white/[0.02] text-center border-t border-white/5">
              <a href="https://ai.koompi.cloud" target="_blank" className="text-sm font-medium text-white/40 hover:text-claw-red transition-colors flex items-center justify-center gap-2">
                Manage your credits at ai.koompi.cloud <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
