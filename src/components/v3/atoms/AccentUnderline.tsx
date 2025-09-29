"use client";

import { motion } from "framer-motion";

export const AccentUnderline = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
      }}
      className="relative inline-block font-semibold"
    >
      <motion.span
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e7f1ab] origin-left"
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
};
