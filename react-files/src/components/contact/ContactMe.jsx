import React from "react";

function ContactMe() {
  return (
    <div className="contact-me-area pt-120 mb-120">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center mb-120">
          <div className="col-lg-6">
            <div className="contact-form">
              <div className="number-of-comment">
                <h5>Get a Message</h5>
              </div>
              <form>
                <div className="form-inner">
                  <label>Your Name (required)</label>
                  <input type="text" required />
                </div>
                <div className="form-inner">
                  <label>Your E-mail (required)</label>
                  <input type="email" required />
                </div>
                <div className="form-inner">
                  <label>Type Your Message</label>
                  <textarea defaultValue={""} />
                </div>
                <div className="form-inner two">
                  <button
                    className="primary-btn3 button-hover-two"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-left">
              <h3>Contact Me</h3>
              <ul>
                <li>
                  <div className="icon">
                    <i className="bi bi-geo-alt-fill" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="#">
                        2464 Royal Ln 1 Ave Mesa New <br />
                        Jersey USA.
                      </a>
                    </h6>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="tel:+8801701111000">+880 170 1111 000</a>
                    </h6>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="bi bi-chat-left-text-fill" />
                  </div>
                  <div className="content">
                    <h6>
                      <a href="mailto:info@support.com">info@example.com</a>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="join-us-title">
              <h3>Join us on Social Media!</h3>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="social-icon">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-pinterest-alt" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
