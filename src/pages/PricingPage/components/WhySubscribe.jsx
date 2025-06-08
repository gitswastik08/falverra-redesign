export default function WhySubscribe() {
  const benefits = [
    "Unlimited Value: Get 10x the value at 1/10th the cost of hiring.",
    "Priority Delivery",
    "Easy Dashboard Access",
    "Instant Requests, Reusable Services",
    "Future-Ready with API tools and integrations",
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white relative ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col-reverse  lg:flex-row items-center gap-12 lg:gap-12  ">
          {/* Left Image */}
          <div className="items-center justify-center ">
            {/* Purple decorative element */}
            <div className="absolute sm:top-16 left-1 top-[60vh] w-28 sm:w-36 sm:left-28 z-10">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vectorrrrr.png?updatedAt=1749121339381"
                alt="vector"
                className=""
              />
            </div>

            <div className="bg-[#eeeeee] sm:w-[35vw] sm:h-[35vw] rounded-3xl overflow-hidden flex items-center justify-center relative">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/171d6a6478fafc1d235d1b2146e3ee35f8e73c8c.png?updatedAt=1749121004288"
                alt="Woman with phone"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-6xl font-bold text-[#1e1d1d] mb-8 sm:font-semibold sm:mb-12">
              Why Subscribe?
            </h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/badge-check%201.png?updatedAt=1749116427026" alt="icon" />
                  <p className="text-lg text-[#302f2f] leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
