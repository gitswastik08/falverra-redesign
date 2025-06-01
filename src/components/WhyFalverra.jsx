import React from "react";
import whyFalverra from "../assets/images/WhyFalverra.jpg";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import vector3 from "../assets/images/Vector3.png";
import IconText from "./IconText";

const WhyFalverra = () => {
  return (
   <div className="w-full sm:pb-10 flex items-center justify-center">
     <div className="bg-[#10123D0A] rounded-[3vw] flex flex-col items-center justify-center px-4 relative sm:flex-row sm:justify-start  sm:px-0 sm:w-[84%] sm:py-10 ]">

<img src={vector3} alt="" className=" absolute right-0 top-0 hidden sm:block " />

      <img
        src={whyFalverra}
        className="w-[100%] object-center object-cover mx-10 rounded-2xl  bg-slate-300  sm:w-[35vw] "
        alt="Why Falverra"
      />

      <div className="w-full sm:w-fit flex flex-col space-y-4 mt-6 sm:mt-0 sm:pl-8 sm:gap-4">
        <h3 className="text-5xl font-normal mb-2">Why Falverra.in?</h3>
        <IconText icon={f1} text="Save Time, Automate Repetitive Work" />
        <IconText icon={f2} text="Affordable Pricing for Entrepreneurs" />
        <IconText icon={f3} text="Ready-to-Use Professional Templates" />
        <IconText icon={f4} text="Built by Business Experts" />
        <IconText icon={f5} text="Trusted by 200+ businesses across India" />
      </div>
    </div>
   </div>
  );
};

export default WhyFalverra;
