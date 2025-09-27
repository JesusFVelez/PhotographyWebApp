import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactMe from "../components/contact/ContactMe";
import Layout from "../layout/Layout";

function ContactMePage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Contact Me" pageTitle="Contact Me" />
        <ContactMe />
      </Layout>
    </>
  );
}

export default ContactMePage;
