# Spec: Kinetic Glass Redesign

## Goal
Overhaul the landing page UI to a "premium infrastructure" look, moving away from standard templates by using bold typography, kinetic motion, and glassmorphism.

## Components

### 1. Floating Island Navigation
- **File**: `components/layout/navigation.tsx`
- **Design**:
    - Fixed at `top-6`, `rounded-full`, `glass` utility.
    - Pill-shaped container (`max-w-fit mx-auto`).
    - Shrink animation on scroll.
    - Spring entry animation from top.
- **Interactions**: Magnetic hover for links, smooth expansion for mobile menu.

### 2. VelocityMarquee Section
- **File**: `components/sections/marquee-section.tsx`
- **Design**:
    - Dual-row infinite scroll.
    - **Row 1 (Background)**: Large outlined typography (`text-8xl`, `border-white/10`), moving left.
    - **Row 2 (Foreground)**: Solid typography with `mesh-gradient` background, moving right.
    - **Words**: "DESIGN • CODE • STRATEGY • INNOVATION • BEYOND"
- **Animation**: `framer-motion` loop.

## Integration
- **File**: `components/sections/index.ts`
    - Export `MarqueeSection`.
- **File**: `app/page.tsx`
    - Insert `MarqueeSection` between `HeroSection` and `FeaturesSection`.

## Utilities
- Use `glass` for background blurring.
- Use `mesh-gradient` for premium backgrounds.
- Use `text-mask` for smooth typography gradients.
