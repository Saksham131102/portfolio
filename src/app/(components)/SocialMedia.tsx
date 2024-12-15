import {
  IoCodeSlash,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
const SocialMedia = () => {
  return (
    <div className="text-sm text-[#8e8e92] flex justify-between">
      <div className="flex gap-3 items-center">
        <a
          className="flex items-center gap-1 hover:text-black transition-colors duration-500"
          href={"https://www.linkedin.com/in/saksham013/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin className="text-lg" />{" "}
          <span className="hidden md:block">LinkedIn</span>
        </a>
        <div className="rounded-full w-1 h-1 bg-[#e5e5e8]"></div>
        <a
          className="flex items-center gap-1 hover:text-black transition-colors duration-500"
          href={"https://github.com/Saksham131102"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-lg" />{" "}
          <span className="hidden md:block">GitHub</span>
        </a>
        <div className="rounded-full w-1 h-1 bg-[#e5e5e8]"></div>
        <a
          className="flex items-center gap-1 hover:text-black transition-colors duration-500"
          href={"https://leetcode.com/u/Fleeemoid/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoCodeSlash className="text-lg" />{" "}
          <span className="hidden md:block">Instagram</span>
        </a>
      </div>
      <a
        href="mailto:saksham00013@gmail.com?body=Thank You for reaching out to me. Drop your message below."
        className="flex items-center gap-1 hover:text-black transition-colors duration-500"
      >
        Mail me <IoMailOutline className="text-lg" />
      </a>
    </div>
  );
};

export default SocialMedia;
