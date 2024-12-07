import React from "react";
import "./Header.css";
import Logo from "../../assets/icons-img/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo-icon">
            <img
              src={Logo}
              alt="Frontend Developer Portfolio"
              className="logo"
            />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/" className="menu-option">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-option">
                About
              </Link>
            </li>
            <li>
              <Link to="/codingprojects" className="menu-option">
                Dev Work
              </Link>
            </li>
            <li>
              <Link to="/designproject1" className="menu-option">
                Design
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-option">
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
