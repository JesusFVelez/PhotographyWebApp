import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function Portfolio3Page() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Portfolio 03" pageTitle="Our Portfolio 03" />
        <div className="photo-gallery pt-120 mb-120">
          <div className="container position-relative">
            {/* tab-start */}
            <div className="profile-tab-buttons style-two">
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
                <div className="row g-4 justify-content-center mb-50">
                  <div className="col-lg-4 col-md-6  col-sm-8">
                    <div className="magnetic-wrap">
                      <div
                        className="single-img one  magnetic-item"
                        style={{ transform: "translate(-3.6358px, 0.0708px)" }}
                      >
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfoli01.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <div className="magnetic-wrap">
                            <Link
                              data-cursor="View<br>Details"
                              className="magnetic-item not-hide-cursor"
                              href="/portfolio-details"
                            >
                              <svg
                                width={114}
                                height={105}
                                viewBox="0 0 114 105"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.7 104L113 1M113 1H1M113 1V104"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                data-cursor="View<br>Details"
                                className="not-hide-cursor"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img two magnetic-item" style={{}}>
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfolio02.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img three magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfolio03.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img four magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfolio04.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img five magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfolio05.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img six magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/Portfolio06.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
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
                <div className="row g-4 justify-content-center mb-50">
                  <div className="col-lg-4 col-md-6  col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img one  magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-07.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <div className="magnetic-wrap">
                            <Link
                              data-cursor="View<br>Details"
                              className="magnetic-item not-hide-cursor"
                              href="/portfolio-details"
                            >
                              <svg
                                width={114}
                                height={105}
                                viewBox="0 0 114 105"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.7 104L113 1M113 1H1M113 1V104"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                data-cursor="View<br>Details"
                                className="not-hide-cursor"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img two magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-08.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img three magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-09.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img four magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-10.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img five magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-11.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img six magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-12.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
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
                <div className="row g-4 justify-content-center mb-50">
                  <div className="col-lg-4 col-md-6  col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img one  magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-13.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <div className="magnetic-wrap">
                            <Link
                              data-cursor="View<br>Details"
                              className="magnetic-item not-hide-cursor"
                              href="/portfolio-details"
                            >
                              <svg
                                width={114}
                                height={105}
                                viewBox="0 0 114 105"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.7 104L113 1M113 1H1M113 1V104"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                data-cursor="View<br>Details"
                                className="not-hide-cursor"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img two magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-14.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img three magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-15.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img four magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-16.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img five magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-17.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="magnetic-wrap">
                      <div className="single-img six magnetic-item">
                        <img
                          className="img-fluid"
                          src="assets/images/bg/portfolio-18.png"
                          alt="image"
                        />
                        <div className="overlay">
                          <Link
                            data-cursor="View<br>Details"
                            href="/portfolio-details"
                            className="not-hide-cursor"
                          >
                            <svg
                              width={114}
                              height={105}
                              viewBox="0 0 114 105"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.7 104L113 1M113 1H1M113 1V104"
                                strokeWidth={2}
                                strokeLinecap="round"
                              />
                            </svg>
                          </Link>
                          <div className="gallery-content">
                            <h4>
                              <Link
                                className="not-hide-cursor"
                                data-cursor="View<br>Details"
                                href="/portfolio-details"
                              >
                                Wedding Photography
                              </Link>
                            </h4>
                            <span>Date: 16 January 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab-end */}
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <Link className="primary-btn2" href="/portfolio">
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
                      ></path>
                    </g>
                  </svg>
                  All Photo Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Portfolio3Page;
