"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cpu, Wind, Wifi, Code2, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export function HardwareSection() {
  const [copied, setCopied] = useState(false);
  const installScript = "curl -fsSL https://raw.githubusercontent.com/koompi/openclaw-template/refs/heads/main/selfhost/install.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hardware" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-mask mb-4">THE HARDWARE.</h2>
          <p className="text-xl text-white/60 max-w-2xl">KOOMPI Mini — preinstalled, pre-configured, ready out of the box.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4">
          <Card className="col-span-1 md:col-span-2 md:row-span-2 glass rounded-[2rem] p-10 flex flex-col justify-between border-white/5 hover:border-claw-red/30 transition-all duration-500 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-claw-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold tracking-tighter mb-2">KOOMPI Mini</h3>
              <p className="text-claw-red font-bold text-xl">$450 ONE-TIME</p>
            </div>
            
            <div className="relative flex-grow flex items-center justify-center py-6">
               <motion.img 
                src="/koompi-mini.png" 
                alt="KOOMPI Mini" 
                className="w-full max-w-[320px] object-contain drop-shadow-[0_0_50px_rgba(232,27,37,0.3)] group-hover:scale-110 transition-transform duration-700"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
               />
            </div>

            <Button asChild className="relative z-10 w-full h-16 rounded-full bg-claw-red hover:bg-claw-hover text-white text-lg font-bold shadow-xl shadow-claw-red/20">
              <a href="https://t.me/koompix" target="_blank">Order via Telegram</a>
            </Button>
          </Card>

          <Card className="col-span-1 md:col-span-2 glass rounded-[2rem] p-8 border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4 opacity-40">
              <Cpu className="w-6 h-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Performance Specs</span>
            </div>
            <div className="grid grid-cols-2 gap-y-6">
              <div><p className="text-xs text-white/40 mb-1">CPU</p><p className="font-bold">Intel(R) N150</p></div>
              <div><p className="text-xs text-white/40 mb-1">Cores</p><p className="font-bold">4C / 4T (Quad-core)</p></div>
              <div><p className="text-xs text-white/40 mb-1">RAM</p><p className="font-bold">16GB LPDDR4x</p></div>
              <div><p className="text-xs text-white/40 mb-1">SSD</p><p className="font-bold">256GB NVMe</p></div>
            </div>
            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs font-bold text-claw-orange">
              <span>POWER EFFICIENT</span>
              <span>15W TDP</span>
            </div>
          </Card>

          <Card className="glass rounded-[2rem] p-8 border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4 opacity-40">
              <Wind className="w-6 h-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Cooling</span>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight mb-1">Fanless</p>
              <p className="text-white/40 text-sm">Passive / Zero Noise</p>
            </div>
            <div className="text-5xl font-black text-gradient">0 dB</div>
          </Card>

          <Card className="glass rounded-[2rem] p-8 border-white/5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4 opacity-40">
              <Wifi className="w-6 h-6" />
              <span className="font-bold tracking-widest text-xs uppercase">I/O</span>
            </div>
            <ul className="text-sm font-bold space-y-2 text-white/60">
              <li>• WiFi 6 (802.11ax)</li>
              <li>• Bluetooth 5.2</li>
              <li>• Gigabit Ethernet</li>
              <li>• 2x USB-A / 1x USB-C</li>
            </ul>
          </Card>

          <Card className="col-span-1 md:col-span-2 glass rounded-[2.5rem] p-10 border-white/5 flex flex-col justify-between relative group overflow-hidden">
             <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 className="w-64 h-64" />
             </div>
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 opacity-40">
                  <Code2 className="w-6 h-6" />
                  <span className="font-bold tracking-widest text-xs uppercase">One-Script Setup</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Self-Hosted Deployment</h3>
                <div className="bg-black/40 rounded-xl p-4 border border-white/10 flex items-center justify-between gap-4 mb-6">
                  <code className="text-xs text-white/60 truncate font-mono">
                    {installScript}
                  </code>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-white/40" />}
                  </button>
                </div>
             </div>
             <a href="https://github.com/koompi/openclaw-template" target="_blank" className="relative z-10 flex items-center gap-2 text-claw-red font-bold hover:gap-4 transition-all">
                View on GitHub <ArrowRight className="w-5 h-5" />
             </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
