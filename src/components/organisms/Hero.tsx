"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSmartVideo } from "@/hooks/useSmartVideo";
import SeoulToTorontoBar from "../molecules/SeoulToTorontoBar";

const videos = [
  "/videos/optimized-bg-seoul.webm",
  "/videos/optimized-bg-toronto.webm",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useSmartVideo(videoRef, current); // 👈 핵심

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-full section-padding flex flex-col items-center justify-center text-center overflow-hidden bg-charcoalGray font-fira">
      <div className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
        <SeoulToTorontoBar />
      </div>

      <video
        key={videos[current]}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src={videos[current]} type="video/webm" />
      </video>

      {/* Name Logo */}
      <div className="absolute z-10 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col text-[100px] lg:text-[300px] text-cloudMist font-bodoni italic"
        >
          <section className="h-[70px] pr-12 lg:h-[470px] lg:pr-72">
            <span className="font-ballet not-italic text-[50px] lg:text-[500px]">
              L
            </span>
            ily
          </section>
          <section className="h-[70px] pl-12 lg:h-[470px] lg:pl-72">
            <span className="font-ballet not-italic text-[50px] lg:text-[500px]">
              G
            </span>
            o
          </section>
        </motion.div>
      </div>

      {/* Subtitle + Buttons */}
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl text-cloudMist hidden lg:block"
        >
          Frontend Developer | Empathetic & Team-spirited | React, TypeScript |
          8y+
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl text-cloudMist block lg:hidden"
        >
          Frontend Developer
          <br />
          Empathetic & Team-spirited
          <br />
          React, TypeScript | 8y+
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 flex gap-4 items-center justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-cloudMist text-charcoalGray rounded-lg font-semibold hover:opacity-50 transition"
          >
            View Projects
          </a>
          <a
            href="/resume_lilygo_202504.pdf"
            target="_blank"
            className="px-6 py-3 border border-gray-400 text-cloudMist rounded-lg hover:bg-gray-100 hover:opacity-50 hover:text-charcoalGray transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-gray-200 animate-bounce cursor-pointer"
      >
        ↓ scroll
      </motion.div>
    </section>
  );
};

export default Hero;
