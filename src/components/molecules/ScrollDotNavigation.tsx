"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "skills", "contact"];

export const ScrollDotNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = SECTION_IDS.findIndex((id) => id === entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {SECTION_IDS.map((id, i) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeIndex === i ? "bg-black scale-110" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
