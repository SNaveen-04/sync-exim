import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./NavBar.css";

import Logo from "../../assets/logo.png";

const NavBar = () => {
  const [right, setRight] = useState("100%");
  const location = useLocation();

  const handleClick = () => {
    if (right === "0%") setRight("100%");
    else setRight("0%");
  };

  return (
    <>
      <nav id="primary-nav" style={{ right: right }}>
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
