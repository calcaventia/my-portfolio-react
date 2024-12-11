import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutImage from "../../assets/images/about-profile.png";
import "../../pages/AboutPage/AboutPage.css";

function About() {
  return (
    <div>
      <Header />
      <main>
        <img src={AboutImage} alt="" className="profile-image" />
        <div className="about-background">
          <h1 className="about-heading">My Story</h1>
          <hr className="heading-line" />
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-4 text-bubble-left">
              Tell me some fun facts about you...
            </div>
          </div>
          <div className="row right-side">
            <div className="col-6 text-bubble-right">
              In another life I could be an actress, ha ha. I enjoy learning new
              languages and I’m currently learning Korean, “안녕하세요 (hello)”.
              I enjoy speaking in different accents so good luck figuring out
              mine. Oh...and I think my blood type might be coffee.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
