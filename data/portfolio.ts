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
  "Django",
  "PostgreSQL",
];

export const projects = [
  {
    title: "SVConnect Application",
    description:
      "Mobile app for cooperative members to view savings, track loans, check transactions, and receive announcements.",
    tags: ["JavaScript", "Capacitor", "Firebase"],
    github: "https://github.com/quintuckyy/Application-SVConnect",
    image: "/images/projects/svconnect-app.png",
  },

  {
    title: "SVConnect Admin",
    description:
      "Web-based admin dashboard for managing cooperative members, loans, savings, announcements, reports, and audit logs.",
    tags: ["JavaScript", "Firebase", "Tailwind CSS"],
    github: "https://github.com/quintuckyy/Admin-SVConnect",
    image: "/images/projects/svconnect-admin.png",
  },

  {
    title: "APC Academic Website",
    description:
      "CMS-powered academic website that allows staff to manage content through Wagtail without editing code.",
    tags: ["Django", "Wagtail CMS", "PostgreSQL", "Docker"],
    github: "https://github.com/quintuckyy/APC_Website_Wagtail",
    image: "/images/projects/apc-website.png",
  },

  {
    title: "Investment Database System",
    description:
      "Full-stack investment database system with transactions, orders, reports, validation checks, audit logs, and CSV import/ETL.",
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL"],
    github: "https://github.com/quintuckyy/Investment-Database-System",
    image: "/images/projects/investment-database.png",
  },
  
  
];

export const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  Backend: ["Python", "Django", "Django REST Framework","Node.js", "REST APIs"],
  Database: ["PostgreSQL", "MySQL", "SQL", "Firestore"],
  Tools: ["Git", "GitHub", "Docker", "Firebase", "Supabase"],
  
};