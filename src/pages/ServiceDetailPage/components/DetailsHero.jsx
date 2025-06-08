"use client"

const DetailsHero = () => {
  return (
    <section className="w-full py-12 sm:py-36  px-4 sm:px-24  relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 ">
            {/* Yellow Squiggly Line Decoration */}
            <div className="absolute top-5 sm:top-[20vh]">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vector.png?updatedAt=1749302801432"
                alt="Decorative squiggly line"
                className="w-24 sm:w-28 lg:w-32 h-auto"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#333333] leading-tight whitespace-nowrap">
              Invoice Generator
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#666666] leading-relaxed max-w-lg">
              Professional invoices customized to your business brand. Delivered in minutes.
            </p>

            {/* Triangle Decoration */}
            <div className="absolute" style={{ top: "595px", left: "622.57px" }}>
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vectorrrr2.png?updatedAt=1749304199605"
                alt="Triangle decoration"
                className="w-16 sm:w-20 h-auto opacity-30"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end ">
            <div className="w-full max-w-sm h-auto sm:max-w-3xl  ">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/invoice-generator.jpg?updatedAt=1749302802988"
                alt="Invoice Generator 3D Illustration"
                className="w-full h-auto object-cover rounded-[32px]"
                style={{ aspectRatio: "594/490", }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsHero
