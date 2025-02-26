import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

import Logo from "../../assests/logo.png";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border border-zinc-300 bg-opacity-70 p-5 text-slate-500 flex max-md:flex-col justify-between items-center gap-5">
      <div className="flex flex-col max-md:w-full">
        <nav id="footer-nav" className="flex flex-col max-md:w-full">
          <div className="logo mb-4">
            <Link to="/sync-exim">
              <img src={Logo} className="h-12 md:h-16" />
            </Link>

            <div className="mt-5 inline-flex gap-6 items-center text-lg md:text-xl">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaSkype className="cursor-pointer" />
            </div>
          </div>

          <ul className="navigation flex flex-col max-md:w-full">
            <li>
              <Link to="/sync-exim">Home</Link>
            </li>
            <li>
              <Link to="/sync-exim/about">About</Link>
            </li>
            <li>
              <Link to="/sync-exim/verticals">Business Verticals</Link>
            </li>
            <li>
              <Link to="/sync-exim/certificates">Certificates</Link>
            </li>
            <li>
              <Link to="/sync-exim/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <span className="font-semibold text-center text-base inline-block mb-4">
        &copy;2024 SyncExim. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
