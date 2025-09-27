import React from "react";
import BlogDetailsSidebar from "../components/blog/BlogDetailsSidebar";
import WedgetBlogAuthor from "../components/blog/WedgetBlogAuthor";
import WidgetBlogCategory from "../components/blog/WidgetBlogCategory";
import WidgetBlogRecentPost from "../components/blog/WidgetBlogRecentPost";
import WidgetSearch from "../components/blog/WidgetSearch";
import WidgetSocial from "../components/blog/WidgetSocial";
import Widgettag from "../components/blog/Widgettag";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function BlogDetailspage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Blog Details" pageTitle="Blog Details" />
        <div className="inner-blog pt-120 mb-120">
          <div className="container">
            <div className="row g-lg-5 g-4 justify-content-center">
              <div className="col-lg-8">
                <BlogDetailsSidebar />
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
        </div>
      </Layout>
    </>
  );
}

export default BlogDetailspage;
