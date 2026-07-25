import { MapPin, Sparkles } from "lucide-react";
import { techChips } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32"
    >
      <div className="absolute right-[-10%] top-20 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute left-[-10%] top-80 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Sparkles size={16} className="text-orange-500" />
            Developer · Problem Solver · Lifelong Learner
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Quinn Agas
            </span>
            <br />
            Junior Full-Stack Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build database-driven web and mobile applications with clean UI,
            practical backend systems, and modern developer workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <MapPin size={16} className="text-orange-500" />
              Makati City, Metro Manila
            </span>

            <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              Open to work
            </span>

            {techChips.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500/60 hover:text-orange-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[520px] w-full max-w-md items-center justify-center lg:flex">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-transparent opacity-70 blur-sm" />
          <div className="absolute h-[340px] w-[340px] rounded-full border border-orange-300/30" />
          <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-orange-500/20 text-5xl font-bold text-orange-400">
                QA
              </div>
              <p className="text-sm uppercase tracking-[0.4em] text-zinc-400">
                Portfolio
              </p>
              <p className="mt-3 text-2xl font-bold">Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}