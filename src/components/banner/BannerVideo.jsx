import Link from "next/link";
import React from "react";

function BannerVideo() {
  return (
    <div className="horo-style-2">
      <div className="social-area">
        <ul>
          <li>
            <a href="#">FB.</a>
          </li>
          <li>
            <a href="#">LI.</a>
          </li>
          <li>
            <a href="#">IN.</a>
          </li>
          <li>
            <a href="#">TW.</a>
          </li>
        </ul>
      </div>
      <div className="scroll-down">
        <a href="#about-style-2">
          <svg
            width={22}
            height={60}
            viewBox="0 0 22 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width={21} height={40} rx="10.5" />
            <path d="M11.5 29C11.5 28.7239 11.2761 28.5 11 28.5C10.7239 28.5 10.5 28.7239 10.5 29L11.5 29ZM10.6464 59.3536C10.8417 59.5488 11.1583 59.5488 11.3536 59.3536L14.5355 56.1716C14.7308 55.9763 14.7308 55.6597 14.5355 55.4645C14.3403 55.2692 14.0237 55.2692 13.8284 55.4645L11 58.2929L8.17157 55.4645C7.97631 55.2692 7.65973 55.2692 7.46447 55.4645C7.26921 55.6597 7.26921 55.9763 7.46447 56.1716L10.6464 59.3536ZM10.5 29L10.5 59L11.5 59L11.5 29L10.5 29Z" />
            <circle cx={11} cy={11} r={3} />
          </svg>
        </a>
      </div>
      <div className="hero-wrrap">
        <div className="video-wraper">
          <video autoPlay loop="loop" muted preload="auto">
            <source
              src="https://getcoderzone.com/dummy_video/video-banner.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hero-content">
          <span>Xoon Photography</span>
          <h1>We Love to Capture The Best Memory !</h1>
          <a className="eg-btn1 btn--primary" href="#">
            Get Started
          </a>
        </div>
        <div className="hero-meta">
          <div className="contact-number">
            <a href="tel:+8801701111000">Call Us: +880176 1111 456</a>
          </div>
          <div className="photographer">
            <Link href="/portfolio-details">Johan Doe / Photographer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerVideo;
