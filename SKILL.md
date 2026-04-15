---
name: "advanced-ui-synthesis"
description: "Generate premium, non-generic web UIs by assembling pre-built components instead of writing from scratch. Uses KOOMPICloud template + shadcn/ui + Magic UI + 21st.dev + KConsole AI for image assets. ALWAYS prefer importing existing components over creating new ones."
---

# SKILL: Advanced UI/UX Synthesis for Modern Web

> **Core Paradigm:** ASSEMBLE, don't generate. Import pre-built components, compose sections from catalogs, and only write custom code for truly unique features. Every component written from scratch is a failure of this skill.

---

## 📋 Table of Contents

1. [Foundation & Stack](#-foundation--stack)
2. [Hard Rules (Mandatory)](#-hard-rules-mandatory)
3. [Component Inventory](#-component-inventory)
4. [Section Assembly Catalog](#-section-assembly-catalog)
5. [Design Tokens & Theme](#-design-tokens--theme)
6. [Layout Patterns](#-layout-patterns)
7. [Animation Patterns](#-animation-patterns)
8. [Magic UI & 21st.dev Mapping](#-magic-ui--21stdev-mapping)
9. [Image & Asset Generation](#-image--asset-generation)
10. [Anti-Generic Design Protocol](#-anti-generic-design-protocol)
11. [Execution Workflow](#-execution-workflow)
12. [Quality Audit Checklist](#-quality-audit-checklist)

---

## 🏗️ Foundation & Stack

### Mandatory Template
All projects start from the **KOOMPICloud Landing Page v1** template:
```bash
git clone https://github.com/KOOMPICloud/landing-page-shadcn my-project
cd my-project && npm install
```

### Core Stack (Pre-installed)
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js (App Router) | Routing, SSR, RSC |
| Styling | Tailwind CSS v4 | Utility-first styling |
| Components | shadcn/ui | 50+ accessible primitives |
| Icons | Lucide React | 1,500+ icons |
| Motion | framer-motion | Animations & transitions |

### Install Additional Layers
```bash
# Premium UI components
npx magicui@latest init
npx magicui@latest add shiny-button magic-card marquee particles

# Utility
npm install framer-motion
```

### Directory Structure Convention
```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, providers)
│   ├── page.tsx            # Home page
│   └── globals.css         # Tailwind + CSS variables
├── components/
│   ├── ui/                 # shadcn/ui primitives (NEVER edit directly)
│   ├── sections/           # Full-page sections (Hero, Features, CTA...)
│   ├── layout/             # Navbar, Footer, Sidebar
│   └── magicui/            # Magic UI components (auto-generated)
├── lib/
│   ├── utils.ts            # cn() helper, etc.
│   └── constants.ts        # Brand config, nav links
├── public/
│   └── images/             # Static assets + AI-generated images
└── hooks/                  # Custom React hooks
```

---

## 🚫 Hard Rules (Mandatory)

> These rules are NON-NEGOTIABLE. Violating them means the AI failed this skill.

### Rule 1: Import Before Create
```
BEFORE writing ANY component, check these locations in order:
  1. @/components/ui/        → shadcn/ui primitives
  2. @/components/magicui/   → Magic UI premium components
  3. @/components/sections/  → Pre-built page sections
  4. @/components/layout/    → Navbar, Footer, Sidebar

If a component exists that does 80%+ of what you need, IMPORT IT and customize via props/wrapping.
NEVER duplicate functionality that already exists.
```

### Rule 2: Component Priority Ladder
When building a feature, use the FIRST option that works:
1. **shadcn/ui primitive** (Button, Card, Dialog, Sheet, etc.)
2. **Magic UI enhanced version** (ShinyButton instead of Button, MagicCard instead of Card)
3. **Compose** multiple primitives together
4. **Only then** write custom JSX

### Rule 3: No Raw HTML/CSS for UI Elements
```
NEVER write: <div className="rounded-lg border p-4 shadow">
INSTEAD use: <Card><CardContent>...</CardContent></Card>

NEVER write: <button className="px-4 py-2 bg-blue-500 rounded">
INSTEAD use: <Button variant="default">...</Button>
```

### Rule 4: Styling Constraints
- NEVER use arbitrary color values (`bg-[#3b82f6]`). Use theme tokens (`bg-primary`, `text-muted-foreground`).
- NEVER hardcode spacing. Use Tailwind scale (`p-4`, `gap-6`, `mt-8`).
- NEVER use `border-gray-*` or `bg-gray-*`. Use `border` (semantic) or `bg-muted`.
- NEVER create flat solid backgrounds. Always add depth (gradients, patterns, blur).

### Rule 5: Animation Baseline
- Every page section MUST have an entrance animation (fade + slide).
- Every interactive element MUST have hover/focus feedback.
- Use the shared animation variants from [Animation Patterns](#-animation-patterns).

### Rule 6: Image Assets
- For hero images, illustrations, backgrounds → use **KConsole AI Gateway** to generate.
- For icons → use **Lucide React** (`import { IconName } from "lucide-react"`).
- For logos → use existing SVG or generate via AI and store in `public/images/`.
- NEVER use placeholder URLs (`via.placeholder.com`, `picsum.photos`).
- Upload generated images to **KStorage** for CDN delivery.

---

## 🗂️ Component Inventory

> This is the AI's lookup table. ALWAYS scan this before creating anything.

### shadcn/ui Primitives (Pre-installed)
| Component | Import Path | Use For |
|-----------|-----------|---------|
| Button | `@/components/ui/button` | All clickable actions |
| Card, CardHeader, CardContent, CardFooter | `@/components/ui/card` | Content containers |
| Badge | `@/components/ui/badge` | Tags, status indicators |
| Input | `@/components/ui/input` | Text inputs |
| Label | `@/components/ui/label` | Form labels |
| Dialog, DialogContent, DialogTrigger | `@/components/ui/dialog` | Modals |
| Sheet, SheetContent, SheetTrigger | `@/components/ui/sheet` | Slide-out panels |
| DropdownMenu | `@/components/ui/dropdown-menu` | Context menus |
| Tabs, TabsList, TabsContent | `@/components/ui/tabs` | Tab navigation |
| Accordion | `@/components/ui/accordion` | FAQ, collapsible content |
| Avatar | `@/components/ui/avatar` | User profile images |
| Separator | `@/components/ui/separator` | Dividers |
| Skeleton | `@/components/ui/skeleton` | Loading states |
| Tooltip | `@/components/ui/tooltip` | Hover hints |
| NavigationMenu | `@/components/ui/navigation-menu` | Complex nav |
| Switch | `@/components/ui/switch` | Toggle switches |
| Progress | `@/components/ui/progress` | Progress bars |
| ScrollArea | `@/components/ui/scroll-area` | Scrollable containers |
| AspectRatio | `@/components/ui/aspect-ratio` | Media containers |
| Toast, Toaster | `@/components/ui/toast` | Notifications |

### Magic UI Enhanced Components (Install on demand)
| Component | Install Command | Replaces |
|-----------|----------------|----------|
| ShinyButton | `npx magicui@latest add shiny-button` | Button for CTAs |
| MagicCard | `npx magicui@latest add magic-card` | Card for features |
| Marquee | `npx magicui@latest add marquee` | Logo clouds, testimonials |
| Particles | `npx magicui@latest add particles` | Hero backgrounds |
| RetroGrid | `npx magicui@latest add retro-grid` | Tech/starter hero BG |
| DotPattern | `npx magicui@latest add dot-pattern` | Subtle section BG |
| GridPattern | `npx magicui@latest add grid-pattern` | Geometric BG |
| AnimatedGradientText | `npx magicui@latest add animated-gradient-text` | Headlines |
| TypingAnimation | `npx magicui@latest add typing-animation` | Hero text effect |
| VelocityScroll | `npx magicui@latest add velocity-scroll` | Scrolling marquee text |
| BorderBeam | `npx magicui@latest add border-beam` | Card glow effects |
| MeteorLines | `npx magicui@latest add meteor-lines` | Streak effects on cards |
| NumberTicker | `npx magicui@latest add number-ticker` | Stats counters |
| Globe | `npx magicui@latest add globe` | 3D globe visualization |
| BlurFade | `npx magicui@latest add blur-fade` | Reveal animations |
| Dock | `npx magicui@latest add dock` | macOS-style dock nav |

### Layout Components
| Component | Location | Description |
|-----------|----------|-------------|
| Navbar | `@/components/layout/navbar` | Fixed top nav with mobile hamburger menu |
| Footer | `@/components/layout/footer` | Multi-column footer with links + socials |
| MobileMenu | `@/components/layout/mobile-menu` | Sheet-based mobile navigation |

---

## 🧱 Section Assembly Catalog

> These are the "LEGO blocks" for building pages. Assemble sections; don't write them from scratch.

### Landing Page Sections (Standard Order)

#### 1. Hero Section
```
Pattern: Gradient BG + Heading + Subheading + CTA Buttons + Hero Image
Composition:
  <section className="relative overflow-hidden">
    <Particles /> or <DotPattern />     ← Background depth
    <div className="container mx-auto">
      <AnimatedGradientText>             ← Animated headline
      <BlurFade>                         ← Staggered entrance
        <p>Subtitle</p>
        <div className="flex gap-4">
          <ShinyButton>Primary CTA</ShinyButton>
          <Button variant="outline">Secondary</Button>
        </div>
      </BlurFade>
    </div>
    <img src={heroImage} />              ← AI-generated via KConsole
  </section>
```

#### 2. Logo Cloud / Social Proof
```
Pattern: "Trusted by" + Marquee of logos
Composition:
  <section>
    <p className="text-muted-foreground">Trusted by teams at</p>
    <Marquee pauseOnHover>
      {logos.map(logo => <img key={logo} src={logo} />)}
    </Marquee>
  </section>
```

#### 3. Features / Services Section
```
Pattern: Section heading + Bento Grid of feature cards
Composition:
  <section>
    <SectionHeading title="..." subtitle="..." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map(f => (
        <MagicCard key={f.title}>
          <BorderBeam />                  ← Glow effect
          <f.icon className="h-10 w-10" />
          <h3>{f.title}</h3>
          <p className="text-muted-foreground">{f.desc}</p>
        </MagicCard>
      ))}
    </div>
  </section>
```

#### 4. Stats / Numbers Section
```
Pattern: Row of key metrics with animated counters
Composition:
  <section className="bg-muted/50">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(s => (
        <div key={s.label}>
          <NumberTicker value={s.value} />
          <p className="text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
```

#### 5. Testimonials Section
```
Pattern: Marquee of testimonial cards or grid
Composition:
  <section>
    <SectionHeading title="What people say" />
    <Marquee>
      {testimonials.map(t => (
        <Card key={t.name}>
          <CardContent>
            <Avatar><AvatarImage src={t.avatar} /></Avatar>
            <p>"{t.quote}"</p>
            <Badge>{t.role}</Badge>
          </CardContent>
        </Card>
      ))}
    </Marquee>
  </section>
```

#### 6. Pricing Section
```
Pattern: 3-tier pricing cards with featured middle card
Composition:
  <section>
    <SectionHeading title="Simple pricing" />
    <Tabs defaultValue="monthly">
      <TabsList><TabsTrigger value="monthly">Monthly</TabsTrigger>...</TabsList>
    </Tabs>
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map(p => (
        <MagicCard className={p.featured && "border-primary"}>
          <CardHeader>
            <h3>{p.name}</h3>
            <NumberTicker value={p.price} prefix="$" />
          </CardHeader>
          <CardContent>
            {p.features.map(f => (
              <div className="flex items-center gap-2">
                <Check className="text-primary" /> <span>{f}</span>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <ShinyButton className="w-full">Get Started</ShinyButton>
          </CardFooter>
        </MagicCard>
      ))}
    </div>
  </section>
```

#### 7. CTA Section
```
Pattern: Full-width gradient section with bold heading + button
Composition:
  <section className="bg-gradient-to-r from-primary/10 to-primary/5">
    <div className="container text-center">
      <BlurFade>
        <h2 className="text-4xl font-bold tracking-tighter">Ready to start?</h2>
        <p className="text-muted-foreground mt-4">Join thousands...</p>
        <ShinyButton size="lg" className="mt-8">Get Started Free</ShinyButton>
      </BlurFade>
    </div>
  </section>
```

#### 8. FAQ Section
```
Pattern: Accordion of common questions
Composition:
  <section>
    <SectionHeading title="Frequently Asked Questions" />
    <Accordion type="single" collapsible>
      {faqs.map(f => (
        <AccordionItem key={f.q} value={f.q}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
```

### Reusable Helper Components

```tsx
// Section Heading (create once, reuse everywhere)
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}
export function SectionHeading({ title, subtitle, badge, centered = true }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center")}>
      {badge && <Badge variant="secondary" className="mb-4">{badge}</Badge>}
      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
```

---

## 🎨 Design Tokens & Theme

### CSS Variables (Tailwind v4 + shadcn)
```css
/* app/globals.css — Override these for brand identity */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --border: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --radius: 0.5rem;
}
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode inversions */
}
```

### Typography Rules
| Element | Classes | Notes |
|---------|---------|-------|
| Hero H1 | `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter` | NEVER use default text-xl |
| Section H2 | `text-3xl md:text-4xl font-bold tracking-tighter` | |
| Card H3 | `text-xl font-semibold tracking-tight` | |
| Body text | `text-base leading-relaxed text-muted-foreground` | |
| Small/caption | `text-sm text-muted-foreground` | |
| Overline/badge | `text-xs font-medium uppercase tracking-widest text-muted-foreground` | |

### Color Rules
- **Primary actions:** `bg-primary text-primary-foreground`
- **Secondary/muted:** `bg-muted text-muted-foreground`
- **Borders:** `border` (uses `--border` token)
- **NEVER:** `bg-gray-100`, `text-gray-500`, `border-gray-200`
- **Gradients:** Use `from-primary/10 via-transparent to-primary/5` (subtle, token-based)

---

## 📐 Layout Patterns

### Bento Grid (Features)
```
┌──────────┬──────────┐
│  Large   │  Small 1 │
│  Card    ├──────────┤
│  (col-2) │  Small 2 │
├──────────┼──────────┤
│  Small 3 │  Large   │
├──────────┤  Card    │
│  Small 4 │ (col-2)  │
└──────────┴──────────┘

CSS: grid grid-cols-2 gap-4
Large card: col-span-1 row-span-2
```

### Standard 3-Column Grid
```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Two-Column (Content + Image)
```html
<div className="grid md:grid-cols-2 gap-12 items-center">
  <div>{/* Text content */}</div>
  <div>{/* Image/visual */}</div>
</div>
```

### Full-Width Section
```html
<section className="w-full py-24">
  <div className="container mx-auto px-4">{/* Content */}</div>
</section>
```

### Alternating Sections
For multi-feature pages, alternate between:
- **Light section:** default bg
- **Subtle section:** `bg-muted/50` or `bg-muted`
- **Gradient section:** `bg-gradient-to-b from-muted/50 to-background`

---

## ✨ Animation Patterns

### Shared Framer Motion Variants
```tsx
// lib/animations.ts — Create this file ONCE, import everywhere
import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
```

### Usage Pattern
```tsx
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Section with staggered children
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
  <motion.h2 variants={fadeInUp}>Heading</motion.h2>
  <motion.p variants={fadeInUp}>Description</motion.p>
</motion.div>
```

### Hover Effects (CSS-only, no framer-motion needed)
```css
/* Card hover lift */
.hover-lift { @apply transition-all duration-300 hover:-translate-y-1 hover:shadow-lg; }

/* Glow border on hover */
.hover-glow { @apply transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)]; }

/* Scale on hover */
.hover-scale { @apply transition-transform duration-200 hover:scale-[1.02]; }
```

---

## 🪄 Magic UI & 21st.dev Mapping

> Quick lookup: "I need X → use Y"

| Need | Component | Install |
|------|-----------|---------|
| Glowing CTA button | `ShinyButton` | `npx magicui@latest add shiny-button` |
| Card with gradient border | `MagicCard` | `npx magicui@latest add magic-card` |
| Animated rainbow text | `AnimatedGradientText` | `npx magicui@latest add animated-gradient-text` |
| Scrolling logo cloud | `Marquee` | `npx magicui@latest add marquee` |
| Particle background | `Particles` | `npx magicui@latest add particles` |
| Retro grid BG | `RetroGrid` | `npx magicui@latest add retro-grid` |
| Dot pattern BG | `DotPattern` | `npx magicui@latest add dot-pattern` |
| Typing effect for hero | `TypingAnimation` | `npx magicui@latest add typing-animation` |
| Fast scrolling text | `VelocityScroll` | `npx magicui@latest add velocity-scroll` |
| Animated glow border | `BorderBeam` | `npx magicui@latest add border-beam` |
| Meteor streak lines | `MeteorLines` | `npx magicui@latest add meteor-lines` |
| Counter animation | `NumberTicker` | `npx magicui@latest add number-ticker` |
| 3D globe | `Globe` | `npx magicui@latest add globe` |
| Reveal on scroll | `BlurFade` | `npx magicui@latest add blur-fade` |
| macOS-style dock | `Dock` | `npx magicui@latest add dock` |
| Bento grid layout | Use CSS Grid + MagicCard | No install needed |
| Text reveal/clip | `TextReveal` | `npx magicui@latest add text-reveal` |
| Orbiting circles | `OrbitingCircles` | `npx magicui@latest add orbiting-circles` |
| Cool mode (confetti) | `CoolMode` | `npx magicui@latest add cool-mode` |

### 21st.dev Patterns (Reference, adapt the concept)
| Pattern | Description | How to Adapt |
|---------|-------------|-------------|
| Complex Hero | Split layout with video/3D | Use `Grid md:grid-cols-2` + AI-generated hero image |
| Bento Features | Asymmetric feature grid | Use CSS Grid `grid-cols-2` with `col-span` + `MagicCard` |
| Testimonial Wall | Masonry-like testimonial grid | Use `Marquee` with duplicate rows, different speeds |
| Pricing Cards | Tiered with featured highlight | Use `MagicCard` + `BorderBeam` on featured tier |
| Animated Nav | Scroll-reactive navbar | Use `BlurFade` + `BackdropBlur` on scroll |

---

## 🖼️ Image & Asset Generation

### KConsole AI Gateway (Primary Image Tool)

**Base URL:** `https://ai.koompi.cloud/v1`
**Auth:** `Authorization: Bearer $KCONSOLE_AI_KEY`
**Default Model:** `gemini-3.1-flash-image-preview`

#### Quick Image Generation Script
```bash
generate_image() {
  local PROMPT="$1"
  local OUTPUT="${2:-./public/images/generated.png}"
  local KEY="$KCONSOLE_AI_KEY"

  python3 -c "
import json, base64, subprocess, os
key = os.environ.get('KCONSOLE_AI_KEY', '')
payload = {
  'model': 'gemini-3.1-flash-image-preview',
  'prompt': '''$PROMPT''',
  'n': 1,
  'size': '1792x1024',
  'response_format': 'b64_json'
}
with open('/tmp/img_req.json', 'w') as f:
  json.dump(payload, f)
r = subprocess.run([
  'curl', '-s', '-X', 'POST',
  'https://ai.koompi.cloud/v1/images/generations',
  '-H', f'Authorization: Bearer {key}',
  '-H', 'Content-Type: application/json',
  '-d', '@/tmp/img_req.json'
], capture_output=True, text=True, timeout=120)
data = json.loads(r.stdout)
if 'error' in data:
  print('ERROR:', data['error'])
else:
  img = base64.b64decode(data['data'][0]['b64_json'])
  with open('$OUTPUT', 'wb') as f:
    f.write(img)
  print(f'Generated: $OUTPUT ({len(img)} bytes)')
"
}
```

#### When to Generate Images
| Section | Image Type | Prompt Style |
|---------|-----------|--------------|
| Hero | Hero illustration/product shot | "A clean, modern illustration of [product], gradient background, tech aesthetic, minimal, high quality" |
| Features | Icon-style illustrations | "A simple flat icon illustration of [concept], single color, minimal, on transparent background" |
| Testimonials | Avatar photos | "Professional headshot photo of a [demographic] person, studio lighting, neutral background" |
| About | Team/culture photos | "Modern tech office interior, bright, professional photography" |
| Blog/cards | Thematic illustrations | "Abstract illustration of [topic], soft gradients, modern design" |

#### Image-to-Image (Edit/Transform)
```bash
# For editing existing images or applying style transformations
# Use 'image' param with base64 of source image
# Use 'reference_image' for style guidance only
KEY="$KCONSOLE_AI_KEY"
```

#### Upload to KStorage CDN
```bash
# After generating, upload to CDN for production use
upload_to_kstorage() {
  local FILE="$1"
  local KEY="$KSTORAGE_API_KEY"
  local FNAME=$(basename "$FILE")
  local FSIZE=$(stat -c%s "$FILE")
  local CTYPE=$(file --mime-type -b "$FILE")
  local API="https://api-kconsole.koompi.cloud/api/storage"

  local RESP=$(curl -s -X POST "$API/upload-token" \
    -H "x-api-key: $KEY" -H "Content-Type: application/json" \
    -d "{\"filename\":\"$FNAME\",\"contentType\":\"$CTYPE\",\"size\":$FSIZE,\"visibility\":\"public\"}")

  local UPLOAD_URL=$(echo "$RESP" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['uploadUrl'])")
  local OBJECT_ID=$(echo "$RESP" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['objectId'])")
  local OBJ_KEY=$(echo "$RESP" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['key'])")

  curl -s -X PUT -H "Content-Type: $CTYPE" --data-binary "@$FILE" "$UPLOAD_URL"
  curl -s -X POST "$API/complete" -H "x-api-key: $KEY" -H "Content-Type: application/json" \
    -d "{\"objectId\":\"$OBJECT_ID\"}"

  echo "CDN URL: https://storage.koompi.cloud/$OBJ_KEY"
}
```

#### Image Sizing Guide
| Use Case | Aspect Ratio | Size Param |
|----------|-------------|-----------|
| Hero banner | 16:9 | `1792x1024` |
| Feature illustration | 1:1 | `1024x1024` |
| Card thumbnail | 4:3 | `1152x896` |
| Phone mockup | 9:16 | `1024x1792` |
| Social media post | 1:1 | `1024x1024` |

#### ⚠️ Language Rule for Southeast Asian Content
When generating images with Cambodian/Khmer themes: **NEVER use Thai script or Thai text.** Specify in prompt: "Use Khmer/Cambodian script only, NO Thai text."

---

## 🎯 Anti-Generic Design Protocol

### The "Soul" Checklist
Every section must pass at least 2 of these:
- [ ] Has a subtle animation (entrance, hover, or scroll-linked)
- [ ] Uses a background treatment (gradient, pattern, blur, or particles)
- [ ] Has visual depth (shadow, glow, glass morphism, or layering)
- [ ] Uses premium typography (tracking-tighter headings, relaxed body)
- [ ] Has a "signature moment" (not just another card grid)

### Background Treatments (Pick One Per Section)
```tsx
// 1. Subtle radial gradient
<section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">

// 2. Dot pattern overlay
<section className="relative">
  <DotPattern className="absolute inset-0 opacity-20" />
  <div className="relative z-10">{/* content */}</div>
</section>

// 3. Glassmorphism card
<Card className="bg-white/10 backdrop-blur-lg border-white/20">

// 4. Gradient mesh
<section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10">

// 5. Particles (hero only)
<section className="relative overflow-hidden">
  <Particles className="absolute inset-0" />
</section>
```

### Micro-interactions
```tsx
// Button hover glow
<Button className="group relative overflow-hidden">
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
  Click Me
</Button>

// Card hover lift
<Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">

// Image zoom on hover
<div className="overflow-hidden rounded-lg">
  <img className="transition-transform duration-500 hover:scale-105" />
</div>
```

---

## 🔄 Execution Workflow

### Step-by-step AI Process for Building a Page

```
1. ANALYZE the request
   → What sections are needed? (Hero, Features, Pricing, CTA, etc.)
   → What's the brand tone? (Corporate, playful, minimal, bold)

2. INVENTORY CHECK — Scan existing components
   → Check @/components/ui/ for shadcn primitives
   → Check @/components/magicui/ for premium components
   → Check @/components/sections/ for reusable sections
   → If 80%+ of a component exists, IMPORT it

3. GENERATE ASSETS — Create images via KConsole AI
   → Generate hero image, illustrations, avatars
   → Upload to KStorage for CDN URLs
   → Save paths for component usage

4. ASSEMBLE SECTIONS — Build from catalog
   → Use Section Assembly Catalog patterns
   → Apply Design Tokens for typography and colors
   → Apply Animation Patterns for motion

5. ENHANCE — Add "soul"
   → Add background treatments
   → Add micro-interactions
   → Add Magic UI premium components

6. RESPONSIVE CHECK
   → All grids must have mobile breakpoints (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
   → Hero text must scale (text-4xl md:text-6xl lg:text-7xl)
   → Images must be responsive (use Next.js Image component)
   → Mobile nav must use Sheet component

7. QUALITY AUDIT
   → Run through Quality Audit Checklist below
```

---

## ✅ Quality Audit Checklist

Before declaring any page complete, verify:

### Structure
- [ ] All components imported from existing inventory (not written from scratch)
- [ ] No raw HTML elements where shadcn/ui components exist
- [ ] No hardcoded colors — only theme tokens used
- [ ] No placeholder images — real assets or AI-generated images used

### Design
- [ ] Headings use `tracking-tighter` (not default spacing)
- [ ] No flat solid backgrounds — every section has depth treatment
- [ ] No `border-gray-*` or `bg-gray-*` — using semantic tokens
- [ ] Section separation via bg changes, gradients, or patterns (never `<hr>`)

### Motion
- [ ] Every section has entrance animation (BlurFade or fadeInUp)
- [ ] Interactive elements have hover/focus states
- [ ] Animations are subtle (300-500ms), not flashy

### Responsiveness
- [ ] Mobile-first grid breakpoints applied
- [ ] Typography scales across breakpoints
- [ ] Navigation collapses to mobile menu on small screens
- [ ] Images use proper sizing (not forced fixed widths)

### Performance
- [ ] Images optimized (WebP, proper sizing, lazy loading)
- [ ] Components lazy-loaded where appropriate
- [ ] No unnecessary client components (use RSC where possible)
- [ ] AI-generated images uploaded to KStorage CDN

### Accessibility
- [ ] All images have alt text
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG AA
- [ ] Animations respect `prefers-reduced-motion`

---

## 🧠 AI Decision Tree (Internal Logic)

```
Need to build a UI element?
│
├─ Is it a button/action?
│  └─ CTA? → ShinyButton
│  └─ Standard? → Button (shadcn)
│
├─ Is it a content container?
│  └─ Feature card? → MagicCard + BorderBeam
│  └─ Standard card? → Card (shadcn)
│  └─ With image? → Card + AspectRatio
│
├─ Is it navigation?
│  └─ Top bar? → Navbar component
│  └─ Mobile menu? → Sheet (side panel)
│  └─ Tabs? → Tabs (shadcn)
│
├─ Is it a background?
│  └─ Hero? → Particles or RetroGrid
│  └─ Subtle? → DotPattern or GridPattern
│  └─ Section? → Radial gradient (CSS)
│
├─ Is it text animation?
│  └─ Headline? → AnimatedGradientText
│  └─ Typing? → TypingAnimation
│  └─ Scroll text? → VelocityScroll
│  └─ Counter? → NumberTicker
│
├─ Is it an image/asset?
│  └─ Icon? → Lucide React
│  └─ Photo/illustration? → KConsole AI Gateway
│  └─ Need CDN? → Upload to KStorage
│
└─ Is it a full section?
   └─ Check Section Assembly Catalog → compose from patterns
```

---

## 📚 Quick Reference Card

```bash
# Setup new project
git clone https://github.com/KOOMPICloud/landing-page-shadcn-v1 my-project
cd my-project && npm install

# Add Magic UI components
npx magicui@latest init
npx magicui@latest add shiny-button magic-card marquee particles border-beam blur-fade

# Add shadcn/ui components (if missing)
npx shadcn@latest add button card badge dialog sheet tabs accordion avatar separator skeleton

# Generate hero image
generate_image "Modern SaaS dashboard illustration, gradient purple blue, clean minimal" ./public/images/hero.png

# Generate avatar
generate_image "Professional headshot photo of a young asian woman, studio lighting" ./public/images/avatar1.png

# Upload to CDN
upload_to_kstorage ./public/images/hero.png
```

---

*Remember: The template handles the plumbing. shadcn/ui handles the primitives. Magic UI handles the flair. KConsole AI handles the visuals. Your job is to COMPOSE these into something that feels intentional, premium, and alive.*
