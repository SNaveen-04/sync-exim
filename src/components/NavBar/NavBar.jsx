import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavBar.css";

import Logo from "../../assets/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const NavBar = () => {
  const [right, setRight] = useState("100%");
  const location = useLocation();

  const handleClick = () => {
    if (right === "0%") setRight("100%");
    else setRight("0%");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex md:justify-end">
        <div className="flex justify-end pr-5 pl-4 lg:pl-40 gap-7 bg-[#01004b] text-white py-1.5 rounded-bl-full">
          <p className="text-sm">Your Trusted Business Partner</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="flex-shrink-0" />
              <span className="!font-sans">+91 638 070 2686</span>
            </div>

            <p>|</p>

            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="flex-shrink-0" />
              <span>synceximevercross@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 !text-white text-sm">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
            <FaSkype className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>

      <nav id="primary-nav" style={{ right: right, zIndex: 100 }}>
        <div className="logo">
          <Link to="/sync-exim">
            <img src={Logo} className="h-16" />
          </Link>
        </div>

        <ul className="navigation">
          <li onClick={handleClick}>
            <Link
              to="/sync-exim"
              className={
                location.pathname === "/sync-exim"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/sync-exim/about"
              className={
                location.pathname === "/sync-exim/about"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/sync-exim/verticals"
              className={
                location.pathname === "/sync-exim/verticals"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              BUSINESS VERTICALS
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/sync-exim/certificates"
              className={
                location.pathname === "/sync-exim/certificates"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              Certificates
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/sync-exim/contact"
              className={
                location.pathname === "/sync-exim/contact"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav id="secondary-nav">
        <div className="logo">
          <Link to="/sync-exim">
            <img src={Logo} className="h-12 md:h-16" />
          </Link>
        </div>
        <div className="menu" onClick={handleClick}>
          Menu
        </div>
      </nav>
    </>
  );
};

export default NavBar;
