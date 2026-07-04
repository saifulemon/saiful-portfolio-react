export const PORTFOLIO_DATA = {
  personal: {
    name: "Saiful Islam",
    title: "Frontend-Focused AI-Native Full Stack Developer",
    location: "Dhaka, Bangladesh",
    email: "dev.saifulemon@gmail.com",
    phone: "+8801302050981",
    linkedin: "https://www.linkedin.com/in/saiful-emon/",
    github: "https://github.com/saifulemon",
    facebook: "https://www.facebook.com/dev.saifulemon/",
    bio: "Frontend-specialized full-stack developer who builds with agentic AI at the core of the workflow, not as an add-on. Designs and runs multi-agent systems with Claude Code and OpenCode to take projects from system design through production — automated code review, gap analysis, feature scaffolding, and documentation pipelines that replace hours of manual work with minutes of agent orchestration. Actively maintains and contributes to a shared .claude submodule used across every project, continuously expanding its library of agents, skills, and workflows. Currently pursuing a BSc in Computer Science & Engineering (CSE) at Presidency University, Bangladesh, with a Diploma in Data Telecommunication & Networking Technology from Feni Computer Institute. Combines deep JavaScript/React expertise with hands-on agentic engineering to ship scalable, production-ready products faster and cleaner."
  },
  skills: {
    frontend: ["React 19", "React Router 7", "Next.js", "Remix.js", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "shadcn", "Bootstrap", "Three.js", "Chart.js", "Markdown Editor", "Axios", "React PDF"],
    backend: ["Node.js", "Nest.js", "WebSocket", "Socket.io", "PostgreSQL"],
    tools: ["Claude Code", "OpenCode", "Agentic AI Workflows", ".claude Submodule Architecture", "Multi-Agent Orchestration", "GitHub Copilot", "Cursor", "Vite", "Git", "Firebase", "Linux", "WordPress", "Shopify"]
  },
  experience: [
    {
      id: 1,
      role: "Jr. Frontend Developer",
      company: "Potential Inc.",
      period: "July 2024 – Present",
      achievements: [
        "Drive agentic AI adoption company-wide: design and maintain a shared .claude submodule of custom agents, skills, and slash commands used across every active project",
        "Architect multi-agent workflows with Claude Code and OpenCode covering the full project lifecycle — system design, scaffolding, implementation, code review, and production readiness",
        "Built automated code-audit agents, gap-finder/gap-fixer pipelines, and feature-replication workflows that cut repetitive engineering work from hours to minutes",
        "Built features with React, Next.js, Remix, Redux, Nest.js and PostgreSQL",
        "Created reusable components and custom hooks to improve UI consistency",
        "Optimized rendering, debugged production issues, and improved test coverage",
        "Continuously explore and contribute new agent workflows back into the shared .claude submodule, raising delivery speed and consistency for the whole team"
      ]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Taqwa Real Estate & Construction Ltd.",
      period: "April 2024 – August 2024",
      achievements: [
        "Developed and maintained websites using CMS platforms (WordPress and Shopify)",
        "Managed client communications and requirements"
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "BSC in Engineering (CSE)",
      institution: "Presidency University",
      period: "2025 – Present",
      achievements: [
        "Proficient in C programming with strong grasp of core fundamentals",
        "Familiar with Python for scripting and problem-solving",
        "Solid understanding of OOP concepts through Java"
      ]
    },
    {
      id: 2,
      degree: "Diploma In Engineering (DTNT)",
      institution: "Feni Computer Institute",
      period: "2019 – 2023"
    },
    {
      id: 3,
      degree: "Web Design & Development (LEDP)",
      institution: "ICT Division Bangladesh",
      period: "2020 – 2021"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Bright Pixel",
      liveUrl: "https://brightpixel.live/",
      description: "React 19 and Router 7 web application with API integration.",
      tags: ["React 19", "React Router 7", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
      highlights: [
        "Built a dynamic web app with React 19 using file-based routing via React Router 7",
        "Integrated REST APIs with clean data-fetching patterns and proper error states",
        "Structured a scalable component architecture for long-term maintainability"
      ]
    },
    {
      id: 2,
      title: "The Coaching Record",
      liveUrl: "https://mobile.thecoachingrecord.com/",
      description: "A fitness coaching SaaS platform for managing workouts, teams, and payments.",
      tags: ["React 19", "React Router 7", "Redux Toolkit", "TypeScript", "Vite", "WebSocket", "Axios"],
      highlights: [
        "Built a production SaaS platform with workout tracking, team management, and chat features",
        "Implemented Redux for global state management across authentication, notifications, and payments",
        "Developed a modular service-based architecture with SSR support for performance at scale"
      ]
    },
    {
      id: 3,
      title: "iipuda",
      liveUrl: "https://iipuda.vercel.app/",
      description: "Book premium verified clinics & K-Beauty in Korea — get matched with a clinic worth trusting, at the locals' price.",
      tags: ["Remix.js", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
      highlights: [
        "Built a K-Beauty clinic discovery and booking web view with Remix.js SSR for fast page loads",
        "Implemented nested routing and loader/action patterns to surface verified clinic listings and recommendations",
        "Deployed on Vercel with optimized build output and progressive enhancement support"
      ]
    },
    {
      id: 4,
      title: "Falette Shop",
      liveUrl: "https://shop.falette.co/",
      description: "Custom fabric e-commerce platform with made-to-order sizing and curated collections.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Axios"],
      highlights: [
        "Built a custom fabric e-commerce store with real-time price calculation based on user dimensions",
        "Implemented product filtering by color, pattern, and style with a curated international catalog",
        "Integrated Google Analytics, Naver WCS tracking, and Next.js image optimization for performance"
      ]
    },
    {
      id: 5,
      title: "Donto",
      liveUrl: "https://donto-cikitsha.netlify.app/",
      githubUrl: "https://github.com/saifulemon/donto",
      description: "Dental clinic web app with appointment sections and Firebase authentication.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Vite"],
      highlights: [
        "Built a dental clinic web app with service listings and appointment section",
        "Integrated Firebase authentication for secure user login and session management",
        "Delivered a fully responsive, mobile-friendly design for medical use cases"
      ]
    },
    {
      id: 6,
      title: "NestFind",
      liveUrl: "https://nestfind-app-snowy.vercel.app/",
      githubUrl: "https://github.com/saifulemon/nestfind-app",
      description: "Find your perfect nest without the noise — a full-stack rental and property discovery platform.",
      tags: ["TypeScript", "React", "Vite", "Node.js", "SQLite"],
      highlights: [
        "Built a full-stack property search app with a React/Vite frontend and Node.js backend",
        "Implemented filtering and discovery features to surface relevant rental listings",
        "Deployed the frontend on Vercel with a SQLite-backed data layer for persistence"
      ]
    },
    {
      id: 7,
      title: "Mess Manager",
      githubUrl: "https://github.com/saifulemon/mess-manager",
      description: "Make your daily meal count, expenses, and mess finances easier to manage with Mess Manager.",
      tags: ["TypeScript", "React", "Node.js"],
      highlights: [
        "Built a mess management app to track daily meals and shared expenses",
        "Implemented expense tracking and member management features for shared living",
        "Structured as a full-stack monorepo with a React frontend and Node.js backend"
      ]
    },
    {
      id: 8,
      title: "PetPulse",
      githubUrl: "https://github.com/saifulemon/PetPulse",
      description: "Monitor and track your pet's wellbeing over time with a connected full-stack app.",
      tags: ["TypeScript", "React", "Node.js"],
      highlights: [
        "Built a pet wellbeing tracking app spanning web, mobile, and dashboard clients",
        "Implemented a shared backend API to sync pet health and activity data across platforms",
        "Structured as a full-stack monorepo with frontend, mobile, dashboard, and backend workspaces"
      ]
    },
    ],
  services: [
    {
      id: 1,
      icon: "ai",
      title: "Agentic AI Engineering",
      description: "Designing and running multi-agent systems with Claude Code and OpenCode across the full project lifecycle — system design, scaffolding, code review, and production deployment — powered by a self-built, continuously evolving .claude workflow submodule."
    },
    {
      id: 2,
      icon: "stack",
      title: "Full-Stack Development",
      description: "Complete full-stack solutions with React/Next.js on the frontend and Nest.js, Socket.io, and PostgreSQL on the backend — from concept to deployment."
    },
    {
      id: 3,
      icon: "code",
      title: "React & Next.js Development",
      description: "Building modern, scalable web applications using React 19, Next.js, and Remix.js with full API integration, SSR, and responsive design."
    },
    {
      id: 4,
      icon: "mobile",
      title: "Web View Applications",
      description: "Developing mobile-ready web view apps using React 19 and Router 7 with seamless UX, design-to-code conversion, and cross-platform compatibility."
    },
    {
      id: 5,
      icon: "palette",
      title: "Design to Code Conversion",
      description: "Converting Figma, XD, or PSD designs into pixel-perfect, responsive code using React, Tailwind CSS, and shadcn for stunning results."
    },
    {
      id: 6,
      icon: "cart",
      title: "E-Commerce Development",
      description: "Building fully functional e-commerce platforms with Next.js — from product catalogs to checkout flows with API integration and payment systems."
    },
    {
      id: 7,
      icon: "api",
      title: "API Integration & Development",
      description: "Seamless API integration connecting frontend with backend services, third-party APIs, and databases to create dynamic, data-driven web applications."
    }
  ]
};
