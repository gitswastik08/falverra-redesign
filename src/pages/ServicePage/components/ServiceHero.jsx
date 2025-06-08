export default function ServiceHero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] bg-[#fffbf4] flex items-center justify-center sm:px-4 sm:py-16  overflow-hidden">
      {/* Decorative Elements */}
      {/* Top left purple wavy line */}
      <div className="absolute top-6 left-4 sm:top-16 sm:left-16">
        <svg
          width="80"
          height="60"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[120px] sm:h-[80px]"
        >
          <path
            d="M10 40C30 20, 50 60, 70 40C90 20, 110 60, 110 40"
            stroke="#a78bfa"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Top right yellow wavy line */}
      <div className="absolute top-0 right-4 sm:top-32 sm:right-16">
        <svg
          width="100"
          height="70"
          viewBox="0 0 140 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[140px] sm:h-[100px]"
        >
          <path
            d="M10 50C30 30, 50 70, 70 50C90 30, 110 70, 130 50"
            stroke="#fbbf24"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Bottom left orange triangle - hidden on mobile */}
      <div className="absolute hidden sm:block bottom-32 left-32">
        <svg width="100" height="100" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L50 45H10L30 10Z" stroke="#f97316" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Bottom right purple triangle - hidden on mobile */}
      <div className="absolute hidden sm:block bottom-16 right-32">
        <svg width="100" height="100" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L50 45H10L30 10Z" stroke="#a78bfa" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto sm:mt-10 text-center space-y-6 sm:space-y-8">
        {/* Heading */}
        <div className="space-y-0 sm:space-y-2">
          <h1 className="text-3xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
            Explore Services Built For
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#fbbf24] leading-tight">
            Entrepreneurs
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal font-sans max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          Every Task You Don't Want To Do? We've Automated It. Choose What You Need, Pay Once, Or Unlock Everything With
          A Subscription.
        </p>

        {/* Search Interface */}
        <div className="max-w-xl mx-auto mt-8 sm:mt-12 px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row border border-[#00000063] rounded-[20px] overflow-hidden bg-white">
            {/* Category Input */}
            <div className="w-full sm:flex-1 border-b sm:border-b-0 sm:border-r border-[#00000063]">
              <input
                type="text"
                placeholder="Choose Category"
                className="h-12 sm:h-14 w-full text-base sm:text-lg bg-transparent px-4 sm:px-6 focus:outline-none"
              />
            </div>

            {/* Marketing Dropdown - Using HTML Select */}
             <div className="w-full sm:flex-1 border-b sm:border-b-0 sm:border-r border-[#00000063] relative">
              <select
                defaultValue="marketing"
                className="h-12 sm:h-14 w-full text-base sm:text-lg bg-transparent px-4 sm:px-6 focus:outline-none appearance-none"
                style={{ WebkitAppearance: "none", MozAppearance: "none" }}
              >
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="business">Business</option>
                <option value="finance">Finance</option>
              </select>
              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <i class="ri-arrow-down-s-line"></i>
              </div>
            </div>

            {/* Search Button */}
            <button className="h-12 sm:h-14 px-6 sm:px-12 text-base sm:text-lg font-semibold bg-[#fbbf24] hover:bg-[#f59e0b] text-black">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
