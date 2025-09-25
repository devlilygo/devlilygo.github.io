"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const items = ["Hello, I'm Lily", "Frontend Developer", "Micro-UX Lover"];
  const track = [...items, ...items]; // 두 번 이어붙여 끊김 제거

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {track.map((t, i) => (
          <span key={i} className="text-2xl font-semibold">
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
