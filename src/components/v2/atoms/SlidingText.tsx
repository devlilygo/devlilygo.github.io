"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SlidingTextProps {
  text: string;
  className?: string;
  color?: string;
  repeatDelay?: number;
}

export default function SlidingText({
  text,
  className = "text-2xl font-bold",
  color = "#78A2D2",
  repeatDelay = 2000,
}: SlidingTextProps) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, repeatDelay);
    return () => clearInterval(interval);
  }, [repeatDelay]);

  const lineDelay = 0.5; // 줄 사이 딜레이 (초)
  const charDelay = 0.06; // 글자 간 딜레이 (초)

  return (
    <div className={`inline-block ${className}`}>
      {text.split("\n").map((line, lineIndex) => (
        <div key={`line-${lineIndex}`} className="flex space-x-[1px]">
          {line.split("").map((char, charIndex) => {
            const totalDelay = lineIndex * lineDelay + charIndex * charDelay;
            return (
              <motion.span
                key={`${animationKey}-${lineIndex}-${charIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: totalDelay,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                style={{ color }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
