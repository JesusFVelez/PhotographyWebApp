import Link from "next/link";
import React from "react";

function SidebarLeftArea() {
  return (
    <>
      <div className="blog-wrrap mb-60">
        <div className="magnetic-wrap">
          <div className="magnetic-wrap">
            <div className="blog-img  magnetic-item" style={{}}>
              <img
                className="img-fluid"
                src="assets/images/blog/blog-st-1.png"
                alt="image"
              />
              <div className="publish-date">
                <span>Jan</span>
                <p>21</p>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <p>
              Posted by :{" "}
              <Link className="name" href="/blog">
                Joha Dea
              </Link>{" "}
              - <Link href="/blog">03 Comments </Link>
            </p>
          </div>
          <h3>
            <Link
              data-cursor="View<br>Details"
              href="/blog-details"
              className="not-hide-cursor"
            >
              Best Experiences with couple’s photoshoot?
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est.
          </p>
          <div className="button-social">
            <div className="read-more-btn">
              <Link
                className="primary-btn3 button-hover-two"
                href="/blog-details"
              >
                Read More
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link href="https://www.facebook.com/">FB.</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">LI.</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">IN.</Link>
              </li>
              <li>
                <Link href="https://twitter.com/">TW.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-wrrap mb-60">
        <div className="magnetic-wrap">
          <div className="magnetic-wrap">
            <div className="blog-img  magnetic-item" style={{}}>
              <img
                className="img-fluid"
                src="assets/images/blog/blog-st-2.png"
                alt="image"
              />
              <div className="video-area">
                <div className="popup-youtube" style={{ cursor: "pointer" }}>
                  <i className="bi bi-play-circle-fill" />
                </div>
              </div>
              <div className="publish-date">
                <span>Jan</span>
                <p>21</p>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <p>
              Posted by :{" "}
              <Link className="name" href="/blog">
                Joha Dea
              </Link>{" "}
              - <Link href="/blog">03 Comments </Link>
            </p>
          </div>
          <h3>
            <Link
              data-cursor="View<br>Details"
              href="/blog-details"
              className="not-hide-cursor"
            >
              Do you delivery every image shoot?
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est.
          </p>
          <div className="button-social">
            <div className="read-more-btn">
              <Link
                className="primary-btn3 button-hover-two"
                href="/blog-details"
              >
                Read More
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link href="https://www.facebook.com/">FB.</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">LI.</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">IN.</Link>
              </li>
              <li>
                <Link href="https://twitter.com/">TW.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-wrrap mb-60">
        <div className="swiper blog-dt-img-slider swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-92d8f879ba10b106ed"
            aria-live="off"
            style={{ transitionDuration: "0ms" }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={3}
              style={{
                width: "848px",
                opacity: 0,
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="4 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-34.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>15</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-next"
              data-swiper-slide-index={0}
              style={{
                width: "848px",
                opacity: 0,
                transform: "translate3d(-848px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="1 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-31.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>21</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={1}
              style={{
                width: "848px",
                opacity: 0,
                transform: "translate3d(-1696px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="2 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item" style={{}}>
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-32.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>26</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={2}
              style={{
                width: "848px",
                opacity: 0,
                transform: "translate3d(-2544px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="3 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-33.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>18</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible swiper-slide-active"
              data-swiper-slide-index={3}
              style={{
                width: "848px",
                opacity: 1,
                transform: "translate3d(-3392px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="4 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-34.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>15</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-next"
              data-swiper-slide-index={0}
              style={{
                width: "848px",
                opacity: 0,
                transform: "translate3d(-4240px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
              role="group"
              aria-label="1 / 4"
            >
              <div className="magnetic-wrap">
                <div className="magnetic-wrap">
                  <div className="blog-img  magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/images/blog/blog-st-31.png"
                      alt="image"
                    />
                    <div className="publish-date">
                      <span>Jan</span>
                      <p>21</p>
                      <span>2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-btns">
            <div
              className="swiper-button-prev-m"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-92d8f879ba10b106ed"
            >
              <i className="bi bi-chevron-left" />
            </div>
            <div
              className="swiper-button-next-m"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-92d8f879ba10b106ed"
            >
              <i className="bi bi-chevron-right" />
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <p>
              Posted by :{" "}
              <Link className="name" href="/blog">
                Joha Dea
              </Link>{" "}
              - <Link href="/blog">03 Comments </Link>
            </p>
          </div>
          <h3>
            <Link
              data-cursor="View<br>Details"
              href="/blog-details"
              className="not-hide-cursor"
            >
              Things you need to know when preparing a for wedding day?
            </Link>
          </h3>
          <div className="button-social">
            <div className="read-more-btn">
              <Link
                className="primary-btn3 button-hover-two"
                href="/blog-details"
              >
                Read More
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link href="https://www.facebook.com/">FB.</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">LI.</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">IN.</Link>
              </li>
              <li>
                <Link href="https://twitter.com/">TW.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-wrrap mb-60">
        <div className="magnetic-wrap">
          <div className="magnetic-wrap">
            <div className="blog-img  magnetic-item" style={{}}>
              <img
                className="img-fluid"
                src="assets/images/blog/blog-st-4.png"
                alt="image"
              />
              <div className="publish-date">
                <span>Jan</span>
                <p>21</p>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <p>
              Posted by :{" "}
              <Link className="name" href="/blog">
                Joha Dea
              </Link>{" "}
              - <Link href="/blog">03 Comments </Link>
            </p>
          </div>
          <h3>
            <Link
              data-cursor="View<br>Details"
              href="/blog-details"
              className="not-hide-cursor"
            >
              Things you need to know when preparing a for wedding day?
            </Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est.
          </p>
          <div className="button-social">
            <div className="read-more-btn">
              <Link
                className="primary-btn3 button-hover-two"
                href="/blog-details"
              >
                Read More
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link href="https://www.facebook.com/">FB.</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/">LI.</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">IN.</Link>
              </li>
              <li>
                <Link href="https://twitter.com/">TW.</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarLeftArea;
