import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Footer() {
  const currentRoute = useRouter().pathname;
  return (
    <footer className="style1">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row mb-120 justify-content-center g-4">
            <div className="col-xl-4 col-lg-6 justify-content-lg-start justify-content-center">
              <div className="footer-widget one">
                <div className="widget-title">
                  <h4>USEFUL LINKS</h4>
                </div>
                <div className="menu-container">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/about-me">
                        <a>About Xoon</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#">
                        <a>Our History</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact-us">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/portfolio">
                        <a>Portfolio 01</a>
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">Video</a>
                    </li>
                    <li>
                      <a href="#">Our Achieve</a>
                    </li>
                    <li>
                      <a href="#">How We Work</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="footer-widget two three">
                <div className="widget-title">
                  <h4>Newsletter</h4>
                  <p>
                    Subscribe to our Newsletter to receive exclusive offers,
                    latest news and updates.
                  </p>
                </div>
                <div className="newsletter-container">
                  <input type="text" placeholder="Enter your Email" />
                  <button
                    type="submit"
                    className={
                      currentRoute === "/index2" ||
                      currentRoute === "/index2-center-slider" ||
                      currentRoute === "/index2-video" ||
                      currentRoute === "/index2-thumbnail-slider" ||
                      currentRoute === "/index2-pagination"
                        ? "button-hover-one agency"
                        : "button-hover-two "
                    }
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-10">
              <div className="footer-widget">
                <div className="widget-title">
                  <h4>Follow Us</h4>
                </div>
                <div className="socila-container">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
                <p>
                  The perfect place for telling &amp; sharing all the stories
                  that truly matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          currentRoute === "/index2" ||
          currentRoute === "/index2-center-slider" ||
          currentRoute === "/index2-video" ||
          currentRoute === "/index2-thumbnail-slider" ||
          currentRoute === "/index2-pagination"
            ? "footer-btm  style-agency d-flex justify-content-center"
            : "footer-btm d-flex justify-content-center"
        }
      >
        <p>
          Copyright 2022{" "}
          <Link legacyBehavior href="#">
            <a>XOON</a>
          </Link>{" "}
          | Design By{" "}
          <Link legacyBehavior href="#">
            <a>Egens Lab.</a>
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
