import React from "react";
import BannerPortfolio from "../components/banner/BannerPortfolio";
import HeadTitle from "../components/common/HeadTitle";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function IndexPortfolio() {
  return (
    <>
      <HeadTitle />
      <Header style="style-1" />
      <BannerPortfolio />
      <Footer />
    </>
  );
}

export default IndexPortfolio;
