export default function GitSection() {
  return (
    <section className="py-16 sm:py-2 px-4 bg-white">
      <div className="max-w-3xl sm:py-20 py-10 rounded-[1vw] sm:px-12  mx-auto bg-[#fdca1410]">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl  font-bold text-[#201f1f] mb-4 sm:mb-6">
            Get In Touch With <span className="text-[#FDCB14]">Us</span>
          </h2>
          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
            For further, assistance, please get in touch with us. We welcome your interest and will provide you with
            answers for your success.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* First Row - Full Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Full name*</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
              />
            </div>
          </div>

          {/* Second Row - Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Email address</label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">Phone number</label>
              <div className="flex">
                <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] border-r-0">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Third Row - Message */}
          <div>
            <label className="block text-sm font-medium text-[#333333] mb-2">Message</label>
            <textarea
              rows="6"
              placeholder="Type here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400 resize-vertical"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#FDCB14] hover:bg-[#e6b512] text-black font-semibold py-4 px-24 rounded-lg transition-colors text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
