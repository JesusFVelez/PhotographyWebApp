import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactMe from "../components/contact/ContactMe";

function ContactMePage() {
  return (
    <>
      <Breadcrumb pageName="Contact Me" pageTitle="Contact Me" />
      <ContactMe />
    </>
  );
}

export default ContactMePage;
