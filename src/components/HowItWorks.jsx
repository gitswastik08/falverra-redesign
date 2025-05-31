import React from "react";
import hiw1 from "../assets/hivwIcon1.png";
import hiw2 from "../assets/hiwIcon2.png";
import hiw3 from "../assets/hiwIcon3.png";

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
    <section className="py-16 w-full sm:py-40 sm:px-40 px-4 bg-[#FFFCF6]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
        How It Works
      </h2>

      <div className="relative sm:w-full mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-16 sm:gap-40 px-4 sm:py-7  ">
        {/* Dashed line */}
        <div className="hidden sm:block absolute translate-x-[-50%] left-[50%] top-10 h-0.5 w-[74%] border-t-2 border-dashed border-[#FCB12C] z-0" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[20vw]   z-10"
          >
            {/* Dot */}
            <div className="w-6 h-6 rounded-full bg-[#FCB12C] border-4 border-white shadow-md z-10 mb-6" />

            {/* Icon Box */}
            <div
              className={`w-14 h-14 rounded-xl shadow-md flex items-center justify-center mb-4 ${step.bg}`}
            >
              
              <img src={step.url} alt="icon" className={`${step.color}`} />

            </div>

            {/* Title */}
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
