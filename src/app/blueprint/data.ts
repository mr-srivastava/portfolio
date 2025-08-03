import { BlueprintPageData } from "./types";

export const blueprintData: BlueprintPageData = {
  hero: {
    name: {
      first: "Aadarsh",
      last: "Srivastava",
    },
    role: "App and Web Developer",
    status: {
      isOnline: true,
      message: "STATUS: ONLINE",
    },
    techStack: [
      { icon: "Monitor", label: "Frontend" },
      { icon: "Server", label: "Backend" },
      { icon: "Cloud", label: "DevOps" },
    ],
  },
  projects: [
    {
      id: "A1",
      title: "Quantum Dashboard",
      description:
        "Real-time data visualization platform with advanced analytics and machine learning integration.",
      tech: ["React", "TypeScript", "D3.js", "Python"],
      year: "2024",
      status: "Production",
      type: "Web Application",
    },
    {
      id: "B2",
      title: "Neural Network API",
      description:
        "High-performance REST API for machine learning model deployment and inference.",
      tech: ["Node.js", "TensorFlow", "Docker", "AWS"],
      year: "2024",
      status: "Active",
      type: "Backend Service",
    },
    {
      id: "C3",
      title: "Blockchain Explorer",
      description:
        "Comprehensive blockchain data explorer with real-time transaction monitoring.",
      tech: ["Vue.js", "Web3.js", "MongoDB", "Redis"],
      year: "2023",
      status: "Archived",
      type: "DApp",
    },
    {
      id: "D4",
      title: "IoT Control System",
      description:
        "Industrial IoT management platform for smart manufacturing environments.",
      tech: ["React Native", "MQTT", "PostgreSQL", "Kubernetes"],
      year: "2023",
      status: "Maintenance",
      type: "Mobile App",
    },
  ],
  techStack: {
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind"],
        level: 95,
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
        level: 90,
      },
      {
        category: "Cloud",
        items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        level: 85,
      },
      {
        category: "Mobile",
        items: ["React Native", "Flutter", "Swift", "Kotlin"],
        level: 80,
      },
    ],
    devEnvironment: {
      system: {
        os: "macOS Sonoma 14.2",
        ide: "VS Code, WebStorm",
        terminal: "iTerm2 + Oh My Zsh",
        versionControl: "Git + GitHub",
        packageManager: "npm, yarn, pnpm",
      },
      tools: [
        "VS Code",
        "Git",
        "Figma",
        "Postman",
        "Jira",
        "Slack",
        "Linear",
        "Notion",
      ],
      currentFocus: [
        "Advanced React Patterns & Performance",
        "Microservices Architecture",
        "Machine Learning Integration",
        "Web3 & Blockchain Development",
      ],
    },
  },
  contact: {
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: [
      { platform: "GitHub", icon: "Github" },
      { platform: "LinkedIn", icon: "Linkedin" },
      { platform: "Twitter", icon: "Twitter" },
      { platform: "Email", icon: "Mail" },
    ],
    status: {
      isAvailable: true,
      message: "Currently open to new opportunities and collaborations.",
      responseTime: "< 24 hours",
    },
  },
};
