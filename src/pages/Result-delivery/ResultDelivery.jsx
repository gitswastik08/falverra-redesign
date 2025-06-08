import React from "react";
import ResultReady from "./components/ResultReady";
import FinalResult from "./components/FinalResult";
import Rating from "./components/Rating";
import CtaBanner from "../../components/CtaBanner";
import Footer from "../../components/Footer";

const ResultDelivery = () => {
  return (
    <div className="font-yourfont">
      <ResultReady />
      <FinalResult />
      <Rating />
      <CtaBanner
        childrenText={
          <>
            If you’re not subscribed yet. <br className="hidden sm:block" />{" "}
            Here you go!
          </>
        }
        childrenButton={"Subscribe Now"}
      />
      <Footer/>
    </div>
  );
};

export default ResultDelivery;
