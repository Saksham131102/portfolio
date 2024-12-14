import { FiHome, FiMoon, FiSun } from "react-icons/fi";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Docker = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-auto z-50 bottom-4 flex justify-center items-center text-xl">
      <div className="bg-white text-[#8e8e92] h-14 w-60 rounded-full border border-gray-300 shadow-md flex justify-center items-center gap-4">
        <a href="#home">
          <FiHome className="text-lg hover:text-black hover:text-2xl transition-all duration-300" />
        </a>
        <div className="border border-r h-8"></div>
        <a
          href="https://www.linkedin.com/in/saksham013/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin className="text-lg hover:text-black hover:text-2xl transition-all duration-300" />
        </a>
        <a
          href="https://github.com/Saksham131102"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-lg hover:text-black hover:text-2xl transition-all duration-300" />
        </a>
        <a
          href="https://www.instagram.com/flemoid.___/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram className="text-lg hover:text-black hover:text-2xl transition-all duration-300" />
        </a>
        <div className="border border-r h-8"></div>
        <FiSun className="text-lg hover:text-black hover:text-2xl transition-all duration-300" />
      </div>
    </div>
  );
};

export default Docker;
