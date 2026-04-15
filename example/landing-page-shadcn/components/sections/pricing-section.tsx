"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, Check, Monitor, Cloud, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartesianGrid, Line, LineChart, XAxis, ResponsiveContainer } from 'recharts';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';

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

const chartData = [
  { model: "GLM-5T", tokens: 100, cost: 0.07 },
  { model: "GLM-5", tokens: 300, cost: 0.30 },
  { model: "Gemini F", tokens: 200, cost: 0.08 },
  { model: "Gemini P", tokens: 800, cost: 1.25 },
];

const chartConfig = {
  cost: {
    label: "Cost per 1M",
    color: "#e81b25",
  },
} satisfies ChartConfig;

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
        enabled ? "bg-[#e81b25]" : "bg-white/5",
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
                <span className="inline-flex items-center rounded-full border border-[#e81b25]/30 bg-[#e81b25]/10 px-3 py-1 text-[10px] font-bold text-[#e81b25] uppercase tracking-wider">
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
            className="rounded-[2.5rem] p-2 bg-[#e81b25]/5 backdrop-blur-md border border-[#e81b25]/20 shadow-2xl ring-1 ring-inset ring-[#e81b25]/10"
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

        {/* Token Pricing Chart Hybrid */}
        <motion.div 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="max-w-6xl mx-auto"
        >
            <div className="bg-white/[0.02] backdrop-blur-xl grid rounded-[3rem] border border-white/5 overflow-hidden md:grid-cols-6">
                {/* AI Economics Pitch */}
                <div className="flex flex-col justify-between border-b border-white/5 p-10 md:col-span-2 md:border-r md:border-b-0">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">AI Economics</h2>
                            <span className="block text-4xl font-black text-gradient">
                                $0.07<span className="text-lg font-bold text-white/20 ml-1">/1M</span>
                            </span>
                            <p className="text-white/40 text-sm mt-4 leading-relaxed">
                                Pay only for what you use. No lock-in. Bring your own keys or use our Gateway.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Unlimited Model Access",
                                "Zero Expiry Credits",
                                "Shared Context Window",
                                "Enterprise Privacy"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <TrendingUp className="size-4 text-[#e81b25]" />
                                    <span className="text-white/60 text-xs font-medium uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild variant="outline" className="w-full h-12 rounded-xl border-white/5 glass hover:bg-[#e81b25]/10 text-xs font-bold uppercase tracking-widest">
                            <a href="https://ai.koompi.cloud">View API Dashboard</a>
                        </Button>
                    </div>
                </div>

                {/* Chart + Table */}
                <div className="z-10 grid gap-10 overflow-hidden p-10 md:col-span-4 lg:grid-cols-2 bg-black/20">
                    {/* Visual Trend */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div>
                            <h3 className="text-lg font-bold tracking-tight text-white">Efficiency Trend</h3>
                            <p className="text-white/30 text-xs mt-1">Cost efficiency across available models.</p>
                        </div>
                        <div className="bg-white/5 rounded-2xl border border-white/5 p-4">
                            <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
                                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                                    <XAxis
                                        dataKey="model"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
                                    />
                                    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                                    <Line
                                        dataKey="cost"
                                        type="monotone"
                                        stroke="var(--color-cost)"
                                        strokeWidth={3}
                                        dot={{ r: 4, fill: '#e81b25' }}
                                    />
                                </LineChart>
                            </ChartContainer>
                        </div>
                    </div>

                    {/* Quick Specs Table */}
                    <div className="relative w-full">
                        <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">Model Specs</div>
                        <div className="space-y-4">
                            {tokenPricing.map((item) => (
                                <div key={item.model} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#e81b25]/20 transition-colors">
                                    <div>
                                        <p className="text-sm font-bold text-white">{item.model}</p>
                                        <p className="text-[10px] text-[#e81b25] font-bold mt-0.5">{item.context} Context</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-mono font-bold text-white/80">{item.input}</p>
                                        <p className="text-[10px] text-white/20 uppercase tracking-tighter">per 1M tokens</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
