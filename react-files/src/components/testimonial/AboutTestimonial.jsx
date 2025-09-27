import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function AboutTestimonial() {
  const testimonialslider = useMemo(() => {
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
    <>
      <div className="about-testimonial  mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testimonial-area2 two style-two">
                <div className="section-title2 style-two">
                  <h5>TESTIMONIAL</h5>
                </div>
                <Swiper
                  {...testimonialslider}
                  className="swiper testimonial-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrrap">
                        <div className="testimonial-content">
                          <p>
                            "I work with Abdullah on many projects, he always
                            exceeds my expectations with his quality work and
                            fast service, very smooth and simple communication.
                            Keep up the great work."{" "}
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
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrrap">
                        <div className="testimonial-content">
                          <p>
                            "I work with Abdullah on many projects, he always
                            exceeds my expectations with his quality work and
                            fast service, very smooth and simple communication.
                            Keep up the great work."{" "}
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
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-wrrap">
                        <div className="testimonial-content">
                          <p>
                            "I work with Abdullah on many projects, he always
                            exceeds my expectations with his quality work and
                            fast service, very smooth and simple communication.
                            Keep up the great work."{" "}
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
                  </div>
                </Swiper>
                <div className="swiper-pagination testimonial-paginnation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTestimonial;
