"use client";

import { motion } from "framer-motion";
import { HighlightText } from "../atoms/HighlightText";

export const AboutMe = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/aboutme.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70 z-0" />

      <section className="relative z-10 w-full h-screen px-6 md:px-16 text-gray-800 font-fira">
        <div className="min-w-6xl mx-auto h-full flex flex-col justify-center text-center space-y-8 lg:space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bodoni mb-6 italic hidden lg:block"
          >
            <span className="font-ballet not-italic mr-2 text-8xl">A</span>bou
            <span className="font-ballet not-italic mr-2 text-8xl">t</span> M
            <span className="font-ballet not-italic mr-2 text-8xl">e</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bodoni mb-6 italic block lg:hidden"
          >
            <span className="font-ballet not-italic mr-2 text-6xl">A</span>bou
            <span className="font-ballet not-italic mr-2 text-6xl">t</span> M
            <span className="font-ballet not-italic mr-2 text-6xl">e</span>
          </motion.h2>

          <div className="text-xs lg:text-xl italic text-gray-700 text-center max-w-7xl mx-auto leading-relaxed">
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
            <HighlightText color="pink">
              scalable dashboards
            </HighlightText>, <br />
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

          <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-left max-w-6xl space-y-4 lg:text-base hidden lg:block">
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

            <div className="text-center max-w-6xl space-y-4 text-xs block lg:hidden">
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
          </div>
        </div>
      </section>
    </section>
  );
};
