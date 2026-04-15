"use client";

import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  location: string;
  imageSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "I replaced 3 SaaS subscriptions with one KOOMPI Mini. My AI assistant runs 24/7, remembers everything, and I own the data.",
    name: "Sophea K.",
    role: "Fullstack Developer",
    location: "Phnom Penh",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    quote: "Setup was literally plug-and-play. Within 5 minutes, I had a fully working AI assistant on Telegram that knows my preferences.",
    name: "Vannak M.",
    role: "Startup Founder",
    location: "Siem Reap",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    quote: "The self-hosted sold me. I can audit the code, customize it, and know my conversations stay private. Worth every penny.",
    name: "Dara T.",
    role: "System Administrator",
    location: "Battambang",
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.7, 
      delay, 
      ease: [0.22, 1, 0.36, 1] as any 
    },
  }),
};

export function TestimonialsSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <section className="w-full bg-[#050505] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-mask mb-6">
            COMMUNITY VOICE.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white/40">
            Real feedback from the pioneers of personal AI.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#0a0a0b] border border-white/5 group shadow-2xl"
              variants={itemVariants}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  className="h-full w-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-left text-white">
                <Quote
                  className="mb-6 h-10 w-10 text-[#e81b25]/60"
                  aria-hidden="true"
                />
                <blockquote className="text-lg font-medium leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-4">
                    <div className="h-px w-8 bg-[#e81b25]/40" />
                    <div>
                        <p className="font-bold text-white tracking-tight">
                            {testimonial.name}
                        </p>
                        <p className="text-xs uppercase tracking-widest font-bold text-white/30 mt-1">
                            {testimonial.role} • {testimonial.location}
                        </p>
                    </div>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
