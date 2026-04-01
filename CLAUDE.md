# CLAUDE.md — Portfolio Project

## Project Overview

Personal portfolio website for **Saiful Islam**, a Junior Frontend-Specialized Full-Stack Developer. Static React SPA with no backend — all content is in `src/lib/data.ts`.

## Tech Stack

- **Build**: Vite + TypeScript
- **UI**: React 18, Tailwind CSS, shadcn/ui (New York style, neutral base)
- **Animation**: Framer Motion (scroll triggers), Three.js + @react-three/fiber (3D hero)
- **Routing**: Wouter (lightweight, not React Router)
- **Path alias**: `@` → `src/`

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/data.ts` | All portfolio content — edit here to update site |
| `src/pages/Home.tsx` | Main page with all sections |
| `src/components/Hero3D.tsx` | Three.js 3D scene with WebGL fallback |
| `src/index.css` | Design tokens, Tailwind theme, glass-morphism utilities |
| `vite.config.ts` | Build config — requires `PORT` and `BASE_PATH` env vars |

## Development

```bash
PORT=3000 npm run dev      # Start dev server
npm run typecheck          # Run tsc without emit
npm run build              # Production build → dist/public/
```

## Code Conventions

- Components in `src/components/`, pages in `src/pages/`
- All shadcn/ui components live in `src/components/ui/` — do not edit these manually, use the shadcn CLI
- Use `cn()` from `src/lib/utils.ts` for className merging (clsx + tailwind-merge)
- Framer Motion `motion.*` for all animated elements
- No backend, no API calls — portfolio data is static

## Design System

- Background: `#050508` (dark navy)
- Primary: `hsl(217 91% 60%)` (electric blue)
- Accent: `hsl(180 100% 50%)` (cyan)
- Display font: `Outfit`, body font: `Plus Jakarta Sans`
- Utility classes: `.glass`, `.glass-card`, `.text-glow`, `.bg-grid-pattern`
- Three.js canvas wraps with error boundary + CSS fallback for no-WebGL environments

## Adding New Content

To add a project, experience, or skill entry, edit `src/lib/data.ts` — the `PORTFOLIO_DATA` object is the single source of truth. No other files need changing for content updates.

## Automated Hooks (Claude Code)

- **UserPromptSubmit**: Skill activation detection
- **Stop**: TypeScript check (`tsc --noEmit`) + build resolver + responsive learning logger
- **PostToolUse (Edit|Write)**: Responsive validation guard runs after every file edit

## Notes

- `vite.config.ts` sets `fs.deny: ['**/.env*', '**/.git/**', ...dotfiles]` — do not serve env files
- `@workspace/api-client-react` is a monorepo workspace dependency — ensure parent workspace is installed
- Replit-specific plugins (`cartographer`, `dev-banner`, `runtime-error-modal`) are only enabled when `REPL_ID` env var is present
