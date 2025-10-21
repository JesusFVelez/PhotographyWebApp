import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactUs from "../components/contact/ContactUs";

function ContactUsPage() {
  return (
    <>
      <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
      <ContactUs />
    </>
  );
}

export default ContactUsPage;
