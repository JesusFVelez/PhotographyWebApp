import React from "react";

function BookingArea() {
  return (
    <div className="home1-booking-area mb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="booking-wraper">
              <div className="row">
                <div className="col-12">
                  <div className="section-title1 text-center">
                    <h2>Booking</h2>
                    <p>
                      As Vintage decided to have a closer look into fast-paced
                      New York web design realm in.
                    </p>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Your Name (required)</label>
                      <input type="text" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Your Phone (required)</label>
                      <input type="number" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Your E-mail (required)</label>
                      <input type="email" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner date">
                      <label>Booking Date</label>
                      <input
                        autoComplete="off"
                        type="text"
                        name="checkIn"
                        id="datepicker"
                        className="claender hasDatepicker"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Type Your Message</label>
                      <textarea defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-center pt-20">
                    <div className="form-inner send-btn">
                      <button
                        className="primary-btn3 button-hover-two"
                        type="submit"
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingArea;
