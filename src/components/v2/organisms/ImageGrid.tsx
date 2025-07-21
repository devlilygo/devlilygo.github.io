"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ImageCard } from "@/components/v2/molecules/ImageCard";
import { ImageViewer } from "@/components/v2/molecules/ImageViewer";
import { motion } from "framer-motion";
import { techStackData } from "@/data/techStackData";

const images = [
  {
    id: 1,
    src: "/images/work1.jpg",
    title: "DASHBOARDS",
    description: techStackData.dashboard,
  },
  {
    id: 2,
    src: "/images/work2.jpg",
    title: "MONITORING SYSTEM",
    description: techStackData.monitoring,
  },
  {
    id: 3,
    src: "/images/work3.jpg",
    title: "FAULT DETECTION CLASSIFICATION",
    description: techStackData.fdc,
  },
  {
    id: 4,
    src: "/images/work4.jpg",
    title: "BILLING SYSTEM",
    description: techStackData.billing,
  },
];

export default function ImageGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-4 p-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }} // ✨ 요기 핵심!
          >
            <ImageCard
              key={img.id}
              id={img.id}
              src={img.src}
              onClick={() => setSelectedId(img.id)}
              title={img.title}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <ImageViewer
            id={selectedId}
            src={images.find((i) => i.id === selectedId)!.src}
            onClose={() => setSelectedId(null)}
            description={images.find((i) => i.id === selectedId)!.description}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
