import React, { useMemo, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectFade, FreeMode, Navigation, Pagination, Thumbs } from "swiper";
function BannerThumbnil() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const bannerPaginationSmalImage = useMemo(() => {
    return {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    };
  }, []);
  const bannerThumbslider = useMemo(() => {
    return {
      spaceBetween: 10,
      autoplay: true,
      effect: "fade",
      speed: 1000,
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  }, []);
  return (
    <div className="horo-style-2">
      <div className="social-area">
        <ul>
          <li>
            <a href="#">FB.</a>
          </li>
          <li>
            <a href="#">LI.</a>
          </li>
          <li>
            <a href="#">IN.</a>
          </li>
          <li>
            <a href="#">TW.</a>
          </li>
        </ul>
      </div>
      <div className="scroll-down">
        <a href="#about-style-2">
          <svg
            width={22}
            height={60}
            viewBox="0 0 22 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width={21} height={40} rx="10.5" />
            <path d="M11.5 29C11.5 28.7239 11.2761 28.5 11 28.5C10.7239 28.5 10.5 28.7239 10.5 29L11.5 29ZM10.6464 59.3536C10.8417 59.5488 11.1583 59.5488 11.3536 59.3536L14.5355 56.1716C14.7308 55.9763 14.7308 55.6597 14.5355 55.4645C14.3403 55.2692 14.0237 55.2692 13.8284 55.4645L11 58.2929L8.17157 55.4645C7.97631 55.2692 7.65973 55.2692 7.46447 55.4645C7.26921 55.6597 7.26921 55.9763 7.46447 56.1716L10.6464 59.3536ZM10.5 29L10.5 59L11.5 59L11.5 29L10.5 29Z" />
            <circle cx={11} cy={11} r={3} />
          </svg>
        </a>
      </div>
      <div className="hero-wrrap banner-pagination-image-section">
        <div className="container-fluid">
          <div className="row">
            <Swiper
              {...bannerThumbslider}
              loop={true}
              spaceBetween={10}
              modules={[FreeMode, Navigation, Pagination, Thumbs, EffectFade]}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              className="swiper banner-pagination-image-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events"
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-c3d221ccfdaa39d8"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <SwiperSlide
                  className="swiper-slide swiper-slide-prev"
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 4"
                >
                  <img
                    src="assets/images/image-pagination-slider/image1.png"
                    alt="image"
                  />
                  <div className="banner-pagination-image-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Modeling Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  style={{
                    width: "1743px",
                    opacity: 1,
                    transform: "translate3d(-1743px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="2 / 4"
                >
                  <img
                    src="assets/images/image-pagination-slider/image2.png"
                    alt="image"
                  />
                  <div className="banner-pagination-image-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Wedding Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-next"
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(-3486px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 4"
                >
                  <img
                    src="assets/images/image-pagination-slider/image3.png"
                    alt="image"
                  />
                  <div className="banner-pagination-image-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Personal Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(-5229px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="4 / 4"
                >
                  <img
                    src="assets/images/image-pagination-slider/image4.png"
                    alt="image"
                  />
                  <div className="banner-pagination-image-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Personal Photography.</h2>
                  </div>
                </SwiperSlide>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </Swiper>
            <Swiper
              {...bannerPaginationSmalImage}
              onSwiper={setThumbsSwiper}
              loop={false}
              spaceBetween={10}
              slidesPerView={6}
              freeMode={true}
              autoplay={true}
              modules={[FreeMode, Navigation, Thumbs]}
              style={{
                position: "absolute",
                bottom: "10px",
                right: "-150px",
                height: "120px",
                width: "550px",
              }}
              className="swiper banner-pagination-small-image swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-thumbs"
            >
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide swiper-slide-visible swiper-slide-active">
                  <img
                    src="assets/images/image-pagination-slider/image1.png"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide swiper-slide-next swiper-slide-thumb-active">
                  <img
                    src="assets/images/image-pagination-slider/image2.png"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="assets/images/image-pagination-slider/image3.png"
                    alt="image"
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <img
                    src="assets/images/image-pagination-slider/image4.png"
                    className="img-fluid"
                    alt="image"
                  />
                </SwiperSlide>
              </div>
              <span className="swiper-notification" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerThumbnil;
