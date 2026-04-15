import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "KOOMPI Claw — Your AI. Your Hardware. Your Rules.",
  description: "KOOMPI Claw: The personal AI server that fits on your desk. Self-hosted, privacy-first, powered by OpenClaw.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
