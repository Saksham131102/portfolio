import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import {
  SiAppwrite,
  SiMongodb,
  SiReactquery,
  SiShadcnui,
  SiSocketdotio,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const projects = [
  {
    image: "/images/streamchat.png",
    name: "StreamChat",
    github: "https://github.com/Saksham131102/STREAMCHAT",
    hostedLink: "https://streamchat1.netlify.app/",
    description:
      "StreamChat is an interactive movie, series, and TV show watching platform where users can stream content together and chat in real-time. This project leverages the MERN stack for seamless real-time communication, allowing users to engage in shared experiences across multiple devices.",
    GitHubLogo: <IoLogoGithub className="text-xl" />,
    ReactIcon: (
      <FaReact className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    MongoDBIcon: (
      <SiMongodb className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    NodeJsIcon: (
      <FaNodeJs className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TypescriptIcon: (
      <SiTypescript className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TailwindcssIcon: (
      <RiTailwindCssFill className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    SocketIOIcon: (
      <SiSocketdotio className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    ShadcnIcon: (
      <SiShadcnui className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
  },
  {
    image: "/images/snapgram.png",
    name: "Snapgram",
    github: "https://github.com/Saksham131102/snapgram",
    hostedLink: "https://snapgram-rho-seven.vercel.app",
    description:
      "A visually stunning social media web application that provides users a seamless native mobile experience.",
    GitHubLogo: <IoLogoGithub className="text-xl" />,
    ReactIcon: (
      <FaReact className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TypescriptIcon: (
      <SiTypescript className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TailwindcssIcon: (
      <RiTailwindCssFill className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    ViteJsIcon: (
      <SiVite className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    ReactQueryIcon: (
      <SiReactquery className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    AppwriteIcon: (
      <SiAppwrite className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    ShadcnIcon: (
      <SiShadcnui className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
  },
  {
    image: "/images/cgc-placement.png",
    name: "CGC-Placement App",
    github: "https://github.com/Saksham131102/CGC-Placements",
    hostedLink: "https://cgcstudents.vercel.app",
    description:
      "A comprehensive web application designed to assist students in staying updated on college placement activities, offering real-time information on company visits, and facilitating the placement process with advanced analytics.",
    GitHubLogo: <IoLogoGithub className="text-xl" />,
    MongoDBIcon: (
      <SiMongodb className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    NodeJsIcon: (
      <FaNodeJs className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TypescriptIcon: (
      <SiTypescript className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    TailwindcssIcon: (
      <RiTailwindCssFill className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    ShadcnIcon: (
      <SiShadcnui className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
    NextJsIcon: (
      <RiNextjsFill className="text-xl text-[#8e8e92] dark:text-[#b3b3b3]" />
    ),
  },
];

export default projects;
