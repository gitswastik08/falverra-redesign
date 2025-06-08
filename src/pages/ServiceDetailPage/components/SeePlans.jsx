"use client"

const SeePlans = () => {
  return (
    <section className="w-full py-12 sm:py-10 px-4 sm:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-medium text-[#333333] leading-relaxed">
              Build Optimized Landing Pages In Minutes
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-base text-[#313030] leading-relaxed max-w-lg">
              Save time with elegant pre-made templates and see the difference a great layout can make to your audience.
            </p>

            {/* See Plans Button */}
            <div className="pt-4 sm:pt-6">
              <button className="bg-[#FDCB14] hover:bg-[#E6B612] text-black font-medium px-8 sm:px-10 py-3 sm:py-3 rounded-lg text-base sm:text-lg transition-colors duration-200">
                See Plans
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center sm:justify-end">
            <div className="w-full  sm:max-w-full relative">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/video.jpg?updatedAt=1749302803760"
                alt="Build Optimized Landing Pages"
                className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl"
                style={{ aspectRatio: "608/344" }}
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full p-3 sm:p-4 shadow-lg">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-[#FDCB14] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeePlans
