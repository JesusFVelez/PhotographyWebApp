import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

function Sidebar() {
  const currentRoute = useRouter().pathname;
  useEffect(()=>{
    if (typeof window !== "undefined") {
      const navSlide = () => {
        const burger = document.querySelector(".side-icon");
        for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener("click", function () {
      
          });
      }
      
        const nav = document.querySelector(".main-nav");
        const navLinks = document.querySelectorAll(".main-nav .menu-list .menu-item");
        const menuClose = document.querySelector("#menu-close-btn");
        burger.addEventListener("click", () => {
          nav.classList.add("show-menu");
         navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.4s ease forwards ${
                index / 10 + 0.5
              }s `;
            }
            
          });
        });
        menuClose.addEventListener("click", () => {
          nav.classList.remove("show-menu");
          navLinks.forEach((link, index) => {
            if (link.style.animation) {
              link.style.animation = "";
            } else {
              link.style.animation = `navLinkFade 0.4s ease forwards ${
                index / 10 + 0.5
              }s `;
            }
          });
        });
      };
      navSlide()
      
    }
  })
  const navRef = useRef(null);
  /*---------Using reducer mange the active or inactive menu----------*/
  const initialState = { activeMenu: "" };
  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return {...state, activeMenu: "homeOne" };
      case "about":
        return { activeMenu: "about" };
      case "blog":
        return { activeMenu: "blog" };
      case "portfolio":
        return { activeMenu: "portfolio" };
      case "pages":
        return { activeMenu: "pages" };
      case "contact":
        return { activeMenu: "contact" };
      default:
        return { activeMenu: "" };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="main-nav-wrapper">
      <div className="main-nav" ref={navRef}>
        <div className="menu-close-btn" id="menu-close-btn"><i className="bi bi-x-lg" /></div>
        <div className="mobile-logo-area d-flex justify-content-start align-items-center">
          <div className="header-logo">
            <Link href="/"><img alt="image" className="img-fluid" src="assets/images/header-logo2.svg" /></Link>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 px-0">
              <div className="sidebar-menu-area">
                <ul className="menu-list">
                  <li className="menu-item-has-children menu-item">
                    <Link href="#" className="drop-down" data-hover="Home">Home</Link><i onClick={() => dispatch({ type: "homeOne" })}  className={state.activeMenu === "homeOne" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu === "homeOne"? "sub-menu d-block": "sub-menu d-none"}>
                      <li><Link href="/">Personal Home</Link></li>
                      <li><Link href="/index-video">Personal Home Video</Link></li>
                      <li><Link href="/index-personal-showcase">Personal Home showcase</Link></li>
                      <li><Link href="/index-fullscreen">Personal Home Fullscreen</Link></li>
                      <li><Link href="/index-portfolio">Personal Home Portfolio</Link></li>
                      <li><Link href="/index2">Agency Home</Link></li>
                      <li><Link href="/index2-video">Agency Home Video</Link></li>
                      <li><Link href="/index2-thumbnail-slider">Agency Home Thumbnail</Link></li>
                      <li><Link href="/index2-pagination">Agency Home Pagination</Link></li>
                      <li><Link href="/index2-center-slider">Agency Home Center Slider</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <Link href="#" className="drop-down" data-hover="About">About</Link><i onClick={() => dispatch({ type: "about" })}  className={state.activeMenu === "about" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu === "about"?"sub-menu d-block":"sub-menu d-none"}>
                      <li><Link href="/about-me">About Me</Link></li>
                      <li><Link href="/about-us">About Us</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <Link href="#" data-hover="Portfolio">Portfolio</Link><i onClick={() => dispatch({ type: "portfolio" })}  className={state.activeMenu === "portfolio" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu === "portfolio"?"sub-menu d-block":"sub-menu d-none"}>
                      <li><Link href="/portfolio">Portfolio 01</Link></li>
                      <li><Link href="/portfolio-02">Portfolio 02</Link></li>
                      <li><Link href="/portfolio-03">Portfolio 03</Link></li>
                      <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <Link href="#" data-hover="Blog">Blog</Link><i onClick={() => dispatch({ type: "blog" })}  className={state.activeMenu === "blog" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu==="blog"?"sub-menu d-block":"sub-menu d-none"}>
                      <li><Link href="/blog-grid1">Blog Grid 01</Link></li>
                      <li><Link href="/blog-grid2">Blog Grid 02</Link></li>
                      <li><Link href="/blog-standard">Blog Standard</Link></li>
                      <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <a href="#" className="drop-down" data-hover="Pages"> Pages</a><i onClick={() => dispatch({ type: "pages" })}  className={state.activeMenu === "pages" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu === "pages"?"sub-menu d-block":"sub-menu d-none"}>
                      <li><Link href="/services">Services 01</Link></li>
                      <li><Link href="/services-2">Services 02</Link></li>
                      <li><Link href="/services-details">Services Details</Link></li>
                      <li><Link href="/team">Our Team</Link></li>
                      <li><Link href="/gallery">Gallery</Link></li>
                      <li><Link href="/faq">Faq</Link></li>
                      <li><Link href="/error">Error</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children menu-item">
                    <a href="#" className="drop-down" data-hover="Contact"> Contact </a><i onClick={() => dispatch({ type: "contact" })}  className={state.activeMenu === "contact" ?"bi bi-dash-lg dropdown-icon":"bi bi-plus-lg dropdown-icon"} />
                    <ul className={state.activeMenu==="contact"?"sub-menu d-block":"sub-menu d-none"}>
                      <li><Link href="/contact-us">Contact Us</Link></li>
                      <li><Link href="/contact-me">Contact me</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav-contact-list">
                <li className="citem">
                  <h6>PHONE:</h6>
                  <a href="tel:+8801701111000">+880 170 1111 000</a>
                </li>
                <li className="citem">
                  <h6>ADDRESS:</h6>
                  <p>121 King Street, Melbourne Victoria 3000, Australia.</p>
                </li>
                <li className="citem">
                  <h6>E-mail</h6>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </li>
                <li className="citem">
                  <h6>FOLLOW US:</h6>
                  <ul className="social-icon">
                    <li><a href="https://www.dribbble.com/"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a></li>
                    <li><a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a></li>
                    <li><a href="https://www.behance.com/"><i className="fab fa-behance" /></a></li>
                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook" /></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span />
      </div>
    </div>

  );
}




export default Sidebar;
