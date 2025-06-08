import React from 'react'

const CtaSection = () => {
   return (
    <section className="py-12 sm:py-16 px-4 sm:mx-20 sm:my-10 rounded-2xl bg-[#f1f1f6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Subscribe */}
          <div className="bg-[#ffffff] rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-[3vw] font-bold text-[#333333] mb-8 leading-[1.2]">
              Want To Access More
              <br />
              Tools?
            </h2>
            <button className="bg-[#FDCB14] hover:bg-[#FCB12C] text-[#333333] font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200">
              Subscribe Now
            </button>
          </div>

          {/* Right Card - Explore Services */}
          <div className="bg-[#ffffff] rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl sm:text-[3vw] font-bold text-[#333333] mb-8 leading-[1.2]">
              Looking For Other
              <br />
              Services?
            </h2>
            <button className="bg-[#FDCB14] hover:bg-[#FCB12C] text-[#333333] font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-200">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection