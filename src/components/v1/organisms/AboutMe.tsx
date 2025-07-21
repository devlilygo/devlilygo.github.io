"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { HighlightText } from "../atoms/HighlightText";

// styles
const style = {
  container: classNames(
    "relative",
    "w-full",
    "bg-cover",
    "bg-center",
    "bg-no-repeat"
  ),
  backgroundImage: classNames("absolute", "inset-0", "bg-white/70", "z-0"),
  mainContainer: classNames(
    "absolute",
    "inset-0",
    "z-10",
    "w-full",
    "h-screen",
    "px-6",
    "md:px-16",
    "text-gray-800",
    "font-fira",
    "min-w-6xl",
    "mx-auto",
    "h-full",
    "flex",
    "flex-col",
    "justify-center",
    "text-center",
    "space-y-8",
    "lg:space-y-10"
  ),
  titleArea: classNames(
    "text-7xl",
    "font-bodoni",
    "mb-6",
    "italic",
    "hidden",
    "lg:block"
  ),
  titleAreaMobile: classNames(
    "text-4xl",
    "font-bodoni",
    "mb-6",
    "italic",
    "block",
    "lg:hidden"
  ),
  capitalSize: classNames("font-ballet", "not-italic", "mr-2", "text-6xl"),
  descriptionArea: classNames(
    "text-xs",
    "lg:text-xl",
    "italic",
    "text-gray-700",
    "text-center",
    "max-w-7xl",
    "mx-auto",
    "leading-relaxed"
  ),
  keypointsArea: classNames(
    "pt-8",
    "flex",
    "flex-col",
    "md:flex-row",
    "gap-6",
    "justify-center",
    "items-center"
  ),
  keyDescriptionMobile: classNames(
    "text-center",
    "max-w-6xl",
    "space-y-4",
    "text-xs",
    "block",
    "lg:hidden"
  ),
  keyDescription: classNames(
    "text-left",
    "max-w-6xl",
    "space-y-4",
    "lg:text-base",
    "hidden",
    "lg:block"
  ),
};

export const AboutMe = () => {
  return (
    <section
      className={style.container}
      style={{ backgroundImage: "url('/images/aboutme.jpg')" }}
    >
      <div className={style.backgroundImage} />

      <section className={style.mainContainer}>
        {/* NOTE - Mobile Version (default) */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={style.titleAreaMobile}
        >
          <span className={style.capitalSize}>A</span>bou
          <span className={style.capitalSize}>t</span> M
          <span className={style.capitalSize}>e</span>
        </motion.h2>

        {/* NOTE - Web Version */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={style.titleArea}
        >
          <span className={style.capitalSize}>A</span>bou
          <span className={style.capitalSize}>t</span> M
          <span className={style.capitalSize}>e</span>
        </motion.h2>

        <div className={style.descriptionArea}>
          &quot;I&#39;m a frontend developer with 8+ years of experience,
          specializing in&nbsp;
          <HighlightText color="yellow">scalable</HighlightText>,&nbsp;
          <HighlightText color="pink">data-driven</HighlightText>
          &nbsp;UIs.&quot; <br />
          <br />
          &quot;I&#39;m familiar with working in environments that handle
          over&nbsp;
          <HighlightText color="blue">20 million</HighlightText> user records
          <br />— where&nbsp;
          <HighlightText color="yellow">
            scale, structure, and performance
          </HighlightText>
          &nbsp;truly matter.&quot;
          <br />
          <br />
          &quot;From&nbsp;
          <HighlightText color="yellow">data modeling</HighlightText> to&nbsp;
          <HighlightText color="pink">scalable dashboards</HighlightText>,{" "}
          <br />
          I&#39;ve transformed complex&nbsp;
          <HighlightText color="blue">semiconductor data</HighlightText> into
          meaningful insights.&quot; <br />
          <br />
          &quot;I strive to bridge&nbsp;
          <HighlightText color="blue">data</HighlightText> and&nbsp;
          <HighlightText color="pink">experience</HighlightText>
          &nbsp;through&nbsp;
          <HighlightText color="yellow">thoughtful interfaces</HighlightText>
          .&quot;
        </div>

        <div className={style.keypointsArea}>
          {/* NOTE - Mobile Version (default) */}
          <div className={style.keyDescriptionMobile}>
            <p>
              🧠 <strong>Strengths</strong>
              <br />
              Empathy, team collaboration, UI-first thinking
            </p>
            <p>
              💼 <strong>Career</strong>
              <br />4 years backend → 4 years frontend
            </p>
            <p>
              🌍 <strong>Location</strong>
              <br />
              Based in Toronto, open to hybrid/remote roles
            </p>
            <p>
              🎯 <strong>Mission</strong>
              <br />
              Designing experiences <br />
              that feel as good as they function
            </p>
          </div>

          {/* NOTE - Web Version */}
          <div className={style.keyDescription}>
            <p>
              🧠 <strong>Strengths:</strong> Empathy, team collaboration,
              UI-first thinking
            </p>
            <p>
              💼 <strong>Career:</strong> 4 years backend → 4 years frontend
            </p>
            <p>
              🌍 <strong>Location:</strong> Based in Toronto, open to
              hybrid/remote roles
            </p>
            <p>
              🎯 <strong>Mission:</strong> Designing experiences that feel as
              good as they function
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
