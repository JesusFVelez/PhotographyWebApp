import React from "react";
import About2 from "../components/about/About2";
import BannerIndex2 from "../components/banner/BannerIndex2";
import BlogHisory1 from "../components/blog/BlogHisory1";
import HeadTitle from "../components/common/HeadTitle";
import Partner2 from "../components/partnar/Partner2";
import Portfolio2 from "../components/portfolio/Portfolio2";
import Services2 from "../components/services/Services2";
import VideoTestimonial from "../components/video/VideoTestimonial";

function Index2() {
  return (
    <>
      <HeadTitle />
      <BannerIndex2 />
      <Partner2 />
      <About2 />
      <Services2 />
      <Portfolio2 />
      <VideoTestimonial />
      <BlogHisory1 />
    </>
  );
}

export default Index2;
