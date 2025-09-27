import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BookingArea from "../components/common/BookingArea";
import Partner1 from "../components/partnar/Partner1";
import ChooseUsArea from "../components/services/ChooseUsArea";
import IntroductionArea from "../components/services/IntroductionArea";
import Layout from "../layout/Layout";

function ServicesDetailsPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Services Details" pageTitle="Services Details" />
        <IntroductionArea />
        <ChooseUsArea />
        <BookingArea />
        <Partner1 />
      </Layout>
    </>
  );
}

export default ServicesDetailsPage;
