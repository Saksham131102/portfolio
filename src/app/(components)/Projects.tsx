import Image from "next/image";
import projects from "../(projects)";
const Projects = () => {
  return (
    <div className="text-sm">
      <div className="text-[#B3B3B3] font-ibm-plex-mono">projects</div>
      <div className="mt-4">
        {projects.map((project, index) => (
          <div key={index}>
            <Image
              className="rounded-2xl dark-image"
              src={project.image}
              alt="image"
              width={1000}
              height={1000}
              priority
            />
            <div className="mt-4 text-black pb-16">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
