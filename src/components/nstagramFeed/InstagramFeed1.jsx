import React, { useEffect, useMemo } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import instagramData from "../../data/instagramFeed_data.json";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function InstagramFeed1() {
  useEffect(() => {
    // console.clear();
  }, []);

  const instagranFeedSlider = useMemo(() => {
    return {
      slidesPerView: "auto",
      // speed: 800,
      loop: true,
      freeMode: true,
      spaceBetween: 10,
      grabCursor: true,
      slidesPerView: 8,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
      // freeMode: true,

      speed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          navigation: false,
        },
        386: {
          slidesPerView: 2,
          navigation: false,
        },
        576: {
          slidesPerView: 3,
          navigation: false,
        },
        768: {
          slidesPerView: 4,
          navigation: false,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div className={"instagram-feed-section mb-120"}>
      <div className="container">
        <div className="row justify-content-lg-start justify-content-center">
          <div className="col-lg-4">
            <div className="section-title-small text-lg-start text-center">
              <i className="bi bi-instagram" />
              <span>Instagram Feed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper
          {...instagranFeedSlider}
          className="swiper insta-feed-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode"
        >
          <div
            className="swiper-wrapper"
            style={{
              cursor: "grab",
              transform: "translate3d(-3590px, 0px, 0px)",
              transitionDuration: "5000ms",
            }}
            id="swiper-wrapper-e1051d5b18e561d47"
            aria-live="off"
          >
            {instagramData.map((item) => {
              return (
                <SwiperSlide
                  key={item.id}
                  className="swiper-slide swiper-slide-duplicate"
                  data-swiper-slide-index={1}
                  style={{ width: "289.167px", marginRight: "10px" }}
                  role="group"
                  aria-label="2 / 7"
                >
                  <div className="magnetic-wrap">
                    <div className="insta-feed-single magnetic-item">
                      <img className="img-fluid" src={item.image} alt="image" />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </Swiper>
      </div>
    </div>
  );
}

export default InstagramFeed1;
