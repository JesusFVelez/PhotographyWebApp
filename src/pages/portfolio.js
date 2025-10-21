import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

import PortfolioFiler from "../components/common/PortfolioFiler";

function PortfolioPage() {
  return (
    <>
      <Breadcrumb pageName="Our Portfolio" pageTitle="Our Portfolio" />
      <PortfolioFiler />
    </>
  );
}

export default PortfolioPage;
