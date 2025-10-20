import React from "react";
import ModalImage from "react-modal-image";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

function ArtisticGalleryPage() {
  return (
    <>
      <Breadcrumb pageName="Artistic Gallery" pageTitle="Artistic Gallery" />
        <div className="portfolio-details-pages pt-120 mb-120">
          <div className="container position-relative">
            {/* tab-start */}
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
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img1.png"
                      large="assets/images/bg/wedding-img1big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img2.png"
                      large="assets/images/bg/wedding-img2big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img3.png"
                      large="assets/images/bg/wedding-img3big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img4.png"
                      large="assets/images/bg/wedding-img4big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img5.png"
                      large="assets/images/bg/wedding-img5big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img6.png"
                      large="assets/images/bg/wedding-img6big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img7.png"
                      large="assets/images/bg/wedding-img7big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img8.png"
                      large="assets/images/bg/wedding-img8big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img9.png"
                      large="assets/images/bg/wedding-img9big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img10.png"
                      large="assets/images/bg/wedding-img10big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img11.png"
                      large="assets/images/bg/wedding-img11big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img12.png"
                      large="assets/images/bg/wedding-img12big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
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
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img3.png"
                      large="assets/images/bg/wedding-img3big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img4.png"
                      large="assets/images/bg/wedding-img4big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img5.png"
                      large="assets/images/bg/wedding-img5big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img6.png"
                      large="assets/images/bg/wedding-img6big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img7.png"
                      large="assets/images/bg/wedding-img7big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img8.png"
                      large="assets/images/bg/wedding-img8big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img9.png"
                      large="assets/images/bg/wedding-img9big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img10.png"
                      large="assets/images/bg/wedding-img10big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img11.png"
                      large="assets/images/bg/wedding-img11big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img12.png"
                      large="assets/images/bg/wedding-img12big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img13.png"
                      large="assets/images/bg/wedding-img13big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img14.png"
                      large="assets/images/bg/wedding-img14big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
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
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img2.png"
                      large="assets/images/bg/wedding-img2big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img3.png"
                      large="assets/images/bg/wedding-img3big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img4.png"
                      large="assets/images/bg/wedding-img4big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img5.png"
                      large="assets/images/bg/wedding-img5big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img6.png"
                      large="assets/images/bg/wedding-img6big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img7.png"
                      large="assets/images/bg/wedding-img7big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img8.png"
                      large="assets/images/bg/wedding-img8big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img9.png"
                      large="assets/images/bg/wedding-img9big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img10.png"
                      large="assets/images/bg/wedding-img10big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img11.png"
                      large="assets/images/bg/wedding-img11big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img12.png"
                      large="assets/images/bg/wedding-img12big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img13.png"
                      large="assets/images/bg/wedding-img13big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small="assets/images/bg/wedding-img14.png"
                      large="assets/images/bg/wedding-img14big.png"
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* tab-end */}
            <div className="col-lg-12 pt-70">
              <div className="load-more-btn d-flex justify-content-center">
                <a href="#" className="primary-btn3 button-hover-two">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ArtisticGalleryPage;
