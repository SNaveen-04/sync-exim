import {
  FaFacebookF,
  FaLinkedinIn,
  FaSkype,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import Logo from "../../assets/logo_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#01004b] px-5 pt-5 pb-2 text-slate-500">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="flex flex-col items-start">
          <div className="logo mb-4">
            <a href="/sync-exim/">
              <img src={Logo} className="h-12 md:h-16" alt="SyncExim Logo" />
            </a>
          </div>

          <div className="mt-5 flex gap-4 text-lg md:text-xl !text-white">
            <Link
              className="cursor-pointer hover:text-blue-600 duration-300"
              to={"https://www.facebook.com/profile.php?id=61573565835343"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="cursor-pointer hover:text-blue-700 duration-300"
              to={"https://www.instagram.com/sync_exim?igsh=Y3NucWJjODZnNjRp"}
              target="_blank"
            >
              <RiInstagramFill />
            </Link>
            <Link
              className="cursor-pointer hover:text-blue-700 duration-300"
              to={"#"}
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="cursor-pointer hover:text-blue-500 duration-300"
              to={"#"}
              target="_blank"
            >
              <FaSkype />
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
          <h2 className="text-white text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-3 !text-white">
            <li>
              <a className="hover:underline" href="/sync-exim/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/sync-exim/verticals">
                Business Verticals
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/sync-exim/certificates">
                Certificates
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/sync-exim/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
          <h2 className="text-white text-2xl font-bold mb-4">Get In Touch</h2>
          <div className="flex flex-col gap-3 text-white">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
              <span>
                Sync Exim,
                <br />
                Codissia industrial park,
                <br />
                Orattukupai,
                <br />
                Chettipalayam,
                <br />
                Coimbatore, Tamilnadu -{" "}
                <span className="!font-sans">641201</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="flex-shrink-0" />
              <span className="!font-sans">+91 638 070 2686</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="flex-shrink-0" />
              <span>synceximevercross@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="font-semibold text-center text-base mt-8 !text-white">
        &copy;2024 SyncExim. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
