"use client";

import { useEffect, useState } from "react";
import { skills } from "@/types/skills";
import { motion } from "framer-motion";
import { zoneGrid } from "@/types/zoneGrid";
import { SmartVideo } from "../atoms/SmartVideo";

export const SkillCloud = () => {
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    // 각 태그에 랜덤 float duration 지정
    const randomDurations = skills.map(() => Math.random() * 3 + 3); // 3s~6s
    setDurations(randomDurations);
  }, []);

  return (
    <section
      id="skills"
      className="relative h-screen w-full bg-cloudMist overflow-hidden text-charcoalGray"
    >
      <SmartVideo
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="/videos/optimized-skills-bg.webm"
      />
      <h2
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-7xl font-bodoni text-charcoalGray z-10 pointer-events-none italic"
      >
        <span className="font-ballet not-italic mr-1 text-9xl">S</span>
        kills
      </h2>

      {skills.map((skill, i) => {
        const pos = zoneGrid[i % zoneGrid.length];
        const floatY = i % 2 === 0 ? [-10, 10, -10] : [-6, 6, -6];

        return (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{
              y: floatY,
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: durations[i] || 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute px-4 py-2 rounded-full font-medium text-sm md:text-base
                       shadow-lg transition-all z-20 group select-none cursor-pointer font-fira"
            style={{
              top: pos.top,
              left: pos.left,
              backgroundColor: skill.color,
            }}
          >
            {skill.name}
            <span
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                             bg-white text-[#3E4A5C] text-xl font-bebas px-3 py-1 pr-4 rounded-full shadow
                             opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal
                             w-max max-w-[600px] z-50 pointer-events-none italic"
            >
              {skill.description}
            </span>
          </motion.div>
        );
      })}
    </section>
  );
};
