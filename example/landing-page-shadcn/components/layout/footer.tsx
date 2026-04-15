"use client";

import { Separator } from "@/components/ui/separator";
import { MessageCircle, Github, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-lg">🦞</span>
                <span className="text-2xl font-bold tracking-tighter text-gradient">KOOMPI Claw</span>
            </div>
            <p className="text-white/40 leading-relaxed mb-8">
              The personal AI server that fits on your desk. Built with OpenClaw by KOOMPI in Phnom Penh, Cambodia.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://discord.com/invite/clawd" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                <MessageCircle className="w-5 h-5 text-white/60" />
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                <Github className="w-5 h-5 text-white/60" />
              </a>
              <a href="https://t.me/koompix" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                <Globe className="w-5 h-5 text-white/60" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-40">Product</h4>
            <a href="#what-is-claw" className="text-white/60 hover:text-white transition-colors">What is Claw</a>
            <a href="#hardware" className="text-white/60 hover:text-white transition-colors">Hardware</a>
            <a href="https://koompi.cloud" target="_blank" className="text-white/60 hover:text-white transition-colors">Managed Service</a>
            <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-40">Resources</h4>
            <a href="https://docs.openclaw.ai" target="_blank" className="text-white/60 hover:text-white transition-colors">Documentation</a>
            <a href="https://clawhub.ai" target="_blank" className="text-white/60 hover:text-white transition-colors">ClawHub Skills</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" className="text-white/60 hover:text-white transition-colors">GitHub Repository</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">About OpenClaw</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs opacity-40">Company</h4>
            <a href="https://koompi.com" target="_blank" className="text-white/60 hover:text-white transition-colors">About KOOMPI</a>
            <a href="https://koompi.cloud" target="_blank" className="text-white/60 hover:text-white transition-colors">KOOMPI Cloud</a>
            <a href="https://t.me/koompix" target="_blank" className="text-white/60 hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © 2025 KOOMPI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 hover:text-white text-xs transition-colors">Terms of Service</a>
            <p className="text-white/40 text-sm flex items-center gap-1">
                Built with <span className="text-claw-red animate-pulse">❤️</span> in Cambodia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
