import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function FaqPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageTitle="FAQ" pageName="FAQ" />
        <div className="faq-page pt-120 mb-120">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="faq-sidebar">
                  <div className="faq-title">
                    <h2>Frequently Asked Question</h2>
                  </div>
                  <div className="faq-question">
                    <h4>Ask Any Question?</h4>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form>
                    <div className="form-inner">
                      <label>Your Name*</label>
                      <input type="text" placeholder="Enter Your Name:" />
                    </div>
                    <div className="form-inner">
                      <label>Your Email*</label>
                      <input type="email" placeholder="Enter Your Email:" />
                    </div>
                    <div className="form-inner mb-40">
                      <label>Your Question*</label>
                      <textarea defaultValue={"Type your question"} />
                    </div>
                    <div className="form-inner">
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
              <div className="col-lg-8">
                <div className="faq-wrap">
                  <div className="faq-item">
                    <h5
                      id="heading10"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse10"
                      aria-controls="collapse10"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 5.15259L13.6561 3.77125C10.4979 0.525125 4.71402 1.64568 2.62567 5.72408C1.72082 7.49119 1.46214 9.98024 2.82798 13.125H0.806705C-3.1838 2.44285 8.61469 -3.43086 14.6706 2.14328C14.7824 2.24619 14.8922 2.353 15 2.46376C15.1077 2.35301 15.2176 2.2462 15.3294 2.1433C21.3853 -3.43087 33.1838 2.44284 29.1933 13.125H27.172C28.5379 9.98024 28.2792 7.49119 27.3743 5.72408C25.286 1.64568 19.5021 0.525125 16.3439 3.77125L15 5.15259ZM4.14762 18.75H6.613C8.61199 20.9686 11.3462 23.3585 15 25.8649C18.6538 23.3585 21.388 20.9686 23.387 18.75H25.8524C23.48 21.6871 19.9656 24.8439 15 28.125C10.0344 24.8439 6.52003 21.6871 4.14762 18.75ZM19.2142 6.3768C19.1348 6.17829 18.938 6.05223 18.7245 6.06315C18.5109 6.07407 18.328 6.21956 18.2692 6.42514L14.921 18.1438L11.7142 10.1268C11.6453 9.9544 11.4865 9.83442 11.3018 9.81519C11.1171 9.79596 10.937 9.88066 10.834 10.0351L7.23241 15.4375H0.9375C0.661358 15.4375 0.4375 15.6614 0.4375 15.9375C0.4375 16.2136 0.661358 16.4375 0.9375 16.4375H7.5C7.66718 16.4375 7.82329 16.354 7.91603 16.2149L11.1388 11.3807L14.5358 19.8732C14.6152 20.0717 14.812 20.1978 15.0255 20.1868C15.2391 20.1759 15.422 20.0304 15.4808 19.8249L18.829 8.10618L22.0358 16.1232C22.1117 16.313 22.2955 16.4375 22.5 16.4375H29.0625C29.3386 16.4375 29.5625 16.2136 29.5625 15.9375C29.5625 15.6614 29.3386 15.4375 29.0625 15.4375H22.8385L19.2142 6.3768Z"
                        />
                      </svg>
                      What is your philosophy regarding photography?
                    </h5>
                    <div
                      id="collapse10"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading10"
                      style={{}}
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading11"
                      className="accordion-button for-stroke"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-controls="collapse11"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.5 10.625C27.5 15.1125 23.8625 18.75 19.375 18.75C19.1625 18.75 18.9375 18.7375 18.725 18.725C18.4125 14.7625 15.2375 11.5875 11.275 11.275C11.2625 11.0625 11.25 10.8375 11.25 10.625C11.25 6.1375 14.8875 2.5 19.375 2.5C23.8625 2.5 27.5 6.1375 27.5 10.625Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.75 19.375C18.75 23.8625 15.1125 27.5 10.625 27.5C6.1375 27.5 2.5 23.8625 2.5 19.375C2.5 14.8875 6.1375 11.25 10.625 11.25C10.8375 11.25 11.0625 11.2625 11.275 11.275C15.2375 11.5875 18.4125 14.7625 18.725 18.725C18.7375 18.9375 18.75 19.1625 18.75 19.375Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.9875 2.5H3.75C3.0625 2.5 2.5 3.0625 2.5 3.75V6.98749C2.5 8.09999 3.84999 8.66248 4.63749 7.87498L7.87498 4.63749C8.64998 3.84999 8.1 2.5 6.9875 2.5Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.0126 27.5H26.2501C26.9376 27.5 27.5001 26.9375 27.5001 26.25V23.0125C27.5001 21.9 26.1501 21.3375 25.3626 22.125L22.1251 25.3625C21.3501 26.15 21.9001 27.5 23.0126 27.5Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Do you deliver every image you shoot?
                    </h5>
                    <div
                      id="collapse11"
                      className="accordion-collapse collapse show"
                      aria-labelledby="heading11"
                      style={{}}
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading12"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse12"
                      aria-controls="collapse12"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.4412 2.92279C15.1654 2.77574 14.8346 2.77574 14.5588 2.92279L0.496324 10.4228C0.190827 10.5857 0 10.9038 0 11.25C0 11.5962 0.190827 11.9143 0.496324 12.0772L5.97656 15L0.496324 17.9228C0.190826 18.0857 0 18.4038 0 18.75C0 19.0962 0.190826 19.4143 0.496324 19.5772L14.5588 27.0772C14.8346 27.2243 15.1654 27.2243 15.4412 27.0772L29.5037 19.5772C29.8092 19.4143 30 19.0962 30 18.75C30 18.4038 29.8092 18.0857 29.5037 17.9228L24.0234 15L29.5037 12.0772C29.8092 11.9143 30 11.5962 30 11.25C30 10.9038 29.8092 10.5857 29.5037 10.4228L15.4412 2.92279ZM22.0312 16.0625L27.0703 18.75L15 25.1875L2.92969 18.75L7.96875 16.0625L14.5588 19.5772C14.8346 19.7243 15.1654 19.7243 15.4412 19.5772L22.0312 16.0625ZM15 17.6875L2.92969 11.25L15 4.8125L27.0703 11.25L15 17.6875Z" />
                      </svg>
                      Does your studio provide videography services?
                    </h5>
                    <div
                      id="collapse12"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading12"
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading13"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse13"
                      aria-controls="collapse13"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M14.3371 29.7254C14.7032 30.0915 15.2968 30.0915 15.6629 29.7254L19.1383 26.25H26.25C28.3211 26.25 30 24.5711 30 22.5V5.625C30 3.55393 28.3211 1.875 26.25 1.875H3.75C1.67893 1.875 0 3.55393 0 5.625V22.5C0 24.5711 1.67893 26.25 3.75 26.25H10.8617L14.3371 29.7254ZM1.875 16.875V11.25H28.125V16.875H1.875ZM28.125 18.75V22.5C28.125 23.5355 27.2855 24.375 26.25 24.375H19.1383C18.641 24.375 18.1641 24.5725 17.8125 24.9242L15 27.7367L12.1875 24.9242C11.8359 24.5725 11.359 24.375 10.8617 24.375H3.75C2.71447 24.375 1.875 23.5355 1.875 22.5V18.75H28.125ZM28.125 9.375H1.875V5.625C1.875 4.58947 2.71447 3.75 3.75 3.75H26.25C27.2855 3.75 28.125 4.58947 28.125 5.625V9.375ZM3.75 21.5625C3.75 22.0803 4.16973 22.5 4.6875 22.5H19.6875C20.2053 22.5 20.625 22.0803 20.625 21.5625C20.625 21.0447 20.2053 20.625 19.6875 20.625H4.6875C4.16973 20.625 3.75 21.0447 3.75 21.5625ZM3.75 14.0625C3.75 14.5803 4.16973 15 4.6875 15H25.3125C25.8303 15 26.25 14.5803 26.25 14.0625C26.25 13.5447 25.8303 13.125 25.3125 13.125H4.6875C4.16973 13.125 3.75 13.5447 3.75 14.0625ZM3.75 6.5625C3.75 7.08027 4.16973 7.5 4.6875 7.5H15.9375C16.4553 7.5 16.875 7.08027 16.875 6.5625C16.875 6.04473 16.4553 5.625 15.9375 5.625H4.6875C4.16973 5.625 3.75 6.04473 3.75 6.5625Z" />
                      </svg>
                      How long does it take to get my prints?
                    </h5>
                    <div
                      id="collapse13"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading13"
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading14"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse14"
                      aria-controls="collapse14"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 0C15.3293 0 15.6345 0.17278 15.8039 0.45516C18.3518 4.7017 21.2879 7.35871 23.7747 9.60916C23.953 9.77057 24.1291 9.92989 24.3025 10.0876C26.8277 12.3832 29.0625 14.525 29.0625 17.8125C29.0625 21.9546 25.7046 25.3125 21.5625 25.3125C20.6348 25.3125 19.7464 25.1439 18.9262 24.8358C19.3677 25.5664 19.8468 26.302 20.2794 26.9576C21.0942 28.1923 20.2602 30 18.6744 30H11.3256C9.73977 30 8.90576 28.1923 9.72058 26.9576C10.2126 26.212 10.6776 25.499 11.0854 24.8315C10.262 25.1423 9.36956 25.3125 8.4375 25.3125C4.29536 25.3125 0.9375 21.9546 0.9375 17.8125C0.9375 14.525 3.17226 12.3832 5.69749 10.0876C5.87093 9.92989 6.04698 9.77057 6.22534 9.60916C8.71213 7.35871 11.6482 4.7017 14.1961 0.45516C14.3655 0.17278 14.6707 0 15 0ZM6.95876 11.4749C4.32774 13.8668 2.8125 15.475 2.8125 17.8125C2.8125 20.9191 5.3309 23.4375 8.4375 23.4375C10.143 23.4375 11.6704 22.6797 12.7034 21.4791C12.9829 21.1542 13.4472 21.0603 13.8311 21.2509C14.2149 21.4415 14.4206 21.8682 14.3307 22.2873C14.1547 23.1075 13.7119 24.0327 13.1843 24.9638C12.6479 25.9105 11.9759 26.9442 11.2855 27.9903C11.2789 28.0004 11.2759 28.0094 11.2756 28.0229C11.2751 28.0398 11.2794 28.0631 11.2915 28.0867C11.3036 28.1102 11.3168 28.1214 11.3214 28.1244C11.3218 28.1246 11.3217 28.1248 11.3218 28.1249C11.3219 28.125 11.3223 28.125 11.3256 28.125H18.6744C18.6777 28.125 18.6781 28.125 18.6782 28.1249C18.6783 28.1248 18.6782 28.1246 18.6786 28.1244C18.6832 28.1214 18.6964 28.1102 18.7085 28.0867C18.7206 28.0631 18.7249 28.0398 18.7244 28.0229C18.7241 28.0094 18.7211 28.0004 18.7145 27.9903C18.1508 27.1361 17.4807 26.1052 16.9136 25.1126C16.3627 24.1483 15.8474 23.1172 15.6693 22.2873C15.5794 21.8682 15.7851 21.4415 16.1689 21.2509C16.5528 21.0603 17.0171 21.1542 17.2966 21.4791C18.3296 22.6797 19.857 23.4375 21.5625 23.4375C24.6691 23.4375 27.1875 20.9191 27.1875 17.8125C27.1875 15.475 25.6723 13.8668 23.0412 11.4749C22.865 11.3148 22.6849 11.1519 22.5014 10.9859C20.2574 8.95636 17.4975 6.4603 15 2.69378C12.5025 6.4603 9.74263 8.95636 7.49859 10.9859C7.31505 11.1519 7.13497 11.3148 6.95876 11.4749Z" />
                      </svg>
                      What rights do I have to the digital prints?
                    </h5>
                    <div
                      id="collapse14"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading14"
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue{" "}
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <h5
                      id="heading15"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse15"
                      aria-controls="collapse14"
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 3.75C0 1.67893 1.67893 0 3.75 0H18.75C20.8211 0 22.5 1.67893 22.5 3.75V7.5H26.25C28.3211 7.5 30 9.17893 30 11.25V26.25C30 28.3211 28.3211 30 26.25 30H11.25C9.17893 30 7.5 28.3211 7.5 26.25V22.5H3.75C1.67893 22.5 0 20.8211 0 18.75V3.75ZM9.375 22.5V26.25C9.375 27.2855 10.2145 28.125 11.25 28.125H26.25C27.2855 28.125 28.125 27.2855 28.125 26.25V11.25C28.125 10.2145 27.2855 9.375 26.25 9.375H22.5V18.75C22.5 20.8211 20.8211 22.5 18.75 22.5H9.375ZM20.625 7.5V3.75C20.625 2.71447 19.7855 1.875 18.75 1.875H3.75C2.71447 1.875 1.875 2.71447 1.875 3.75V18.75C1.875 19.7855 2.71447 20.625 3.75 20.625H7.5V11.25C7.5 9.17893 9.17893 7.5 11.25 7.5H20.625Z" />
                      </svg>
                      What if I lose my images?
                    </h5>
                    <div
                      id="collapse15"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading15"
                    >
                      <div className="faq-body">
                        Lorem ipsum dolor sit amet, an simul salutandi
                        efficiantur mel. Eum at dicant reprehendunt, in tritani
                        mediocrem duo, eam ne lorem accusam explicari. Ut
                        impedit molestie vix, sit at affert congue{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FaqPage;
