import React from "react";
import About1 from "../components/about/About1";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import InstagramFeed1 from "../components/nstagramFeed/InstagramFeed1";
import Services1 from "../components/services/Services1";
import HomeTestimonial1 from "../components/testimonial/HomeTestimonial1";
import Layout from "../layout/Layout";

function AboutMePage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Me" pageTitle="About Me" />
        <About1 />
        <Services1 />
        <HomeTestimonial1 />
        <InstagramFeed1 />
      </Layout>
    </>
  );
}

export default AboutMePage;
