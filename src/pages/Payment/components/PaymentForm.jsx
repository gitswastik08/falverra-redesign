export default function PaymentForm() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Payment Form */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-medium text-[#333333]">Contact Information</h2>
                <div className="text-lg text-[#373636]">
                  Have an account?{" "}
                  <a href="#" className="text-[#FDCB14] hover:underline">
                    Log In
                  </a>
                </div>
              </div>

              {/* Line under Contact Information heading */}
              <hr className="border-gray-300 mb-6" />

              <div className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#8f8d8d] mb-1">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333]">
                      <option>First Name</option>
                    </select>
                  </div>
                  <div>
                   <label className="block opacity-0 text-sm font-medium text-[#8f8d8d] mb-1">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                  />
                </div>

                {/* GSTN */}
                <div>
                  <input
                    type="text"
                    placeholder="GSTN"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-[#333333] mb-4">Payment Method</h2>

              {/* Line under Payment Method heading */}
              <hr className="border-gray-300 mb-6" />

              <p className="text-[#666666] mb-6">Choose a payment methods</p>

              {/* Credit Card Option */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    defaultChecked
                    className="text-[#FDCB14] focus:ring-[#FDCB14]"
                  />
                  <span className="ml-3 text-[#333333] font-medium">Credit Card</span>
                </label>
              </div>

              {/* Credit Card Form */}
              <div className="space-y-4">
                {/* Name on Card */}
                <div>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                  />
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-1">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                  />
                </div>

                {/* Exp Month, Year & Security Code */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-1">
                      Exp. Month<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#989898]">
                      <option>02</option>
                      <option>01</option>
                      <option>03</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-1">
                      Exp. Year<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#989898]">
                      <option>25</option>
                      <option>26</option>
                      <option>27</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-1">
                      Security Code<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Icons */}
              <div className="flex items-center sm:w-full  gap-8 mt-6">
                <label className="flex items-center">
                  <input type="radio" name="payment" value="paypal" className="text-[#FDCB14] focus:ring-[#FDCB14]" />
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/paypal.png?updatedAt=1749199948260" alt="PayPal" className="ml-2 h-12 w-10 object-contain" />
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="gpay" className="text-[#FDCB14] focus:ring-[#FDCB14]" />
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Google%20pay.png?updatedAt=1749199948196" alt="Google Pay" className="ml-2 h-12w-12 object-contain" />
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="mastercard"
                    className="text-[#FDCB14] focus:ring-[#FDCB14]"
                  />
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Mastercard.png?updatedAt=1749199948220" alt="Mastercard" className="ml-2 h-12w-12 object-contain" />
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" value="stripe" className="text-[#FDCB14] focus:ring-[#FDCB14]" />
                  <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Stripe.png?updatedAt=1749199948247" alt="Stripe" className="ml-2 h-12w-12 object-contain" />
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Invoice Summary */}
          <div className="bg-[#FCB12C0D] h-fit rounded-lg border border-gray-200 p-6 sm:p-8">
            {/* Invoice Generator Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-[#333333]">Invoice Generator</h2>
              <a href="#" className="text-[#333333] hover:text-[#FDCB14] font-medium">
                Edit
              </a>
            </div>

            {/* Plan */}
            <div className="mb-6">
              <span className="text-[#666666]">Plan: </span>
              <span className="text-[#FDCB14] font-medium">Monthly</span>
            </div>

            {/* Pricing Details */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#666666]">Base Price</span>
                <span className="text-[#333333] font-medium">₹799</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Total Savings</span>
                <span className="text-[#333333] font-medium">-₹299</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666666]">Tax</span>
                <span className="text-[#333333] font-medium">₹152</span>
              </div>
            </div>
 <hr className="border-gray-300 mb-6" />
            {/* Coupon Code */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#333333] mb-2">Coupon Code</label>
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FDCB14] focus:border-transparent bg-white text-[#333333] placeholder-gray-400"
              />
            </div>

            {/* Total Amount */}
            <div className="flex justify-between items-center text-xl font-font-medium  mb-6 pt-4 border-t border-gray-200">
              <span className="text-[#333333]">Total Amount</span>
              <span className="text-[#333333]">₹299</span>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-[#FDCB14] hover:bg-[#e6b512] text-black font-semibold py-4 px-6 rounded-lg transition-colors text-lg mb-4">
              Pay ₹299 & Continue
            </button>

            {/* Security Info */}
            <div className="text-center">
              <p className="text-sm text-[#666666] mb-3">
                Secure Payments • No Hidden Charges • Cancel Anytime •
                <a href="#" className="text-[#FDCB14] hover:underline ml-1">
                  Need help?
                </a>
              </p>

              {/* Payment Logos */}
              <div className="flex items-center justify-center gap-3">
                <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/paypal2.png?updatedAt=1749199948314" alt="PayPal" className="h-6 w-12 object-contain" />
                <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/visa.png?updatedAt=1749199948278" alt="Visa" className="h-6 w-12 object-contain" />
                <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/mastercard2.png?updatedAt=1749199948275" alt="Mastercard" className="h-6 w-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
