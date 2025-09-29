"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LiquidGlass } from "./LiquidGlass/LiquidGlass";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 커서 숨기기 */}
      <div className="cursor-none">{/* 내용 */}</div>

      {/* 원 커서 */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none "
        animate={{ x: pos.x - 25, y: pos.y - 25 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <LiquidGlass
          width={70}
          height={70}
          radius={100}
          depth={5}
          blur={0.5}
          chromaticAberration={10}
          debug={false}
        ></LiquidGlass>
      </motion.div>
    </>
  );
};

export default CustomCursor;
