"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const words = ["DESIGN", "CODE", "STRATEGY", "INNOVATION", "BEYOND"];

export function MarqueeSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="flex flex-col gap-8 select-none">
        {/* Row 1: Background Outlined */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6">
                {words.map((word) => (
                  <span
                    key={word}
                    className="text-[12vw] font-black tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                  >
                    {word} •
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Foreground Mesh */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1035, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-12 px-6">
                {words.map((word) => (
                  <span
                    key={word}
                    className="text-[12vw] font-black tracking-tighter mesh-gradient bg-clip-text text-transparent"
                  >
                    {word} •
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
