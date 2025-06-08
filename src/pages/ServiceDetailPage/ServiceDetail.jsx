import React from "react";
import DetailsHero from "./components/DetailsHero";
import SeePlans from "./components/SeePlans";
import HowItWorks from "../../components/HowItWorks";
import CtaBanner from "../../components/CtaBanner";
import AddToCart from "./components/AddToCart";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";

const ServiceDetail = () => {
  return (
    <div className="font-yourfont">
      <DetailsHero />
      <SeePlans />
      <HowItWorks
        headText={"How It Works"}
        t1={"Answer a few questions"}
        t2={"We generate your invoice"}
        t3={"Download in PDF/Excel"}
      />
      <CtaBanner
        childrenText={
          <>
            Smart Invoice Builder. <br className="hidden sm:block" /> Just Try
            It Once
          </>
        }
        childrenButton={"Start Now"}
      />
      <AddToCart/>
         <Feedback
        feedbackHeading={
          <>
            What our customers are <br className="hidden sm:block" />
            saying about us
          </>
        }
        f1={
          "I used this to bill 40+ clients for my agency. Game-changer."
        }
        f2={
          "I used this to bill 40+ clients for my agency. Game-changer."
        }
        f3={
          "I used this to bill 40+ clients for my agency. Game-changer."
        }
      />
      <Footer/>
    </div>
  );
};

export default ServiceDetail;
