import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectVisual from "@/components/ProjectVisual";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
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
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-500/60 hover:text-violet-400"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-4xl border border-white/10 bg-white/3 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/60 hover:bg-violet-500/3 hover:shadow-xl hover:shadow-violet-500/10"
              >

                <ProjectVisual title={project.title} image={project.image} />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={22}
                      className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-400"
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
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}