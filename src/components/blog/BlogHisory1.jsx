import Link from "next/link";
import React from "react";

function BlogHisory1() {
  return (
    <div className="blog-history-area mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="section-title3 text-center">
            <span>Blog &amp; history</span>
            <h2>
              Get The Latest Articles About The Different Aspects Photography
            </h2>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-6 col-md-6">
            <div className="blog-wrrap">
              <div className="magnetic-wrap">
                <div className="blog-img magnetic-item" style={{}}>
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog1.png"
                    alt="image"
                  />
                  <div className="publish-date">
                    <span>Jan</span>
                    <p>24</p>
                    <span>2022</span>
                  </div>
                </div>
              </div>
              <div className="blog-content style-two">
                <span>Photography, Fashion</span>
                <h3>
                  <Link
                    data-cursor="View<br>Details"
                    href="/blog-details"
                    className="not-hide-cursor"
                  >
                    Best Fujifilm Camera 21: Mirrorless, Instax and Compact.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="blog-wrrap">
              <div className="magnetic-wrap">
                <div className="blog-img  magnetic-item" style={{}}>
                  <img
                    className="img-fluid"
                    src="assets/images/blog/blog2.png"
                    alt="image"
                  />
                  <div className="publish-date">
                    <span>Jan</span>
                    <p>24</p>
                    <span>2022</span>
                  </div>
                </div>
              </div>
              <div className="blog-content style-two">
                <span>Photography, Fashion</span>
                <h3>
                  <Link
                    data-cursor="View<br>Details"
                    href="/blog-details"
                    className="not-hide-cursor"
                  >
                    When it comes to photography blog there talented people.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHisory1;
