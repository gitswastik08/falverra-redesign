import React from "react";

import IconText from "./IconText";

const WhyFalverra = () => {
  return (
   <div className="w-full sm:pb-10 flex items-center justify-center">
     <div className="bg-[#10123D0A] rounded-[3vw] flex flex-col items-center justify-center px-4 relative sm:flex-row sm:justify-start  sm:px-0 sm:w-[84%] sm:py-10 ]">

<img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vector3.png?updatedAt=1748846343571" alt="" className=" absolute right-0 top-0 hidden sm:block " />

      <img
        src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/WhyFalverra.jpg?updatedAt=1748846345236"
        className="w-[100%] object-center object-cover mx-10 rounded-2xl  bg-slate-300  sm:w-[35vw] "
        alt="Why Falverra"
      />

      <div className="w-full sm:w-fit flex flex-col space-y-4 mt-6 sm:mt-0 sm:pl-8 sm:gap-4">
        <h3 className="text-5xl font-normal mb-2">Why Falverra.in?</h3>
        <IconText icon="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/f1.png?updatedAt=1748846345196" text="Save Time, Automate Repetitive Work" />
        <IconText icon="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/f2.png?updatedAt=1748846344955" text="Affordable Pricing for Entrepreneurs" />
        <IconText icon="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/f3.png?updatedAt=1748846347045" text="Ready-to-Use Professional Templates" />
        <IconText icon="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/f4.png?updatedAt=1748846347110" text="Built by Business Experts" />
        <IconText icon="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/f5.png?updatedAt=1748846347082" text="Trusted by 200+ businesses across India" />
      </div>
    </div>
   </div>
  );
};

export default WhyFalverra;
