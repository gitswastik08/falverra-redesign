import React from "react";
import ServiceHero from "./components/ServiceHero";
import OurServices from "./components/OurService";
import ServiceCompare from "./components/ServiceCompare";
import Footer from "../../components/Footer";
import CtaBanner from "../../components/CtaBanner";
const ServicePage = () => {
  return (
    <div className="font-yourfont">
      <ServiceHero />
      <OurServices />
      <ServiceCompare />
      <CtaBanner
        childrenText={
          <>
            Subscribe & Save.
            <br className="hidden sm:block" />
            Need help?
          </>
        }
        childrenButton={"Chat With Us "}
      />
      <Footer />
    </div>
  );
};

export default ServicePage;
