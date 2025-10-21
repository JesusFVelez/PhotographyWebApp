import Link from "next/link";
import React from "react";

function WidgetBlogRecentPost() {
  return (
    <div className="single-widgets widget_egns_recent_post">
      <div className="widget-title">
        <h3>Newest Posts</h3>
      </div>
      <div className="recent-post-wraper">
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details">
              <img src="assets/images/blog/blog-sidebar-1.png" alt="image" />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details">
                Quisque laoreet Maecento facilisis tristique.
              </Link>
            </h6>
            <span>July 18, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details">
              <img src="assets/images/blog/blog-sidebar-2.png" alt="image" />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details">
                Etiam vel diam volutpatha pellentesque.
              </Link>
            </h6>
            <span>July 15, 2022</span>
          </div>
        </div>
        <div className="widget-cnt">
          <div className="wi">
            <Link href="/blog-details">
              <img src="assets/images/blog/blog-sidebar-3.png" alt="image" />
            </Link>
          </div>
          <div className="wc">
            <h6>
              <Link href="/blog-details">
                Nunc finibus gravidato on porta. Nulla vitae.
              </Link>
            </h6>
            <span>July 14, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetBlogRecentPost;
