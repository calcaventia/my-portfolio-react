import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../pages/DesignProjects/DesignProjects.css";
import AppImage1 from "../../assets/images/SpotBuddie-UI-1.JPG";
import AppImage2 from "../../assets/images/SpotBuddie-UI-2.JPG";
import AppImage3 from "../../assets/images/SpotBuddie-UI-3.JPG";
import SpotBuddieVideo from "../../assets/video/spot-buddie-video.mp4";
import FigmaIcon from "../../assets/icons-img/figma-icon.png";
import PhotopeaIcon from "../../assets/icons-img/photopea-icon.png";
import GoogleFIcon from "../../assets/icons-img/Google_forms_icon.png";
import GoogleSIcon from "../../assets/icons-img/Google_Sheets_icon.png";
import GoogleDIcon from "../../assets/icons-img/Google_docs_icon.png";
import DesktopVersion from "../../assets/images/SpotBuddie-UI-Desktop.png";
import LogoItem from "../../assets/icons-img/Logo-item.png";
import { Link } from "react-router-dom";

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
          <div className="next-button-container">
            <Link to="/designproject2" className="next-project-link">
              <button className="next-button"> Next Project </button>
            </Link>
          </div>

          <div className="design-project1-background">
            <div className="design-project-images">
              <ul>
                <li className="main-images">
                  <img src={AppImage1} alt="" className="app-image" />
                </li>
                <li className="main-images">
                  <img src={AppImage2} alt="" className="app-image" />
                </li>
                <li className="main-images">
                  <img src={AppImage3} alt="" className="app-image" />
                </li>
              </ul>
            </div>
            <p className="project-name">Spot Buddie App</p>
          </div>

          <div className="design-background">
            <h4 className="design-heading">User-Experience Case Study</h4>
            <p className="project-description">
              A Bluetooth-enabled mobile tracking application designed to assist
              busy individuals to easily locate misplaced items.
            </p>
            <div className="problem-statement">
              <p className="section-heading">Problem Statement</p>
              <div className="row problem-statement-section">
                <div className="col-12 col-sm-8 problem-statement-content">
                  <p className="text-content">
                    Busy professionals often face challenges in keeping track of
                    essential items like car keys, wallets, or headphones,
                    especially when juggling a demanding schedule. This can lead
                    to unnecessary stress, wasted time, and disruption in their
                    daily routines.
                  </p>
                  <p className="text-content">
                    For busy individuals living in a bustling city like, for
                    example, Johannesburg, the need to stay organised is
                    important. Existing solutions lack comprehensive tracking
                    features, particularly for locating objects that are out of
                    Bluetooth range.
                  </p>
                </div>
                <div className="col-12 col-sm-4 problem-statement-video">
                  <video className="spot-buddie-video" muted controls>
                    <source src={SpotBuddieVideo} type="video/mp4" />
                  </video>
                  <p className="video-play">Play video</p>
                </div>
              </div>
            </div>
            <div className="challenges-section">
              <p className="section-heading">Challenges</p>
              <p className="text-content">
                One of the primary challenges in developing Spot Pal is
                addressing the limitations of Bluetooth range, which can make
                tracking ineffective when items are misplaced beyond its
                coverage. Another significant hurdle is designing an intuitive
                user interface that caters to busy professionals who may lack
                the time or patience to navigate a complicated app.
              </p>
              <p className="text-content">
                Additionally, the app must optimize power usage to prevent
                excessive battery drain on both the tracker and the user's
                mobile device. Lastly, encouraging user adoption requires
                creating a smooth onboarding experience that integrates the app
                into the user’s daily routine without adding unnecessary
                complexity.
              </p>
            </div>
            <div className="solution-section">
              <p className="section-heading">Possible Solution</p>
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
              <div className="col-12 col-sm-5">
                <p className="project-duration-heading">Project Duration</p>
                <div className="row project-duration">
                  <div className="col-2 duration-number">3</div>
                  <div className="col-2 screen-number">40+</div>
                </div>
                <div className="row project-duration">
                  <div className="col-2 project-duration-days">weeks</div>
                  <div className="col-2 project-sreens">screens</div>
                </div>
              </div>

              <div className="col-12 col-sm-7 tools-used">
                <p className="project-tools-heading">Tools Used</p>
                <div className="row ">
                  <div className="row project-tools">
                    <div className="col-2  tools-used-image">
                      <img src={FigmaIcon} alt="" className="tools-used-icon" />
                      <p className="image-label">Figma</p>
                    </div>
                    <div className="col-2 tools-used-image">
                      <img
                        src={PhotopeaIcon}
                        alt=""
                        className="tools-used-photopea-icon"
                      />
                      <p className="image-label">Photo-pea</p>
                    </div>
                    <div className="col-2 tools-used-image">
                      <img
                        src={GoogleFIcon}
                        alt=""
                        className="tools-used-icon"
                      />
                      <p className="image-label">Google Forms</p>
                    </div>
                    <div className="col-2 tools-used-image">
                      <img
                        src={GoogleSIcon}
                        alt=""
                        className="tools-used-icon"
                      />
                      <p className="image-label">Google Sheets</p>
                    </div>
                    <div className="col-2 tools-used-image">
                      <img
                        src={GoogleDIcon}
                        alt=""
                        className="tools-used-icon"
                      />
                      <p className="image-label">Google Docs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spot-buddie-desktop">
              <img src={DesktopVersion} alt="" className="desktop-version" />
            </div>
          </div>

          {/*User-Interface section*/}

          <div className="interface-background">
            <div className="interface-section-heading">
              <p>User-Interface Design Elements</p>
            </div>
            <div className="row interface-items">
              <div className="col-12 col-sm-6 logo-items">
                <p className="UI-section-heading ">Logo</p>
                <hr />
                <img src={LogoItem} alt="" className="logo-item-image" />
              </div>
              <div className="col-12 col-sm-6 color-palette">
                <p className="UI-section-heading ">Colour Palette</p>

                <hr />
                <div className="row gap-4 color-group">
                  <div className="col-2 color-circle1 color-circle"></div>
                  <div className="col-2 color-circle2 color-circle"></div>
                  <div className="col-2 color-circle3 color-circle"></div>
                </div>
                <div className="row gap-4 color-group">
                  <div className="col-2 color-circle4 color-circle"></div>
                  <div className="col-2 color-circle5 color-circle"></div>
                  <div className="col-2 color-circle6 color-circle"></div>
                </div>
              </div>
              <div className="typography-section">
                <p className="UI-section-heading">Typography</p>
                <hr />
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ul>
                      <li className="font-19">Typography</li>
                      <li className="font-17">Typography</li>
                      <li className="font-12">Typography</li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6 font-main">
                    <p className="font-name">SF Pro Text</p>
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
                      <svg
                        className="custom-icon"
                        width="73"
                        height="48"
                        viewBox="0 0 73 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4281 21.0268C14.2615 22.2641 14.1762 23.5678 14.1762 24.9383L14.1762 44.0277C14.1762 44.8538 13.2312 45.32 12.5726 44.8213L8.3612 41.6326C8.11154 41.4435 7.96484 41.1485 7.96484 40.8353V34.2144V27.5291C7.96484 27.253 8.07901 26.9891 8.28029 26.8001L14.4281 21.0268C15.9451 9.75875 24.2021 3.98801 36.1462 3.21387C46.6361 3.21387 55.8615 10.7588 57.7596 21.0268L63.9724 26.7997C64.176 26.9889 64.2917 27.2543 64.2917 27.5322V40.8371C64.2917 41.1492 64.1459 41.4435 63.8976 41.6326L59.7221 44.8125C59.0638 45.3138 58.1162 44.8433 58.1162 44.0158V24.9383C58.1162 23.5991 57.9936 22.2923 57.7596 21.0268C55.8615 10.7588 46.6361 3.21387 36.1462 3.21387C24.2021 3.98801 15.9451 9.75875 14.4281 21.0268Z"
                          fill="#5CA059"
                        />
                        <path
                          d="M14.4281 21.0268L8.28029 26.8001C8.07901 26.9891 7.96484 27.253 7.96484 27.5291V34.2144V40.8353C7.96484 41.1485 8.11154 41.4435 8.3612 41.6326L12.5726 44.8213C13.2312 45.32 14.1762 44.8538 14.1762 44.0277C14.1762 40.9957 14.1762 34.5612 14.1762 24.9383C14.1762 11.0864 22.8906 4.07302 36.1462 3.21387C46.6361 3.21387 55.8614 10.7588 57.7596 21.0268M57.7596 21.0268C57.9936 22.2923 58.1162 23.5991 58.1162 24.9383C58.1162 35.9625 58.1162 38.1694 58.1162 44.0158C58.1162 44.8433 59.0638 45.3138 59.7221 44.8125L63.8976 41.6326C64.1459 41.4435 64.2917 41.1492 64.2917 40.8371V27.5322C64.2917 27.2543 64.176 26.9889 63.9724 26.7997L57.7596 21.0268Z"
                          stroke="#5CA059"
                          stroke-width="5"
                        />
                        <circle
                          cx="7.96454"
                          cy="34.2107"
                          r="7.90631"
                          transform="rotate(0.425677 7.96454 34.2107)"
                          fill="#5CA059"
                        />
                        <circle
                          cx="64.292"
                          cy="34.0514"
                          r="7.74822"
                          transform="rotate(0.425677 64.292 34.0514)"
                          fill="#5CA059"
                        />
                        <line
                          x1="6"
                          y1="21.2139"
                          x2="6"
                          y2="47.2139"
                          stroke="#F2F2F2"
                          stroke-width="2"
                        />
                        <line
                          x1="66"
                          y1="22.2139"
                          x2="66"
                          y2="46.2139"
                          stroke="#F2F2F2"
                          stroke-width="2"
                        />
                        <line
                          x1="19.5"
                          y1="23.1047"
                          x2="19.5"
                          y2="44.1885"
                          stroke="#5CA059"
                          stroke-width="3"
                        />
                        <circle
                          cx="19.5124"
                          cy="23.1123"
                          r="1.51241"
                          fill="#5CA059"
                        />
                        <circle
                          cx="19.505"
                          cy="44.5306"
                          r="1.50496"
                          fill="#5CA059"
                        />
                        <line
                          x1="52.877"
                          y1="22.979"
                          x2="52.877"
                          y2="44.5762"
                          stroke="#5CA059"
                          stroke-width="3"
                        />
                        <circle
                          cx="52.879"
                          cy="22.7593"
                          r="1.50201"
                          fill="#5CA059"
                        />
                        <circle
                          cx="52.879"
                          cy="44.5335"
                          r="1.50201"
                          fill="#5CA059"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="custom-icon"
                        width="59"
                        height="41"
                        viewBox="0 0 59 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7.99585"
                          width="58.4199"
                          height="32.8612"
                          rx="5"
                          fill="#5CA059"
                        />
                        <path
                          d="M17.1983 1.4855L12.1021 9.97929C11.7021 10.6458 12.1823 11.4938 12.9595 11.4938H44.4065C45.1837 11.4938 45.6639 10.6458 45.2639 9.97929L40.1677 1.4855C39.987 1.1843 39.6614 1 39.3102 1H18.0558C17.7046 1 17.3791 1.1843 17.1983 1.4855Z"
                          fill="#5CA059"
                          stroke="#5CA059"
                        />
                        <circle
                          cx="29.3828"
                          cy="23.3867"
                          r="11.1934"
                          fill="#F2F2F2"
                        />
                        <circle
                          cx="29.3831"
                          cy="23.3867"
                          r="9.2942"
                          fill="#F2F2F2"
                          stroke="#5CA059"
                        />
                        <line
                          x1="46.1729"
                          y1="13.0925"
                          x2="54.5679"
                          y2="13.0925"
                          stroke="#F2F2F2"
                        />
                        <circle
                          cx="0.699586"
                          cy="0.699586"
                          r="0.699586"
                          transform="matrix(-1 0 0 1 46.8721 12.1934)"
                          fill="#F2F2F2"
                        />
                        <circle
                          cx="0.699586"
                          cy="0.699586"
                          r="0.699586"
                          transform="matrix(-1 0 0 1 55.2676 12.1934)"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="custom-icon"
                        width="71"
                        height="41"
                        viewBox="0 0 71 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M55.3789 1.21387H15.2852C14.8606 1.21387 14.4822 1.48206 14.3416 1.88276L1.46709 38.5728C1.23889 39.2231 1.72149 39.9039 2.41068 39.9039H68.6213C69.3143 39.9039 69.7972 39.2162 69.5619 38.5644L56.3195 1.87438C56.1765 1.47802 55.8003 1.21387 55.3789 1.21387Z"
                          fill="#5CA059"
                          stroke="#5CA059"
                        />
                        <path
                          d="M24.2838 9.3471C24.2838 7.87507 23.0905 6.68175 21.6185 6.68175C20.1464 6.68175 18.9531 7.87507 18.9531 9.3471C18.9531 10.8191 20.1464 12.0125 21.6185 12.0125C23.0905 12.0125 24.2838 10.8191 24.2838 9.3471Z"
                          fill="#F2F2F2"
                        />
                        <circle
                          cx="2.66535"
                          cy="2.66535"
                          r="2.66535"
                          transform="matrix(1 0 0 -1 44.7529 12.0125)"
                          fill="#F2F2F2"
                        />
                        <path
                          d="M21.6182 9.75586C22.8549 20.7097 27.8549 24.2971 34.9125 24.2971C41.97 24.2971 46.3722 20.6101 47.5604 9.75586"
                          stroke="#F2F2F2"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="custom-icon"
                        width="70"
                        height="46"
                        viewBox="0 0 70 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="15.1588"
                          width="69.8862"
                          height="20.8014"
                          rx="2"
                          fill="#5CA059"
                        />
                        <circle
                          cx="18.3528"
                          cy="35.185"
                          r="10.1634"
                          fill="#F2F2F2"
                          stroke="#F2F2F2"
                        />
                        <circle
                          cx="47.636"
                          cy="35.185"
                          r="10.1634"
                          fill="#F2F2F2"
                          stroke="#F2F2F2"
                        />
                        <circle
                          cx="18.353"
                          cy="35.185"
                          r="9.62543"
                          fill="#D9D9D9"
                        />
                        <circle
                          cx="18.353"
                          cy="35.185"
                          r="9.62543"
                          fill="#5CA059"
                        />
                        <circle
                          cx="47.6362"
                          cy="35.185"
                          r="9.62543"
                          fill="#5CA059"
                        />
                        <path
                          d="M12.3586 2.20817L5.77107 17.4873C5.20186 18.8075 6.16994 20.2791 7.60764 20.2791H58.8004C60.4053 20.2791 61.3565 18.4837 60.4551 17.1558L50.0833 1.87671C49.711 1.32834 49.0913 1 48.4285 1H14.1952C13.3967 1 12.6747 1.47494 12.3586 2.20817Z"
                          fill="#5CA059"
                          stroke="#5CA059"
                        />
                        <path
                          d="M10.7187 14.2975L14.7921 4.64206C14.9484 4.27159 15.3114 4.03076 15.7134 4.03076H27.7087C28.261 4.03076 28.7087 4.47848 28.7087 5.03076V14.6862C28.7087 15.2385 28.261 15.6862 27.7087 15.6862H11.64C10.9246 15.6862 10.4406 14.9568 10.7187 14.2975Z"
                          fill="#F2F2F2"
                        />
                        <path
                          d="M46.9125 4.03076H33.3511C32.7988 4.03076 32.3511 4.47848 32.3511 5.03076V9.8585V14.6862C32.3511 15.2385 32.7988 15.6862 33.3511 15.6862H52.9472C53.7326 15.6862 54.2115 14.8223 53.7952 14.1562L47.7605 4.50076C47.5778 4.20838 47.2573 4.03076 46.9125 4.03076Z"
                          fill="#F2F2F2"
                        />
                        <path
                          d="M10.7187 14.2975L14.7921 4.64206C14.9484 4.27159 15.3114 4.03076 15.7134 4.03076H27.7087C28.261 4.03076 28.7087 4.47848 28.7087 5.03076V14.6862C28.7087 15.2385 28.261 15.6862 27.7087 15.6862H11.64C10.9246 15.6862 10.4406 14.9568 10.7187 14.2975Z"
                          stroke="#5CA059"
                        />
                        <path
                          d="M46.9125 4.03076H33.3511C32.7988 4.03076 32.3511 4.47848 32.3511 5.03076V9.8585V14.6862C32.3511 15.2385 32.7988 15.6862 33.3511 15.6862H52.9472C53.7326 15.6862 54.2115 14.8223 53.7952 14.1562L47.7605 4.50076C47.5778 4.20838 47.2573 4.03076 46.9125 4.03076Z"
                          stroke="#5CA059"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="custom-icon"
                        width="64"
                        height="51"
                        viewBox="0 0 64 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="15.4054"
                          cy="40.0107"
                          r="10.6994"
                          fill="#5CA059"
                        />
                        <circle
                          cx="48.6496"
                          cy="40.0107"
                          r="10.6994"
                          fill="#5CA059"
                        />
                        <path
                          d="M23.4176 40.2738C30.1474 35.1427 33.9211 35.0068 40.6511 40.2738M22.0324 7.85797C20.1519 5.97749 19.9059 0.371677 14.4531 1.38454C14.3889 1.39646 14.3208 1.40284 14.2556 1.40586C8.66974 1.66509 5.17694 23.9834 1.327 39.0184C1.16416 39.6543 1.64331 40.2738 2.29977 40.2738L5.4513 40.2738"
                          stroke="#5CA059"
                          stroke-width="2"
                        />
                        <path
                          d="M41.9676 7.59479C43.8481 5.7143 44.0941 0.108494 49.5469 1.12136C49.6111 1.13328 49.6792 1.13965 49.7444 1.14268C55.3303 1.40191 58.8231 23.7203 62.673 38.7552C62.8358 39.3911 62.3567 40.0106 61.7002 40.0106L58.5487 40.0106"
                          stroke="#5CA059"
                          stroke-width="2"
                        />
                      </svg>
                    </li>
                    <li>
                      <svg
                        className="custom-icon"
                        width="75"
                        height="34"
                        viewBox="0 0 75 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="16.6126"
                          cy="16.6126"
                          r="16.6126"
                          fill="#5CA059"
                        />
                        <circle
                          cx="10.9495"
                          cy="16.6126"
                          r="5.66341"
                          fill="#F2F2F2"
                        />
                        <line
                          x1="26.166"
                          y1="16.776"
                          x2="65.7059"
                          y2="16.776"
                          stroke="#5CA059"
                          stroke-width="11"
                        />
                        <path
                          d="M66.1154 21.6154L72.6619 17.3469C73.2874 16.9391 73.2615 16.0145 72.6142 15.6423L66.1217 11.9094C65.4576 11.5276 64.6284 12.0036 64.6233 12.7696L64.5692 20.771C64.5638 21.5681 65.4476 22.0508 66.1154 21.6154Z"
                          fill="#5CA059"
                          stroke="#5CA059"
                        />
                        <path
                          d="M44.6793 14.7478L42.335 10.9968H46.8361L44.6793 14.7478Z"
                          fill="#F2F2F2"
                          stroke="#F2F2F2"
                        />
                        <path
                          d="M52.1803 14.7478L49.8359 10.9968H54.3371L52.1803 14.7478Z"
                          fill="#F2F2F2"
                          stroke="#F2F2F2"
                        />
                        <path
                          d="M60.0582 14.7478L57.7139 10.9968H62.215L60.0582 14.7478Z"
                          fill="#F2F2F2"
                          stroke="#F2F2F2"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="disclaimer">
              Disclaimer: This project is a conceptual mockup, and all
              scenarios, personas, and use cases are purely hypothetical.
            </p>
          </div>
          <div className="next-button-container" id="bottom-page-button">
            <Link to="/designproject2" className="next-project-link">
              <button className="next-button"> Next Project </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DesignProject1;
