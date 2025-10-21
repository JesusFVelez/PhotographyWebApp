import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function About2() {
  const currentRoute = useRouter().pathname;
  const aboutSlider = useMemo(() => {
    return {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 3000,
      autoplay: {
        delay: 1500,
      },
      pagination: {
        el: ".about-img-paginnation",
        clickable: "true",
      },
    };
  }, []);
  return (
    <div
      className={
        currentRoute === "/about-us" ? "about-area2 style-two" : "about-area2"
      }
      id="about-style-2"
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-10 col-sm-10 position-relative">
            <Swiper
              {...aboutSlider}
              className="swiper about-img-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events"
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-cf1b72ae49f4c3d2"
                aria-live="off"
                style={{ transitionDuration: "0ms" }}
              >
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                  data-swiper-slide-index={2}
                  style={{
                    width: "650px",
                    opacity: 0,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <div className="magnetic-wrap">
                    <img
                      className="img-fluid magnetic-item"
                      src="assets/images/bg/about13.png"
                      alt="image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "650px",
                    opacity: 0,
                    transform: "translate3d(-650px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="magnetic-wrap">
                    <img
                      className="img-fluid magnetic-item"
                      src="assets/images/bg/about11.png"
                      alt="image"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide"
                  data-swiper-slide-index={1}
                  style={{
                    width: "650px",
                    opacity: 0,
                    transform: "translate3d(-1300px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="2 / 3"
                >
                  <div className="magnetic-wrap">
                    <img
                      className="img-fluid magnetic-item"
                      src="assets/images/bg/about12.png"
                      alt="image"
                      style={{}}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                  data-swiper-slide-index={2}
                  style={{
                    width: "650px",
                    opacity: 0,
                    transform: "translate3d(-1950px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <div className="magnetic-wrap">
                    <img
                      className="img-fluid magnetic-item"
                      src="assets/images/bg/about13.png"
                      alt="image"
                      style={{}}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-visible swiper-slide-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "650px",
                    opacity: 1,
                    transform: "translate3d(-2600px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="magnetic-wrap">
                    <img
                      className="img-fluid magnetic-item"
                      src="assets/images/bg/about11.png"
                      alt="image"
                    />
                  </div>
                </SwiperSlide>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </Swiper>
            <div className="swiper-pagination about-img-paginnation swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 3"
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-10 col-sm-10">
            <div className="about-right text-lg-start text-center">
              <div className="about-title">
                <h3>
                  We're Gleam a small and enthusiastic photography studio based
                  in New York. We play with light.
                </h3>
              </div>
              <div className="about-content">
                <p>
                  The long story short is that I'm just a guy lucky enough to
                  pick up a camera. How that went down is quite a tale, and the
                  fact that I get to do what I love every day is something that
                  I'll always cherish and be forever grateful for. Lorem Ipsum
                  decided to leave for the far World of Grammar.
                </p>
                <Link
                  className={
                    currentRoute === "/about-us"
                      ? "primary-btn6 style-two button-hover-two"
                      : "primary-btn6 button-hover-one"
                  }
                  href="/about-us"
                >
                  Learn More
                </Link>
              </div>
              <div className="about-sm-img">
                <div className="magnetic-wrap">
                  <img
                    className=" magnetic-item"
                    src="assets/images/bg/about22.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
