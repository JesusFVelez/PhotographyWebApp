import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const currentRoute = useRouter().pathname;
  return (
    <>
      <header className="header-area style-1">
        <div className="header-logo">
          <Link href="/" legacyBehavior>
            <a>
              <img alt="image" src="assets/images/header-logo.svg" />
            </a>
          </Link>
        </div>
        <div className="nav-right d-flex align-items-center">
          <div className="main-menu">
            <nav aria-label="Primary">
              <ul className="menu-list">
                <li>
                  <Link legacyBehavior href="/">
                    <a
                      className={currentRoute === "/" ? "active" : ""}
                      aria-current={currentRoute === "/" ? "page" : undefined}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/artistic-gallery">
                    <a
                      className={
                        currentRoute === "/artistic-gallery" ? "active" : ""
                      }
                      aria-current={
                        currentRoute === "/artistic-gallery"
                          ? "page"
                          : undefined
                      }
                    >
                      Artistic Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/gallery">
                    <a
                      className={currentRoute === "/gallery" ? "active" : ""}
                      aria-current={
                        currentRoute === "/gallery" ? "page" : undefined
                      }
                    >
                      Normal Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/services">
                    <a
                      className={currentRoute === "/services" ? "active" : ""}
                      aria-current={
                        currentRoute === "/services" ? "page" : undefined
                      }
                    >
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact-me">
                    <a
                      className={
                        currentRoute === "/contact-me" ? "active" : ""
                      }
                      aria-current={
                        currentRoute === "/contact-me" ? "page" : undefined
                      }
                    >
                      Contact Me
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-btn">
            <Link legacyBehavior href="/contact-me">
              <a>Hire Me Now</a>
            </Link>
          </div>
        </div>
      </header>
      <style jsx global>{`
        header.style-1 .nav-right {
          gap: 48px;
        }

        @media (max-width: 1399px) {
          header.style-1 .nav-right {
            gap: 32px;
          }
        }

        @media (max-width: 1199px) {
          header.style-1 {
            flex-wrap: wrap;
            gap: 20px;
          }

          header.style-1 .nav-right {
            width: 100%;
            justify-content: space-between;
          }

          header.style-1 .nav-right .header-btn {
            display: block;
            visibility: visible;
          }
        }

        @media (max-width: 991px) {
          header.style-1 {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          header.style-1 .nav-right {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }

          header.style-1 .main-menu nav {
            width: 100%;
          }

          header.style-1 .nav-right .header-btn a {
            display: block;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
