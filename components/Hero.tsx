"use client";

import { MapPin, Sparkles } from "lucide-react";
import { techChips } from "@/data/portfolio";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-24 lg:pt-20"
    >
      <div className="absolute left-[-10%] top-80 h-100 w-100 rounded-full bg-violet-600/10 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_68%_45%,transparent_30%,rgba(11,11,15,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_50%,transparent_55%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Sparkles size={16} className="text-violet-500" />
            Developer · Problem Solver · Lifelong Learner
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 to-fuchsia-600 bg-clip-text text-transparent">
              Quinn Agas
            </span>
            <br />
            Junior Full-Stack Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build database-driven web and mobile applications with clean UI,
            practical backend systems, and modern developer workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <MapPin size={16} className="text-violet-500" />
              Makati City, Metro Manila
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Open to work
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {techChips.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/5 bg-white/3 px-3.5 py-1.5 text-xs font-medium text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-500/60 hover:text-violet-400"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <div className="relative hidden min-h-170 items-center justify-center lg:flex">
          
          <div className="absolute h-160 w-160 translate-y-10 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.45)_0%,rgba(88,28,135,0.2)_45%,transparent_72%)] blur-[100px]" />
          <div
            className="absolute h-115 w-115 translate-y-10 rounded-full blur-[20px]"
            style={{
              background:
                "radial-gradient(circle, rgba(230,200,255,1) 0%, rgba(168,85,247,1) 30%, rgba(124,58,237,0.85) 55%, rgba(76,29,149,0.35) 75%, transparent 100%)",
            }}
          />

          <div
            className="absolute h-155 w-155 translate-y-10 rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 68%, rgba(180,100,255,0.25) 69%, rgba(147,51,234,0.08) 71%, transparent 74%)",
              filter: "blur(3px)",
            }}
          />

          <div
            className="absolute h-123 w-123 translate-y-10 rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 63%, rgba(216,180,254,1) 63.8%, rgba(168,85,247,0.7) 64.6%, rgba(147,51,234,0.2) 66%, transparent 68%)",
              filter: "blur(0.5px)",
            }}
          />
 
          {/* Portrait */}
          <div
            className="relative h-170 w-135 drop-shadow-[0_25px_60px_rgba(139,92,246,0.25)]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 72%, rgba(0,0,0,0.6) 88%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 72%, rgba(0,0,0,0.6) 88%, transparent 100%)",
            }}
          >
            <Image
              src="/images/quinn-hero.png"
              alt="Quinn Agas portrait"
              fill
              priority
              quality={100}
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}