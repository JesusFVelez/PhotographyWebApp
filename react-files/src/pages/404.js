import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function CustomError() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Error" pageTitle="Error" />
        <div className="error-page pt-120 mb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 position-relative">
                <div className="bacground-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/error-bg.png "
                    alt="image"
                  />
                </div>
                <div className="error-content text-center style-two">
                  <h5>Error Page</h5>
                  <h2>
                    PAGE NOT <span>FOUND</span>
                  </h2>
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>
                  <Link className="primary-btn3 button-hover-two" href="/">
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CustomError;
