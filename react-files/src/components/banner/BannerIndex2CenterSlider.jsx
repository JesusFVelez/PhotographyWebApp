import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
function BannerIndex2CenterSlider() {
  const centerSlider = useMemo(() => {
    return {
      loop: true,
      speed: 1000,
      centeredSlides: true,
      slidesPerView: 2,
      // autoplay:true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
          navigation: false,
        },
        386: {
          slidesPerView: 1,
          navigation: false,
        },
        576: {
          slidesPerView: 1,
          navigation: false,
        },
        768: {
          slidesPerView: 2,
          navigation: false,
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
      <div className="hero-wrrap hero-center-slider-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Swiper {...centerSlider} className="swiper banner-center-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-center-single">
                      <img
                        src="assets/images/bg/banner-center1.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="banner-center-content style-two">
                        <span>wEEDING xOON</span>
                        <h2>Loving Photography.</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-center-single">
                      <img
                        src="assets/images/bg/banner-center2.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="banner-center-content style-two">
                        <span>wEEDING xOON</span>
                        <h2>Loving Photography.</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-center-single">
                      <img
                        src="assets/images/bg/banner-center3.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="banner-center-content style-two">
                        <span>wEEDING xOON</span>
                        <h2>Loving Photography.</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="banner-center-single">
                      <img
                        src="assets/images/bg/banner-center4.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <div className="banner-center-content style-two">
                        <span>wEEDING xOON</span>
                        <h2>Loving Photography.</h2>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerIndex2CenterSlider;
