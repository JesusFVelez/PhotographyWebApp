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
        <div className="main-menu">
          <nav aria-label="Primary">
            <ul className="menu-list">
              <li>
                <Link legacyBehavior href="/">
                  <a className={currentRoute === "/" ? "active" : ""} aria-current={currentRoute === "/" ? "page" : undefined}>Home</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/artistic-gallery">
                  <a className={currentRoute === "/artistic-gallery" ? "active" : ""} aria-current={currentRoute === "/artistic-gallery" ? "page" : undefined}>Artistic Gallery</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/gallery">
                  <a className={currentRoute === "/gallery" ? "active" : ""} aria-current={currentRoute === "/gallery" ? "page" : undefined}>Normal Gallery</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/services">
                  <a className={currentRoute === "/services" ? "active" : ""} aria-current={currentRoute === "/services" ? "page" : undefined}>Services</a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/contact-me">
                  <a className={currentRoute === "/contact-me" ? "active" : ""} aria-current={currentRoute === "/contact-me" ? "page" : undefined}>Contact Me</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
