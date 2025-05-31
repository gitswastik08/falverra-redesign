import React from "react";

const feedbacks = [
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
  {
    name: "John Carter",
    role: "CEO at Rento",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    rating: 4.5,
    text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
  },
];

const Feedback = () => {
  return (
    <section className="relative  sm:w-full bg-[#F9A826] sm:py-20 py-16  text-white overflow-hidden">
      {/* Background lines  */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        <div
          className="absolute top-0 bottom-0 w-px bg-white/30"
          style={{ left: "20%" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px bg-white/30"
          style={{ left: "40%" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px bg-white/30"
          style={{ left: "60%" }}
        />
        <div
          className="absolute top-0 bottom-0 w-px bg-white/30"
          style={{ left: "80%" }}
        />

        {/* Horizontal lines */}
        <div className="absolute left-0 right-0 top-1/4 h-px bg-white/30" />
        <div className="absolute left-0 right-0 top-3/4 h-px bg-white/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-lg font-normal mb-2">-Testimonials-</p>
        <h2 className="text-3xl sm:text-6xl font-semibold mb-12">
          What our customers are <br className="hidden sm:block" />
          saying about us
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {feedbacks.map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 px-6 py-8 rounded-[14px] shadow-md w-full sm:w-1/3"
            >
              <div className="flex mb-4 text-yellow-400 text-2xl">
                <h2>★★★★★</h2>
              </div>
              <p className="text-base text-[#000000a4] text-start mb-6">{t.text}</p>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:flex justify-center gap-14 hidden  mt-10">
          <button className="w-12 h-12 bg-white text-black rounded-full shadow hover:bg-orange-100">
            <i class= "ri-arrow-left-s-line text-3xl font-thin"></i>
          </button>
          <button className="w-12 h-12 bg-white text-black rounded-full shadow hover:bg-orange-100">
            <i class="ri-arrow-right-s-line text-3xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
