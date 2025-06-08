import React from "react";
import PaymentHero from "./components/PaymentHero";
import PaymentForm from "./components/PaymentForm";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";

const Payment = () => {
  return (
    <div className="font-yourfont">
      <PaymentHero />
      <PaymentForm/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Payment;
