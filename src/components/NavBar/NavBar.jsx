import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavBar.css";

import Logo from "../../assets/logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const NavBar = () => {
  const [right, setRight] = useState("100%");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    if (right === "0%") {
      setRight("100%");
    } else {
      setRight("0%");
    }
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:flex md:justify-end">
        <div className="flex items-center justify-end pr-5 pl-4 lg:pl-40 gap-7 bg-[#01004b] text-white py-1.5 rounded-bl-full">
          <p className="text-sm">Your Trusted Business Partner</p>
          <div className="flex items-center gap-2">
            <Link to="tel:+916380702686" className="flex items-center gap-3 text-sm hover:underline">
              <FaPhoneAlt className="flex-shrink-0" />
              <span className="!font-sans">+91 638 070 2686</span>
            </Link>

            <p>|</p>

            <Link to="mailto:export@syncexim.com" className="flex items-center gap-3 text-sm hover:underline">
              <FaEnvelope className="flex-shrink-0" />
              <span>export@syncexim.com</span>
            </Link>
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
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-[100] bg-white w-full">
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
            <li
              className="relative group"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) setIsDropdownOpen(false);
              }}
            >
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className={`${
                  location.pathname.startsWith("/our-products")
                    ? "!bg-[#273296] !text-white"
                    : ""
                } flex items-center justify-center gap-1 !h-auto md:!h-full group-hover:bg-[#273296] group-hover:!text-white`}
              >
                OUR PRODUCTS
                <FaChevronDown
                  className={`inline-block ml-1 text-xs transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } md:absolute static top-full left-0 bg-transparent md:bg-white md:shadow-lg md:border md:border-gray-200 py-0 md:py-2 md:w-52 w-full rounded-md z-[110] list-none`}
              >
                <li onClick={handleClick}>
                  <Link
                    to="/our-products/spices"
                    className="block text-center md:text-left py-2 px-4 text-[#273296] hover:bg-gray-100 text-sm font-semibold normal-case !h-auto w-full"
                  >
                    Spices
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link
                    to="/our-products/garments"
                    className="block text-center md:text-left py-2 px-4 text-[#273296] hover:bg-gray-100 text-sm font-semibold normal-case !h-auto w-full"
                  >
                    Garments
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link
                    to="/our-products/noodles"
                    className="block text-center md:text-left py-2 px-4 text-[#273296] hover:bg-gray-100 text-sm font-semibold normal-case !h-auto w-full"
                  >
                    Noodles
                  </Link>
                </li>
                <li onClick={handleClick}>
                  <Link
                    to="/our-products/others"
                    className="block text-center md:text-left py-2 px-4 text-[#273296] hover:bg-gray-100 text-sm font-semibold normal-case !h-auto w-full"
                  >
                    Others
                  </Link>
                </li>
              </ul>
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
                } md:ml-5 !text-white bg-[#01004b] border-2 border-[#01004b] hover:!bg-white hover:!text-[#01004b] rounded-tl-full rounded-br-full !px-10 !py-2`}
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
      </div>
    </>
  );
};

export default NavBar;
