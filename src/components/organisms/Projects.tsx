"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GlowText } from "../atoms/GlowText";
import { useSmartVideo } from "@/hooks/useSmartVideo";

const projects = [
  {
    id: 0,
    title: "Enterprise Billing System Optimization",
    description: [
      [
        "📡 Optimized a nationwide telecom billing system for over ",
        <GlowText key="user">20M users</GlowText>,
        " at ",
        <GlowText key="sk">SK Telecom</GlowText>,
        "\n\n",
      ],
      [
        "⚙️ Led monthly deployments, managed ",
        <GlowText key="oracle">Oracle-based batch jobs</GlowText>,
        ", and maintained legacy systems using ",
        <GlowText key="proc">Pro*C</GlowText>,
        "\n\n",
      ],
      [
        "🔧 Collaborated with internal teams to improve ",
        <GlowText key="reliability">reliability</GlowText>,
        " and migrated infrastructure for future ",
        <GlowText key="scalability">scalability</GlowText>,
        "\n\n",
      ],
    ],
    video: "/videos/optimized-telecom-bg.webm",
  },
  {
    id: 1,
    title: "Data-Driven Manufacturing Dashboard Engineering",
    description: [
      [
        "🧪 Built ",
        <GlowText key="fd">fault detection dashboards</GlowText>,
        " and virtual metrology tools for clients like ",
        <GlowText key="hynix">SK Hynix</GlowText>,
        ", ",
        <GlowText key="on">SK ON</GlowText>,
        " and ",
        <GlowText key="samsung">Samsung</GlowText>,
        "\n\n",
      ],
      [
        "📊 Transformed ",
        <GlowText key="stats">statistical algorithms</GlowText>,
        " into interactive ",
        <GlowText key="dashboard">data-driven dashboards</GlowText>,
        " using ",
        <GlowText key="react">React</GlowText>,
        <GlowText key="ts">TypeScript</GlowText>,
        " and ",
        <GlowText key="next">Next.js</GlowText>,
        "\n\n",
      ],
      [
        "💡 Enhanced ",
        <GlowText key="productivity">productivity</GlowText>,
        " and ",
        <GlowText key="decision">decision-making</GlowText>,
        " through scalable UIs visualizing ",
        <GlowText key="realtime">real-time process data</GlowText>,
        "\n\n",
      ],
    ],
    video: "/videos/optimized-semiconductor-bg.webm",
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useSmartVideo(videoRef, selected); // 👈 핵심

  return (
    <section className="relative h-screen w-full overflow-hidden text-white font-fira">
      <video
        key={projects[selected].video}
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={projects[selected].video}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />

      <div className="absolute inset-0 bg-charcoalGray/90 z-0" />
      {/* 📄 내용 */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center min-w-3xl mx-auto gap-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl mb-6 drop-shadow-lg font-bebas italic"
        >
          {projects[selected].title}
        </motion.h2>

        <motion.p
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl whitespace-pre-line leading-relaxed mb-8 drop-shadow gap-y-3"
        >
          {projects[selected].description}
        </motion.p>

        <div className="flex gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelected(index)}
              className={`px-4 py-2 rounded-full border ${
                selected === index
                  ? "bg-white text-black font-semibold scale-105"
                  : "bg-white/20 text-white hover:bg-white/30"
              } transition-all duration-300`}
            >
              {project.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
