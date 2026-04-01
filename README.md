# Saiful Islam — Portfolio

A modern, interactive personal portfolio website built with React, Three.js, and Framer Motion. Features a 3D animated hero section, smooth scroll animations, and a clean dark aesthetic.

## Live Sections

- **Hero** — 3D animated background with call-to-action
- **About** — Bio, location, and social links
- **Skills** — Frontend, Backend, and Tools categories
- **Experience** — Professional work history with achievements
- **Education** — Academic background and certifications
- **Projects** — 8 featured projects with tech tags
- **Contact** — Email, LinkedIn, and location info

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| Animation | Framer Motion, Three.js, @react-three/fiber |
| Routing | Wouter |
| Forms | React Hook Form, Zod |
| State | TanStack React Query |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
PORT=3000 npm run dev

# Type check
npm run typecheck

# Build for production
npm run build
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | Yes | Development server port |
| `BASE_PATH` | Yes | Base URL path for deployment |
| `NODE_ENV` | No | `development` or `production` |

## Project Structure

```
src/
├── components/        # Custom components
│   ├── Hero3D.tsx     # Three.js 3D hero background
│   ├── Navbar.tsx     # Fixed navigation with mobile menu
│   ├── ProjectCard.tsx
│   ├── Timeline.tsx
│   ├── SectionHeading.tsx
│   └── ui/            # shadcn/ui component library (55 components)
├── pages/
│   ├── Home.tsx       # Main portfolio page
│   └── not-found.tsx
├── lib/
│   ├── data.ts        # Portfolio content (edit this to update content)
│   └── utils.ts
└── hooks/
    ├── use-mobile.tsx
    └── use-toast.ts
```

## Updating Content

All portfolio content lives in [src/lib/data.ts](src/lib/data.ts). Edit this file to update:

- Personal info (name, bio, contacts, socials)
- Skills lists
- Experience and education entries
- Project showcases

## Design System

- **Theme**: Dark midnight luxury (`#050508` background)
- **Primary**: Electric Blue (`hsl(217 91% 60%)`)
- **Accent**: Cyan (`hsl(180 100% 50%)`)
- **Fonts**: Outfit (display) + Plus Jakarta Sans (body)
- **Effects**: Glass-morphism, glow, smooth scroll

## Developer

**Saiful Islam** — Junior Frontend-Specialized Full-Stack Developer  
Dhaka, Bangladesh | [GitHub](https://github.com/saifulemon) | [LinkedIn](https://www.linkedin.com/in/saiful-emon/)
