import Link from "next/link";
import React from "react";

function HomePricePlan() {
  return (
    <div className="pricing-plan-area mb-120">
      <div className="container">
        <div className="row mb-70">
          <div className="col-12">
            <div className="section-title1 text-center">
              <h2>Pricing plan</h2>
              <p>
                As Vintage decided to have a closer look into fast-paced New
                York web design realm in.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-wrap">
              <div className="top-bg">
                <img src="assets/images/icons/price-bg1.svg" alt="image" />
              </div>
              <div className="btm-bg">
                <img src="assets/images/icons/price-bg2.svg" alt="image" />
              </div>
              <div className="pricing-title">
                <h2>Weadding</h2>
                <h5 className="price">$300</h5>
              </div>
              <ul className="pricing-features">
                <li>200 Personal Photograph.</li>
                <li>5 Hour To 8 Hour Duration.</li>
                <li>10 Fresh Edited cool Video.</li>
                <li>20 Printed &amp; Hard Copy.</li>
                <li>Digital Unique Album.</li>
              </ul>
              <div className="book-btn">
                <Link legacyBehavior href="/contact-us">
                  <a>Book Now</a>
                </Link>
              </div>{" "}
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-wrap">
              <div className="top-bg">
                <img src="assets/images/icons/price-bg1.svg" alt="image" />
              </div>
              <div className="btm-bg">
                <img src="assets/images/icons/price-bg2.svg" alt="image" />
              </div>
              <div className="pricing-title">
                <h2>Photography</h2>
                <h5 className="price">$200</h5>
              </div>
              <ul className="pricing-features">
                <li>200 Personal Photograph.</li>
                <li>5 Hour To 8 Hour Duration.</li>
                <li>10 Fresh Edited cool Video.</li>
                <li>20 Printed &amp; Hard Copy.</li>
                <li>Digital Unique Album.</li>
              </ul>
              <div className="book-btn">
                <Link legacyBehavior href="/contact-us">
                  <a>Book Now</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-wrap">
              <div className="top-bg">
                <img src="assets/images/icons/price-bg1.svg" alt="image" />
              </div>
              <div className="btm-bg">
                <img src="assets/images/icons/price-bg2.svg" alt="image" />
              </div>
              <div className="pricing-title">
                <h2>Videography</h2>
                <h5 className="price">$350</h5>
              </div>
              <ul className="pricing-features">
                <li>200 Personal Photograph.</li>
                <li>5 Hour To 8 Hour Duration.</li>
                <li>10 Fresh Edited cool Video.</li>
                <li>20 Printed &amp; Hard Copy.</li>
                <li>Digital Unique Album.</li>
              </ul>
              <div className="book-btn">
                <Link legacyBehavior href="/contact-us">
                  <a>Book Now</a>
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePricePlan;
