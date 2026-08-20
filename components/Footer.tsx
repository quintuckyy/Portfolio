import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Quinn<span className="text-violet-500">.</span>
          </a>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500 md:mx-0">
            Junior Full-Stack Developer focused on clean interfaces, practical
            backend systems, and database-driven applications.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400 md:justify-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href="mailto:quinnagas@gmail.com"
              aria-label="Email Quinn Agas"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-violet-400 active:scale-90"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/quintuckyy"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-violet-400 active:scale-90"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://linkedin.com/in/quinn-agas"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:text-violet-400 active:scale-90"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Quinn Agas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}