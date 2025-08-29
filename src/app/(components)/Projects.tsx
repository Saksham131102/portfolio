import Image from "next/image";
import projects from "../(projects)";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
const Projects = () => {
  return (
    <div className="text-sm pt-8">
      <div className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono">
        projects
      </div>
      <div className="mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 dark:border border-[#b3b3b3] dark:border-gray-800 hover:border-black dark:hover:border-[#ededed] transition-colors duration-500 rounded-lg my-4 p-2"
          >
            <div className="rounded-md overflow-hidden dark-image border-2 dark:border border-[#b3b3b3] dark:border-gray-800">
              <Link
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark-image object-center"
                  src={project.image}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                />
              </Link>
            </div>
            <div>
              <div className="my-4  font-medium font-ibm-plex-mono">
                {project.name}
              </div>
              <p className="mb-4 text-[#8e8e92] dark:text-[#b3b3b3]">
                {project.description}
              </p>
              <div className="flex gap-1 items-center">
                <Link
                  className="flex items-center gap-1 text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-[#ededed] transition-colors duration-500"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <FiGithub />
                GitHub */}
                  {/* <IoLogoGithub className="text-2xl" /> */}
                  {project.GitHubLogo}
                </Link>
                <span className="border-[#8e8e92] dark:border-[#b3b3b3] cursor-default h-5 border border-l border-t-0 border-b-0 border-r-0"></span>
                {project.TypescriptIcon}
                {project.TailwindcssIcon}
                {project.ReactIcon}
                {project.NextJsIcon}
                {project.MongoDBIcon}
                {project.NodeJsIcon}
                {project.SocketIOIcon}
                {project.ViteJsIcon}
                {project.ReactQueryIcon}
                {project.AppwriteIcon}
                {project.ShadcnIcon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
