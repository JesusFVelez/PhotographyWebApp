import Link from "next/link";
import React from "react";

function BlogDetailsSidebar() {
  return (
    <div className="blog-details-area">
      <div className="post-thumbnail">
        <img
          className="img-fluid"
          src="assets/images/blog/blog-dt-1.png"
          alt="image"
        />
      </div>
      <div className="blog-publisher-meta-title d-flex align-items-center">
        <div className="publish-date">
          <span>Jan</span>
          <p>31</p>
          <span>2022</span>
        </div>
        <div className="title-meta">
          <div className="blog-meta">
            <Link href="/blog">Photography, Art</Link>
          </div>
          <div className="post-title">
            <h3>How to take amazing photos in not so very good lighting?</h3>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria
        in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est,
        sea epicuri intellegam cu. Cu ius nonumes prodesset. Splendide
        concludaturque nam ad, est labore philosophia et, et his quem ornatus
        accusamus. Cibo idque molestie an has, qui graecis explicari cu, ut has
        verear feugiat vituperatoribus. At adhuc dicant elaboraret eum, per ad
        corpora explicari, ubique nostro volutpat per ea. Saepe doming an mei
      </p>
      <blockquote className="wp-block-quote">
        <div className="quage-icon">
          <img src="assets/images/icons/quote-1.svg" alt="image" />
        </div>
        <p>
          Dictumst quisque sagittis purus sit amet volutpat consequat mauris
          nunc. Quis eleifend quam adipiscing.{" "}
        </p>
        <cite>Leslie Alexander</cite>
      </blockquote>
      <div className="post-thumbnail2 pt-40">
        <img
          className="img-fluid"
          src="assets/images/blog/blog-dt-2.png"
          alt="blog-dt-2"
        />
      </div>
      <h3 className="title2">Sustainable farmhouse</h3>
      <p>
        Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria
        in. Ad mei modus quodsi complectitur, postea verterem persecuti cu est,
        sea epicuri intellegam cu. Cu ius nonumes prodesset. Splendide
        concludaturque nam ad, est labore philosophia et, et his quem ornatus
        accusamus.
      </p>
      <div className="tag-social-area d-flex align-items-center justify-content-between flex-wrap">
        <div className="tags">
          <p>
            Tags: &nbsp;
            <Link href="/blog">Art-</Link>
            <Link href="/blog">Photography</Link>
            <Link href="/blog">- Science</Link>
          </p>
        </div>
        <div className="social-area">
          <ul className="d-flex">
            <li>
              <Link href="https://www.facebook.com/">FB.</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/">LI.</Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">IN.</Link>
            </li>
            <li>
              <Link href="https://twitter.com/">TW.</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="post-author-area d-flex align-items-center">
        <div className="author-img">
          <img src="assets/images/blog/post-author.png" alt="image" />
        </div>
        <div className="author-content">
          <div className="author-name">
            <h4>Victor Thornton</h4>
          </div>
          <p>
            Orem ipsum dolor sit &amp;, sdt consectetu adipiscing elit. Aenean
            commodo ligula eget dolor. Cum socis Theme sed natoque ut penatibus
            Etiam ultricies nisi vel augue.
          </p>
        </div>
      </div>
      <div className="comments-area">
        <div className="number-of-comment">
          <h5>02 Comments</h5>
        </div>
        <div className="comment-list-area mb-70">
          <ul className="comment-list">
            <li>
              <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                <div className="comment-image">
                  <img src="assets/images/blog/com-1.png" alt="image" />
                </div>
                <div className="comment-content">
                  <div className="c-header d-flex align-items-center">
                    <h5 className="mb-0">
                      <Link href="#">Gojesin jormeny -</Link>
                    </h5>
                    <div className="c-date">February 21, 2022</div>
                  </div>
                  <div className="c-body">
                    <p>
                      Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                      sollicitudin, lorem quis bibendum auci elit consequat
                      ipsutis sem nibh id.
                    </p>
                  </div>
                </div>
                <div className="replay-btn">
                  <Link href="#">Reply</Link>
                </div>
              </div>
              <ul className="comment-reply">
                <li>
                  <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                    <div className="comment-image">
                      <img src="assets/images/blog/com-2.png" alt="image" />
                    </div>
                    <div className="comment-content">
                      <div className="c-header d-flex align-items-center">
                        <h5 className="mb-0">
                          <Link href="#">Leslie Alexander - </Link>
                        </h5>
                        <div className="c-date">February 21, 2022</div>
                      </div>
                      <div className="c-body">
                        <p>
                          Lorem Ipsn gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin.
                        </p>
                      </div>
                    </div>
                    <div className="replay-btn">
                      <Link href="#">Reply</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                <div className="comment-image">
                  <img src="assets/images/blog/com-3.png" alt="image" />
                </div>
                <div className="comment-content">
                  <div className="c-header d-flex align-items-center">
                    <h5 className="mb-0">
                      <Link href="#">Wade Warren -</Link>
                    </h5>
                    <div className="c-date">February 21, 2022</div>
                  </div>
                  <div className="c-body">
                    <p>
                      Lorem Ipsn gravida nibh vel velit auctor aliquet.Aenean
                      sollicitudin, lorem quis bibendum auci elit consequat
                      ipsutis sem nibh id.
                    </p>
                  </div>
                </div>
                <div className="replay-btn">
                  <Link href="#">Reply</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="comment-form">
          <div className="number-of-comment">
            <h5>Leave a Reply</h5>
          </div>
          <form>
            <div className="form-inner">
              <label>Your Full Name (required)</label>
              <input type="text" required />
            </div>
            <div className="form-inner">
              <label>Your E-mail (required)</label>
              <input type="text" required />
            </div>
            <div className="form-inner">
              <label>Type Your Question</label>
              <textarea defaultValue={""} />
            </div>
            <div className="form-inner two">
              <button className="primary-btn3 button-hover-two" type="submit">
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsSidebar;
