import Link from "next/link";
import React from "react";
import newsData from "../../data/news_data.json";
function HomeNews1() {
  return (
    <div className="news-area mb-120">
      <div className="container">
        <div className="row mb-70">
          <div className="col-12">
            <div className="section-title1 text-center">
              <h2>News &amp; Articles</h2>
              <p>
                As Vintage decided to have a closer look into fast-paced New
                York web design realm in.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {newsData.map((item) => {
            return (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="single-news magnetic-item">
                  <img className="img-fluid" src={item.image} alt="image" />
                  <div className="overlay">
                    <Link
                      legacyBehavior
                      data-cursor="View<br>Details"
                      href="/blog-details"
                    >
                      <a>
                        {" "}
                        <svg
                          width={114}
                          height={105}
                          viewBox="0 0 114 105"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.7 104L113 1M113 1H1M113 1V104"
                            strokeWidth={2}
                            strokeLinecap="round"
                          />
                        </svg>
                      </a>
                    </Link>
                    <div className="gallery-content">
                      <h4>
                        <Link
                          legacyBehavior
                          data-cursor="View<br>Details"
                          href="/blog-details"
                        >
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeNews1;
