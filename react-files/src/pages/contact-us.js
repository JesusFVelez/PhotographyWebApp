import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactUs from "../components/contact/ContactUs";
import Layout from "../layout/Layout";

function ContactUsPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
        <ContactUs />
      </Layout>
    </>
  );
}

export default ContactUsPage;
