import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Banner4() {
  const bannerSlider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      autoplay: true,
      effect: "fade",
      navigation: {
        nextEl: ".banner-full-prev1",
        prevEl: ".banner-full-next1",
      },
      fadeEffect: {
        crossFade: true,
      },
    };
  }, []);
  return (
    <div className="banner-fullscreen-section">
      <div className="container-fluid">
        <div className="row">
          <Swiper {...bannerSlider} className="swiper banner-fullscreen-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/fullscreen-banner/image1.png"
                  alt="image"
                />
                <div className="banner-pagination-content style-two">
                  <span>XOON PHOTOGRAPHY</span>
                  <h2>Modeling Photography.</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/fullscreen-banner/image2.png"
                  alt="image"
                />
                <div className="banner-pagination-content style-two">
                  <span>XOON PHOTOGRAPHY</span>
                  <h2>Wedding Photography.</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img
                  src="assets/images/fullscreen-banner/image3.png"
                  alt="image"
                />
                <div className="banner-pagination-content style-two">
                  <span>XOON PHOTOGRAPHY</span>
                  <h2>Anniversary Photography.</h2>
                </div>
              </SwiperSlide>
            </div>
            <div className="slider-arrows fullscreen-arrows d-flex flex-row flex-wrap justify-content-between align-items-center gap-5">
              <div
                className="banner-full-prev1 swiper-prev-arrow "
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <svg
                  width={32}
                  height={8}
                  viewBox="0 0 32 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31 3.5C31.2761 3.5 31.5 3.72386 31.5 4C31.5 4.27614 31.2761 4.5 31 4.5V3.5ZM0.646444 4.35355C0.451183 4.15829 0.451183 3.84171 0.646444 3.64645L3.82842 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.73079 0.659728 4.73079 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.73079 7.02369 4.73079 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82842 7.53553L0.646444 4.35355ZM31 4.5L0.999998 4.5V3.5L31 3.5V4.5Z" />
                </svg>
              </div>
              <div
                className="banner-full-next1 swiper-next-arrow "
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <svg
                  width={32}
                  height={8}
                  viewBox="0 0 32 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5V3.5L1 3.5V4.5Z" />
                </svg>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner4;
