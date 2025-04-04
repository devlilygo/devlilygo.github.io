export interface WorkHistory {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export const workHistory: WorkHistory[] = [
  {
    id: 1,
    company: "BRIQUE",
    role: "Frontend Developer",
    period: "2020.09 – 2024.02",
    description: `Built dashboards to display semiconductor process data for fault detection and analytics.

[Achievements]
● Built dashboards to visualize semiconductor process data, enabling fault detection and predictive analytics to improve yield.
● Developed Virtual Metrology solutions with React, TypeScript, and Next.js, optimizing production processes for higher yield.
● Created Fault Detection tools using Vue and Node.js to monitor and address issues impacting yield and effi ciency.
● Led frontend development of a monitoring solution for small manufacturers, completing design, architecture, and MVP stages.
● Delivered 6-12 month projects for SK Hynix, SK On, and Samsung, translating algorithms into production-ready tools.`,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
      "Data Visualization",
      "Scalable UI/UX",
      "Dashboard",
    ],
  },
  {
    id: 2,
    company: "Daewon C&C",
    role: "Junior FE & BE Developer",
    period: "2016.10 – 2020.08",
    description: `Managed billing systems for 20 million users and supported system upgrades.

[Achievements]
● Managed billing systems for 20 million users with Pro*C batch programs and Oracle databases, ensuring stable operations.
● Deployed monthly feature updates to enhance system functionality and meet client requirements.
● Integrated next-generation features into existing infrastructure, minimizing disruptions.
● Maintained Oracle databases, processing and ensuring accuracy for large-scale customer data.`,
    skills: ["C", "Pro*C", "Oracle", "Javascript", "System Operations"],
  },
];
