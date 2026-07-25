import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Featured Projects
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Things I&apos;ve Built
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              A selection of full-stack, database-driven, CMS-based, and
              cooperative service projects I&apos;ve built or contributed to.
            </p>
          </div>

          <a
            href="https://github.com/quintuckyy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-500/60 hover:text-orange-400"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-4xl border border-white/10 bg-white/3 transition hover:border-orange-500/60 hover:bg-orange-500/3"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10 bg-black/40">
                <div className="absolute inset-0 bg-linenar-to-br from-orange-500/20 via-transparent to-red-500/10" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                  Project 0{index + 1}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-[#111116]/90 p-5 shadow-xl backdrop-blur">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 w-3/4 rounded-full bg-white/20" />
                      <div className="h-3 w-1/2 rounded-full bg-white/10" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-12 rounded-xl bg-orange-500/20" />
                        <div className="h-12 rounded-xl bg-white/10" />
                        <div className="h-12 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="text-zinc-500 transition group-hover:text-orange-400"
                  />
                </div>

                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}