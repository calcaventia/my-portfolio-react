import React from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroImage from "../../assets/images/hero-profile.png";
import AboutImage from "../../assets/images/about-profile-image2.png";
import GalleryImage1 from "../../assets/images/GalleryImage1.JPG";
import GalleryImage2 from "../../assets/images/GalleryImage2.JPG";
import GalleryImage3 from "../../assets/images/GalleryImage3.JPG";
import GalleryImage4 from "../../assets/images/GalleryImage4.JPG";
import GalleryImage5 from "../../assets/images/GalleryImage5.JPG";
import GalleryImage6 from "../../assets/images/GalleryImage6.JPG";

function LandingPage() {
  return (
    <div>
      <Header />
      <main>
        {/*Hero-Section*/}
        <div className="row hero-container">
          <div className="col-sm-6 order-sm-1  hero-image">
            <img
              src={HeroImage}
              alt="African woman who is in Tech "
              className="hero-profile-image"
            />
          </div>
          <div className="col-sm-6 order-sm-2 hero-text">
            <p className="author-name">
              Tintswalo.<span className="initial">M</span>
            </p>
            <h1 className="title">Software Developer | South Africa</h1>
            <p className="body-text-medium">
              Specialises in{" "}
              <span className="key-info">frontend development</span> and
              utilising <span className="key-info">UI/UX design</span>
              principles to create impactful{" "}
              <span className="key-info">websites and applications</span> that
              add value to startups, agencies and large organisations.
            </p>
            <button className="large-button">Skills Experience</button>
          </div>
        </div>

        <div className="content-background">
          {/*about-section*/}

          <div className="row about-container">
            <div className="col-sm-6 order-sm-1 about-content">
              <h2 className="section-heading">About Me</h2>
              <p className="sub-heading">Software Developer</p>
              <p className="about-content-body">
                I'm a Software developer passionate about building innovative
                web applications.
              </p>
              <p className="about-content-body">
                My experience includes coursework and personal projects where
                I've gained proficiency in frontend technologies like HTML, CSS,
                Javascript and React.js, as well as backend technologies like
                Node.js and Express.js.
              </p>
              <p className="about-content-body">
                My aspiration is to work on projects that make a positive impact
                in people's lives, whether through innovative user experiences
                or solving complex problems.
              </p>
              <button className="medium-button">Tell me more</button>
            </div>
            <div className="col-sm-6 order-sm-2  about-image">
              <img
                src={AboutImage}
                alt=""
                className="about-section-profile-image"
              />
            </div>
          </div>

          {/*technical skills-section*/}

          <div className="technical-skills-container">
            <h2 className="section-heading">Technical Skills</h2>
            <hr className="heading-content-breaker" />
            <div className="row t-s-container">
              <div className="col me-3 technical-skill">HTML5</div>
              <div className="col me-3 technical-skill">CSS3</div>
              <div className="col me-3 technical-skill">Javascript</div>
              <div className="col me-3 technical-skill">React</div>
              <div className="col me-3 technical-skill">Bootstrap</div>
              <div className="col me-3 technical-skill">MongoDB</div>
              <div className="col technical-skill">Git</div>
            </div>
            <div className="row t-s-container2">
              <div className="col me-2 technical-skill">MySQL</div>
              <div className="col me-2 technical-skill">GitHub</div>
              <div className="col me-2 technical-skill">Wordpress</div>
              <div className="col me-2 technical-skill">Figma</div>
              <div className="col-3 me-2 technical-skill">
                UI/UX Design Principles
              </div>
              <div className="col technical-skill">Photopea</div>
            </div>
          </div>

          {/*soft skills-section*/}

          <div className="soft-skills-container">
            <h2>Soft Skills</h2>
            <hr className="heading-content-breaker" />
            <h4>Communication Skills</h4>
            <p className="body-text-medium">
              I excel at effectively communicating ideas, requirements, and
              feedback effectively with team members, ensuring clear
              understanding and coordination on tasks and objectives.
            </p>
            <h4 id="heading-text">Collaboration and Teamwork</h4>
            <p className="body-text-medium">
              I have gained valuable experience collaborating on coding
              projects, where I improved my ability to work as part of a team
              and utilise various tools to communicate effectively and
              efficientl with team members.
            </p>
            <h4 id="heading-text">Adaptability and Problem-Solving</h4>
            <p className="body-text-medium">
              I'm quick to learn and adapt to tools or technologies used by the
              team. Debugging code and addressing usability issues are some of
              the problem-solving skills I’ve improved.
            </p>
          </div>

          {/*experience-section*/}

          <div className="experience-container">
            <h2>Experience</h2>
            <hr className="heading-content-breaker" />
            <p className="experience-body">
              These projects demonstrate my skills with some developed
              independently and others created through collaboration with team
              members.
            </p>
            <div className="row project-gallery">
              <div className="col-6">
                <img src={GalleryImage1} alt="" className="gallery-images" />
              </div>
              <div className="col-6">
                <img src={GalleryImage2} alt="" className="gallery-images" />
              </div>
            </div>
            <div className="row project-gallery">
              <div className="col-6">
                <img src={GalleryImage3} alt="" className="gallery-images" />
              </div>
              <div className="col-6">
                <img src={GalleryImage4} alt="" className="gallery-images" />
              </div>
            </div>
            <div className="row project-gallery">
              <div className="col-6">
                <img src={GalleryImage5} alt="" className="gallery-images" />
              </div>
              <div className="col-6">
                <img src={GalleryImage6} alt="" className="gallery-images" />
              </div>
              <div className="experience-button">
                <button className="medium-button">Go to projects</button>
              </div>
            </div>
          </div>
        </div>
        {/*contact-section*/}

        <div className="contact-container">
          <p>Want to know more about what I do?</p>

          <a href="mailto:tintswalomabuza10@gmail.com">
            <button className="medium-button">Contact me</button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
