export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  type: "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";
  description: string;
  tech?: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Acme Corp",
    companyUrl: "https://example.com",
    period: "Jun 2025 – Aug 2025",
    location: "Remote",
    type: "Internship",
    description:
      "Built and shipped new product features using React and Node.js. Collaborated with senior engineers on system design and code reviews.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "Jan 2025 – Present",
    type: "Freelance",
    description:
      "Designed and developed end-to-end web applications for clients. Delivered responsive UIs, REST APIs, and deployed solutions to cloud platforms.",
    tech: ["Next.js", "TypeScript", "FastAPI", "MongoDB"],
  },
];

export default experience;
