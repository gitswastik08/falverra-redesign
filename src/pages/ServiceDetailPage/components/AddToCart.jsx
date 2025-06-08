"use client"

const AddToCart = () => {
  return (
    <section className="w-full  pb-16 sm:py-20 px-4 sm:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex sm:flex-row items-center justify-center gap-8">
          {/* Left Content */}
          <div className="space-y-6 px-20 py-5 sm:space-y-9">
            {/* Buy Now Heading */}
            <h2 className="text-5xl whitespace-nowrap sm:whitespace-normal sm:text-5xl font-bold text-[#333333] leading-tight">Buy Now</h2>

            {/* Delivery Info */}
            <p className="text-base sm:text-lg text-[#666666]">
              Delivery: <span className="font-medium text-[#333333]">In 20 hrs</span>
            </p>

            {/* Pricing */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-base sm:text-lg text-[#666666]">One-time:</span>
              <span className="text-base sm:text-lg text-[#999999] line-through">₹120</span>
              <span className="text-3xl sm:text-4xl font-bold text-[#333333]">₹99</span>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4 sm:pt-6">
              <button className="bg-[#FDCB14] hover:bg-[#E6B612] text-black font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center sm:justify-end">
            <div className="w-full max-w-sm sm:max-w-xl">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/invoice2.jpg?updatedAt=1749302803579"
                alt="Invoice 3D Illustration"
                className="w-full h-auto object-contain"
                style={{ aspectRatio: "400/300" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddToCart
