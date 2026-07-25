import { Code2, Database, Server, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";

const skillIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Skills & Tools
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            A focused stack for building full-stack applications, database-driven
            systems, CMS websites, and modern web interfaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = skillIcons[category as keyof typeof skillIcons];

            return (
              <div
                key={category}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-orange-500/60 hover:bg-orange-500/[0.03]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                  <Icon size={24} />
                </div>

                <h3 className="mb-5 text-xl font-bold text-white">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}