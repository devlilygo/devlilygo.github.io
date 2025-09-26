"use client";
import { motion } from "framer-motion";

export default function WaveMarquee() {
  const text = "Hello, I'm Lily — Frontend Developer";
  const letters = text.split(""); // 글자 단위로 쪼갬
  const track = [...letters, ...letters]; // 2배 복제 → 무한 루프 자연스럽게

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      >
        {track.map((letter, i) => (
          <motion.span
            key={i}
            className="text-3xl font-bold inline-block px-[1px]"
            animate={{ y: [0, -10, 0, 10, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: i * 0.07, // 글자마다 위상 차이
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
