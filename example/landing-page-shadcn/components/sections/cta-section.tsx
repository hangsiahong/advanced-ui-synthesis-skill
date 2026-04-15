"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-claw-red/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,27,37,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
        >
          Ready to Get <span className="text-gradient">Claws?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Choose your path — hardware or managed. Either way, your AI is about to get a lot more personal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button size="lg" className="h-16 px-10 rounded-full bg-claw-red hover:bg-claw-hover text-white text-lg font-bold min-w-[240px] shadow-2xl shadow-claw-red/30 transition-all hover:scale-[1.05]">
            Get the Hardware — $450
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-10 rounded-full border-white/10 glass hover:bg-white/5 text-white text-lg font-bold min-w-[240px] transition-all hover:scale-[1.05]">
            Go Managed
          </Button>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          href="#pricing"
          className="text-white/40 hover:text-white transition-colors flex items-center justify-center gap-2 group"
        >
          Compare Plans <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.a>
      </div>
    </section>
  );
}
