import React from "react";
import About2 from "../components/about/About2";
import BannerIndex2CenterSlider from "../components/banner/BannerIndex2CenterSlider";
import BlogHisory1 from "../components/blog/BlogHisory1";
import HeadTitle from "../components/common/HeadTitle";
import Footer from "../components/footer/Footer";
import Header2 from "../components/header/Header2";
import Partner2 from "../components/partnar/Partner2";
import Portfolio2 from "../components/portfolio/Portfolio2";
import Services2 from "../components/services/Services2";
import VideoTestimonial from "../components/video/VideoTestimonial";
function Index2CenterSlider() {
  return (
    <>
      <HeadTitle />
      <Header2 />
      <BannerIndex2CenterSlider />
      <Partner2 />
      <About2 />
      <Services2 />
      <Portfolio2 />
      <VideoTestimonial />
      <BlogHisory1 />
      <Footer />
    </>
  );
}

export default Index2CenterSlider;
