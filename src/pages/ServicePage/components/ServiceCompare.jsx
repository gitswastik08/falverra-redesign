import React from "react";

const ServiceCompare = () => {
  return (
    <div className="sm:px-24 py-6  ">
      <section className="py-6 w-full sm:py-6 sm:px-4 px-4 bg-[#F6F6F7] rounded-[3vw]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
            {/* Problem Panel */}
            <div className="flex-1 bg-[#fff] rounded-2xl p-8 sm:p-10">
              <div className="text-[#dc2626]  font-medium mb-6 text-base ">
                Problem
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semiibold text-[#333333] sm:leading-loose">
                Hiring Experts Is
                <br />
                Expensive
              </h2>
            </div>

            {/* Solution Panel */}
            <div className="flex-1 rounded-3xl p-8 sm:p-10">
              <div className="text-[#16a34a] font-medium mb-6 text-base">
                Solution
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-5xl font-semiibold text-[#333333] sm:leading-loose whitespace-nowrap">
                Use Battle-Tested
                <br />
                Templates + Automation
              </h2>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 sm:mt-12">
            <button className="bg-[#FDCB14] hover:bg-[#FCB12C] text-black font-extralight py-4 sm:px-8 px-12 rounded-xl transition-colors text-lg">
              Compare Subscription Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCompare;
