import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-600 bg-opacity-70 p-5 text-white flex max-md:flex-col justify-between items-center">
      <span className="font-semibold text-center text-lg inline-block">
        &copy;2024 SyncExim.All Rights Reserved
      </span>
      <span className="inline-flex gap-6 items-center text-xl">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
        <FaSkype className="cursor-pointer" />
      </span>
    </div>
  );
};

export default Footer;
