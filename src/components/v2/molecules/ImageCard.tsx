"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageCardProps {
  id: number;
  src: string;
  onClick: () => void;
  title?: string;
}

export function ImageCard({ id, src, onClick, title }: ImageCardProps) {
  return (
    <motion.div
      layoutId={`image-${id}`}
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-xl"
    >
      <Image
        src={src}
        alt=""
        width={600}
        height={300}
        className="w-[600px] h-[300px] object-cover object-center rounded-xl"
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-white text-lg font-medium pointer-events-none">
        {title ?? "설명 텍스트"}
      </div>
    </motion.div>
  );
}
