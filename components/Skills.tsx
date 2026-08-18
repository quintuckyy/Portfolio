import { Braces, Code2, Database, Globe, Server, Wrench, type LucideIcon } from "lucide-react";
import {
  SiDjango,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { skills } from "@/data/portfolio";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
};

const skillIcons: Record<string, IconType | LucideIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  Django: SiDjango,
  "Django REST Framework": SiDjango,
  Python: SiPython,
  "Node.js": SiNodedotjs,
  "REST APIs": Globe,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQL: Database,
  NoSQL: Braces,
  Firestore: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
            Skills & Tools
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            My Full-Stack Toolkit 
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Technologies I use to build full-stack applications, backend services, 
            database-driven systems, and modern web experiences.
          </p>
        </div>
        
        <StaggerGroup className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => {
            const CategoryIcon =
              categoryIcons[category as keyof typeof categoryIcons];

            return (
              <StaggerItem key={category}>
                <div className="group rounded-3xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 transition-transform duration-300 group-hover:scale-110">
                      <CategoryIcon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category}</h3>
                      <p className="text-xs text-zinc-500">
                        {items.length} {items.length === 1 ? "tool" : "tools"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-1">
                    {items.map((skill) => {
                      const SkillIcon = skillIcons[skill] ?? Code2;

                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-white/5"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-zinc-300">
                            <SkillIcon size={15} />
                          </div>
                          <span className="text-sm text-zinc-300">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
