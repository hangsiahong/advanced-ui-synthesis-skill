import { Navigation, Footer } from "@/components/layout";
import {
  HeroSection,
  WhatIsClawSection,
  MarqueeSection,
  HardwareSection,
  PricingSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WhatIsClawSection />
        <MarqueeSection />
        <HardwareSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
