import React from "react";
import Address from "./components/Address";
import GitSection from "./components/GitSection";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

const Contact = () => {
  return (
    <div className="font-yourfont">
      <Address />
      <GitSection/>
      <Faq />
      <Footer/>
    </div>
  );
};

export default Contact;
