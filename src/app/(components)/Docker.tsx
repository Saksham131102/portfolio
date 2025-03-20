"use client";

import { FiHome, FiMoon, FiSun } from "react-icons/fi";
import {
  IoCodeSlash,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { MdOutlineRateReview } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

const Docker = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until the theme is ready
  }

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-auto z-50 bottom-5 flex justify-center items-center text-xl">
      <div className="bg-white dark:bg-black text-[#8e8e92] h-14 px-5 rounded-full border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-gray-800 flex justify-center items-center gap-4">
        <Link
          href="/"
          className="active:bg-gray-300 dark:active:bg-gray-700 active:text-black dark:active:text-white rounded-full h-9 w-9 flex justify-center items-center"
        >
          <FiHome className="text-xl" />
        </Link>
        <div className="border border-r border-l-0 border-t-0 border-b-0 h-8 dark:border-[#8e8e92]"></div>
        <a
          href="https://www.linkedin.com/in/saksham013/"
          target="_blank"
          rel="noopener noreferrer"
          className="active:bg-gray-300 dark:active:bg-gray-700 active:text-black dark:active:text-white rounded-full h-9 w-9 flex justify-center items-center"
        >
          <IoLogoLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/Saksham131102"
          target="_blank"
          rel="noopener noreferrer"
          className="active:bg-gray-300 dark:active:bg-gray-700 active:text-black dark:active:text-white rounded-full h-9 w-9 flex justify-center items-center"
        >
          <IoLogoGithub className="text-xl" />
        </a>
        {/* <Link
          href="/testimonials"
          className="active:bg-gray-300 active:text-black rounded-full h-9 w-9 flex justify-center items-center"
        >
          <MdOutlineRateReview className="text-2xl" />
        </Link> */}
        <div className="border border-r border-l-0 border-t-0 border-b-0 h-8 dark:border-[#8e8e92]"></div>
        <button className="active:bg-gray-300 dark:active:bg-gray-700 active:text-black dark:active:text-white rounded-full h-9 w-9 flex justify-center items-center">
          {/* <FiSun className="text-xl" /> */}
          {theme === "light" ? (
            <FiSun className="text-xl" onClick={() => setTheme("dark")}></FiSun>
          ) : (
            <FiMoon
              className="text-xl"
              onClick={() => setTheme("light")}
            ></FiMoon>
          )}
        </button>
      </div>
    </div>
  );
};

export default Docker;
