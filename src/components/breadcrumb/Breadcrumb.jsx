import Link from "next/link";
import React from "react";

function Breadcrumb({ pageTitle, pageName }) {
  return (
    <div className="inner-page-banner">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-6">
            <div className="banner-content">
              <h1>{pageTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb gap-3">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
