import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUserAstronaut } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";

const NameAndImage = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <Avatar className="w-16 h-16 border-[1px] border-[#b3b3b3]">
          <AvatarImage src="/images/saksham.jpg" />
          <AvatarFallback>
            <FaUserAstronaut className="w-10 h-10" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <p className="font-medium dark:text-[#ededed]">Saksham</p>
          <p className="text-[#8e8e92] dark:text-[#b3b3b3] text-sm">
            Full-Stack Developer Enthusiast
          </p>
        </div>
      </div>
      <a
        className="flex items-center my-auto text-sm text-[#8e8e92] dark:text-[#b3b3b3] hover:text-black dark:hover:text-white transition-colors duration-500"
        href="https://drive.google.com/file/d/1kENOqZjiecxx57NHDK7HdeDE5-c1wJsO/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex  gap-1 items-center">
          Resume <IoDocumentOutline className="text-lg" />
        </div>
      </a>
    </div>
  );
};

export default NameAndImage;
