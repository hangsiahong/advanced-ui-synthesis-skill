"use client";

import { motion } from "framer-motion";

const words = [
  "OPEN SOURCE",
  "SELF-HOSTED",
  "PRIVACY FIRST",
  "AI SERVER",
  "OPENCLAW",
  "KOOMPI CLAW",
  "20+ APPS",
];

export function MarqueeSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050505] select-none">
      <div className="flex flex-col gap-12">
        {/* Row 1: Large Outlined Scrolling Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8 items-center">
                {words.map((word) => (
                  <span
                    key={word}
                    className="text-[10vw] font-black tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.05)" }}
                  >
                    {word} •
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Solid Gradient Scrolling Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-16 px-8 items-center">
                {words.map((word) => (
                  <span
                    key={word}
                    className="text-[8vw] font-black tracking-tighter text-gradient opacity-80"
                  >
                    {word} •
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Edge Blurs */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
    </section>
  );
}
