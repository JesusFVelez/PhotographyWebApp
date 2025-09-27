import Link from "next/link";
import React from "react";

function Banner5() {
  return (
    <div className="portfolio-banner pb-120 position-relative">
      <div className="container-fluid">
        <div className="profile-tab-buttons">
          <i className="bi bi-filter" />
          <ul
            className="nav nav-pills mb-3 d-flex flex-column"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Wedding
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Modeling
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Anniversary
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row g-4 justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="magnetic-wrap">
                  <div
                    className="portfolio-banner-item magnetic-item"
                    style={{}}
                  >
                    <img
                      src="assets/images/home-portfolio/image1.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div
                    className="portfolio-banner-item magnetic-item"
                    style={{}}
                  >
                    <img
                      src="assets/images/home-portfolio/image2.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image3.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div
                    className="portfolio-banner-item magnetic-item"
                    style={{}}
                  >
                    <img
                      src="assets/images/home-portfolio/image4.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image5.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image6.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image7.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image8.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image9.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="row g-4 justify-content-center">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image1.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image2.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image3.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image4.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image5.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image6.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image4.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image8.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image9.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="row g-4 justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image5.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image6.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image4.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image1.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image2.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image3.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image4.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image8.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="magnetic-wrap">
                  <div className="portfolio-banner-item magnetic-item">
                    <img
                      src="assets/images/home-portfolio/image9.png"
                      className="img-fluid"
                      alt="image"
                    />
                    <div className="portfilio-img-overlay">
                      <h2>
                        <Link
                          data-cursor="View<br>Details"
                          className="not-hide-cursor"
                          href="/portfolio-details"
                        >
                          Modeling Photography
                        </Link>
                      </h2>
                    </div>
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

export default Banner5;
