import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#111116] to-[#1b120d] p-10">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-5xl">
          Let's build something impactful.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm currently looking for Junior Full-Stack Developer opportunities.
          If you think I'd be a great fit for your team, feel free to reach out.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <a
            href="mailto:quinnagas@gmail.com"
            className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-orange-500 hover:bg-orange-500/5"
          >
            <Mail className="mb-4 text-orange-400" size={28} />

            <h3 className="font-semibold">Email</h3>

            <p className="mt-2 text-zinc-400">
              quinnagas@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/quintuckyy"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-orange-500 hover:bg-orange-500/5"
          >
            <FaGithub className="mb-4 text-orange-400" size={28} />

            <h3 className="font-semibold">GitHub</h3>

            <p className="mt-2 text-zinc-400">
              github.com/quintuckyy
            </p>
          </a>

          <a
            href="https://linkedin.com/in/quinn-agas/"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:border-orange-500 hover:bg-orange-500/5"
          >
            <FaLinkedin className="mb-4 text-orange-400" size={28} />

            <h3 className="font-semibold">LinkedIn</h3>

            <p className="mt-2 text-zinc-400">
              Connect with me
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}