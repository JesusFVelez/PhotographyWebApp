import React from "react";

function ContactUs() {
  return (
    <div className="contact-us-page pt-120 mb-120">
      <div className="container">
        <div className="row mb-120 g-4">
          <div className="col-lg-6">
            <div className="contact-left">
              <h2>Get In touch</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings.
              </p>
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
                    <h6>
                      <a href="mailto:info@support.com">info@company045.com</a>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48330.162702269045!2d-74.29798882771155!3d40.792034138683825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab00d85ee855%3A0x93a15ba40269dd0!2sWest%20Orange%2C%20NJ%2007052%2C%20USA!5e0!3m2!1sen!2sbd!4v1658243800106!5m2!1sen!2sbd"
                height={500}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
