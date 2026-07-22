import { IconType } from "react-icons";
import { MdManageSearch } from "react-icons/md";
import {
  TbDatabaseSearch,
  TbChartScatter,
  TbBinaryTree,
  TbTopologyStar3,
  TbSitemap,
} from "react-icons/tb";
import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiSocketdotio,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
  SiSwagger,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon?: IconType; // any react-icons component from any sub-library
  description?: string;
}

export interface SkillCategory {
  category: string;
  showIcons: boolean; // toggle icons per category
  skills: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: "Languages",
    showIcons: true,
    skills: [
      {
        name: "C++",
        icon: SiCplusplus,
        description: "Systems & competitive programming",
      },
      {
        name: "Javascript ES6+",
        icon: SiJavascript,
        description: "Modern JS with ES6+ features",
      },
      {
        name: "Typescript",
        icon: SiTypescript,
        description: "Typed superset of JavaScript",
      },
      {
        name: "Python",
        icon: SiPython,
        description: "Scripting & backend development",
      },
    ],
  },
  {
    category: "Frameworks",
    showIcons: true,
    skills: [
      {
        name: "React.js",
        icon: SiReact,
        description:
          "Popular frontend Javascript framework for building user interfaces.",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "React framework for production",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        description: "JavaScript runtime environment",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description: "Minimal Node.js web framework",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        description: "Modern Python web framework",
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
        description: "Real-time bidirectional communication",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    category: "AI / ML",
    showIcons: true,
    skills: [
      {
        name: "RAG",
        icon: TbDatabaseSearch,
        description: "Retrieval-Augmented Generation",
      },
      {
        name: "Vector Embeddings",
        icon: TbChartScatter,
        description: "Semantic vector representations",
      },
      {
        name: "Semantic Search",
        icon: MdManageSearch,
        description: "Meaning-based information retrieval",
      },
      // {
      //   name: "Prompt Engineering",
      //   icon: SiOpenai,
      //   description: "Crafting effective LLM prompts",
      // },
    ],
  },
  {
    category: "Databases",
    showIcons: true,
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description: "NoSQL document database",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        description: "Advanced open-source relational DB",
      },
    ],
  },
  {
    category: "Tools",
    showIcons: true,
    skills: [
      {
        name: "Git/GitHub",
        icon: SiGithub,
        description: "Version control & collaboration",
      },
      {
        name: "Postman",
        icon: SiPostman,
        description: "API development & testing",
      },
      {
        name: "VS Code",
        icon: SiVisualstudiocode,
        description: "Code editor by Microsoft",
      },
    ],
  },
  {
    category: "Concepts",
    showIcons: true,
    skills: [
      {
        name: "DSA",
        icon: TbBinaryTree,
        description: "Data Structures & Algorithms",
      },
      {
        name: "RESTful API Design",
        icon: SiSwagger,
        description: "REST architectural principles",
      },
      {
        name: "Microservices Architecture",
        icon: TbTopologyStar3,
        description: "Distributed service design",
      },
      {
        name: "Backend System Design",
        icon: TbSitemap,
        description: "Scalable backend architecture",
      },
    ],
  },
];

export default skills;
