import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/icons-img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo-icon">
            <Link to="/">
              <img
                src={Logo}
                alt="Frontend Developer Portfolio"
                className="logo"
              />
            </Link>
          </div>

          <button
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="menu-option" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-option" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/codingprojects"
                className="menu-option"
                onClick={toggleMenu}
              >
                Dev Work
              </Link>
            </li>
            <li>
              <Link
                to="/designproject1"
                className="menu-option"
                onClick={toggleMenu}
              >
                Design
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-option" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
