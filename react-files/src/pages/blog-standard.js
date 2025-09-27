import Link from "next/link";
import React from "react";
import SidebarLeftArea from "../components/blog/SidebarLeftArea";
import WedgetBlogAuthor from "../components/blog/WedgetBlogAuthor";
import WidgetBlogCategory from "../components/blog/WidgetBlogCategory";
import WidgetBlogRecentPost from "../components/blog/WidgetBlogRecentPost";
import WidgetSearch from "../components/blog/WidgetSearch";
import WidgetSocial from "../components/blog/WidgetSocial";
import Widgettag from "../components/blog/Widgettag";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function BlogStandardPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard" />
        <div className="inner-blog pt-120 mb-120">
          <div className="container">
            <div className="row g-lg-5 g-4 justify-content-center">
              <div className="col-lg-8">
                <SidebarLeftArea />
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        <i className="bi bi-arrow-left" /> PREV
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        01
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link active" href="#">
                        02
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        03
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        NEXT <i className="bi bi-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="widget-area">
                  <WidgetSearch />
                  <WedgetBlogAuthor />
                  <WidgetBlogCategory />
                  <WidgetBlogRecentPost />
                  <WidgetSocial />
                  <Widgettag />
                </div>
              </div>
            </div>
          </div>
          {/* {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )} */}
        </div>
      </Layout>
    </>
  );
}

export default BlogStandardPage;
