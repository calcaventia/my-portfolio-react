import React from "react";
import "../../pages/ContactPage/ContactPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ContactImage from "../../assets/profile-img/profile-image-1.1.jpg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <main>
        <div className="row contact-page-container">
          <div className="col-5 contact-page-left">
            <div className="image-background">
              <img src={ContactImage} alt="" className="contact-page-image" />
            </div>
            <div className="contact-details-section">
              <p className="role-details">Web Developer and Web Designer</p>
              <p className="email-address-info">tintswalomabuza10@gmail.com</p>
              <div className="social-media-icon-section">
                <ul>
                  <li>
                    <a
                      href="https://github.com/calcaventia/"
                      className="linkedin-icon"
                      target="blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ color: "#3836F5" }}
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
                        style={{ color: "#3836F5" }}
                        size="2xl"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-7 contact-page-right">
            <h4>Contact me</h4>
            <div className="row contact-page-content">
              <div className="col-1 contact-page-point"></div>
              <div className="col-10 contact-page-info">
                <p>
                  <span className="contact-highlight">Hire me: </span>Need a
                  frontend developer with UI/UX design expertise to bring your
                  vision to life? Let's create something exceptional together!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 contact-page-point"></div>
              <div className="col-10 contact-page-info">
                <p>
                  <span className="contact-highlight">
                    Collaborate on Projects:{" "}
                  </span>
                  Have an exciting project idea? I’d love to work with you to
                  create impactful and innovative solutions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 contact-page-point"></div>
              <div className="col-10 contact-page-info">
                <p>
                  <span className="contact-highlight">Connect: </span>Want to
                  chat about ideas, opportunities, or share insights? Let’s
                  connect and start a conversation!
                </p>
              </div>
            </div>
            <div className="contact-page-buttons">
              <a href="mailto:tintswalomabuza10@gmail.com">
                <button className="contact-page-button">Contact me</button>
              </a>
              <Link to="/" className="next-project-link">
                <button className="contact-page-button">back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
