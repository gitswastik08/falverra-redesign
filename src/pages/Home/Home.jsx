import React from "react";
import Herosection from "./components/Herosection";
import WhyFalverra from "./components/WhyFalverra";
import Services from "./components/Services";
import HowItWorks from "../../components/HowItWorks";
import HomeSubscription from "./components/HomeSubscription";
import Feedback from "../../components/Feedback";
import CtaBanner from "../../components/CtaBanner";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="font-yourfont">
      <Herosection />
      <WhyFalverra />
      <Services />
      <HowItWorks
        headText={"How It Works"}
        t1={"Choose A Service Or Subscribe"}
        t2={"Fill A Quick Form"}
        t3={"Get Your Solution Delivered To\nYour Inbox / Dashboard"}
      />
      <HomeSubscription />
      <Feedback
        feedbackHeading={
          <>
            What our customers are <br className="hidden sm:block" />
            saying about us
          </>
        }
        f1={
          "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive."
        }
        f2={
          "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive."
        }
        f3={
          "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive."
        }
      />
      <CtaBanner
        childrenText={
          <>
            Your Time is Precious.
            <br className="hidden sm:block" />
            Let Falverra Work For You.
          </>
        }
        childrenButton={"Start Now"}
      />
      <Footer />
    </div>
  );
};

export default Home;
