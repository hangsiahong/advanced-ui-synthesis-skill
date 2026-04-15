"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Cpu, Wind, Wifi, Code2, ArrowRight, Copy, Check, Globe } from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any },
  }),
};

export function HardwareSection() {
  const [copied, setCopied] = useState(false);
  const installScript = "curl -fsSL https://raw.githubusercontent.com/koompi/openclaw-template/refs/heads/main/selfhost/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hardware" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-mask mb-4"
          >
            THE HARDWARE.
          </motion.h2>
          <motion.p 
            custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-xl text-white/60 max-w-2xl"
          >
            KOOMPI Mini — preinstalled, pre-configured, ready out of the box.
          </motion.p>
        </div>

        <div className="mx-auto grid gap-2 sm:grid-cols-5">
            {/* Main Hardware Pitch */}
            <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sm:col-span-3">
                <Card className="group relative overflow-hidden glass border-white/5 sm:rounded-none sm:rounded-tl-3xl h-full flex flex-col justify-between">
                    <CardHeader className="p-8 md:p-10 relative z-10">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-3xl font-bold tracking-tighter text-white">KOOMPI Mini</p>
                                <p className="text-claw-red font-bold text-lg mt-1 tracking-tight">$450 ONE-TIME</p>
                            </div>
                            <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <Cpu className="size-6 text-claw-orange" />
                            </div>
                        </div>
                        <p className="text-white/50 mt-4 max-w-sm text-sm leading-relaxed">
                            Your personal AI command center. High performance, zero noise, total privacy. Ready to plug and play.
                        </p>
                    </CardHeader>

                    <div className="relative flex-grow flex items-center justify-center p-6 md:p-12 mt-auto">
                        <div className="absolute inset-0 [background:radial-gradient(75%_95%_at_50%_100%,rgba(232,27,37,0.1),transparent_100%)]"></div>
                        <img
                            src="/koompi-mini.png"
                            className="w-full max-w-[380px] object-contain drop-shadow-[0_0_60px_rgba(232,27,37,0.3)] group-hover:scale-110 transition-transform duration-700 relative z-10"
                            alt="KOOMPI Mini PC"
                        />
                    </div>
                </Card>
            </motion.div>

            {/* Performance Specs */}
            <motion.div custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sm:col-span-2">
                <Card className="group overflow-hidden glass border-white/5 sm:rounded-none sm:rounded-tr-3xl h-full flex flex-col">
                    <CardHeader className="p-8">
                        <p className="text-xl font-bold tracking-tight text-white mb-2">Performance Architecture</p>
                        <p className="text-white/40 text-sm">Built for 24/7 AI operation.</p>
                    </CardHeader>

                    <CardContent className="p-8 pt-0 flex-grow">
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div><p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">CPU</p><p className="font-bold text-sm">Intel Celeron N5105</p></div>
                            <div><p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">Cores</p><p className="font-bold text-sm">4C / 4T (Quad-core)</p></div>
                            <div><p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">RAM</p><p className="font-bold text-sm">16GB LPDDR4x</p></div>
                            <div><p className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-1">SSD</p><p className="font-bold text-sm">256GB NVMe</p></div>
                        </div>

                        <div className="relative rounded-2xl border border-white/10 bg-black/40 overflow-hidden aspect-video group-hover:border-claw-red/30 transition-colors">
                            <div className="absolute inset-0 [background:radial-gradient(50%_75%_at_75%_50%,rgba(232,27,37,0.1),transparent_100%)]"></div>
                            <div className="p-6 flex flex-col justify-between h-full">
                                <Wind className="size-8 text-claw-orange opacity-50" />
                                <div>
                                    <p className="text-2xl font-black text-gradient">15W TDP</p>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Power Efficient</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Silent & Connectivity */}
            <motion.div custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sm:col-span-2">
                <Card className="group glass border-white/5 sm:rounded-none sm:rounded-bl-3xl p-8 md:p-10 h-full flex flex-col justify-between">
                    <div>
                        <p className="text-2xl font-bold tracking-tighter text-white mb-6">Silent. Connected. Seamless.</p>
                        <div className="flex gap-4 mb-10">
                            <div className="bg-white/5 size-14 flex items-center justify-center rounded-2xl border border-white/10 shadow-lg group-hover:border-claw-red/30 transition-colors">
                                <Wind className="size-6 text-white/40" />
                            </div>
                            <div className="bg-white/5 size-14 flex items-center justify-center rounded-2xl border border-white/10 shadow-lg group-hover:border-claw-orange/30 transition-colors">
                                <Wifi className="size-6 text-white/40" />
                            </div>
                            <div className="bg-white/5 size-14 flex items-center justify-center rounded-2xl border border-white/10 shadow-lg group-hover:border-blue-500/30 transition-colors">
                                <Globe className="size-6 text-white/40" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                            <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Cooling</span>
                            <span className="text-3xl font-black text-gradient">0 dB</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-y-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                            <li>• WiFi 6</li>
                            <li>• BT 5.2</li>
                            <li>• Gigabit</li>
                            <li>• USB-C</li>
                        </ul>
                    </div>
                </Card>
            </motion.div>

            {/* One-Script Setup */}
            <motion.div custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="sm:col-span-3">
                <Card className="group relative glass border-white/5 sm:rounded-none sm:rounded-br-3xl h-full flex flex-col overflow-hidden">
                    <CardHeader className="p-8 md:p-10">
                        <div className="flex items-center gap-3 mb-2">
                            <Code2 className="size-5 text-claw-red" />
                            <p className="font-bold tracking-tight text-white uppercase text-xs opacity-40">One-Script Setup</p>
                        </div>
                        <p className="text-2xl font-bold tracking-tight text-white">Self-Hosted Deployment</p>
                        <p className="text-white/50 mt-2 max-w-sm text-sm">Deploy the full Claw experience on any machine with a single command.</p>
                    </CardHeader>
                    
                    <CardContent className="relative h-fit px-8 pb-10 mt-auto">
                        <div className="bg-black/60 rounded-2xl p-6 border border-white/10 flex items-center justify-between gap-6 group-hover:border-claw-red/30 transition-colors relative z-10">
                            <code className="text-xs text-white/70 truncate font-mono">
                                {installScript}
                            </code>
                            <button 
                                onClick={copyToClipboard}
                                className="size-10 bg-white/5 hover:bg-white/10 rounded-xl transition-colors flex items-center justify-center flex-shrink-0 border border-white/10"
                            >
                                {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4 text-white/40" />}
                            </button>
                        </div>
                        
                        <div className="mt-8 flex items-center gap-4">
                            <div className="size-8 rounded-lg bg-white/5 border border-dashed border-white/20 flex items-center justify-center">
                                <img src="https://oxymor-ns.tailus.io/logos/github.svg" className="size-4 invert opacity-40" alt="github" />
                            </div>
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Connects to AI Gateway & Cloud</p>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -right-10 -bottom-10 size-64 bg-claw-red/5 blur-3xl pointer-events-none"></div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
