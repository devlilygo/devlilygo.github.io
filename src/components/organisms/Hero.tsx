"use client";

import { useSmartVideo } from "@/hooks/useSmartVideo";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SeoulToTorontoBar from "../molecules/SeoulToTorontoBar";

// video sources
const videos = [
  "/videos/optimized-bg-seoul.webm",
  "/videos/optimized-bg-toronto.webm",
];

// styles
const style = {
  container: classNames(
    "relative",
    "w-full",
    "h-full",
    "section-padding",
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "text-center",
    "overflow-hidden",
    "bg-charcoalGray",
    "font-fira"
  ),
  routeArea: classNames(
    "absolute",
    "top-0",
    "left-0",
    "w-full",
    "flex",
    "justify-center",
    "pt-6",
    "z-10"
  ),
  videoArea: classNames(
    "absolute",
    "inset-0",
    "w-full",
    "h-full",
    "object-cover",
    "z-0",
    "opacity-30",
    "pointer-events-none"
  ),
  nameArea: classNames("absolute z-10 pointer-events-none select-none"),
  innerNameArea: classNames(
    "flex",
    "flex-col",
    "text-[100px]",
    "lg:text-[300px]",
    "text-cloudMist",
    "font-bodoni",
    "italic"
  ),
  nameSize: classNames("h-[70px]"),
  capitalSize: classNames(
    "font-ballet",
    "not-italic",
    "text-[50px]",
    "lg:text-[500px]"
  ),
  subtitleArea: classNames("relative", "z-10"),
  descriptionArea: classNames(
    "mt-4",
    "text-xl",
    "text-cloudMist",
    "hidden",
    "lg:block"
  ),
  descriptionAreaMobile: classNames(
    "mt-4 text-xl",
    "text-cloudMist",
    "block",
    "lg:hidden"
  ),
  buttonArea: classNames(
    "mt-8",
    "flex",
    "gap-4",
    "items-center",
    "justify-center"
  ),
  projectsButton: classNames(
    "px-6",
    "py-3",
    "bg-cloudMist",
    "text-charcoalGray",
    "rounded-lg",
    "font-semibold",
    "hover:opacity-50",
    "transition"
  ),
  resumeButton: classNames(
    "px-6",
    "py-3",
    "border",
    "border-gray-400",
    "text-cloudMist",
    "rounded-lg",
    "hover:bg-gray-100",
    "hover:opacity-50",
    "hover:text-charcoalGray",
    "transition"
  ),
  scrollIndicator: classNames(
    "absolute",
    "bottom-6",
    "text-gray-200",
    "animate-bounce",
    "cursor-pointer"
  ),
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useSmartVideo(videoRef, current);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={style.container}>
      {/* Airplane Animation */}
      <div className={style.routeArea}>
        <SeoulToTorontoBar />
      </div>
      {/* Video Background */}
      <video
        key={videos[current]}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="none"
        className={style.videoArea}
      >
        <source src={videos[current]} type="video/webm" />
      </video>

      {/* Name Logo */}
      <div className={style.nameArea}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={style.innerNameArea}
        >
          <section
            className={classNames(
              style.nameSize,
              "pr-12",
              "lg:h-[470px]",
              "lg:pr-72"
            )}
          >
            <span className={style.capitalSize}>L</span>
            ily
          </section>
          <section
            className={classNames(
              style.nameSize,
              "pl-12",
              "lg:h-[470px]",
              "lg:pl-72"
            )}
          >
            <span className={style.capitalSize}>G</span>o
          </section>
        </motion.div>
      </div>

      {/* Subtitle + Buttons */}
      <div className={style.subtitleArea}>
        {/* NOTE - Mobile Version (default) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={style.descriptionAreaMobile}
        >
          Frontend Developer
          <br />
          Empathetic & Team-spirited
          <br />
          React, TypeScript | 8y+
        </motion.p>

        {/* NOTE - Web Version */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={style.descriptionArea}
        >
          Frontend Developer | Empathetic & Team-spirited | React, TypeScript |
          8y+
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={style.buttonArea}
        >
          <a href="#projects" className={style.projectsButton}>
            View Projects
          </a>
          <a
            href="/resume_lilygo_202504.pdf"
            target="_blank"
            className={style.resumeButton}
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
        className={style.scrollIndicator}
      >
        ↓ scroll
      </motion.div>
    </section>
  );
};

export default Hero;
