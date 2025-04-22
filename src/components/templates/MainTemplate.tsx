"use client";

import Hero from "@/components/organisms/Hero";
import { AboutMe } from "../organisms/AboutMe";

const MainTemplate = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      {/* Other sections here (About, Projects, etc) */}

      <AboutMe />
    </div>
  );
};

export default MainTemplate;
