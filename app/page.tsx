import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      <CursorGlow />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        <Footer />
      </div>
    </main>
  );
  }