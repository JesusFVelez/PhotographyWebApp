import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/artistic-gallery", label: "Artistic Gallery" },
  { href: "/gallery", label: "Normal Gallery" },
  { href: "/services", label: "Services" },
  { href: "/contact-me", label: "Contact Me" },
];

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const { events } = router;

    if (!events || !events.on) {
      return undefined;
    }

    const handleRouteChange = () => {
      setIsMobileMenuOpen(false);
    };

    events.on("routeChangeComplete", handleRouteChange);
    events.on("routeChangeError", handleRouteChange);

    return () => {
      events.off("routeChangeComplete", handleRouteChange);
      events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    if (typeof document === "undefined" || !isMobileMenuOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen || typeof document === "undefined") {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLinks = (onClick) =>
    NAV_ITEMS.map(({ href, label }) => {
      const isActive = currentRoute === href;

      return (
        <li key={href}>
          <Link legacyBehavior href={href}>
            <a
              className={isActive ? "active" : ""}
              aria-current={isActive ? "page" : undefined}
              onClick={onClick}
            >
              {label}
            </a>
          </Link>
        </li>
      );
    });

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
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-controls="primary-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} aria-hidden="true">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </span>
          </button>
          <div className="main-menu">
            <nav aria-label="Primary">
              <ul className="menu-list">{renderNavLinks()}</ul>
            </nav>
          </div>
          <div className="header-btn">
            <Link legacyBehavior href="/contact-me">
              <a>Hire Me Now</a>
            </Link>
          </div>
        </div>
        <div
          className={`mobile-menu-backdrop${isMobileMenuOpen ? " open" : ""}`}
          onClick={closeMobileMenu}
          aria-hidden={!isMobileMenuOpen}
        />
        <aside
          id="primary-navigation"
          className={`mobile-menu-panel${isMobileMenuOpen ? " open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-menu-header">
            <span>Menu</span>
            <button type="button" onClick={closeMobileMenu} className="mobile-menu-close">
              <span className="sr-only">Close navigation</span>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav aria-label="Mobile primary">
            <ul className="menu-list">{renderNavLinks(closeMobileMenu)}</ul>
          </nav>
          <div className="mobile-menu-cta">
            <Link legacyBehavior href="/contact-me">
              <a onClick={closeMobileMenu}>Hire Me Now</a>
            </Link>
          </div>
        </aside>
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

        header.style-1 .mobile-menu-toggle {
          display: none;
          border: none;
          background: transparent;
          padding: 6px;
          margin-left: auto;
          cursor: pointer;
          color: var(--white);
        }

        header.style-1 .mobile-menu-toggle:focus-visible {
          outline: 2px solid var(--primary-color1);
          outline-offset: 2px;
        }

        header.style-1 .mobile-menu-toggle .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        header.style-1 .mobile-menu-toggle .hamburger {
          display: inline-flex;
          flex-direction: column;
          gap: 5px;
        }

        header.style-1 .mobile-menu-toggle .hamburger-line {
          display: block;
          width: 26px;
          height: 2px;
          background-color: currentColor;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        header.style-1 .mobile-menu-toggle .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        header.style-1 .mobile-menu-toggle .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        header.style-1 .mobile-menu-toggle .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        header.style-1 .mobile-menu-backdrop,
        header.style-1 .mobile-menu-panel {
          display: none;
        }

        header.style-1 .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(16, 16, 16, 0.35);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 998;
        }

        header.style-1 .mobile-menu-backdrop.open {
          opacity: 1;
        }

        header.style-1 .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85%);
          background: #ffffff;
          box-shadow: -8px 0 24px rgba(0, 0, 0, 0.1);
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 999;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          visibility: hidden;
          pointer-events: none;
        }

        header.style-1 .mobile-menu-panel.open {
          transform: translateX(0);
          visibility: visible;
          pointer-events: auto;
        }

        header.style-1 .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        header.style-1 .mobile-menu-close {
          border: none;
          background: transparent;
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          color: #1f1f1f;
        }

        header.style-1 .mobile-menu-close:focus-visible {
          outline: 2px solid var(--primary-color1);
          outline-offset: 2px;
        }

        header.style-1 .mobile-menu-panel nav .menu-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        header.style-1 .mobile-menu-panel nav .menu-list a {
          font-size: 18px;
          font-weight: 500;
          color: #1f1f1f;
        }

        header.style-1 .mobile-menu-cta a {
          display: block;
          text-align: center;
          padding: 14px 20px;
          background: #1f1f1f;
          color: #ffffff;
          border-radius: 4px;
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

          header.style-1 .main-menu {
            display: none;
          }

          header.style-1 .mobile-menu-toggle {
            display: inline-flex;
            align-self: flex-end;
          }

          header.style-1 .mobile-menu-backdrop {
            display: block;
            pointer-events: none;
          }

          header.style-1 .mobile-menu-backdrop.open {
            pointer-events: auto;
          }

          header.style-1 .mobile-menu-panel {
            display: flex;
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
