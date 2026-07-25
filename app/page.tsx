import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <Hero />
    </main>
  );
  }