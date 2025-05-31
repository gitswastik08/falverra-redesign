import React from "react";

const CtaBanner = () => {
  return (
    <section className="px-8 w-full py-24">
      <div
        className="max-w-6xl  mx-auto rounded-3xl sm:py-20 py-10 px-10 text-center relative overflow-hidden bg-[#F9A826]"
        style={{
          backgroundImage: "url('/curved-lines.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-white text-3xl sm:text-5xl font-semibold mb-8 sm:leading-relaxed">
          Your Time is Precious. Let Falverra <br className="hidden sm:block" /> Work For You.
        </h2>

        <button className="bg-white text-black font-light px-6 py-3 sm:px-10 sm:py-4 rounded-[8px] ">
          Start Now
        </button>
      </div>
    </section>
  );
};

export default CtaBanner;
