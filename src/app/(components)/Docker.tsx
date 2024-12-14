import { FiHome, FiMoon, FiSun } from "react-icons/fi";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Docker = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-auto z-50 bottom-4 flex justify-center items-center text-xl">
      <div className="bg-white text-[#8e8e92] h-14 px-5 rounded-full border border-gray-300 shadow-md flex justify-center items-center gap-4">
        <a
          href="#home"
          className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center"
        >
          <FiHome className="text-xl" />
        </a>
        <div className="border border-r h-8"></div>
        <a
          href="https://www.linkedin.com/in/saksham013/"
          target="_blank"
          rel="noopener noreferrer"
          className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center"
        >
          <IoLogoLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/Saksham131102"
          target="_blank"
          rel="noopener noreferrer"
          className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center"
        >
          <IoLogoGithub className="text-xl" />
        </a>
        <a
          href="https://www.instagram.com/flemoid.___/"
          target="_blank"
          rel="noopener noreferrer"
          className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center"
        >
          <IoLogoInstagram className="text-xl" />
        </a>
        <div className="border border-r h-8"></div>
        <div className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center">
          <FiSun className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Docker;
