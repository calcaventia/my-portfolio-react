import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../pages/DesignProjects/DesignProjects.css";
import DesktopUI from "../../assets/images/portfolio-UI-Desktop.png";
import FigmaIcon from "../../assets/icons-img/figma-icon.png";
import PhotopeaIcon from "../../assets/icons-img/photopea-icon.png";
import DesignDisplay1 from "../../assets/images/portfolio-UI-1.JPG";
import DesignDisplay2 from "../../assets/images/portfolio-UI-2.JPG";
import PortfolioLogo from "../../assets/icons-img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function DesignProject2() {
  return (
    <div>
      <Header />
      <main>
        <div className="design-content-container">
          <div className="design-heading">
            <h1 className="design-projects-heading">
              D<span className="design-bold-letter">E</span>SIGN
            </h1>
          </div>
          <div className="previous-button-container">
            <Link to="/designproject1" className="previous-project-link">
              <button className="previous-button">Previous Project </button>
            </Link>
          </div>

          <div className="design-project2-background">
            <div className="design-project2-image">
              <img src={DesktopUI} alt="" className="portfolio-main-image" />
            </div>
            <p className="project2-name">Digital Portfolio</p>
          </div>

          <div className="design-background">
            <h4 className="design-heading">User-Experience Case Study</h4>
            <p className="project-description">
              A professional portfolio developed to showcase my skills and
              projects, designed with a user-centered approach to appeal to
              recruiters and hiring managers.
            </p>
            <div className="problem-statement">
              <p className="section-heading">Problem Statement</p>
              <div className="row problem-statement-section">
                <p className="text-content">
                  The primary challenge was to create a professional portfolio
                  that not only showcases my skills and projects but also
                  appeals to recruiters and hiring managers. Given the highly
                  competitive job market, it was important for me to design a
                  portfolio that stands out, is easy to navigate, and clearly
                  communicates my expertise in frontend development and UI/UX
                  design.
                </p>
              </div>
            </div>
            <div className="challenges-section">
              <p className="section-heading">Challenges</p>
              <p className="text-content">
                The challenges in this project included balancing the need for a
                personal portfolio with the requirement to appeal to recruiters
                and hiring managers, who are looking for specific skills and
                qualities in candidates. It was important to ensure that the
                portfolio was intuitive, easy to navigate, and showcased my work
                in a compelling way, without overcomplicating the design.
              </p>
              <p className="text-content">
                Additionally, the portfolio needed to be responsive, ensuring
                accessibility and visual appeal across various devices and
                screen sizes. Another challenge was creating a design that
                reflected my personal style while maintaining professionalism
                and usability for potential employers. Finally, I had to
                prioritise content effectively, presenting key projects,
                experiences, and skills in a way that captured attention quickly
                without overwhelming the user.
              </p>
            </div>
            <div className="solution-section">
              <p className="section-heading">Possible Solution</p>
              <ul>
                <li>
                  Focus on creating a clean, simple, and intuitive layout to
                  enhance the user experience for recruiters and hiring
                  managers, ensuring they can easily find relevant information.
                </li>
                <li>
                  Implement a straightforward navigation system with sections
                  dedicated to key components like skills, projects, and contact
                  details.
                </li>
                <li>
                  Ensure that the design is fully responsive so that it looks
                  and functions well on any device.
                </li>
                <li>Prioritise showcasing my strongest projects and skills.</li>
                <li>
                  Use color schemes, typography, and design elements that
                  represent my personal brand while maintaining a professional
                  appearance.
                </li>
              </ul>
            </div>
            <div className="row project-info">
              <div className="col-5">
                <p className="project-duration-heading">Project Duration</p>
                <div className="row project-duration">
                  <div className="col-2 duration-number">2</div>
                  <div className="col-2 screen-number">5+</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 project-duration-days">weeks</div>
                  <div className="col-2 project-sreens">screens</div>
                </div>
              </div>

              <div className="col-7 tools-used">
                <p className="project-tools-heading">Tools Used</p>
                <div className="row ">
                  <div className="row project-tools">
                    <div className="col-2 tools-used-image">
                      <img src={FigmaIcon} alt="" className="tools-used-icon" />
                    </div>
                    <div className="col-2 tools-used-image">
                      <img
                        src={PhotopeaIcon}
                        alt=""
                        className="tools-used-photopea-icon"
                      />
                    </div>
                  </div>
                  <div className="row project-duration">
                    <div className="col-2 image-label">Figma</div>
                    <div className="col-2 image-label">Photopea</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="design-projects-display">
              <u>
                <li className="design-projects-desktop-display">
                  <img
                    src={DesignDisplay1}
                    alt=""
                    className="design-project-display-image"
                  />
                </li>
                <li className="design-projects-desktop-display">
                  <img
                    src={DesignDisplay2}
                    alt=""
                    className="design-project-display-image"
                  />
                </li>
              </u>
            </div>
          </div>

          {/*User-Interface section*/}

          <div className="interface2-background">
            <div className="interface-section-heading">
              <p>User-Interface Design Elements</p>
            </div>
            <div className="row interface-items">
              <div className="col-6 logo-items">
                <p className="UI-section-heading ">Logo</p>
                <hr />
                <img src={PortfolioLogo} alt="" className="logo-item-image" />
              </div>
              <div className="col-6 color-palette">
                <p className="UI-section-heading ">Colour Palette</p>

                <hr />
                <div className="row gap-4 color-group">
                  <div className="col-2 color-project2-circle1 color-circle"></div>
                  <div className="col-2 color-project2-circle2 color-circle"></div>
                  <div className="col-2 color-project2-circle3 color-circle"></div>
                  <div className="col-2 color-project2-circle4 color-circle"></div>
                </div>
                <div className="row gap-4 color-group">
                  <div className="col-2 color-project2-circle5 color-circle"></div>
                  <div className="col-2 color-project2-circle6 color-circle"></div>
                  <div className="col-2 color-project2-circle7 color-circle"></div>
                  <div className="col-2 color-project2-circle8 color-circle"></div>
                </div>
              </div>
              <div className="typography-section">
                <p className="UI-section-heading">Typography</p>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li className="font-40">Typography</li>
                      <li className="font-35">Typography</li>
                      <li className="font-24">Typography</li>
                      <li className="font-20">Typography</li>
                      <li className="font-15">Typography</li>
                      <li className="font-12">Typography</li>
                    </ul>
                  </div>
                  <div className="col-6 font-main">
                    <p className="font-name">Poppins</p>
                    <p className="font-letter">Aa.</p>
                  </div>
                </div>
              </div>
              <div className="app-icons-section">
                <p className="UI-section-heading">Icon</p>
                <hr />
                <div className="app-icons">
                  <ul>
                    <li>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#f87c48" }}
                        size="2xl"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faGithub}
                        style={{ color: "#f87c48" }}
                        size="2xl"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "#f87c48" }}
                        size="2xl"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="previous-button-container" id="bottom-page-button">
            <Link to="/designproject1" className="previous-project-link">
              <button className="previous-button">Previous Project</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DesignProject2;
