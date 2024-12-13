import React from "react";
import "../../pages/ContactPage/ContactPage.css";
import PlantImage from "../../assets/images/plant-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <main>
        <div className="row contact-page-container">
          <div className="col-5 contact-page-left">
            <img src={PlantImage} alt="" className="plant-image" />
            <div className="contact-details-section">
              <p className="role-details">Web Developer and Web Designer</p>
              <p className="email-address-info">tintswalomabuza10@gmail.com</p>
              <div className="social-media-icon-section">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/tintswalo-mabuza-39212a37/"
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
              <div className="col-9 contact-page-info">
                <p>
                  Hire me: Need a frontend developer with UI/UX design expertise
                  to bring your vision to life? Let's create something
                  exceptional together!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 contact-page-point"></div>
              <div className="col-9 contact-page-info">
                <p>
                  Collaborate on Projects: Have an exciting project idea? I’d
                  love to work with you to create impactful and innovative
                  solutions.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 contact-page-point"></div>
              <div className="col-9 contact-page-info">
                <p>
                  Connect: Want to chat about ideas, opportunities, or share
                  insights? Let’s connect and start a conversation!
                </p>
              </div>
            </div>
            <div className="contact-page-buttons">
              <button className="contact-page-button">Go to projects</button>
              <button className="contact-page-button">Go to projects</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
