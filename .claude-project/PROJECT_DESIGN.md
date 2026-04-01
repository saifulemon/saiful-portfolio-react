---
title: Portfolio — Design System
updated: 2026-04-01
---

# Design System

## Theme: Midnight Luxury

Dark, premium developer aesthetic with electric blue and cyan accents. Inspired by cyberpunk/hacker aesthetics.

## Color Palette

### CSS Variables (`src/index.css`)

| Variable | Value | Description |
|----------|-------|-------------|
| `--background` | `240 10% 3.9%` (≈ `#050508`) | Page background — deep dark navy |
| `--foreground` | `0 0% 98%` | Primary text — near white |
| `--primary` | `217 91% 60%` | Electric blue — interactive elements |
| `--primary-foreground` | `0 0% 98%` | Text on primary bg |
| `--accent` | `180 100% 50%` | Cyan — glow effects, highlights |
| `--muted` | `240 3.7% 15.9%` | Subtle backgrounds |
| `--muted-foreground` | `240 5% 64.9%` | Secondary text |
| `--border` | `240 3.7% 15.9%` | Card/input borders |
| `--card` | `240 10% 5%` | Card backgrounds |
| `--destructive` | `0 72% 51%` | Error/destructive red |

## Typography

| Role | Font | Source |
|------|------|--------|
| Display / Headings | `Outfit` | Google Fonts |
| Body / UI | `Plus Jakarta Sans` | Google Fonts |

Font weights in use: 300, 400, 500, 600, 700, 800 (Outfit); 400, 500, 600, 700 (Plus Jakarta Sans).

## Spacing & Radius

Inherits Tailwind defaults. Custom radius tokens:
- `--radius`: `0.5rem`
- Components use `rounded-lg`, `rounded-xl`, `rounded-2xl`

## Utility Classes

Defined in `src/index.css` under `@layer utilities`:

### `.glass`
```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.08);
```
Used for: about section, navbar on scroll

### `.glass-card`
```css
/* extends .glass */
background: rgba(255, 255, 255, 0.05);
border-color: rgba(255, 255, 255, 0.1);
```
Used for: project cards, skill cards

### `.text-glow`
```css
text-shadow: 0 0 20px hsl(var(--primary) / 0.5),
             0 0 40px hsl(var(--primary) / 0.3);
```
Used for: hero headings, section accent text

### `.bg-grid-pattern`
CSS radial-gradient dot pattern for section backgrounds.

## Animations

### Framer Motion Patterns

**Entry animation (scroll-triggered):**
```typescript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

**Staggered children:**
```typescript
variants={{
  container: { transition: { staggerChildren: 0.1 } },
  item: { opacity: [0, 1], y: [20, 0] }
}}
```

**Hover scale:**
```typescript
whileHover={{ scale: 1.02 }}
transition={{ type: "spring", stiffness: 300 }}
```

### CSS Keyframe Animations

| Name | Usage |
|------|-------|
| `twinkle` | Star particle effect in 3D hero |
| `spin3d` | 3D element rotation |
| `floatRotate` | Floating geometric element |

## Scrollbar

Custom styled scrollbar (webkit):
- Width: `6px`
- Track: `var(--background)`
- Thumb: `hsl(var(--primary) / 0.3)` → `hsl(var(--primary) / 0.6)` on hover

## Responsive Breakpoints

Standard Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Mobile-first layout. Navbar switches at `md`. Project grid: 1 col → 2 col → 3 col. Timeline stacks on mobile.

## Icons

- **Lucide React** — UI icons (navigation, social, contact)
- **React Icons** — Tech stack icons (Si prefix for brand logos, e.g. `SiReact`, `SiTypescript`)
