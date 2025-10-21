import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function HomeTestimonial1() {
  const serviceSlider = useMemo(() => {
    return {
      loop: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 2000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
  }, []);
  return (
    <div className="testimonial-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...serviceSlider}
              className="swiper services-slider swiper-fade swiper-initialized swiper-horizontal"
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-72d935b6502444f10"
                aria-live="polite"
                style={{ transitionDuration: "0ms" }}
              >
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                  data-swiper-slide-index={2}
                  style={{
                    width: "1296px",
                    opacity: 0,
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <div className="testimonial-wrrap">
                    <div className="content">
                      <p>
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo
                      </p>
                    </div>
                    <div className="author-area">
                      <div className="author-name">
                        <h4>Nancy Rosie</h4>
                      </div>
                      <div className="author-img">
                        <img src="assets/images/bg/author-3.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-visible swiper-slide-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "1296px",
                    opacity: 1,
                    transform: "translate3d(-1296px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="testimonial-wrrap">
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim.
                      </p>
                    </div>
                    <div className="author-area">
                      <div className="author-name">
                        <h4>Johan Martin Sr</h4>
                      </div>
                      <div className="author-img">
                        <img src="assets/images/bg/author-1.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-next"
                  data-swiper-slide-index={1}
                  style={{
                    width: "1296px",
                    opacity: 0,
                    transform: "translate3d(-2592px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="2 / 3"
                >
                  <div className="testimonial-wrrap">
                    <div className="content">
                      <p>
                        Quo minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam
                      </p>
                    </div>
                    <div className="author-area mb-50">
                      <div className="author-name">
                        <h4>Mason Jackson.</h4>
                      </div>
                      <div className="author-img">
                        <img src="assets/images/bg/author-2.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate-prev"
                  data-swiper-slide-index={2}
                  style={{
                    width: "1296px",
                    opacity: 0,
                    transform: "translate3d(-3888px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="3 / 3"
                >
                  <div className="testimonial-wrrap">
                    <div className="content">
                      <p>
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo
                      </p>
                    </div>
                    <div className="author-area">
                      <div className="author-name">
                        <h4>Nancy Rosie</h4>
                      </div>
                      <div className="author-img">
                        <img src="assets/images/bg/author-3.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={0}
                  style={{
                    width: "1296px",
                    opacity: 0,
                    transform: "translate3d(-5184px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                  role="group"
                  aria-label="1 / 3"
                >
                  <div className="testimonial-wrrap">
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim.
                      </p>
                    </div>
                    <div className="author-area">
                      <div className="author-name">
                        <h4>Johan Martin Sr</h4>
                      </div>
                      <div className="author-img">
                        <img src="assets/images/bg/author-1.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
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

export default HomeTestimonial1;
