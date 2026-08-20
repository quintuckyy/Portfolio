"use client";

import {
  ArrowRight,
  ChevronRight,
  Code2,
  FolderKanban,
  Home,
  Mail,
  Menu,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const mobileNavIcons: Record<string, LucideIcon> = {
  Home: Home,
  About: User,
  Projects: FolderKanban,
  Skills: Code2,
  Contact: Mail,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-[#0c0a14]/90 shadow-lg shadow-black/20"
          : "border-white/5 bg-[#0c0a14]/60"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          Quinn<span className="text-violet-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-zinc-300 transition-colors duration-300 hover:text-violet-400"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/30 active:scale-95"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-transform duration-300 active:scale-90 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="flex items-center justify-center"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>
    </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{ backgroundColor: "#0c0a14" }}
            className="fixed inset-0 top-16 z-40 flex flex-col backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-1 flex-col px-6 py-6">
              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const Icon = mobileNavIcons[link.label] ?? Home;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: EASE }}
                      className="group flex items-center justify-between border-b border-white/5 py-4 text-base font-medium text-zinc-300 transition-colors duration-200 hover:text-violet-400 active:text-violet-400"
                    >
                      <span className="flex items-center gap-3.5">
                        <Icon
                          size={18}
                          className="text-zinc-500 transition-colors duration-200 group-hover:text-violet-400"
                        />
                        {link.label}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-zinc-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-400"
                      />
                    </motion.a>
                  );
                })}
              </div>

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navLinks.length * 0.05,
                  ease: EASE,
                }}
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/30 active:scale-95"
              >
                Get in Touch
                <ArrowRight size={16} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
