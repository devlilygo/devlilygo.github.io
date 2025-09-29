"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
// import Image from "next/image";

interface ImageCardProps {
  id?: number;
  src: string;
  onClick?: () => void;
  title: string;
}

const style = {
  cards: classNames(
    "flex",
    "w-full",
    "h-full",
    "rounded-ss-full",
    "rounded-se-full",
    "bg-[#fffdf5]",
    "items-center",
    "justify-center",
    "bg-center",
    "bg-cover",
    "border-8",
    "border-[#fffdf5]",
    "cursor-none"
  ),
  overlay: classNames(
    "absolute",
    "inset-0",
    "bg-black/30",
    "backdrop-blur-md",
    "opacity-0",
    "group-hover:opacity-100",
    "transition-opacity",
    "duration-300",
    "rounded-ss-full",
    "rounded-se-full",
    "m-2",
    "cursor-none"
  ),
  overlayText: classNames(
    "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100",
    "transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-[#fffdf5]",
    "text-sm",
    "md:text-2xl font-medium pointer-events-none",
    "text-balance",
    "text-center"
  ),
};

export function ImageCard({ id, src, onClick, title }: ImageCardProps) {
  return (
    <motion.div
      layoutId={`image-${id}`}
      onClick={onClick}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
      className="relative group flex h-full w-full"
    >
      <div
        className={style.cards}
        style={{ backgroundImage: `url(${src})` }}
      ></div>

      {/* 오버레이 */}
      <div className={style.overlay} />

      {/* 텍스트 */}
      <div className={style.overlayText}>{title ?? "설명 텍스트"}</div>
    </motion.div>
  );
}
