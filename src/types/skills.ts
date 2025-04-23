export type Skill = {
  name: string;
  description: string;
  category: string;
  color: string;
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    description: "Component-based UI",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "Next.js",
    description: "App Router & SSR",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "TypeScript",
    description: "Typed JS for safe dev",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "JavaScript",
    description: "Core scripting language",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "HTML5",
    description: "Semantic markup",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "CSS3",
    description: "Modern layouts & styling",
    category: "Frontend",
    color: "#C2E7FF",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling",
    category: "Frontend",
    color: "#C2E7FF",
  },

  // Animation/UI
  {
    name: "Framer Motion",
    description: "Micro-interactions & animation",
    category: "Animation/UI",
    color: "#D9D9F3",
  },
  {
    name: "Chart.js",
    description: "Beautiful charts",
    category: "Animation/UI",
    color: "#D9D9F3",
  },
  {
    name: "Storybook",
    description: "Component library explorer",
    category: "Animation/UI",
    color: "#D9D9F3",
  },

  // State/Logic
  {
    name: "React Query",
    description: "Server state manager",
    category: "State/Logic",
    color: "#FBD6E3",
  },

  // DevOps/Tools
  {
    name: "Git",
    description: "Version control system",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },
  {
    name: "GitHub",
    description: "Code collaboration",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },
  {
    name: "Vercel",
    description: "Frontend deployments",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },
  {
    name: "Prettier",
    description: "Code formatting",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },
  {
    name: "ESLint",
    description: "Code linting",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },
  {
    name: "Postman",
    description: "API testing tool",
    category: "DevOps/Tools",
    color: "#FFF5BA",
  },

  // Design
  {
    name: "Figma",
    description: "UI design & prototyping",
    category: "Design",
    color: "#FFE0C7",
  },

  // Backend/Infra
  {
    name: "Supabase",
    description: "Postgres + Auth + Storage",
    category: "Backend/Infra",
    color: "#DFF5FF",
  },
  {
    name: "Axios",
    description: "HTTP client",
    category: "Backend/Infra",
    color: "#DFF5FF",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime",
    category: "Backend/Infra",
    color: "#DFF5FF",
  },
  {
    name: "REST API",
    description: "Resource-based API design",
    category: "Backend/Infra",
    color: "#DFF5FF",
  },
  {
    name: "GraphQL API",
    description: "Query-based data access",
    category: "Backend/Infra",
    color: "#DFF5FF",
  },
];
