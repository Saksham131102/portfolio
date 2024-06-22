import { IoMailUnread } from "react-icons/io5";
const SocialMedia = () => {
  return (
    <div className="text-sm text-[#8e8e92] flex justify-between">
      <div className="flex gap-3 items-center">
        <a
          className="hover:text-black transition-colors duration-500"
          href={"https://www.linkedin.com/in/saksham131102/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <div className="rounded-full w-1 h-1 bg-[#e5e5e8]"></div>
        <a
          className="hover:text-black transition-colors duration-500"
          href={"https://github.com/Saksham131102"}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <div className="rounded-full w-1 h-1 bg-[#e5e5e8]"></div>
        <a
          className="hover:text-black transition-colors duration-500"
          href={"https://www.instagram.com/saksham.___/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <a
        href="mailto:saksham00013@gmail.com?body=Thank You for reaching out to me. Drop your message below."
        className="flex items-center gap-1 hover:text-black transition-colors duration-500"
      >
        Mail me <IoMailUnread className="text-lg" />
      </a>
    </div>
  );
};

export default SocialMedia;
