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
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
              to={"http://www.linkedin.com/in/sync-exim-116b04354"}
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
      </div>

      <nav id="primary-nav" style={{ right: right, zIndex: 100 }}>
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="h-16" />
          </Link>
        </div>

        <ul className="navigation">
          <li onClick={handleClick}>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "!bg-[#273296] !text-white" : ""
              }
            >
              Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              About
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/verticals"
              className={
                location.pathname === "/verticals"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              BUSINESS VERTICALS
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/certificates"
              className={
                location.pathname === "/certificates"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              Certificates
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "!bg-[#273296] !text-white"
                  : ""
              }
            >
              Contact
            </Link>
          </li>

          <li onClick={handleClick}>
            <Link
              to="/product-enquiry"
              className={`${
                location.pathname === "/product-enquiry"
                  ? "bg-[#01004b] !text-white"
                  : ""
              } md:ml-5 text-[#01004b] border-2 border-[#01004b] hover:!bg-[#01004b] hover:!text-white rounded-tl-full rounded-br-full !px-10 !py-2`}
            >
              Product Enquiry
            </Link>
          </li>
        </ul>
      </nav>

      <nav id="secondary-nav">
        <div className="logo">
          <Link to="/">
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
