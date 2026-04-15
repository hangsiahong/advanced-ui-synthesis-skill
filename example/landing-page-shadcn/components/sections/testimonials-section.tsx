"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I replaced 3 SaaS subscriptions with one KOOMPI Mini. My AI assistant runs 24/7, remembers everything, and I own the data.",
    author: "Sophea K.",
    role: "Developer",
    location: "Phnom Penh",
    initials: "SK",
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    quote: "Setup was literally plug-and-play. Within 5 minutes, I had a fully working AI assistant on Telegram that knows my preferences.",
    author: "Vannak M.",
    role: "Startup Founder",
    location: "Siem Reap",
    initials: "VM",
    color: "bg-red-500/20 text-red-400"
  },
  {
    quote: "The self-hosted sold me. I can audit the code, customize it, and know my conversations stay private. Worth every penny.",
    author: "Dara T.",
    role: "System Administrator",
    location: "Battambang",
    initials: "DT",
    color: "bg-orange-500/20 text-orange-400"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full glass rounded-[2rem] p-8 border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <p className="text-xl font-medium tracking-tight text-white/90 leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-lg border border-white/5`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-sm text-white/40">{t.role}, {t.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
