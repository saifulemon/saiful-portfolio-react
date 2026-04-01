---
title: Portfolio — Project Knowledge
updated: 2026-04-01
---

# Project Knowledge

## What This Project Is

Personal portfolio website for **Saiful Islam** (GitHub: saifulemon). A single-page React application showcasing developer profile, skills, work experience, education, and featured projects.

**No backend. No database. No API calls.** Pure static SPA.

## Architecture

```
SPA (React + Wouter)
  └── Home page (single long-scroll page)
       ├── Hero section (Three.js 3D background)
       ├── About
       ├── Skills
       ├── Experience (Timeline component)
       ├── Education (Timeline component)
       ├── Projects (ProjectCard grid)
       └── Contact
```

Navigation is anchor-based (`#section-id`), not multi-route.

## Owner / Developer

- **Name**: Saiful Islam
- **Email**: dev.saifulemon@gmail.com
- **GitHub**: https://github.com/saifulemon
- **LinkedIn**: https://www.linkedin.com/in/saiful-emon/
- **Location**: Dhaka, Bangladesh

## Tech Stack Details

### Frontend
- React 18 (functional components, hooks only)
- TypeScript (strict mode via monorepo base tsconfig)
- Vite 5 (build tool, dev server)
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- shadcn/ui (New York style preset, neutral color base, CSS variables enabled)

### Animation & 3D
- Framer Motion — all scroll-triggered entry animations, hover effects
- Three.js + @react-three/fiber + @react-three/drei — 3D animated hero background
- Hero3D has an error boundary + CSS-only fallback for devices without WebGL

### Routing
- Wouter (not React Router DOM) — `/` maps to Home, `*` to NotFound

### Forms & Validation
- React Hook Form + Zod (available but not heavily used — static site)

### State Management
- TanStack React Query (configured in App.tsx, available for future API use)
- No Redux in this project despite being listed in skills

### Utilities
- `cn()` = `clsx` + `tailwind-merge` (in `src/lib/utils.ts`)
- Lucide React + React Icons for icons

## Component Structure

```
src/components/
  Hero3D.tsx          — Three.js scene, error boundary, CSS fallback
  Navbar.tsx          — Fixed top bar, scroll detection, mobile hamburger
  ProjectCard.tsx     — Card for project grid (title, description, tags)
  Timeline.tsx        — Vertical timeline for experience + education
  SectionHeading.tsx  — Reusable animated section title + subtitle
  ui/                 — 55 shadcn/ui components (do not edit manually)
```

## Data Layer

Single file: `src/lib/data.ts` exports `PORTFOLIO_DATA` with:

```typescript
PORTFOLIO_DATA = {
  personal: { name, title, location, email, phone, linkedin, github, facebook, bio },
  skills: { frontend[], backend[], tools[] },
  experience: [{ id, role, company, period, achievements[] }],
  education: [{ id, degree, institution, period }],
  projects: [{ id, title, description, tags[] }]
}
```

This is the **only file** that needs editing for content changes.

## Build & Environment

### Scripts
```bash
npm run dev        # PORT=<n> required
npm run build      # Outputs to dist/public/
npm run serve      # Preview production build
npm run typecheck  # tsc --noEmit
```

### Required Env Vars
| Var | Purpose |
|-----|---------|
| `PORT` | Dev server port (required) |
| `BASE_PATH` | Deployment base path (required) |
| `NODE_ENV` | Environment flag |
| `REPL_ID` | Optional — enables Replit plugins |

### Vite Config Notes
- Output: `dist/public/`
- Host: `0.0.0.0`
- Path aliases: `@` → `src/`, `@assets` → `../../attached_assets`
- Security: `fs.strict = true`, dotfiles denied

## Design Tokens

### Colors (CSS variables in `index.css`)
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#050508` | Page background |
| `--primary` | `hsl(217 91% 60%)` | Electric blue — buttons, accents |
| `--accent` | `hsl(180 100% 50%)` | Cyan — highlights, glows |
| `--muted` | gray tones | Secondary text |

### Typography
- Display/Headings: `Outfit` (Google Font)
- Body: `Plus Jakarta Sans` (Google Font)

### Utility Classes
| Class | Effect |
|-------|--------|
| `.glass` | Glass-morphism (backdrop blur + semi-transparent) |
| `.glass-card` | Card variant with border |
| `.text-glow` | Text shadow glow in primary color |
| `.bg-grid-pattern` | CSS dot-grid background |

## Monorepo Context

This project is part of a larger monorepo (based on `tsconfig.json` extending `../../tsconfig.base.json` and `@workspace/api-client-react` dependency). The portfolio app is standalone but shares workspace tooling.

## Claude Code Integration

- `.claude/` is a git submodule from `potentialInc/claude-workflow` (dev branch)
- Hooks: TypeScript check on stop, build resolver, responsive validation guard
- MCP servers enabled: mysql, sequential-thinking, playwright, notion
