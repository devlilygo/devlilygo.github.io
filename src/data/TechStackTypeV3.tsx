import { AccentUnderline } from "@/components/v3/atoms/AccentUnderline";
import { HighlightText } from "@/components/v3/atoms/HighlightText";
import React from "react";

export type TechStackTypeV3 = {
  category: string;
  // items: { name: string; description: string }[];
  items: { name: string; description: string | React.ReactNode }[];
};

export const techStackTypeV3 = {
  dashboard: [
    {
      category: "Summary",
      items: [
        {
          name: "",
          description: (
            <span>
              Built
              <HighlightText>
                a scalable monitoring dashboard
              </HighlightText>{" "}
              for&nbsp;
              <AccentUnderline>small manufacturers</AccentUnderline>,
              <br />
              focusing on <b>real-time data visualization</b> and&nbsp;
              <b>modular architecture</b>
            </span>
          ),
        },
      ],
    },
    {
      category: "🔧 Framework",
      items: [
        {
          name: "React",
          description: "SPA-based UI rendering and component architecture",
        },
        {
          name: "Next.js",
          description: "Optimized routing and server-side rendering support",
        },
      ],
    },
    {
      category: "📡 Data Handling",
      items: [
        {
          name: "React Query",
          description: "Async data fetching, caching, and syncing",
        },
        {
          name: "GraphQL API",
          description: "Efficient, schema-based data querying",
        },
      ],
    },
    {
      category: "🎨 UI & Styling",
      items: [
        {
          name: "Tailwind CSS",
          description: "Utility-first responsive styling system",
        },
        {
          name: "Shadcn/UI",
          description: "Accessible component library based on Radix & Tailwind",
        },
      ],
    },
    {
      category: "🧩 Design Architecture",
      items: [
        {
          name: "Atomic Design",
          description: "Component-level structure for scalable UI",
        },
        {
          name: "Reusable Components",
          description: "Shared UI elements for maintainability",
        },
      ],
    },
    {
      category: "👥 Collaboration & Workflow",
      items: [
        {
          name: "Agile Sprint",
          description: "Stand-ups, sprints, and retrospectives",
        },
        {
          name: "Gantt Charts & Task Management",
          description: "Timeline tracking with Notion & Jira",
        },
      ],
    },
  ],
  monitoring: [
    {
      category: "Summary",
      items: [
        {
          name: "",
          description: (
            <span>
              Developed
              <HighlightText>a modular monitoring system </HighlightText>
              <br />
              for major semiconductor clients
              <br />
              such as&nbsp;
              <AccentUnderline>SK Hynix, Samsung and SK ON</AccentUnderline>
              <br />
              with <b>real-time data display</b> and <b>status tracking</b>
            </span>
          ),
        },
      ],
    },
    {
      category: "🔧 Framework",
      items: [
        {
          name: "React",
          description: "Component-driven architecture for monitoring UI",
        },
      ],
    },
    {
      category: "📡 Data Handling",
      items: [
        {
          name: "REST API",
          description: "Fetched sensor and status data from backend",
        },
      ],
    },
    {
      category: "🎨 UI & Styling",
      items: [
        {
          name: "SCSS",
          description: "Custom styles for layout and alert indicators",
        },
      ],
    },
    {
      category: "🧩 Design Architecture",
      items: [
        {
          name: "Reusable Widgets",
          description: "Status cards, logs, and overview panels",
        },
        {
          name: "Responsive Layout",
          description: "Grid-based layout adaptable to different screen sizes",
        },
      ],
    },
    {
      category: "👥 Collaboration & Workflow",
      items: [
        {
          name: "Stakeholder Feedback",
          description: "Iterated based on operator and engineer input",
        },
      ],
    },
  ],
  fdc: [
    {
      category: "Summary",
      items: [
        {
          name: "",
          description: (
            <span>
              Built
              <HighlightText>
                a fault detection and classification UI
              </HighlightText>
              <br />
              for major semiconductor clients <br /> such as&nbsp;
              <AccentUnderline>SK Hynix, Samsung and SK ON</AccentUnderline>
              <br />
              with <b>real-time visualization</b> and <b>modular components</b>
            </span>
          ),
        },
      ],
    },
    {
      category: "🔧 Framework",
      items: [
        {
          name: "React",
          description: "Component-based fault monitoring UI",
        },
      ],
    },
    {
      category: "📡 Data Handling",
      items: [
        {
          name: "REST API",
          description: "Fetched fault logs and classification data",
        },
        {
          name: "Dynamic Filtering",
          description: "Condition-based fault filtering logic",
        },
      ],
    },
    {
      category: "🎨 UI & Styling",
      items: [
        {
          name: "SCSS",
          description: "Modular styles for layout and status UI",
        },
      ],
    },
    {
      category: "🧩 Design Architecture",
      items: [
        {
          name: "Reusable Components",
          description: "Alert cards, tables, and status badges",
        },
        {
          name: "Stateful Logic",
          description: "Encapsulated detection and filtering logic",
        },
      ],
    },
    {
      category: "👥 Collaboration & Workflow",
      items: [
        {
          name: "Independent Delivery",
          description: "Integrated into legacy system independently",
        },
        {
          name: "Feedback Iteration",
          description: "Improved UX based on operator feedback",
        },
      ],
    },
  ],
  billing: [
    {
      category: "Summary",
      items: [
        {
          name: "",
          description: (
            <span>
              Operated and maintained
              <HighlightText>a legacy billing system</HighlightText>
              of&nbsp;&nbsp;
              <AccentUnderline>SK Telecom</AccentUnderline>
              <br /> with <b>monthly feature updates</b>,
              <b>batch program development</b>,
              <br />
              and <b>client-specific customizations</b>.
            </span>
          ),
        },
      ],
    },
    {
      category: "🔧 Core Technologies",
      items: [
        {
          name: "Pro*C",
          description:
            "Developed and maintained batch programs for billing automation",
        },
        {
          name: "Oracle SQL",
          description:
            "Handled complex data queries and procedure-level updates",
        },
        {
          name: "JavaScript",
          description: "Implemented and modified UI-level billing screens",
        },
      ],
    },
    {
      category: "📦 System Operations",
      items: [
        {
          name: "Batch Program Management",
          description: "Scheduled, tested, and updated billing batch jobs",
        },
        {
          name: "Legacy System Maintenance",
          description:
            "Stabilized and extended core business logic across modules",
        },
      ],
    },
    {
      category: "👥 Collaboration",
      items: [
        {
          name: "Client-Driven Development",
          description: "Delivered monthly custom features per client requests",
        },
        {
          name: "Continuous Maintenance",
          description: "Provided ongoing enhancements and bug fixes",
        },
      ],
    },
  ],
};
