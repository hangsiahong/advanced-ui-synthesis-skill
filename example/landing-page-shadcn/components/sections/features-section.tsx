"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Layout, Cpu } from "lucide-react";

const FeatureCard = ({ title, desc, icon: Icon, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className={`glass rounded-[2rem] p-8 flex flex-col justify-between group ${className}`}
  >
    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <div>
      <h3 className="text-2xl font-bold tracking-tight mb-3 text-white">{title}</h3>
      <p className="text-white/50 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export function FeaturesSection() {
  return (
    <section className="py-32 px-6 max-w-[90rem] mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-mask mb-6">
          BENTO CORE.
        </h2>
        <p className="text-white/40 text-lg">Architectural components built for extreme performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
        <FeatureCard 
          className="md:col-span-2 md:row-span-2"
          icon={Cpu}
          title="Neural Engine"
          desc="Powered by advanced AI protocols to automate the design-to-code pipeline with zero friction."
        />
        <FeatureCard 
          className="md:col-span-2"
          icon={Zap}
          title="Infinite Speed"
          desc="Optimized for sub-100ms interaction latency across the entire stack."
        />
        <FeatureCard 
          icon={Shield}
          title="Ironclad"
          desc="Encrypted at every layer of the architectural synthesis."
        />
        <FeatureCard 
          icon={Sparkles}
          title="Premium Flair"
          desc="Automated visual polish that makes every interface feel bespoke."
        />
        <FeatureCard 
          className="md:col-span-2"
          icon={Layout}
          title="Bento Grid V4"
          desc="Fully responsive grid systems that adapt to the user's focus and screen density."
        />
      </div>
    </section>
  );
}
