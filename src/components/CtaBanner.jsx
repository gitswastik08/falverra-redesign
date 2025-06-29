import React from "react";
const bgsvg = "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Groupsvg.png?updatedAt=1748846346962";

const CtaBanner = ({childrenText,childrenButton}) => {
  return (
    <section className="px-8 w-full py-28">
      <div
        className="max-w-6xl mx-auto rounded-3xl sm:py-20 py-10 px-10 text-center relative overflow-hidden bg-[#FACC15]"
        style={{
          backgroundImage: `url(${bgsvg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✅ Overlay to reduce brightness of bg image */}
        <div className="absolute inset-0 bg-[#facc159a]  backdrop-brightness-75 z-0"></div>

        {/* ✅ Content above the overlay */}
        <div className="relative z-10">
          <h2 className="text-[#fff] text-3xl sm:text-5xl font-semibold mb-8 sm:leading-relaxed">
            {childrenText}
          </h2>

          <button className="bg-white text-black font-light px-6 py-3 sm:px-14 sm:py-4 rounded-[8px] ">
          { childrenButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
