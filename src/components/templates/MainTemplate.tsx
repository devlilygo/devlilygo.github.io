"use client";

import Hero from "@/components/organisms/Hero";
import { AboutMe } from "../organisms/AboutMe";
import { ScrollDotNavigation } from "../molecules/ScrollDotNavigation";

const MainTemplate = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <ScrollDotNavigation />
      <section id="hero" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="about" className="h-screen snap-start">
        <AboutMe />
      </section>
    </div>
  );
};

export default MainTemplate;
