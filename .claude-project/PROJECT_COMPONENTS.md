---
title: Portfolio — Component Reference
updated: 2026-04-01
---

# Component Reference

## Custom Components

### `Hero3D` — [src/components/Hero3D.tsx](../src/components/Hero3D.tsx)

Three.js-powered animated 3D hero background.

- Wraps in React error boundary — catches WebGL errors silently
- Falls back to CSS-only animated background if WebGL is unavailable
- Uses `@react-three/fiber` Canvas with `@react-three/drei` helpers
- Stars, geometric shapes, and particle effects in the 3D scene
- Rendered behind the hero text content (absolute positioned)

---

### `Navbar` — [src/components/Navbar.tsx](../src/components/Navbar.tsx)

Fixed top navigation bar.

- Detects scroll position, applies glass-morphism backdrop on scroll
- Desktop: inline menu links with smooth anchor scroll
- Mobile: hamburger icon → slide-in menu overlay
- Framer Motion for menu open/close animation
- Links: `#home`, `#about`, `#skills`, `#experience`, `#education`, `#projects`, `#contact`

---

### `ProjectCard` — [src/components/ProjectCard.tsx](../src/components/ProjectCard.tsx)

Card component for the projects grid.

Props:
```typescript
{
  title: string
  description: string
  tags: string[]
}
```

- Framer Motion hover scale + glow effect
- Tag badges with gradient styling
- Used in a responsive grid in `Home.tsx`

---

### `Timeline` — [src/components/Timeline.tsx](../src/components/Timeline.tsx)

Vertical timeline for experience and education sections.

Props:
```typescript
{
  items: Array<{
    id: number
    title: string        // role or degree
    subtitle: string     // company or institution
    period: string
    details?: string[]   // achievements (experience only)
  }>
}
```

- Animated entrance with Framer Motion `viewport` trigger
- Connecting line + dot indicator
- Responsive: stacked on mobile, side-by-side on desktop

---

### `SectionHeading` — [src/components/SectionHeading.tsx](../src/components/SectionHeading.tsx)

Reusable animated section title block.

Props:
```typescript
{
  title: string
  subtitle?: string
}
```

- Gradient underline accent
- Framer Motion entrance animation
- Used at top of every page section

---

## shadcn/ui Components — [src/components/ui/](../src/components/ui/)

55 components from the shadcn/ui library (New York style preset). **Do not edit these files manually** — regenerate via `npx shadcn-ui@latest add <component>`.

Key components in use:
- `Button` — CTA buttons in hero and contact sections
- `Badge` — Skill tags, project tags
- `Card` — Wraps project cards and about section
- `Toast` / `Sonner` — Notification system (available, not actively used)
- `Sheet` — Mobile menu overlay

Full list: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toggle, toggle-group, tooltip

## Pages

### `Home` — [src/pages/Home.tsx](../src/pages/Home.tsx)

Main portfolio page (~299 lines). All portfolio sections in sequence:

```
<Hero3D />           → 3D background + hero text
#about               → Avatar, bio, social links
#skills              → Frontend / Backend / Tools tabs or grid
#experience          → <Timeline items={experience} />
#education           → <Timeline items={education} />
#projects            → Grid of <ProjectCard />
#contact             → Email/LinkedIn CTAs
<Footer />           → Copyright
```

All data sourced from `PORTFOLIO_DATA` in `src/lib/data.ts`.

### `NotFound` — [src/pages/not-found.tsx](../src/pages/not-found.tsx)

404 page for unmatched Wouter routes.
