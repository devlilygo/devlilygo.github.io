export type TechStackType = {
  category: string;
  items: { name: string; description: string }[];
};

export const techStackData = {
  dashboard: [
    {
      category: "Summary",
      items: [
        {
          name: "",
          description: `Built a scalable monitoring dashboard for small manufacturers,
            focusing on real-time data visualization and modular architecture`,
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
          description: `Developed a modular monitoring system for major semiconductor clients
            such as SK Hynix, Samsung and SK ON
            with real-time data display and status tracking`,
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
          description: `Built a fault detection and classification UI for major semiconductor clients
            such as SK Hynix, Samsung and SK ON
            with real-time visualization and modular components`,
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
          description: `Operated and maintained a legacy billing system with monthly feature updates,
            batch program development, and client-specific customizations.`,
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
