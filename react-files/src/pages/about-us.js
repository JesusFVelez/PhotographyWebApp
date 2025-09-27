import React from "react";
import About2 from "../components/about/About2";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import Partner1 from "../components/partnar/Partner1";
import Services2 from "../components/services/Services2";
import AboutTestimonial from "../components/testimonial/AboutTestimonial";
import Layout from "../layout/Layout";
function AboutUs() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About-Us" pageTitle="About-Us" />
        <Partner1 />
        <About2 />
        <Services2 />
        <AboutTestimonial />
        <InstagramFeed1 />
      </Layout>
    </>
  );
}

export default AboutUs;
