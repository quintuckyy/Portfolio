"use client";

import { MapPin, Sparkles } from "lucide-react";
import { techChips } from "@/data/portfolio";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pt-20 pb-16 sm:min-h-screen sm:px-6 sm:pt-24 sm:pb-0 lg:pt-20"
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

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 sm:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 sm:mb-6"
          >
            <Sparkles size={16} className="text-violet-500" />
            Developer · Problem Solver · Continuous Learner
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-linear-to-r from-violet-400 to-fuchsia-600 bg-clip-text text-transparent">
              Quinn Agas
            </span>
            <br />
            Junior Full-Stack Developer
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base leading-6 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8"
          >
            I build full-stack, database-driven applications with intuitive interfaces, reliable
            backend systems, and modern development pracitces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <MapPin size={16} className="text-violet-500" />
              Makati City, Metro Manila
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Open to work
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2.5"
          >
            {techChips.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-300 sm:px-3.5 sm:py-1.5 sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-5 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/30 active:scale-95 sm:w-44"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:border-violet-500/60 hover:text-violet-400 active:scale-95 sm:w-44"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative hidden min-h-170 items-center justify-center lg:flex"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-160 w-160 translate-y-10 rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.45)_0%,rgba(88,28,135,0.2)_45%,transparent_72%)] blur-[100px]"
          />
          <div
            className="absolute h-115 w-115 translate-y-10 rounded-full blur-[20px]"
            style={{
              background:
                "radial-gradient(circle, rgba(230,200,255,1) 0%, rgba(168,85,247,1) 30%, rgba(124,58,237,0.85) 55%, rgba(76,29,149,0.35) 75%, transparent 100%)",
            }}
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
        </motion.div>
      </div>
    </section>
  );
}