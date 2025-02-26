import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border border-zinc-300 bg-opacity-70 px-5 pt-5 pb-2 text-slate-500">
      <div className="flex flex-col md:flex-row justify-between items-start  gap-5">
        <div className="flex flex-col items-start">
          <div className="logo mb-4">
            <Link to="/sync-exim">
              <img src={Logo} className="h-12 md:h-16" alt="SyncExim Logo" />
            </Link>
          </div>

          <div className="mt-5 flex gap-6 text-lg md:text-xl">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaSkype className="cursor-pointer" />
          </div>
        </div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 mt-3">
          <li>
            <Link to="/sync-exim" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sync-exim/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/sync-exim/verticals" className="hover:underline">
              Business Verticals
            </Link>
          </li>
          <li>
            <Link to="/sync-exim/certificates" className="hover:underline">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/sync-exim/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="font-semibold text-center text-base mt-8">
        &copy;2024 SyncExim. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
