import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assests/Logo.png";
import { useState } from "react";

const NavBar = () => {
  const [right, setRight] = useState("100%");

  const handleClick = () => {
    if (right === "0%") {
      setRight("100%");
    } else {
      setRight("0%");
    }
  };

  return (
    <>
      <nav id="primary-nav" style={{ right: right }}>
        <div className="logo">
          <img src={Logo} className="h-16" />
        </div>
        <ul className="navigation">
          <li onClick={handleClick}>
            <Link to="/sync-exim">Home</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/sync-exim/about">About</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/sync-exim/verticals">BUSINESS VERTICALS</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/sync-exim/certificates">Certificates</Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/sync-exim/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav id="secondary-nav">
        <div className="logo">
          Sync <span>Exim</span>
        </div>
        <div className="menu" onClick={handleClick}>
          Menu
        </div>
      </nav>
    </>
  );
};

export default NavBar;
