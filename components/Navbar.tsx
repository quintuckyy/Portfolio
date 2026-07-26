"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0c0a14]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          Quinn<span className="text-violet-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-600"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0c0a14]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-sm font-medium text-zinc-300 transition hover:border-violet-500/60 hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-2xl bg-violet-500 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}