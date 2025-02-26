import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-50 border border-zinc-300 bg-opacity-70 p-5 text-slate-500 flex max-md:flex-col justify-between items-center gap-5">
      <span className="font-semibold text-center text-base inline-block">
        &copy;2024 SyncExim.All Rights Reserved
      </span>

      <span className="inline-flex gap-6 items-center text-lg md:text-xl">
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
