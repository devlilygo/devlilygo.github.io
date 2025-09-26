"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiReactquery,
  SiGraphql,
  SiStorybook,
  SiChartdotjs,
  SiEslint,
  SiPostman,
  SiVercel,
  SiPrettier,
  SiSupabase,
  SiAxios,
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";

export default function Marquee() {
  // 문자열 대신 컴포넌트 배열
  const items = [
    { icon: <FaReact style={{ color: "#61DAFB" }} />, label: "React" },
    { icon: <SiNextdotjs style={{ color: "#000000" }} />, label: "Next.js" },
    {
      icon: <SiTypescript style={{ color: "#3178C6" }} />,
      label: "TypeScript",
    },
    {
      icon: <SiJavascript style={{ color: "#F7DF1E" }} />,
      label: "JavaScript",
    },
    { icon: <FaHtml5 style={{ color: "#E34F26" }} />, label: "HTML5" },
    { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, label: "CSS3" },
    {
      icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
      label: "Tailwind CSS",
    },
    { icon: <SiFramer style={{ color: "#0055FF" }} />, label: "Framer Motion" },
    {
      icon: <SiReactquery style={{ color: "#FF4154" }} />,
      label: "React Query",
    },
    { icon: <SiGraphql style={{ color: "#E10098" }} />, label: "GraphQL API" },
    { icon: <FaNodeJs style={{ color: "#339933" }} />, label: "Node.js" },
    { icon: <SiAxios style={{ color: "#5A29E4" }} />, label: "Axios" },
    { icon: <SiStorybook style={{ color: "#FF4785" }} />, label: "Storybook" },
    { icon: <SiChartdotjs style={{ color: "#FF6384" }} />, label: "Chart.js" },
    { icon: <FaGitAlt style={{ color: "#F05032" }} />, label: "Git" },
    { icon: <FaGithub style={{ color: "#181717" }} />, label: "GitHub" },
    { icon: <SiEslint style={{ color: "#4B32C3" }} />, label: "ESLint" },
    { icon: <SiPrettier style={{ color: "#F7B93E" }} />, label: "Prettier" },
    { icon: <SiPostman style={{ color: "#FF6C37" }} />, label: "Postman" },
    { icon: <SiVercel style={{ color: "#000000" }} />, label: "Vercel" },
    { icon: <FaFigma style={{ color: "#F24E1E" }} />, label: "Figma" },
    { icon: <SiSupabase style={{ color: "#3ECF8E" }} />, label: "Supabase" },
    { icon: <MdOutlineApi style={{ color: "#0284C7" }} />, label: "REST API" },
  ];

  const track = Array(3).fill(items).flat();

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 text-xl font-semibold"
          >
            {item.icon} {item.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
