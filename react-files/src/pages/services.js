import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Partner1 from "../components/partnar/Partner1";
import Services1 from "../components/services/Services1";
import Video1 from "../components/video/Video1";

function ServicesPage() {
  return (
    <>
      <Breadcrumb pageName="Our Services" pageTitle="Our Services" />
      <Services1 />
      <Video1 />
      <Partner1 />
    </>
  );
}

export default ServicesPage;
