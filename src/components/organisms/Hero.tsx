"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SeoulToTorontoBar from "../molecules/SeoulToTorontoBar";

const videos = ["/bg-seoul-5s.mp4", "/bg-toronto-5s.mp4"];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000); // 5초마다 전환

    return () => clearInterval(timer);
  }, []); // ← 주의! 여기 의존성 배열에 current 넣으면 꼬임 발생함

  return (
    <section className="relative w-full h-screen section-padding flex flex-col items-center justify-center text-center overflow-hidden bg-charcoalGray font-fira">
      <div className="absolute top-0 left-0 w-full flex justify-center pt-6 z-10">
        <SeoulToTorontoBar />
      </div>

      {/* Background video */}
      <video
        key={videos[current]}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 pointer-events-none"
      >
        <source src={videos[current]} type="video/mp4" />
      </video>

      <div className="absolute z-10 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col text-[300px] text-cloudMist font-bodoni italic"
        >
          <section className="h-[470px] pr-60">
            <span className="font-ballet non-italic text-[500px]">L</span>ily
          </section>
          <section className="h-[470px] pl-60">
            <span className="font-ballet non-italic text-[500px]">G</span>o
          </section>
        </motion.div>
      </div>

      <div className="relative z-10">
        {/* Text content */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-cloudMist text-left"
        >
          <span className="font-ballet">L</span>ily
          <br />
          <span className="font-ballet">G</span>o
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-xl text-cloudMist"
        >
          Frontend Developer | Empathetic & Team-spirited | React, TypeScript |
          8y+
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 flex gap-4 items-center justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-pastelBlue text-cloudMist rounded-lg font-semibold hover:text-charcoalGray hover:opacity-50 transition"
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
      {/* Scroll indicator */}
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
