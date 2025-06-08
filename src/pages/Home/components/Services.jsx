import React from "react";

// Import images


const Services = () => {
  const services = [
    {
      title: "Social Media\nCalendar",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/icon1.png?updatedAt=1748846340665",
      bgColor: "bg-blue-50",
      textColor: "text-blue-900",
      hw: "sm:h-40 sm:w-40",
      cardhw: "sm:w-[450px] h-[280px]",
    },
    {
      title: "Offer Letter\nCreator",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/icon2.png?updatedAt=1748846340752",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
      hw: "sm:h-40 sm:w-40",
      cardhw: "sm:w-[450px] h-[280px]",
    },
    {
      title: "Business\nProblem Solver",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/icon3.png?updatedAt=1748846340992",
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      hw: " h-[22vh] w-[20vw] sm:h-96 sm:w-40",
      cardhw: "sm:w-[450px] h-[280px]",
    },
    {
      title: "Invoice\nGenerator",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/icon4.png?updatedAt=1748846341116",
      bgColor: "bg-red-50",
      textColor: "text-red-800",
      hw: "sm:h-40 sm:w-40",
      cardhw: "sm:w-[450px] h-[280px]",
    },
    {
      title: "Funnel\nBuilder",
      desc: "Get ready-to-use solutions like funnels.",
      btnText: "Try Now",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/icon5.png?updatedAt=1748846340863",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
      hw: "sm:h-40 sm:w-40 ",
      cardhw: "sm:w-[450px] sm:h-[280px] " ,
    },
  ];

  return (
    <section className="sm:py-20 py-20 px-4 sm:px-16">
      <h2 className="text-center text-5xl font-semibold mb-8 sm:mb-14 ">Our Services</h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:auto-rows-[280px] gap-4 place-items-center">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative w-full h-[23vh] ${service.cardhw} p-6 rounded-xl ${
              service.bgColor
            } flex flex-col justify-between ${
              idx === 2 ? " sm:row-span-2 sm:h-[550px] sm:justify-start sm:gap-4" : ""
            }`}
          >
            <div className="w-[60%]">
              <div
                className={` font-semibold text-xl sm:text-3xl whitespace-pre-line ${service.textColor}`}
              >
                {service.title}
              </div>
              <p className="text-sm sm:text-[1vw] font-medium font-sans text-[#000000a5] mt-1">
                {service.desc}
              </p>
            </div>

            {service.btnText && (
              <button className="mt-2 px-4 py-2 border border-yellow-400 text-yellow-500 text-sm sm:text-lg rounded w-fit hover:bg-yellow-400 hover:text-white transition">
                {service.btnText}
              </button>
            )}

            {service.image && (
              <img
                src={service.image}
                alt="icon"
                className={`absolute bottom-[-1vw] right-0  h-24 ${service.hw}  object-cover`}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
