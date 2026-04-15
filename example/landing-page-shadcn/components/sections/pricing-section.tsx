"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Check, Monitor, Cloud, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

const tokenPricing = [
  { model: "GLM-5 Turbo", input: "$0.07", output: "$0.20", context: "128k" },
  { model: "GLM-5", input: "$0.30", output: "$1.00", context: "1M" },
  { model: "Gemini 3 Flash", input: "$0.075", output: "$0.30", context: "1M" },
  { model: "Gemini 3.1 Pro", input: "$1.25", output: "$5.00", context: "2M" },
];

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7.5" className="stroke-white/20" />
    <path
      d="M5.5 8.5L7 10L11 6"
      stroke="#e81b25"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ToggleSwitch = ({
  enabled,
  onChange,
  label
}: {
  enabled: boolean
  onChange: (v: boolean) => void
  label: string
}) => (
  <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={[
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
        "ring-1 ring-inset ring-white/10",
        enabled ? "bg-claw-red" : "bg-white/5",
      ].join(" ")}
      aria-pressed={enabled}
    >
      <span
        className={[
          "inline-block h-4 w-4 transform rounded-full transition-transform duration-200 ease-in-out bg-white shadow-sm",
          enabled ? "translate-x-6" : "translate-x-1",
        ].join(" ")}
      />
    </button>
    <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
      {label}
    </span>
  </div>
)

export function PricingSection() {
  const [hardwarePriority, setHardwarePriority] = useState(false)
  const [managedPriority, setManagedPriority] = useState(false)

  const hardwareFeatures = [
    "Full data privacy", 
    "20+ chat channels", 
    "Long-term memory", 
    "Cron jobs & automation", 
    "Browser control", 
    "1-year warranty"
  ]
  
  const managedFeatures = [
    "KOOMPI Cloud hosting", 
    "24/7 uptime monitoring", 
    "Automatic updates", 
    "Multi-channel config", 
    "Priority support SLA", 
    "Custom integrations"
  ]

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-mask mb-4"
          >
            SIMPLE PRICING.
          </motion.h2>
          <motion.p 
            custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            No monthly AI subscription. Buy credits and use any model. Credits never expire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px] mx-auto mb-32">
          {/* Hardware Card */}
          <motion.div
            custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-[2.5rem] p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl ring-1 ring-inset ring-white/5"
          >
            <div className="rounded-[2rem] p-10 mb-2 bg-[#0a0a0b]/80 backdrop-blur-sm border border-white/5 ring-1 ring-inset ring-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Monitor className="w-20 h-20" />
                </div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">Hardware</h3>
                  <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-bold">
                    KOOMPI Mini + Claw
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-claw-red/30 bg-claw-red/10 px-3 py-1 text-[10px] font-bold text-claw-red uppercase tracking-wider">
                  Self-Hosted
                </span>
              </div>

              <div className="flex items-baseline mb-10">
                <span className="text-6xl font-bold tracking-tighter text-white">${hardwarePriority ? "500" : "450"}</span>
                <span className="text-white/40 text-lg ml-2 font-medium">one-time</span>
              </div>

              <Button asChild size="lg" className="w-full h-16 rounded-2xl bg-white text-black hover:bg-white/90 font-bold text-lg shadow-xl transition-all hover:scale-[1.02]">
                <a href="https://t.me/koompix" target="_blank">Order via Telegram</a>
              </Button>
            </div>

            <div className="px-8 pb-8 pt-6 bg-white/[0.02] backdrop-blur-sm rounded-[2rem] border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {hardwareFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckIcon className="size-4 flex-shrink-0" />
                    <span className="text-white/70 text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <ToggleSwitch 
                    enabled={hardwarePriority} 
                    onChange={setHardwarePriority} 
                    label="Priority Hardware Support (+$50)"
                />
              </div>
            </div>
          </motion.div>

          {/* Managed Card */}
          <motion.div
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="rounded-[2.5rem] p-2 bg-claw-red/5 backdrop-blur-md border border-claw-red/20 shadow-2xl ring-1 ring-inset ring-claw-red/10"
          >
            <div className="rounded-[2rem] p-10 mb-2 bg-[#0a0a0b]/80 backdrop-blur-sm border border-white/5 ring-1 ring-inset ring-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Cloud className="w-20 h-20" />
                </div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">Managed</h3>
                  <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-bold">
                    Zero Maintenance
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold text-white/60 uppercase tracking-wider">
                  Cloud Service
                </span>
              </div>

              <div className="flex items-baseline mb-10">
                <span className="text-6xl font-bold tracking-tighter text-white">Custom</span>
              </div>

              <Button asChild size="lg" variant="outline" className="w-full h-16 rounded-2xl border-white/10 glass hover:bg-white/5 text-white font-bold text-lg transition-all hover:scale-[1.02]">
                <a href="https://koompi.cloud" target="_blank">Deploy on Cloud</a>
              </Button>
            </div>

            <div className="px-8 pb-8 pt-6 bg-white/[0.02] backdrop-blur-sm rounded-[2rem] border border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {managedFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckIcon className="size-4 flex-shrink-0" />
                    <span className="text-white/70 text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <ToggleSwitch 
                    enabled={managedPriority} 
                    onChange={setManagedPriority} 
                    label="24/7 Priority SLA (Request Quote)"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Token Pricing Table */}
        <motion.div 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">AI Gateway Usage</h3>
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
        </motion.div>
      </div>
    </section>
  );
}
