import React from "react";
import hiw1 from "../assets/images/hivwIcon1.png";
import hiw2 from "../assets/images/hiwIcon2.png";
import hiw3 from "../assets/images/hiwIcon3.png";

const HowItWorks = () => {
  const steps = [
    {
      url: hiw1,
      title: "Choose A Service Or Subscribe",
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
    {
      url: hiw2,
      title: "Fill A Quick Form",
      bg: "bg-green-100",
      color: "text-green-500",
    },
    {
      url: hiw3,
      title: "Get Your Solution Delivered To\nYour Inbox / Dashboard",
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-12 w-full sm:py-30 sm:px-40 px-4 bg-[#FFFCF6]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
        How It Works
      </h2>

      <div className="relative sm:w-full mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-16 sm:gap-40 px-4 sm:py-7  ">
       
        <div className="hidden sm:block absolute translate-x-[-50%] left-[50%] top-10 h-0.5 w-[73%] border-t-2 border-dashed border-[#FCB12C] z-0" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[20vw]   z-10"
          >
           
            <div className="w-6 h-6 rounded-full bg-[#FCB12C] border-4 border-white shadow-md z-10 mb-6" />

            
            <div
              className={`w-14 h-14 rounded-xl shadow-md flex items-center justify-center mb-4 ${step.bg}`}
            >
              
              <img src={step.url} alt="icon" className={`${step.color}`} />

            </div>

           
            <p className="text-[#535250] sm:text-2xl text-base font-normal whitespace-pre leading-relaxed">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
