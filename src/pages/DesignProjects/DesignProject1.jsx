import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../pages/DesignProjects/DesignProjects.css";
import AppImage1 from "../../assets/images/SpotBuddie-UI-1.JPG";
import AppImage2 from "../../assets/images/SpotBuddie-UI-2.JPG";
import AppImage3 from "../../assets/images/SpotBuddie-UI-3.JPG";

function DesignProject1() {
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
          <button className="next-button">Next Project</button>
          <div className="design-project-images">
            <div className="row main-images">
              <div className="col-3 app-images">
                <img src={AppImage1} alt="" className="app-image" />
              </div>
              <div className="col-3 app-images">
                <img src={AppImage2} alt="" className="app-image" />
              </div>
              <div className="col-3 app-images">
                <img src={AppImage3} alt="" className="app-image" />
              </div>
            </div>
          </div>
          <h4>User-Experience Case Study</h4>
          <p>
            A Bluetooth-enabled mobile tracking application designed to assist
            busy individuals to easily locate misplaced items.
          </p>
          <div className="problem-statement">
            <div className="row problem-statement-section">
              <div className="col-7 problem-statement-content">
                <p>
                  Busy professionals often face challenges in keeping track of
                  essential items like car keys, wallets, or headphones,
                  especially when juggling a demanding schedule. This can lead
                  to unnecessary stress, wasted time, and disruption in their
                  daily routines.
                </p>
                <p>
                  For busy individuals living in a bustling city like, for
                  example, Johannesburg, the need to stay organized is
                  paramount. Existing solutions lack comprehensive tracking
                  features, particularly for locating objects that are out of
                  Bluetooth range.
                </p>
              </div>
              <div className="problem-statement-video">Video</div>
            </div>
          </div>
          <div className="challenges-section">
            <p className="challenges-heading">Challenges</p>
            <p>
              One of the primary challenges in developing Spot Pal is addressing
              the limitations of Bluetooth range, which can make tracking
              ineffective when items are misplaced beyond its coverage. Another
              significant hurdle is designing an intuitive user interface that
              caters to busy professionals who may lack the time or patience to
              navigate a complicated app.
            </p>
            <p>
              Additionally, the app must optimize power usage to prevent
              excessive battery drain on both the tracker and the user's mobile
              device. Lastly, encouraging user adoption requires creating a
              smooth onboarding experience that integrates the app into the
              user’s daily routine without adding unnecessary complexity.
            </p>
          </div>
          <div className="solution-section">
            <p className="solution-heading">Possible Solution</p>
            <ul>
              <li>
                Expand the tracking range using a satellite feature to locate
                objects far beyond Bluetooth limits.
              </li>
              <li>
                Create a user-friendly interface with simple navigation and
                quick access to essential features.
              </li>
              <li>
                Optimise the app and tracker for low energy consumption,
                ensuring reliability without frequent recharging.
              </li>
              <li>
                Design a quick, step-by-step onboarding process to familiarize
                users with the app's features without being time-consuming.
              </li>
            </ul>
          </div>
          <div className="row project-info">
            <div className="col-4">
              <p>Project Duration</p>
              <div className="row project-duration">
                <div className="col-2 duration-number">3</div>
                <div className="col-2 duration">weeks</div>
              </div>
              <div className="row project-duration">
                <div className="col-2 screens-number">40+</div>
                <div className="col-2 screens">screens</div>
              </div>
            </div>

            <div className="col-8 tools-used">
              <p>Tools Used</p>
              <div className="row">
                <div className="row project-duration">
                  <div className="col-2 figma-image">3</div>
                  <div className="col-2 figma-text">Figma</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 figma-image">3</div>
                  <div className="col-2 figma-text">Figma</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 figma-image">3</div>
                  <div className="col-2 figma-text">Figma</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 figma-image">3</div>
                  <div className="col-2 figma-text">Figma</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 figma-image">3</div>
                  <div className="col-2 figma-text">Figma</div>
                </div>
              </div>
            </div>
          </div>
          <img src="" alt="" className="desktop-version" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DesignProject1;
