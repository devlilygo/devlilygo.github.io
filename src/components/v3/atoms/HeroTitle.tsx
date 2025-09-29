import classNames from "classnames";
import { motion } from "framer-motion";
import { useRef } from "react";

const lines = [
  ["Hello,", "I'm", "<span class='text-[#95b1ee]'>Lily</span>"],
  ["Frontend", "Developer"],
];

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "justify-center",
    "text-4xl",
    "md:text-6xl",
    "lg:text-8xl",
    "2xl:text-[150px]",
    "font-bold",
    "leading-tight",
    "text-left",
    "pb-16",
    "pt-20",
    "tracking-tighter"
  ),
};

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
      className={style.container}
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
              className="inline-block mx-1 md:mx-2"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
