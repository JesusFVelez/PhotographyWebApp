import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import teamData from "../data/tem1.json";
import Layout from "../layout/Layout";
function TeamPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Our Team" pageTitle="Our Team" />
        <div className="team-section pt-120 pb-120 position-relative">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-10">
                <div className="section-title1  text-center mx-auto mb-50">
                  <span>Meet us?</span>
                  <h2>Our Team</h2>
                  <p>
                    We Envision Design &amp; Develop Digital Digital Experience
                    that create possibility in an ever changing world.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center">
              {teamData.map((item) => {
                return (
                  <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
                    <div className="magnetic-wrap">
                      <div className="team-item magnetic-item">
                        <img
                          src={item.image}
                          className="img-fluid"
                          alt="image"
                        />
                        <div className="portfilio-img-overlay">
                          <h2>{item.name}</h2>
                          <p>{item.designation}</p>
                          <ul className="social-icon">
                            <li>
                              <Link
                                legacyBehavior
                                href="https://www.instagram.com/"
                              >
                                <a>
                                  {" "}
                                  <i className="fab fa-instagram" />
                                </a>
                              </Link>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.behance.com/">
                                <i className="fab fa-behance" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TeamPage;
