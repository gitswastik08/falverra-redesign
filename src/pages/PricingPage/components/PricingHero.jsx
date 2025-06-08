import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <section className="bg-[#FDCB14] h-[60vh] flex items-center justify-center rounded-b-[40px]">
      {/* Hero Content */}
      <div className="px-4 sm:px-8 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
            Simple Plans.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
            Unlimited Possibilities.
          </h1>
          <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto leading-relaxed">
            Access All Business Services, Unlimited Tools, And Premium Support With One Small Subscription.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default PricingPage