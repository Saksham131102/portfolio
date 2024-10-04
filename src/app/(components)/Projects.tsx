import Image from "next/image";
import projects from "../(projects)";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
const Projects = () => {
  return (
    <div className="text-sm">
      <div className="text-[#B3B3B3] font-ibm-plex-mono">projects</div>
      <div className="mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="rounded-xl overflow-hidden dark-image border-2 border-black">
              <Link
                href={project.hostedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark-image object-center transition-transform duration-300 hover:scale-105"
                  src={project.image}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                />
              </Link>
            </div>
            <div className="flex justify-between">
              <div className="mt-4 text-black mb-16">{project.name}</div>
              <Link
                className="flex items-center gap-1 mt-4 text-[#8e8e92] hover:text-black transition-colors duration-500 mb-16"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
