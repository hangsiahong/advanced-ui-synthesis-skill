"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />
    </div>
  );
};

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-noise">
      <RetroGrid />
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-terracotta/15 blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-12 lg:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="label-caps text-terracotta inline-block"
          >
            Start a Project
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl lg:text-6xl tracking-tighter"
          >
            Ready to build something extraordinary?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Let's discuss how we can help bring your vision to life. 
            Our team is ready to partner with you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="group relative gap-2 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--color-foreground),0.3)]"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="hover:scale-105 transition-transform duration-300"
            >
              <Link href="/pricing">View Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
