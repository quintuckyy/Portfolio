export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const techChips = [
  "JavaScript",
  "Python",
  "React",
  "Node.js",
  "Django",
  "PostgreSQL",
];

export const projects = [
  {
    title: "SVConnect Application",
    description:
      "Mobile app for cooperative members to view savings, track loans, check transactions, and receive announcements.",
    tags: ["Tailwind CSS", "JavaScript", "Capacitor", "Firebase", "Firestore"],
    github: "https://github.com/quintuckyy/Application-SVConnect",
    image: "/images/projects/svconnect-app.png",
  },

  {
    title: "SVConnect Admin",
    description:
      "Web-based admin dashboard for managing cooperative members, loans, savings, announcements, reports, and audit logs.",
    tags: ["Tailwind CSS", "JavaScript", "Firebase", "Firestore"],
    github: "https://github.com/quintuckyy/Admin-SVConnect",
    image: "/images/projects/svconnect-admin.png",
  },

  {
    title: "APC Academic Website",
    description:
      "CMS-powered academic website that allows staff to manage content through Wagtail without editing code.",
    tags: ["Tailwind CSS", "Python", "Django", "Wagtail CMS", "PostgreSQL", "Docker"],
    github: "https://github.com/quintuckyy/APC_Website_Wagtail",
    image: "/images/projects/apc-website.png",
  },


  {
    title: "Qivora",
    description:
      "Full-stack job search platform for tracking applications, interviews, resumes, and status updates, with Chrome extension autofill and Gmail email classification.",
    tags: ["React", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/quintuckyy/Qivora",
    image: "/images/projects/qivora.png",
  },

  {
    title: "Investment Database System",
    description:
      "Full-stack investment database system with transactions, orders, reports, validation checks, audit logs, and CSV import/ETL.",
    tags: ["React", "TypeScript", "Django REST Framework", "PostgreSQL"],
    github: "https://github.com/quintuckyy/Investment-Database-System",
    image: "/images/projects/investment-database.png",
  },


  {
    title: "Bruno's Cafe Website",
    description:
      "Server-rendered café website with a custom design system, scroll animations, and easily updatable content.",
    tags: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Cloudflare Workers"],
    github: "https://brunoscafe-website.vercel.app/",
    image: "/images/projects/cafe-website.png",
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  Backend: ["Python", "Django", "Django REST Framework","Node.js", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "SQL", "NoSQL", "Firestore"],
  Tools: ["Git", "GitHub", "Docker", "Firebase", "Supabase"],
  
};