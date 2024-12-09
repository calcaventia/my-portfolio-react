import React from "react";
import "./LandingPage.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import HeroImage from "../../assets/images/hero-profile.png";
import AboutImage from "../../assets/images/about-profile-image.png";

function LandingPage() {
  return (
    <div>
      <Header />
      <main>
        {/*Hero-Section*/}
        <div className="hero-container">
          <img
            src={HeroImage}
            alt="African woman who is in Tech "
            className="hero-profile-image"
          />
          <div className="hero-text">
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
            <button className="hero-button">Skills Experience</button>
          </div>
        </div>

        {/*about-section*/}

        <div className="about-container">
          <div className="about-content">
            <h2>About Me</h2>
            <p className="sub-heading">Software Developer</p>
            <p>
              I'm a Software developer passionate about building innovative web
              applications.
            </p>
            <p>
              My experience includes coursework and personal projects where I've
              gained proficiency in frontend technologies like HTML, CSS,
              Javascript and React.js, as well as backend technologies like
              Node.js and Express.js.
            </p>
            <p>
              My aspiration is to work on projects that make a positive impact
              in people's lives, whether through innovative user experiences or
              solving complex problems.
            </p>
            <button className="about-button">Tell me more</button>
          </div>
          <div className="image-background">
            <img
              src={AboutImage}
              alt=""
              className="about-section-profile-image"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
