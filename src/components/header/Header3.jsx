import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "../common/sidebar";

function Header3() {
  const currentRoute = useRouter().pathname;
  return (
    <>
      <header className="header-area style-3">
        <div className="header-logo">
          <Link legacyBehavior href="/">
            <img alt="image" src="assets/images/header-logo.svg" />
          </Link>
        </div>
        <div className="main-menu">
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link legacyBehavior href="/">
                <img alt="image" src="assets/images/header-logo.svg" />
              </Link>
            </div>
            <div className="menu-close-btn">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <ul className="menu-list">
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">Home </a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/">
                    <a>Personal Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-video">
                    <a>Personal Home Video</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-personal-showcase">
                    <a>Personal Home showcase</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-fullscreen">
                    <a>Personal Home Fullscreen</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index-portfolio">
                    <a>Personal Home Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2">
                    <a>Agency Home</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2-video">
                    <a>Agency Home Video</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2-thumbnail-slider">
                    <a>Agency Home Thumbnail</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2-pagination">
                    <a>Agency Home Pagination</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/index2-center-slider">
                    <a>Agency Home Center Slider</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">About</a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/about-me">
                    <a className={currentRoute === "/about-me" ? "active" : ""}>
                      About Me
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/about-us">
                    <a className={currentRoute === "/about-us" ? "active" : ""}>
                      About Us
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">Portfolio</a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/portfolio">
                    <a
                      className={currentRoute === "/portfolio" ? "active" : ""}
                    >
                      Portfolio 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-02">
                    <a
                      className={
                        currentRoute === "/portfolio-02" ? "active" : ""
                      }
                    >
                      Portfolio 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-03">
                    <a
                      className={
                        currentRoute === "/portfolio-03" ? "active" : ""
                      }
                    >
                      Portfolio 03
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/portfolio-details">
                    <a
                      className={
                        currentRoute === "/portfolio-details" ? "active" : ""
                      }
                    >
                      Portfolio Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">Blog</a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/blog-grid1">
                    <a
                      className={currentRoute === "/blog-grid1" ? "active" : ""}
                    >
                      Blog Grid 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-grid2">
                    <a
                      className={currentRoute === "/blog-grid2" ? "active" : ""}
                    >
                      Blog Grid 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a
                      className={
                        currentRoute === "/blog-standard" ? "active" : ""
                      }
                    >
                      Blog Standard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a
                      className={
                        currentRoute === "/blog-details" ? "active" : ""
                      }
                    >
                      Blog Details
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">Pages</a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/services">
                    <a className={currentRoute === "/services" ? "active" : ""}>
                      Services 01
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-2">
                    <a
                      className={currentRoute === "/services-2" ? "active" : ""}
                    >
                      Services 02
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services-details">
                    <a
                      className={
                        currentRoute === "/services-details" ? "active" : ""
                      }
                    >
                      Services Details
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/team">
                    <a className={currentRoute === "/team" ? "active" : ""}>
                      Our Team
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/gallery">
                    <a className={currentRoute === "/gallery" ? "active" : ""}>
                      Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a className={currentRoute === "/faq" ? "active" : ""}>
                      Faq
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/error">
                    <a className={currentRoute === "/error" ? "active" : ""}>
                      Error
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link legacyBehavior href="/#">
                <a className="btn--primary1">Contact</a>
              </Link>
              <i className="bx bxs-circle dropdown-icon" />
              <ul className="submenu">
                <li>
                  <Link legacyBehavior href="/contact-us">
                    <a
                      className={currentRoute === "/contact-us" ? "active" : ""}
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact-me">
                    <a
                      className={currentRoute === "/contact-me" ? "active" : ""}
                    >
                      Contact Me
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-right d-flex align-items-center">
          <div className="header-btn">
            <Link
              legacyBehavior
              href="/contact-us"
              className="button-hover-two"
            >
              Hire Us Now
            </Link>
          </div>
          <div className="side-icon style-two">
            <svg
              width={30}
              height={30}
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.421875 5.12308C0.134766 5.30769 0 5.58462 0 5.99077C0 6.39692 0.146484 6.67385 0.46875 6.87077L0.673828 7H15H29.3262L29.5312 6.87077C29.8535 6.67385 30 6.39692 30 5.99077C30 5.58462 29.8652 5.30769 29.5781 5.12308C29.3848 5 29.25 5 15 5C0.75 5 0.615234 5 0.421875 5.12308Z" />
              <path d="M0.421875 14.125C0.140625 14.3125 0 14.5938 0 15C0 15.4062 0.140625 15.6875 0.421875 15.875C0.615234 16 0.75 16 15 16C29.25 16 29.3848 16 29.5781 15.875C29.8594 15.6875 30 15.4062 30 15C30 14.5938 29.8594 14.3125 29.5781 14.125C29.3848 14 29.25 14 15 14C0.75 14 0.615234 14 0.421875 14.125Z" />
              <path d="M0.723529 23.0428C0.252941 23.159 0 23.5015 0 24.0214C0 24.419 0.141176 24.6942 0.423529 24.8777C0.611765 25 0.735294 25 8 25C15.2647 25 15.3882 25 15.5765 24.8777C15.8647 24.6942 16 24.419 16 24.0153C16 23.6116 15.8529 23.3364 15.5294 23.1407C15.3235 23.0122 15.2706 23.0122 8.11765 23C4.15294 23 0.823529 23.0122 0.723529 23.0428Z" />
            </svg>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
}

export default Header3;
