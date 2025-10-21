import Link from "next/link";
import React from "react";

function ChooseUsArea() {
  return (
    <div className="choose-area pt-100 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="choose-bg">
              <div className="row">
                <div className="col-lg-7">
                  <div className="choose-content">
                    <span>Why choose Us</span>
                    <h2>Create Your Own Photo Masterpiece...</h2>
                    <p>
                      Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                      minim voluptaria in. Ad mei modus quodsi complectitur,
                      postea verterem persecuti cu est, sea epicuri intellegam.
                    </p>
                    <ul>
                      <li>
                        Price of additional materials or parts (if needed)
                      </li>
                      <li>
                        Transportation cost for carrying new materials/parts
                      </li>
                      <li>Interpreting services is our specialty</li>
                    </ul>
                    <Link
                      className="primary-btn4 button-hover-two"
                      href="/contact-me"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUsArea;
