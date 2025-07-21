"use client";

import { motion } from "framer-motion";

interface WaveTextProps {
  text: string;
  className?: string;
  color?: string;
  amplitude?: number;
  duration?: number;
  delayStep?: number;
  direction?: "up" | "down";
}

export default function WaveText({
  text,
  className = "text-4xl font-bold",
  color = "black",
  amplitude = 8,
  duration = 2,
  delayStep = 0.1,
  direction = "up",
}: WaveTextProps) {
  const motionY = direction === "up" ? [0, -amplitude, 0] : [0, amplitude, 0];

  return (
    <div className={`flex space-x-[1px] ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{ y: motionY }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: index * delayStep,
          }}
          style={{ color }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}
