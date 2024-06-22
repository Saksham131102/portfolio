import skills from "../(Skills)";

const Skills = () => {
  return (
    <>
      <div className="pt-16">
        <div className="text-sm text-[#B3B3B3] font-ibm-plex-mono">skills</div>
        <div className="mt-4">
          <div className="flex flex-wrap dark-image">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="bg-black text-white rounded-md p-2 mr-1 my-1 text-sm">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="project" className="pb-16" />
    </>
  );
};

export default Skills;
