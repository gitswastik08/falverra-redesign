export default function Address() {
  return (
    <section className="py-12 sm:py-36 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#333333] leading-tight">
                We're Here to <span className="text-[#FDCB14]">Help.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#666666] mt-3 sm:mt-4 leading-relaxed">
                Whether you're facing a roadblock or want to learn more, we're just a message away.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Address Section */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/address%20icon.png?updatedAt=1749130805320" alt="Location" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#333333] mb-1">Address</h3>
                <p className="text-base text-[#666666]">Bengaluru, Karnataka, INDIA</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Response Time Section */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/address%20icon.png?updatedAt=1749130805320" alt="Clock" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-[#333333] mb-1">Response time:</h3>
                <p className="text-base text-[#666666]">12–24 hours</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200" />

            {/* Contact Details & Email Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Details */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/call%20icon.png?updatedAt=1749130805449" alt="Phone" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#333333] mb-1">Contact Details</h3>
                  <p className="text-sm sm:text-base text-[#666666] mb-1">Booking Inquiries:</p>
                  <p className="text-sm sm:text-base text-[#666666]">+971 123 4567</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6  rounded-full flex items-center justify-center mt-1">
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/mail%20icon.png?updatedAt=1749130805387" alt="Email" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#333333] mb-1">Email Us</h3>
                  <p className="text-sm sm:text-base text-[#666666] mb-1">Drop us your query anytime:</p>
                  <p className="text-sm sm:text-base text-[#666666]">support@falverra.in</p>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex sm:items-center sm:flex-row  flex-col gap-2 sm:gap-6 py-6 ">
              <h3 className="text-2xl font-medium text-[#333333] ">Follow Us :</h3>
              <div className="flex items-center gap-4 ">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#e6b512] transition-colors"
                >
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Facebook.png?updatedAt=1749130805315" alt="Facebook" className="w-10 h-10" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#e6b512] transition-colors"
                >
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Instagram.png?updatedAt=1749130805391" alt="Instagram" className="w-10 h-10" />
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#e6b512] transition-colors"
                >
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Twitter.png?updatedAt=1749130805443" alt="Twitter" className="w-10 h-10" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10  rounded-full flex items-center justify-center "
                >
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Linkedin.png?updatedAt=1749130805363" alt="LinkedIn" className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="w-full h-full">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full">
              <img
                src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/map.png?updatedAt=1749130490853"
                alt="Location Map"
                className="w-full h-[400px] sm:h-[500px] lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
