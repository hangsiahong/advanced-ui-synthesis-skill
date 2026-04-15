"use client";

import { motion } from "framer-motion";

const partners = [
  "StadiumX",
  "Riverbase",
  "Camprotec",
  "SmartCam",
  "ISI Group",
  "weYOUNG",
  "Baray",
  "Selendra",
];

export function MarqueeSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#050505] select-none border-y border-white/5">
      <div className="flex flex-col gap-16">
        {/* Header (Optional but adds context) */}
        <div className="text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Trusted by the best</span>
        </div>

        {/* Row 1: Large Outlined Partners */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -2800] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-24 px-12 items-center">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-[8vw] font-black tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                  >
                    {partner.toUpperCase()}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Solid Gradient Partners (Moving opposite) */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-2800, 0] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-24 px-12 items-center">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-[6vw] font-black tracking-tighter text-gradient opacity-80"
                  >
                    {partner.toUpperCase()}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Edge Blurs */}
      <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
    </section>
  );
}
