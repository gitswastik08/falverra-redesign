import React from "react";
import Button from "./Button";

import heroshape1 from "../assets/images/heroshape1.png";
import herovector from "../assets/images/HeroVector.png";
import dots from "../assets/images/dots.png";
import layer from "../assets/images/layer.png";
import layer2 from "../assets/images/layer2.png";
import layer3 from "../assets/images/layer3.png";
import layer4 from "../assets/images/layer4.png";

const Herosection = () => {
  return (
    <div className="flex  w-full h-full flex-col gap-14 items-center sm:pl-8 sm:flex-row sm:gap-0 sm:h-full sm:py-36 py-16 relative ">
      <img
        src={herovector}
        alt="vector"
        className="absolute w-[20vw] sm:w-[10vw] top-[4vw] left-0 sm:top-[7vw] sm:left-[0vw]"
      />
      <div className="flex w-full relative flex-col sm:gap-10 gap-4 pl-8 ">
        <h1 className="sm:text-[62px] text-3xl text-[#1A1A1A]  sm:leading-tight font-bold">
          One Place. All Your <br /> Business Essentials. <br />{" "}
          <span className="text-[#FDCB14] font-yourfont">Automated.</span>
        </h1>
        <img
          src={heroshape1}
          alt="icon"
          className="absolute w-[25vw] sm:w-[15vw] top-[25vw] left-[30vw] sm:top-[14vw] sm:left-[14vw] "
        />
        <p className="text-xs sm:text-xl font-[400] text-[#000000a6]">
          Get ready-to-use solutions like funnels, invoices, calendars, and
          offer letters—on-demand or on a subscription.
        </p>
        <div className="flex gap-8">
          <Button className="bg-[#FDCB14] border-none">Get Started Now</Button>
          <Button>View Plans</Button>
        </div>
      </div>
      <div className=" w-full  overflow-hidden relative sm:h-[60vh] sm:p-24 ">
        <div className=" absolute -right-10 bottom-0 sm:h-[36vw] sm:w-[30vw] rounded-tr-full bg-[#fcf6e8]" />
        <img src={dots} alt="" className="absolute left-0 bottom-[2vw] w-[25%]" />
        <img
          src={layer}
          alt=""
          className="absolute  rounded-[22px] border border-blue-200 w-[42%] sm:left-[6vw] sm:bottom-[4vw]"
        />
        <img
          src={layer2}
          alt=""
          className="absolute  rounded-[14px] w-[30%] sm:left-[20vw] sm:top-[0vw]"
        />
         <img
          src={layer3}
          alt=""
          className="absolute  rounded-[14px] w-[35%] border border-red-500 sm:right-[4vw] sm:top-[13vw]"
        />
           <img
          src={layer4}
          alt=""
          className="absolute  rounded-[14px] w-[25%] sm:right-[8vw] sm:bottom-[3vw]"
        />
      </div>
    </div>
  );
};

export default Herosection;
