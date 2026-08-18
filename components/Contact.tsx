import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StaggerGroup, StaggerItem } from "@/components/Stagger";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#15101f] to-[#1c1030] p-10">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-violet-500">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let's build something impactful.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm currently looking for Junior Full-Stack Developer opportunities.
          If you think I'd be a great fit for your team, feel free to reach out.
        </p>

        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">

          <StaggerItem>
            <a
              href="mailto:quinnagas@gmail.com"
              className="group block rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <Mail
                className="mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-110"
                size={28}
              />

              <h3 className="font-semibold">Email</h3>

              <p className="mt-2 text-zinc-400">
                quinnagas@gmail.com
              </p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://github.com/quintuckyy"
              target="_blank"
              className="group block rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <FaGithub
                className="mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-110"
                size={28}
              />

              <h3 className="font-semibold">GitHub</h3>

              <p className="mt-2 text-zinc-400">
                github.com/quintuckyy
              </p>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a
              href="https://linkedin.com/in/quinn-agas/"
              target="_blank"
              className="group block rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/5 hover:shadow-lg hover:shadow-violet-500/10"
            >
              <FaLinkedin
                className="mb-4 text-violet-400 transition-transform duration-300 group-hover:scale-110"
                size={28}
              />

              <h3 className="font-semibold">LinkedIn</h3>

              <p className="mt-2 text-zinc-400">
                linkedin.com/in/quinn-agas/
              </p>
            </a>
          </StaggerItem>

        </StaggerGroup>
      </div>
    </section>
  );
}