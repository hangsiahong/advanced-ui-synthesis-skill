"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  work: [
    { label: "Case Studies", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Process", href: "#" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl lg:text-5xl tracking-tighter">
                Let's create something remarkable together.
              </h2>
              <p className="mt-6 max-w-md text-background/60">
                We partner with ambitious brands and people to build remarkable digital products, experiences, and platforms.
              </p>
              <Link
                href="#"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
              >
                <span className="relative">
                  Start a project
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-background transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              <motion.div variants={item}>
                <span className="label-caps text-background/40">Work</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.work.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={item}>
                <span className="label-caps text-background/40">Company</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={item}>
                <span className="label-caps text-background/40">Social</span>
                <ul className="mt-6 space-y-3">
                  {footerLinks.social.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-24 origin-left"
        >
          <Separator className="bg-background/10" />
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-background/40">
            © 2024 Axiom Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/40 hover:text-background/70">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-background/40 hover:text-background/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
