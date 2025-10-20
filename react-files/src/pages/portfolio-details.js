import React from "react";
import ModalImage from "react-modal-image";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BookingArea from "../components/common/BookingArea";
import portfolioDetailsData from "../data/portfolioDetails_data.json";
function PortfolioDetailsPage() {
  return (
    <>
      <Breadcrumb
          pageName="Portfolio Details"
          pageTitle="Portfolio Details"
        />
        <div className="portfolio-details-pages pt-120 mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="title">
                  <h3>Welcome to Our Wedding Photo Gallery</h3>
                  <p>
                    Welcome to Our Wedding Photo Gallery We have a beautiful and
                    spacious photo studio. This is ideal for photographing pack
                    shots, paintings, products or people. Different backgrounds
                    are available, daylight comes in sideways and there is an
                    extensive flash installation Free Download Link :
                    unsplash.com/s/photos/wedding
                  </p>
                </div>
                <div className="download-link mb-40">
                  <p>
                    Free Download Link :{" "}
                    <a href="#">unsplash.com/s/photos/wedding</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="client-info">
                  <p>
                    <span>Client :</span>Brookyn Simmons
                  </p>
                  <p>
                    <span>Categories :</span>Wedding Photo
                  </p>
                  <p>
                    <span>Venue :</span>Leh &amp; Ladakh
                  </p>
                  <p>
                    <span>Date :</span>25 January 2022
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {portfolioDetailsData.map((item) => {
                const { id, largeImg, smallImg } = item;
                return (
                  <div key={id} className="col-lg-4 col-sm-6 col-12">
                    <ModalImage
                      small={smallImg}
                      large={largeImg}
                      showRotate={true}
                      hideZoom={true}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <BookingArea />
    </>
  );
}

export default PortfolioDetailsPage;
