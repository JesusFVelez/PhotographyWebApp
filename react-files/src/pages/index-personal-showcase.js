import React from "react";
import About1 from "../components/about/About1";
import Banner3 from "../components/banner/Banner3";
import HomeBooking1 from "../components/booking/HomeBooking1";
import HeadTitle from "../components/common/HeadTitle";
import Footer from "../components/footer/Footer";
import HomeGallary1 from "../components/gallary/HomeGallary1";
import Header from "../components/header/Header";
import HomeNews1 from "../components/news/HomeNews1";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import Partner1 from "../components/partnar/Partner1";
import HomePricePlan from "../components/pricing-plan/HomePricePlan";
import Services1 from "../components/services/Services1";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import HomeVideo1 from "../components/video/HomeVideo1";
function IndexPersonalShowcase() {
  return (
    <>
      <HeadTitle />
      <Header style="style-1" />
      <Banner3 />
      <About1 />
      <Services1 />
      <HomeGallary1 />
      <HomeVideo1 />
      <HomeTestimonial1 />
      <HomePricePlan />
      <HomeNews1 />
      <HomeBooking1 />
      <Partner1 />
      <InstagramFeed1 />
      <Footer />
    </>
  );
}

export default IndexPersonalShowcase;
