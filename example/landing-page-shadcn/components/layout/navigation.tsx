"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "What is Claw", href: "#what-is-claw" },
  { label: "Hardware", href: "#hardware" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "https://docs.openclaw.ai" },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 100], ["100%", "92%"]);
  const y = useTransform(scrollY, [0, 100], [0, 16]);

  useEffect(() => setMounted(true), []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      style={mounted ? { width, y } : undefined}
      className="fixed left-1/2 -translate-x-1/2 z-50 px-4 pointer-events-none"
    >
      <div className="max-w-5xl mx-auto glass-strong rounded-full px-6 py-3.5 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/40">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span className="text-lg">🦞</span>
          <span className="text-[15px] font-bold tracking-tight text-gradient">KOOMPI Claw</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 transition-all text-[13px] font-bold h-9 px-5"
          >
            Get Started
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/60 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong rounded-2xl mt-2 p-6 max-w-5xl mx-auto pointer-events-auto"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full bg-white text-black hover:bg-white/90 mt-2">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
