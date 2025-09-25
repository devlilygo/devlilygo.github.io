import { motion } from "framer-motion";
import { useRef } from "react";

const lines = [
  ["Hello,", "I'm", "<span class='text-[#95b1ee]'>Lily</span>"],
  ["Frontend", "Developer"],
];

export default function HeroTitle() {
  const boundsRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={boundsRef}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="flex flex-col justify-center sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight text-left py-20"
    >
      {lines.map((line, i) => (
        <div key={i} className="mb-2">
          {line.map((word, j) => (
            <motion.span
              key={j}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block mx-2"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
