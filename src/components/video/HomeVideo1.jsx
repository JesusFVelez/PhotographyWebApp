import React from "react";

function HomeVideo1() {
  return (
    <div className="video-area one mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="video-wraper">
              <video autoPlay loop="loop" muted preload="auto">
                <source
                  src="https://getcoderzone.com/dummy_video/video-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeVideo1;
