"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function MarqueeText() {
  // 원하는 문구들
  const items = [
    "I'm open to work",
    "let's work together",
    "get in touch",
    "available for new opportunities",
  ];

  // 트랙 반복
  const track = Array(4).fill(items).flat();

  return (
    <div className="relative overflow-hidden bg-[#364c84] text-[#fffdf5] p-4">
      <motion.div
        className="flex gap-2 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {track.map((text, i) => (
          <>
            <span
              key={i}
              className="flex items-center text-6xl md:text-7xl font-bold tracking-tight"
            >
              <Coffee width={60} height={60} className="m-8 text-[#fffdf5]" />
              {text}
            </span>
          </>
        ))}
      </motion.div>

      {/* 왼쪽 블루 그라데이션 — 폭 크게 */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#364c84] via-[#364c84]/90 to-transparent" />

      {/* 오른쪽 블루 그라데이션 — 폭 크게 */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#364c84] via-[#364c84]/90 to-transparent" />
    </div>
  );
}
