"use client";

import classNames from "classnames";
import MarqueeSkills from "../atoms/MarqueeSkills";
import { ImageCard } from "../molecules/ImageCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CircleX } from "lucide-react";
import TechStack from "../atoms/TechStack";
import { techStackTypeV3 } from "@/data/TechStackTypeV3";
// import { ImageViewer } from "../molecules/ImageViewer";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-evenly",
    "bg-[#d0d9f5]",
    "p-12"
  ),
  title: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "justify-center",
    "text-[140px]",
    "leading-none",
    "tracking-[-0.1em]",
    "font-extralight",
    "pl-56",
    "pt-80",
    "pb-24",
    "border"
    // "border-black"
  ),
};

const WorksItems = [
  {
    id: 0,
    title: "Dashboards",
    src: "/images/work1.jpg",
    description: techStackTypeV3.dashboard,
  },
  {
    id: 1,
    title: "Monitoring System",
    src: "/images/work2.jpg",
    description: techStackTypeV3.monitoring,
  },
  {
    id: 2,
    title: "Fault Detection & Classification",
    src: "/images/work3.jpg",
    description: techStackTypeV3.fdc,
  },
  {
    id: 3,
    title: "Billing System",
    src: "/images/work4.jpg",
    description: techStackTypeV3.billing,
  },
];

const Works = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className={style.container}>
      <div className="relative flex w-full h-1/4 overflow-x-hidden items-center justify-center">
        <MarqueeSkills />
      </div>
      <div className="flex w-full h-3/4 items-center justify-center gap-6 px-20 pt-4 pb-20">
        {WorksItems.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: item.id * 0.1,
            }}
            viewport={{ once: false, amount: 0.8 }}
            className="relative flex w-full h-full"
          >
            <ImageCard src={item.src} title={item.title} />
          </motion.div>
        ))}
      </div>

      {/* 🔑 오버레이는 map 밖에 단 하나만 */}
      <AnimatePresence mode="wait" initial={false}>
        {selectedId !== null && (
          <motion.div key={selectedId}>
            {/* 첫 번째 레이어 */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0,
              }}
              className="fixed top-0 left-0 w-full h-full bg-[#95b1ee] z-40"
            />

            {/* 두 번째 레이어 */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="fixed top-0 left-0 w-full h-full bg-[#364c84] z-50 flex flex-col items-center justify-between text-[#fffdf5] cursor-default"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="h-full w-1/2 text-[140px] font-bold items-start justify-center text-wrap leading-[0.8] tracking-tighter">
                  {WorksItems[selectedId].title}
                </div>
                <div className="h-full w-1/2 flex items-center justify-center pl-10 pr-20">
                  <TechStack data={WorksItems[selectedId].description} />
                </div>
              </div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="flex w-fit h-fit items-center justify-center"
              >
                <CircleX
                  onClick={() => setSelectedId(null)}
                  className="fixed bottom-10 text-[#fffdf5] w-10 h-10 cursor-pointer hover:scale-125"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Works;
