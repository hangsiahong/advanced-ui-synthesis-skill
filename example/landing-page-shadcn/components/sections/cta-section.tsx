"use client"

import * as React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const SPRING_TRANSITION_CONFIG = {
  type: "spring",
  stiffness: 100,
  damping: 16,
  mass: 0.75,
  restDelta: 0.005,
}

const filterVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0
  },
}

const IMAGES = [
  "/cta/mini-1.png",
  "/cta/mini-2.png",
  "/cta/mini-3.png",
  "/cta/mini-4.png",
]

export function CTASection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000); // Switch every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 md:py-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e81b25]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.15,
            delayChildren: 0.2,
          }}
          className="flex flex-col"
        >
          <motion.span 
            variants={filterVariants}
            transition={SPRING_TRANSITION_CONFIG as any}
            className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#e81b25]"
          >
            Ready to Get Claws?
          </motion.span>
          
          <motion.h2 
            variants={filterVariants}
            transition={SPRING_TRANSITION_CONFIG as any}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-mask mb-6"
          >
            THE FUTURE OF <br />
            <span className="text-gradient">PERSONAL AI.</span>
          </motion.h2>
          
          <motion.p 
            variants={filterVariants}
            transition={SPRING_TRANSITION_CONFIG as any}
            className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-xl"
          >
            Choose your path — hardware or managed. Either way, your AI is about to get a lot more personal. Secure, private, and powerful.
          </motion.p>
          
          <motion.div 
            variants={filterVariants}
            transition={SPRING_TRANSITION_CONFIG as any}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 transition-all font-bold text-lg glow-red-sm group">
              <a href="https://t.me/koompix" target="_blank">
                Order Hardware — $450
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full glass border-white/10 hover:bg-white/5 transition-colors text-lg font-bold">
              <a href="https://koompi.cloud" target="_blank">
                Go Managed
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Dynamic Image Switcher */}
        <div className="relative aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#e81b25]/5 rounded-[3rem] blur-3xl" />
            <div className="relative w-full h-full glass rounded-[3rem] border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={IMAGES[index]}
                        src={IMAGES[index]}
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(232,27,37,0.4)]"
                        alt="KOOMPI Mini Hardware"
                    />
                </AnimatePresence>
                
                {/* Visual Accent */}
                <div className="absolute top-8 right-8 flex gap-1.5">
                    {IMAGES.map((_, i) => (
                        <div 
                            key={i} 
                            className={`h-1 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-[#e81b25]" : "w-2 bg-white/10"}`} 
                        />
                    ))}
                </div>
                
                {/* Floating Animation Wrapper */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 pointer-events-none border-[1px] border-white/5 rounded-[3rem]"
                />
            </div>
        </div>
      </div>
    </section>
  )
}
