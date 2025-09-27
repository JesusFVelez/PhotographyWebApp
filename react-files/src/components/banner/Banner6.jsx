import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function Banner6() {
  const bannerSlider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".swiper-pagination-num",
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + 0 + (index + 1) + "</span>"
          );
        },
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
      <div className="hero-wrrap banner-pagination-section">
        <div className="container-fluid">
          <div className="row">
            <Swiper
              {...bannerSlider}
              className="swiper banner-pagination-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events"
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-da7abadba6439589"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index={2}
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <img
                    src="assets/images/pagination-slider/banner-pagination3.png"
                    alt="image"
                  />
                  <div className="banner-pagination-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Anniversary Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "1743px",
                    opacity: 1,
                    transform: "translate3d(-1743px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <img
                    src="assets/images/pagination-slider/banner-pagination1.png"
                    alt="image"
                  />
                  <div className="banner-pagination-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Modeling Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={1}
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(-3486px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="2 / 3"
                >
                  <img
                    src="assets/images/pagination-slider/banner-pagination2.png"
                    alt="image"
                  />
                  <div className="banner-pagination-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Wedding Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate-prev"
                  data-swiper-slide-index={2}
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(-5229px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <img
                    src="assets/images/pagination-slider/banner-pagination3.png"
                    alt="image"
                  />
                  <div className="banner-pagination-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Anniversary Photography.</h2>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "1743px",
                    opacity: 0,
                    transform: "translate3d(-6972px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <img
                    src="assets/images/pagination-slider/banner-pagination1.png"
                    alt="image"
                  />
                  <div className="banner-pagination-content">
                    <span>XOON PHOTOGRAPHY</span>
                    <h2>Modeling Photography.</h2>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination swiper-pagination-num swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                >
                  01
                </span>
                <span className="swiper-pagination-bullet" tabIndex={0}>
                  02
                </span>
                <span className="swiper-pagination-bullet" tabIndex={0}>
                  03
                </span>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner6;
