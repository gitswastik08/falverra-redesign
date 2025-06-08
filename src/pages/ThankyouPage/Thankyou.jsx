import React from "react";
import OrderConfirm from "./components/OrderConfirm";
import HowItWorks from "../../components/HowItWorks";
import CtaSection from "./components/CtaSection";
import Feedback from "../../components/Feedback";
import CtaBanner from "../../components/CtaBanner";
import Footer from "../../components/Footer";

const Thankyou = () => {
  return (
    <div className="font-yourfont">
      <OrderConfirm />
      <HowItWorks
        headText={"What’s Next?"}
        t1={"You’ll receive a confirmation email"}
        t2={"Our team will start working on your request"}
        t3={
          "Once ready, you’ll be notified and can download it from your dashboard"
        }
      />
      <CtaSection />
      <Feedback
        feedbackHeading={
          <>
            Join 200+ business owners <br className="hidden sm:block" /> using
            Falverra to grow smarter
          </>
        }
        f1={"I used this to bill 40+ clients for my agency. Game-changer."}
        f2={"I used this to bill 40+ clients for my agency. Game-changer."}
        f3={"I used this to bill 40+ clients for my agency. Game-changer."}
      />
      <CtaBanner
        childrenText={
          <>
            Need help or have a <br className="hidden sm:block" /> question?
          </>
        }
        childrenButton={"Chat with Us"}
      />
      <Footer/>
    </div>
  );
};

export default Thankyou;
