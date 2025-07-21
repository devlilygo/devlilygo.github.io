"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechStack from "../atoms/TechStack";
import { TechStackType } from "@/data/techStackData";

interface ImageViewerProps {
  id: number;
  src: string;
  onClose: () => void;
  description: TechStackType[];
}

export function ImageViewer({
  id,
  src,
  onClose,
  description,
}: ImageViewerProps) {
  return (
    <motion.div
      layoutId={`image-${id}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-2xl"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div className="h-full w-auto cursor-pointer">
        <Image
          src={src}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-auto object-cover rounded-2xl shadow-2xl"
        />
        {/* 설명 영역 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="absolute h-full w-[70%] top-0 right-0 bottom-4 bg-white/30 backdrop-blur-xl text-black px-4 py-3 rounded-lg items-center justify-center flex"
        >
          <TechStack data={description} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
