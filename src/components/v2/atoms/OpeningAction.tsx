"use client";

import { motion } from "framer-motion";

const transition = { duration: 1.7, ease: "easeInOut", delay: 0.4 };

export default function OpeningAction() {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0,
          x: 50,
        }}
        transition={{
          duration: 1.2,
          opacity: { duration: 1.2, ease: "easeInOut", delay: 0.4 },
          x: { duration: 1.2, ease: "easeInOut", delay: 0.4 },
        }}
        className="text-[200px] font-thin tracking-wide font-jost min-h-[80px]"
      >
        Lily Go
      </motion.h1>
    </motion.div>
  );
}
