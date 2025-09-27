import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

import PortfolioFiler from "../components/common/PortfolioFiler";
import Layout from "../layout/Layout";

function PortfolioPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Portfolio" pageTitle="Our Portfolio" />
        <PortfolioFiler />
      </Layout>
    </>
  );
}

export default PortfolioPage;
