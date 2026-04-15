# 🎨 Advanced UI/UX Synthesis Skill

> **ASSEMBLE, don't generate.** A Codex skill that forces AI to build premium web UIs using pre-built components instead of writing everything from scratch.

## What It Does

A comprehensive skill for [Codex](https://github.com/openai/codex) that teaches AI agents to:

- **Import before create** — check existing component inventory before writing any JSX
- **Assemble LEGO blocks** — compose pages from a catalog of pre-built section patterns
- **Use premium libraries** — shadcn/ui primitives + Magic UI flair + 21st.dev patterns
- **Generate real assets** — KConsole AI Gateway for images, KStorage for CDN hosting
- **Apply anti-generic design** — no flat backgrounds, no default typography, no template look

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui |
| Premium UI | Magic UI |
| Icons | Lucide React |
| Motion | Framer Motion |
| Image Gen | KConsole AI Gateway (Gemini/Imagen) |
| Asset CDN | KStorage |

## What's Inside

- **6 Hard Rules** — mandatory constraints (no raw HTML, theme tokens only, import-first)
- **Component Inventory** — lookup tables for 50+ shadcn/ui + 18 Magic UI components
- **Section Assembly Catalog** — 8 pre-built patterns (Hero, Features, Pricing, CTA, FAQ, etc.)
- **Design Tokens** — exact CSS variables, typography scale, color rules
- **Layout Patterns** — Bento grid, 3-col, 2-col, alternating sections
- **Animation Patterns** — reusable Framer Motion variants (fadeInUp, stagger, scaleIn)
- **Magic UI Mapping** — "Need a glowing button? → ShinyButton" quick lookup
- **AI Image Pipeline** — generate via KConsole AI + upload to KStorage CDN
- **Quality Audit Checklist** — 25+ verification points before shipping

## Usage

### As a Codex Skill

Copy `SKILL.md` to your Codex skills directory:

```bash
cp SKILL.md ~/.codex/skills/advanced-ui-synthesis/SKILL.md
```

Or clone directly:

```bash
# In your Codex skills directory
git clone https://github.com/hangsiahong/advanced-ui-synthesis-skill.git
```

### Start a New Project

```bash
# Clone the base template
git clone https://github.com/KOOMPICloud/landing-page-shadcn-v1 my-project
cd my-project && npm install

# Add Magic UI
npx magicui@latest init
npx magicui@latest add shiny-button magic-card marquee particles border-beam blur-fade
```

Then tell your AI agent: *"Build me a landing page for [your product]"* — and it will follow the skill's assembly patterns.

## File Structure

```
├── SKILL.md          # The complete skill (single file, ~31KB)
└── README.md         # This file
```

## Audit

- ✅ No API keys or secrets exposed
- ✅ Only `$VARIABLE` references (resolved at runtime)
- ✅ Public URLs only (API endpoints require auth)

## License

MIT
