import Link from "next/link";
import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import blogGiridData from "../data/blogGird2_data.json";
import Layout from "../layout/Layout";
function BlogGrid2Page() {
  const [noOfCard, setnoofCard] = useState(6);
  const showLoadmore = () => {
    setnoofCard(noOfCard + 3);
  };
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Grid 02" pageTitle="Blog Grid 02" />
        <div className="news-area pt-120 mb-120">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {blogGiridData.slice(0, noOfCard).map((item) => {
                const { id, image, title, date } = item;
                return (
                  <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                    <div className="magnetic-wrap">
                      <div className="single-news magnetic-item" style={{}}>
                        <img className="img-fluid" src={image} alt="image" />
                        <div className="overlay">
                          <Link
                            legacyBehavior
                            data-cursor="View<br>Details"
                            href="/blog-details"
                          >
                            <a className="not-hide-cursor">
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
                                <a className="not-hide-cursor">{title}</a>
                              </Link>
                            </h4>
                            <span>{date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-lg-12 pt-70">
                <div className="load-more-btn d-flex justify-content-center">
                  <button
                    style={
                      blogGiridData.length > noOfCard
                        ? {}
                        : {
                            color: "#000",
                            display: "none",
                            background: "dark",
                            cursor: "no-drop",
                            opacity: ".5",
                          }
                    }
                    disabled={blogGiridData.length > noOfCard ? false : true}
                    className="primary-btn3 button-hover-two"
                    onClick={() => showLoadmore()}
                  >
                    {blogGiridData.length > noOfCard ? "Load More" : "Complete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default BlogGrid2Page;
