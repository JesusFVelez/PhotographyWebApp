import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function VideoTestimonial() {
  const testimonialSlider = useMemo(() => {
    return {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 3000,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".testimonial-paginnation",
        clickable: "true",
      },
    };
  }, []);
  return (
    <div className="video-contact-testimonial-area pb-120">
      <div className="container-fluid">
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
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="contact-wrap">
              <div className="title">
                <h2>Contact Us</h2>
              </div>
              <form>
                <div className="form-inner">
                  <input placeholder="Your Name:" />
                </div>
                <div className="form-inner">
                  <input placeholder="Your Phone Number:" />
                </div>
                <div className="form-inner">
                  <textarea
                    placeholder="Type Your Message..."
                    defaultValue={""}
                  />
                </div>
                <div className="form-inner pt-25 text-center">
                  <button
                    className="primary-btn6 button-hover-one"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="testimonial-area2">
              <div className="section-title2">
                <h5>TESTIMONIAL</h5>
              </div>
              <Swiper
                {...testimonialSlider}
                className="swiper testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events"
              >
                <div
                  className="swiper-wrapper"
                  id="swiper-wrapper-d5e5bd108c02a4036"
                  aria-live="off"
                  style={{
                    transform: "translate3d(-3153px, 0px, 0px)",
                    transitionDuration: "3000ms",
                  }}
                >
                  <SwiperSlide
                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index={2}
                    style={{ width: "1031px", marginRight: "20px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonial-wrrap">
                      <div className="testimonial-content">
                        <p>
                          "I work with Abdullah on many projects, he always
                          exceeds my expectations with his quality work and fast
                          service, very smooth and simple communication. Keep up
                          the great work."{" "}
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center ">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/aurhor33.png"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <h5>Adelaide Beatrice</h5>
                          <span>Photographer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide swiper-slide-duplicate-next"
                    data-swiper-slide-index={0}
                    style={{ width: "1031px", marginRight: "20px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonial-wrrap">
                      <div className="testimonial-content">
                        <p>
                          "I work with Abdullah on many projects, he always
                          exceeds my expectations with his quality work and fast
                          service, very smooth and simple communication. Keep up
                          the great work."{" "}
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center ">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/aurhor31.png"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <h5>Leslie Alexander</h5>
                          <span>Photographer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide swiper-slide-prev"
                    data-swiper-slide-index={1}
                    style={{ width: "1031px", marginRight: "20px" }}
                    role="group"
                    aria-label="2 / 3"
                  >
                    <div className="testimonial-wrrap">
                      <div className="testimonial-content">
                        <p>
                          "I work with Abdullah on many projects, he always
                          exceeds my expectations with his quality work and fast
                          service, very smooth and simple communication. Keep up
                          the great work."{" "}
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center ">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/aurhor32.png"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <h5>Logan Ethan</h5>
                          <span>Videographer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide swiper-slide-active"
                    data-swiper-slide-index={2}
                    style={{ width: "1031px", marginRight: "20px" }}
                    role="group"
                    aria-label="3 / 3"
                  >
                    <div className="testimonial-wrrap">
                      <div className="testimonial-content">
                        <p>
                          "I work with Abdullah on many projects, he always
                          exceeds my expectations with his quality work and fast
                          service, very smooth and simple communication. Keep up
                          the great work."{" "}
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center ">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/aurhor33.png"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <h5>Adelaide Beatrice</h5>
                          <span>Photographer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="swiper-slide swiper-slide-duplicate swiper-slide-next"
                    data-swiper-slide-index={0}
                    style={{ width: "1031px", marginRight: "20px" }}
                    role="group"
                    aria-label="1 / 3"
                  >
                    <div className="testimonial-wrrap">
                      <div className="testimonial-content">
                        <p>
                          "I work with Abdullah on many projects, he always
                          exceeds my expectations with his quality work and fast
                          service, very smooth and simple communication. Keep up
                          the great work."{" "}
                        </p>
                      </div>
                      <div className="testimonial-meta d-flex align-items-center ">
                        <div className="author-img">
                          <img
                            src="assets/images/bg/aurhor31.png"
                            alt="image"
                          />
                        </div>
                        <div className="content">
                          <h5>Leslie Alexander</h5>
                          <span>Photographer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <span
                  className="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                />
              </Swiper>
              <div className="swiper-pagination testimonial-paginnation swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span
                  className="swiper-pagination-bullet"
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
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTestimonial;
