export default function PaymentHero() {
  return (
    <section className="py-16 sm:py-5 sm:h-[50vh] h-[40vh] flex items-end px-4  ">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#161616] leading-tight">
            Complete Your
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDCB14] leading-tight">
            Purchase
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#464343] font-thin max-w-2xl mx-auto leading-relaxed">
          You're One Step Away From Unlocking Your Business Solution
        </p>
      </div>
    </section>
  )
}
