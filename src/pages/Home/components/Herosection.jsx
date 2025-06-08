import React from "react";
import Button from "../../../components/Button";

const Herosection = () => {
  return (
    <div className="flex overflow-hidden bg-[#fffbf4]  w-full h-screen  flex-col gap-4 items-center sm:pl-10 sm:flex-row sm:gap-0 sm:py-36 py-16 relative ">
      <img
        src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/HeroVector.png?updatedAt=1748846339968"
        alt="vector"
        className="absolute w-[20vw]  top-[0vw] left-0 sm:w-[10vw] sm:top-[7vw] sm:left-[0vw]"
      />
      <div className="flex w-full relative flex-col sm:gap-10 gap-6 pl-8 ">
        <h1 className="sm:text-[62px] text-4xl text-[#1A1A1A]  sm:leading-tight leading-tight font-bold">
          One Place. All Your <br /> Business Essentials. <br />{" "}
          <span className="text-[#FDCB14] font-yourfont">Automated.</span>
        </h1>
        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/HeroShape1.png?updatedAt=1748846348342"
          alt="icon"
          className="absolute w-[30vw]  top-[30vw] left-[30vw] sm:w-[15vw] sm:top-[14vw] sm:left-[12vw] "
        />
        <p className="text-lg sm:text-xl font-[400] text-[#000000a6]">
          Get ready-to-use solutions like funnels, invoices, calendars, and
          offer letters—on-demand or on a subscription.
        </p>
        <div className="flex gap-8">
          <Button className="bg-[#FDCB14] border-none">Get Started Now</Button>
          <Button>View Plans</Button>
        </div>
      </div>

      <img
        src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/dots.png?updatedAt=1748846344984"
        alt=""
        className="absolute  left-[2%] bottom-[10%] w-[30%] sm:left-[45vw] sm:bottom-[12vw] sm:w-[13%]"
      />

      <div className=" w-full p-2 mt-[10vw]  h-[50%] relative sm:min-h-[60vh] sm:p-24 ">
        <div className=" absolute sm:-right-[10vw] sm:bottom-0 sm:h-[40vw] sm:w-[40vw] rounded-tr-full  sm:bg-[#fcf6e8]" />

        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/layer.png?updatedAt=1748846340009"
          alt=""
          className="absolute  rounded-[22px] border border-blue-200 w-[45%] left-[12vw] bottom-[8vw] sm:w-[40%] sm:left-[3vw] sm:bottom-[7vw]"
        />
        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/layer2.png?updatedAt=1748846343515"
          alt=""
          className="absolute border  rounded-[14px] right-[30vw] top-[10vw] w-[30%] sm:w-[30%] sm:left-[20vw] sm:top-[0vw]"
        />
        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/layer3.png?updatedAt=1748846343531"
          alt=""
          className="absolute border border-red-500  rounded-[14px] right-[2vw] top-[37vw] w-[35%] sm:w-[37%] sm:right-[3vw] sm:top-[13vw]"
        />
        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/layer4.png?updatedAt=1748846343452"
          alt=""
          className="absolute rounded-[14px] w-[25%] right-[8vw] bottom-[15vw] sm:w-[25%] sm:right-[10vw] sm:bottom-[5vw]"
        />
        <img
          src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vector2.png?updatedAt=1748846343628"
          alt=""
          className="absolute  rounded-[14px] w-[22%]  left-[22vw] top-[25vw] sm:w-[22%] sm:left-[8vw] sm:top-[1vw]"
        />
      </div>
    </div>
  );
};

export default Herosection;
