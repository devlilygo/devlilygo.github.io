"use client";

import Hero from "@/components/v1/organisms/Hero";
import { AboutMe } from "../organisms/AboutMe";
import { ScrollDotNavigation } from "../molecules/ScrollDotNavigation";
import { Projects } from "../organisms/Projects";
import { SkillCloud } from "../organisms/SkillCloud";
import { Contact } from "../organisms/Contact";
import { ThingsIBelieve } from "../organisms/ThingsIBelieve";

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
      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>
      <section id="things" className="h-screen snap-start">
        <ThingsIBelieve />
      </section>
      <section id="skills" className="h-screen snap-start">
        <SkillCloud />
      </section>
      <section id="contacts" className="h-screen snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default MainTemplate;
