import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProjectImageMain1 from "../../assets/images/CodingProject1.JPG";
import ProjectImageMain2 from "../../assets/images/CodingProject2.JPG";
import ProjectImageMain3 from "../../assets/images/CodingProject3.JPG";
import SubImage1 from "../../assets/images/CodingProject1-subImage.JPG";
import SubImage2 from "../../assets/images/CodingProject2-subImage.JPG";
import SubImage3 from "../../assets/images/CodingProject3-subImage.JPG";
import "./CodingProjects.css";

function CodingProjects() {
  return (
    <div>
      <Header />
      <main>
        <div className="code-heading">
          <h1 className="code-projects-heading">
            C<span className="bold-letter">O</span>DE
          </h1>
        </div>
        {/*First project*/}
        <div className="project-container">
          <img src={ProjectImageMain1} alt="" className="project-image-main" />
          <div className="row project-content">
            <div className="col-8 project-body">
              <h4>EWSETA Career Site</h4>
              <p className="body-text-large">
                I developed this project as part of a competition hosted by the
                same government department to enhance their career site. The
                mordenisation efforts included implementing features such as a
                weekly career case study, a "Day in the life" section
                highlighting various professions, a secrion showcasing the
                latest industry trends, a psychometric test, and a visitor
                counter to emphasise the site's credibility and engagement.
              </p>
              <div className="row project-tools">
                <div className="col-2 me-3 project-tool">HTML</div>
                <div className="col-2 me-3 project-tool">CSS</div>
                <div className="col-2 me-3 project-tool">Bootstrap</div>
              </div>
              <div className="project-links">
                <button className="me-3 code-button">
                  <a
                    href="https://github.com/calcaventia/EWSETA-Landing-Page-Project"
                    target="blank"
                    className="code-link"
                  >
                    Code
                  </a>
                </button>
                <button className="site-button">
                  <a
                    href="https://calcaventia.github.io/EWSETA-Landing-Page-Project/"
                    target="blank"
                    className="website-link"
                  >
                    Website
                  </a>
                </button>
              </div>
            </div>
            <div className="col-4 project-image">
              <img src={SubImage1} alt="" className="sub-image" />
            </div>
          </div>
        </div>
        {/*second project*/}
        <div className="project-container">
          <img src={ProjectImageMain2} alt="" className="project-image-main" />
          <div className="row project-content">
            <div className="col-8 project-body">
              <h4>Home Makeover Website</h4>
              <p className="body-text-large">
                Built a responsive and modern web application using Bootstrap,
                integrating its pred-designed components and styles for
                efficient frontend development. This was a collaboration project
                with a student developer where we built a makeovers application
                which is a website enabling clients to book various
                building-related services such as renovations, interior décor,
                and architectural design.
              </p>
              <div className="row project-tools">
                <div className="col-2 me-3 project-tool">HTML</div>
                <div className="col-2 me-3 project-tool">CSS</div>
                <div className="col-2 me-3 project-tool">Bootstrap</div>
              </div>
              <div className="project-links">
                <button className="me-3 code-button">
                  <a
                    href="https://github.com/calcaventia/Makeovers-App-Landing-Page-Capstone-Project"
                    target="blank"
                    className="code-link"
                  >
                    Code
                  </a>
                </button>
                <button className="site-button">
                  <a
                    href="https://calcaventia.github.io/Makeovers-App-Landing-Page-Capstone-Project/"
                    target="blank"
                    className="website-link"
                  >
                    Website
                  </a>
                </button>
              </div>
            </div>
            <div className="col-4 project-image">
              <img src={SubImage2} alt="" className="sub-image" />
            </div>
          </div>
        </div>
        {/*third project*/}
        <div className="project-container">
          <img src={ProjectImageMain3} alt="" className="project-image-main" />
          <div className="row project-content">
            <div className="col-8 project-body">
              <h4>Professional Portfolio Website</h4>
              <p className="body-text-large">
                I created a personal portfolio to highlight my skills and
                experiences. The project began with a design prototype in Figma
                and was later developed in VS Code. It is aimed at individuals
                and businesses seeking professionals with my expertise, offering
                a clear and accessible overview of my work.
              </p>
              <div className="row project-tools">
                <div className="col-2 me-3 project-tool">React</div>
                <div className="col-2 me-3 project-tool">Bootstrap</div>
                <div className="col-2 me-3 project-tool">CSS</div>
                <div className="col-2  project-tool">Figma</div>
              </div>
              <div className="project-links">
                <button className="me-3 code-button">
                  <a
                    href="https://github.com/calcaventia/my-portfolio-react"
                    target="blank"
                    className="code-link"
                  >
                    Code
                  </a>
                </button>
                <button className="site-button">
                  <a
                    href="https://tintswalo-mabuza.netlify.app/"
                    target="blank"
                    className="website-link"
                  >
                    Website
                  </a>
                </button>
              </div>
            </div>
            <div className="col-4 project-image">
              <img src={SubImage3} alt="" className="sub-image" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CodingProjects;
