import React from "react";

const HowItWorks = ({ headText, t1, t2, t3 }) => {
  const steps = [
    {
      url: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/hivwIcon1.png?updatedAt=1748846339931",
      title: t1,
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
    {
      url: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/hiwIcon2.png?updatedAt=1748846340078",
      title: t2,
      bg: "bg-green-100",
      color: "text-green-500",
    },
    {
      url: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/hiwIcon3.png?updatedAt=1748846339990",
      title: t3,
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
  ];

  return (
    <section className="py-12 w-full sm:py-30 sm:px-40 px-4 bg-[#FFFCF6]">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">
        {headText}
      </h2>

      <div className="relative sm:w-full mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-10 sm:gap-40 sm:px-4 sm:py-7  ">
        <div className="hidden sm:block absolute translate-x-[-50%] left-[50%] top-[6vh] h-0.5 w-[83%] border-t-2 border-dashed border-[#FCB12C] z-0" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex w-full flex-row sm:flex-col items-center sm:text-center gap-3 sm:w-[20vw] p-3  z-10"
          >
            <div className="w-6 h-6 rounded-full bg-[#FCB12C] border-4 border-white shadow-md z-10 sm:mb-6" />

            <div
              className={`w-14 h-14 rounded-xl shadow-md flex items-center justify-center sm:mb-4 ${step.bg}`}
            >
              <img src={step.url} alt="icon" className={`${step.color}`} />
            </div>

            <p className="text-[#4b4b4a] sm:text-2xl text-base font-normal font-sans sm:w-[23vw] w-[60vw] leading-relaxed">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
