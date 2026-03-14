import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatWeDo from "@/components/sections/services";
import Achievements from "@/components/sections/achievements";
import Values from "@/components/sections/values";
import Team from "@/components/sections/team";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Achievements />
        <Values />
        <Team />
      </main>
      
      <Footer />
    </div>
  );
}
