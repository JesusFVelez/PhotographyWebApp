import Link from "next/link";
import React from "react";

function WidgetSocial() {
  return (
    <div className="single-widgets widget_egns_social">
      <div className="widget-title">
        <h3>Instagram feed</h3>
      </div>
      <ul className="social-link d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center">
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins1.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins2.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins3.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins4.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins5.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
        <li className="instragram-wrap">
          <div className="instra-img">
            <img
              className="img-fluid"
              src="assets/images/bg/ins6.png"
              alt="image"
            />
            <div className="instragram-icon">
              <Link href="https://www.instagram.com/">
                <i className="bi bi-instagram" />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSocial;
