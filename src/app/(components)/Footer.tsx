import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-sm text-[#8e8e92] dark:text-[#b3b3b3] flex justify-between pb-16">
      <div>© {new Date().getFullYear()} Saksham</div>
      <div className="flex items-center gap-2">
        <BsGlobeCentralSouthAsia /> India
      </div>
    </div>
  );
};

export default Footer;
