"use client";

import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section
      className="relative w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/aboutme.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/70 z-0" />

      <section className="relative z-10 w-full h-screen px-6 md:px-16 text-gray-800 font-fira">
        <div className="min-w-6xl mx-auto h-full flex flex-col justify-center text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-bodoni mb-6 italic"
          >
            <span className="font-ballet non-italic mr-2">A</span>bou
            <span className="font-ballet non-italic mr-2">t</span> M
            <span className="font-ballet non-italic mr-2">e</span>
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-xl italic text-gray-700 text-center max-w-7xl mx-auto leading-relaxed"
          >
            &quot;I&#39;m a frontend developer with 8+ years of experience,
            specializing in scalable, data-driven UIs.&quot; <br />
            <br />
            &quot;I&#39;m familiar with working in environments that handle over
            20 million user records
            <br />— where scale, structure, and performance truly matter.&quot;
            <br />
            <br />
            &quot;From data modeling to scalable dashboards, <br />
            I&#39;ve transformed complex semiconductor data into meaningful
            insights.&quot; <br />
            <br />
            &quot;I strive to bridge data and experience through thoughtful
            interfaces.&quot;
          </motion.blockquote>

          <div className="pt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-left max-w-6xl space-y-4 text-base">
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
        </div>
      </section>
    </section>
  );
};
