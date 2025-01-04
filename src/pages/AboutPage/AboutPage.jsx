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
              <p> Tell me some fun facts about you...</p>
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              In another life I could be an actress, ha ha. I enjoy learning new
              languages and I’m currently learning Korean, “안녕하세요 (hello)”.
              I enjoy speaking in different accents so good luck figuring out
              mine. Oh...and I think my blood type might be coffee.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-3 text-bubble-left">
              What do you enjoy doing?
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              Anything creative gets me fired up...there’s always something new
              to discover. I try not to box myself in - I try to do as many
              creative things as I can. Whether it’s drawing, designing, cooking
              or building something...there’s always room for my mind to wander
              and explore.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-4 text-bubble-left">
              So where do you find inspiration?
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              Wow...I let my senses lead me. Sometimes I find inspiration in
              things I can see and sometimes I find it in things I can hear. I
              learned a long time ago to be open to inspiration that comes from
              the unconventional.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-5 text-bubble-left">
              Interesting...take me through your creation process.
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              For as long as I can remember, my creation process always started
              with brainstorming ideas, observing and researching for
              inspiration, putting a concept together and then planning how I’d
              execute the project. I also like my projects to have a
              “Storytelling” element.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-5 text-bubble-left">
              When did you build your first website?
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              2017. I didn’t even really think I was building a website...like a
              developer, lol. All I wanted was a personal website for blogging
              and I heard about Wordpress. I learned the basics on YouTube and
              took it from there. A few weeks later and a “bit” of back pain, my
              website was complete and live. Funny enough, after the site went
              live, I missed developing the website, ha ha.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
          <div className="row left-side">
            <div className="col-1 circle-left"></div>
            <div className="col-5 text-bubble-left">
              What drew you to software development and UI/UX design?
            </div>
          </div>
          <div className="row right-side">
            <div className="col-7 text-bubble-right">
              Discovering that I could create something people could see and
              interact with was an incredible experience for me. My "aha" moment
              was when I came across UI/UX design and realised that it addressed
              my concerns about developing websites that didn’t feel “good
              enough”. Combining frontend development with UI/UX design makes so
              much sense to me because we’re in the digital era and so I it is
              important for me to create products and services that genuinely
              meet users’ needs.
            </div>
            <div className="col-1 circle-right"></div>
          </div>
        </div>
        <div className="contact-info">
          <p>"I'm intrigued...where can I reach you?"</p>
          <a href="mailto:tintswalomabuza10@gmail.com">
            <button className="about-contact-button">Contact me</button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
