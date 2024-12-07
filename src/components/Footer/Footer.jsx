import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
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
        </ul>
        <ul>
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
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/tintswalo-mabuza-39212a37/"
              className="linkedin-icon"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#f87c48" }}
                size="2xl"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tintswalo-mabuza-39212a37/"
              className="linkedin-icon"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#f87c48" }}
                size="2xl"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tintswalo-mabuza-39212a37/"
              className="linkedin-icon"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#f87c48" }}
                size="2xl"
              />
            </a>
          </li>
        </ul>
        <p>Designed and Developer by Tintswalo Mabuza. 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
