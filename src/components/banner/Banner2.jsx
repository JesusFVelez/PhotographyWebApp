import React from "react";

function Banner2() {
  return (
    <div className="horo-style-2 px-0">
      <div className="hero-wrrap">
        <div className="video-wraper">
          <video autoPlay loop="loop" muted preload="auto">
            <source
              src="https://getcoderzone.com/dummy_video/video-banner-personal.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="banner-pagination-content style-two mb-5">
          <span>XOON PHOTOGRAPHY</span>
          <h2>Modeling Photography.</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
