import Link from "next/link";
import React from "react";

function IntroductionArea() {
  return (
    <div className="introduction-area pt-120 mb-120">
      <div className="container">
        <div className="row align-items-center g-4 justify-content-center">
          <div className="col-lg-8">
            <div className="introduction-content">
              <span>Photography</span>
              <h3>Introduction Photography Services</h3>
              <p>
                We have a beautiful and spacious photo studio. This is ideal for
                photographing pack shots, paintings, products or people.
                Different backgrounds are available, daylight comes in sideways
                and there is an extensive flash installation{" "}
              </p>
              <p>
                Vestibulum ultricies tellus. volv Pellentesque vel turpis vitae
                urna tincidunt hendrerit at ut est. Sed eget feugiat felis.
              </p>
              <h4>Service Intro</h4>
              <p>
                Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
                voluptaria in. Ad mei modus quodsi complectitur, postea verterem
                persecuti cu est, sea epicuri intellegam cu. Cu ius nonumes
                prodesset. Splendide concludaturque nam ad, est labore
                philosophia et, et his quem ornatus accusamus.{" "}
              </p>
              <Link
                className="primary-btn4 button-hover-two "
                href="/contact-me"
              >
                Get A Request
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-8 col-12">
            <div className="introduction-banner">
              <img
                className="img-fluid"
                src="assets/images/bg/intro-banner.png"
                alt="image"
              />
              <div className="overlay">
                <div className="intro-banner-content">
                  <h4>DO YOU HAVE A PROJECT IN YOUR MIND</h4>
                  <Link
                    className="primary-btn4 button-hover-two"
                    href="/portfolio"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionArea;
