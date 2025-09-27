import Link from "next/link";
import React from "react";

function About1() {
  return (
    <div className="about-style-1 pt-120 mb-120" id="about-style-1">
      <div className="container">
        <div className="row mb-60">
          <div className="col-12">
            <div className="section-title1">
              <h6>Who am i</h6>
              <h3>
                “The long story short is that I'm just a guy lucky enough to
                pick up a camera. How that went down is quite a tale,
              </h3>
            </div>
          </div>
        </div>
        <div className="row mb-70">
          <div className="col-md-3 d-flex justify-content-center">
            <div className="about-img1 custom-cursor">
              <img
                className="img-fluid  magnetic-item"
                src="assets/images/bg/about-img1.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-img2">
              <img
                className="img-fluid  magnetic-item"
                src="assets/images/bg/about-img2.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end align-items-end">
            <div className="about-img3">
              <img
                className="img-fluid magnetic-item"
                src="assets/images/bg/about-img3.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="about-content">
              <p>
                “The long story short is that I'm just a guy lucky enough to
                pick up a camera. How that went down is quite a tale, and the
                fact that I get to do what I love every day is something that
                I'll always cherish and be forever grateful for.”
              </p>
              <Link href="/about-me" legacyBehavior>
                <a className="primary-btn2">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_126_82)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5 0.000100587C11.6326 0.000100581 11.7598 0.0527787 11.8536 0.146547C11.9473 0.240315 12 0.367492 12 0.500101L12 6.5001C12 6.63271 11.9473 6.75989 11.8536 6.85365C11.7598 6.94742 11.6326 7.0001 11.5 7.0001C11.3674 7.0001 11.2402 6.94742 11.1465 6.85365C11.0527 6.75989 11 6.63271 11 6.5001L11 1.7071L0.854021 11.8541C0.807533 11.9006 0.752344 11.9375 0.691605 11.9626C0.630865 11.9878 0.565765 12.0007 0.500021 12.0007C0.434277 12.0007 0.369177 11.9878 0.308438 11.9626C0.247698 11.9375 0.192509 11.9006 0.146021 11.8541C0.0995332 11.8076 0.0626571 11.7524 0.037498 11.6917C0.0123389 11.6309 -0.000610371 11.5658 -0.000610373 11.5001C-0.000610376 11.4344 0.0123389 11.3693 0.037498 11.3085C0.0626571 11.2478 0.0995332 11.1926 0.146021 11.1461L10.293 1.0001L5.50002 1.0001C5.36741 1.0001 5.24024 0.947423 5.14647 0.853655C5.0527 0.759887 5.00002 0.632709 5.00002 0.500101C5.00002 0.367492 5.0527 0.240315 5.14647 0.146547C5.24024 0.052779 5.36741 0.000100855 5.50002 0.000100849L11.5 0.000100587Z"
                      />
                    </g>
                  </svg>
                  More About
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
