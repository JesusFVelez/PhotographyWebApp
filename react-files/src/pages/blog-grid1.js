import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import blogGrid1Data from "../data/blogGird1_data.json";
function BlogGrid1Page() {
  return (
    <>
      <Breadcrumb pageName="Blog Grid 01" pageTitle="Blog Grid 01" />
        <div className="blog-grid mb-120 pt-120">
          <div className="container">
            <div className="row g-4">
              {blogGrid1Data.map((item) => {
                const { id, image, author, commentNumber, title, postDate } =
                  item;
                return (
                  <div key={id} className="col-lg-6 col-md-6 mb-20">
                    <div className="blog-wrrap">
                      <div className="magnetic-wrap">
                        <div className="blog-img magnetic-item">
                          <img className="img-fluid" src={image} alt="image" />
                          <div className="publish-date">
                            <span>{postDate.month}</span>
                            <p>{postDate.day}</p>
                            <span>{postDate.year}</span>
                          </div>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <p>
                            Posted by :
                            <Link legacyBehavior href="/blog">
                              <a className="name">
                                {author} - {commentNumber} Comments
                              </a>
                            </Link>
                          </p>
                        </div>
                        <h3>
                          <Link
                            legacyBehavior
                            data-cursor="View<br>Details"
                            href="/blog-details"
                          >
                            <a className="not-hide-cursor">{title}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="bi bi-arrow-left" /> PREV
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        NEXT <i className="bi bi-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default BlogGrid1Page;
