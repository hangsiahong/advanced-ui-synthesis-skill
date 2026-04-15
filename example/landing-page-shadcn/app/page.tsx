import { Navigation, Footer } from "@/components/layout";
import {
  HeroSection,
  MarqueeSection,
  StatsSection,
  WorkSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <StatsSection />
        <WorkSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
