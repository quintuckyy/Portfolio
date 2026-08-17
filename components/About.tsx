import { Code2, Database, Rocket, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Comfortable working across frontend, backend, and database tasks.",
  },
  {
    icon: Database,
    title: "Backend & Data",
    description:
      "Focused on building systems with organized data and reliable workflows.",
  },
  {
    icon: Rocket,
    title: "Practical Solutions",
    description:
      "Builds useful applications that solve real operational problems.",
  },
  {
    icon: TrendingUp,
    title: "Continous Growth",
    description:
      "Flexible, adaptable, and eager to learn from real-world development work.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-4xl border border-white/10 bg-white/3 p-8 shadow-2xl shadow-black/30 md:p-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
              About Me
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Building full-stack solutions with real-world impact.
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-violet-500" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400">
              I'm Quinn Agas, an Information Technology graduate and Junior Full-Stack
              Developer with hands-on experience building web applications, backend services, 
              and database-driven systems.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Through my internship and academic projects, I've worked on admin dashboards,
              CMS-based platforms, REST APIs, reporting tools, and relational databases. 
              Beyond writing code, I've worked with stakeholders to understand requirements,
              translate them into functional features, troubleshoot issues, and improve existing
              workflows.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/30 p-6 transition hover:border-violet-500/50 hover:bg-violet-500/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}