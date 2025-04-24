"use client";

import { skills } from "@/types/skills";
import { zoneGrid } from "@/types/zoneGrid";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SmartVideo } from "../atoms/SmartVideo";

// styles
const style = {
  container: classNames(
    "relative",
    "h-screen",
    "w-full",
    "bg-cloudMist",
    "overflow-hidden",
    "text-charcoalGray"
  ),
  videoArea: classNames(
    "absolute",
    "inset-0",
    "w-full",
    "h-full",
    "object-cover",
    "z-0",
    "opacity-60"
  ),
  titleArea: classNames(
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "text-5xl",
    "lg:text-7xl",
    "font-bodoni",
    "text-charcoalGray",
    "z-10",
    "pointer-events-none",
    "italic"
  ),
  capitalArea: classNames(
    "font-ballet",
    "not-italic",
    "mr-1",
    "text-7xl",
    "lg:text-9xl"
  ),
  skillTitle: classNames(
    "absolute",
    "px-4",
    "py-2",
    "rounded-full",
    "font-medium",
    "text-xs",
    "lg:text-base",
    "shadow-lg",
    "transition-all",
    "z-20",
    "group",
    "select-none",
    "cursor-pointer",
    "font-fira"
  ),
  skillDescription: classNames(
    "absolute",
    "bottom-full",
    "left-1/2",
    "-translate-x-1/2",
    "mb-2",
    "bg-white",
    "text-[#3E4A5C]",
    "text-sm",
    "lg:text-xl",
    "font-bebas",
    "px-3",
    "py-1",
    "pr-4",
    "rounded-full",
    "shadow",
    "opacity-0",
    "group-hover:opacity-100",
    "transition-opacity",
    "whitespace-normal",
    "w-max",
    "max-w-[600px]",
    "z-50",
    "pointer-events-none",
    "italic"
  ),
};

export const SkillCloud = () => {
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    //NOTE - floating effects duration
    const randomDurations = skills.map(() => Math.random() * 3 + 3); // 3s~6s
    setDurations(randomDurations);
  }, []);

  return (
    <section className={style.container}>
      {/* Video background */}
      <SmartVideo
        className={style.videoArea}
        src="/videos/optimized-skills-bg.webm"
      />

      {/* Title Area */}
      <h2 className={style.titleArea}>
        <span className={style.capitalArea}>S</span>
        kills
      </h2>

      {/* Floating Skills */}
      {skills.map((skill, i) => {
        // preset zone grid
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
            className={style.skillTitle}
            style={{
              top: pos.top,
              left: pos.left,
              backgroundColor: skill.color,
            }}
          >
            {skill.name}
            <span className={style.skillDescription}>{skill.description}</span>
          </motion.div>
        );
      })}
    </section>
  );
};
