import React, { useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerData from "../../data/Banner1_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function Banner1() {
  const bannerSlider = useMemo(() => {
    return {
      spaceBetween: 20,
      loop: true,
      slidesPerView: 2,
      speed: 2000,
      autoplay: {
        delay: 1500,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination-h",
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
    <div className="horo-style-1">
      <div className="social-area">
        <ul>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">Linked in</a>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="banner-left-img">
              <img
                className="img-fluid "
                src="assets/images/bg/banner-left-img.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-slider">
              <Swiper
                {...bannerSlider}
                className="swiper banner-slider1 swiper-initialized swiper-horizontal swiper-pointer-events"
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-cdb357a0f7c6d5ab"
                  aria-live="off"
                  style={{
                    transform: "translate3d(-2670px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  {bannerData.map((item) => {
                    return (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-slide swiper-slide-duplicate-next"
                        style={{ width: "514px", marginRight: "20px" }}
                        role="group"
                        aria-label="1 / 4"
                      >
                        <div className="slider-cetagory">
                          <h4>{item.category}</h4>
                        </div>
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt="image"
                        />
                      </SwiperSlide>
                    );
                  })}
                </div>
                <div className="swiper-pagination swiper-pagination-h swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span className="swiper-pagination-bullet" tabIndex={0}>
                    01
                  </span>
                  <span className="swiper-pagination-bullet" tabIndex={0}>
                    02
                  </span>
                  <span className="swiper-pagination-bullet" tabIndex={0}>
                    03
                  </span>
                  <span
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                    tabIndex={0}
                  >
                    04
                  </span>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </Swiper>
            </div>
            <div className="banner-right-content">
              <h1>Louisa Jacobson</h1>
              <h5>Professional Photographer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
