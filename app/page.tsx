import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
  }