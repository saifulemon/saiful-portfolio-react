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
    bio: "Currently pursuing a BSc in Computer Science & Engineering (CSE) at Presidency University, Bangladesh. Previously completed a Diploma in Engineering in Data Telecommunication & Networking Technology from Feni Computer Institute. Focuses on building scalable, responsive, and performance-optimized web applications using the JavaScript ecosystem. Specializes in transforming ideas into clean, maintainable, and user-centric digital products."
  },
  skills: {
    frontend: ["React 19", "React Router 7", "Next.js", "Remix.js", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "shadcn", "Bootstrap", "Three.js", "Chart.js", "Markdown Editor", "Axios", "React PDF"],
    backend: ["Node.js", "Nest.js", "WebSocket", "Socket.io", "PostgreSQL"],
    tools: ["Vite", "VS Code", "Cursor", "Claude Code", "GitHub Copilot", "Git", "Firebase", "Linux", "WordPress", "Shopify"]
  },
  experience: [
    {
      id: 1,
      role: "Jr. Frontend Developer",
      company: "Potential Inc.",
      period: "July 2024 – Present",
      achievements: [
        "Built features with React, Next.js, Remix, Redux, Nest.js and PostgreSQL",
        "Created reusable components and custom hooks to improve UI consistency",
        "Optimized rendering, debugged production issues, and improved test coverage",
        "Used AI tools (Cursor, Claude Code, Copilot) to accelerate delivery"
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
      degree: "SSC / (Dakhil)",
      institution: "Baksha Mahmud Islamia Dakhil Madrasha",
      period: "2017 – 2019"
    },
    {
      id: 4,
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
      description: "Web view application built with Remix.js.",
      tags: ["Remix.js", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
      highlights: [
        "Built a full-stack web app with Remix.js leveraging server-side rendering for fast page loads",
        "Utilized nested routing and loader/action patterns for efficient server-client data flow",
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
      title: "Modern CV Template",
      liveUrl: "https://6268f1a7d7009d750803e81b--funny-panda-88de7e.netlify.app/",
      githubUrl: "https://github.com/saifulemon/modern-cv",
      description: "A personal portfolio and CV site showcasing skills, experience, and project work.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "Built an interactive portfolio with filterable project gallery across tech categories",
        "Displayed skills with proficiency indicators and a work history timeline from 2016–2022",
        "Included a downloadable CV, testimonials section, and functional contact form"
      ]
    },
    {
      id: 7,
      title: "Hashtag — Digital Marketing",
      liveUrl: "https://hashtagv2.netlify.app/",
      githubUrl: "https://github.com/saifulemon/digital-marketing-agency",
      description: "Landing page for a social media marketing agency with pricing and service tiers.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "Designed a marketing agency landing page with six feature sections and three pricing tiers",
        "Built a fully responsive layout using Bootstrap with smooth anchor-based navigation",
        "Included client testimonials, FAQ section, and free trial CTA to drive conversions"
      ]
    },
    {
      id: 8,
      title: "E-School",
      liveUrl: "https://saifulemon.github.io/E-School/",
      githubUrl: "https://github.com/saifulemon/E-School",
      description: "An online learning platform offering 1,500+ courses with student enrollment and scheduling.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      highlights: [
        "Built an e-learning platform featuring 1,500+ course topics and 1,800+ active learners",
        "Implemented course scheduling with seat availability, start dates, and enrollment flow",
        "Designed a clean UI with student registration, testimonials, and newsletter subscription"
      ]
    }
  ],
  services: [
    {
      id: 1,
      icon: "code",
      title: "React & Next.js Development",
      description: "Building modern, scalable web applications using React 19, Next.js, and Remix.js with full API integration, SSR, and responsive design."
    },
    {
      id: 2,
      icon: "mobile",
      title: "Web View Applications",
      description: "Developing mobile-ready web view apps using React 19 and Router 7 with seamless UX, design-to-code conversion, and cross-platform compatibility."
    },
    {
      id: 3,
      icon: "palette",
      title: "Design to Code Conversion",
      description: "Converting Figma, XD, or PSD designs into pixel-perfect, responsive code using React, Tailwind CSS, and shadcn for stunning results."
    },
    {
      id: 4,
      icon: "cart",
      title: "E-Commerce Development",
      description: "Building fully functional e-commerce platforms with Next.js — from product catalogs to checkout flows with API integration and payment systems."
    },
    {
      id: 5,
      icon: "stack",
      title: "Full-Stack Development",
      description: "Complete full-stack solutions with React/Next.js on the frontend and Nest.js, Socket.io, and PostgreSQL on the backend — from concept to deployment."
    },
    {
      id: 6,
      icon: "api",
      title: "API Integration & Development",
      description: "Seamless API integration connecting frontend with backend services, third-party APIs, and databases to create dynamic, data-driven web applications."
    }
  ]
};
