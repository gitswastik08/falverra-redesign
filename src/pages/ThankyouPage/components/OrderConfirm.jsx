import React from 'react'

const OrderConfirm = () => {
  return (
    <section className="py-12 sm:py-32 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <div className="space-y-7">
            
            <div className="mb-0">
              <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/righttt.png?updatedAt=1749208464740" alt="Success" className="w-12 h-12" />
            </div>

            {/* Thank You Message */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333]">Thank You,</h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDCB14]">Your Order Is Confirmed!</h1>
            </div>

            {/* Confirmation Message */}
            <p className="text-lg font-normal font-sans text-[#484848] leading-relaxed">
              We've Received Your Request. Our Team Is On It, And You'll Receive Your Deliverable Shortly
            </p>

            {/* Order Details */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Order code</span>
                <span className="text-[#333333] font-medium">#0123_45678</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Date</span>
                <span className="text-[#333333] font-medium">October 19, 2023</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Total</span>
                <span className="text-[#333333] font-medium">24561 PAK</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Payment method</span>
                <span className="text-[#333333] font-medium">Credit Card</span>
              </div>
            </div>

            {/* Email Notification */}
            <p className="text-sm font-normal font-sans text-[#484848] pt-8">
              We've sent a copy to your email at: <span className="font-medium">example@gmail.com</span>
            </p>
          </div>

          {/* Right Side - Invoice Summary */}
          <div className="bg-[#FCB12C0D] border rounded-lg p-8 h-full min-h-[500px] flex flex-col">
            {/* Invoice Header */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#333333]">
                Invoice Generator <span className="text-[#FDCB14]">(Monthly)</span>
              </h2>
            </div>

            {/* Order Info */}
            <div className="flex justify-between sm:mb-12">
              <div>
                <p className="text-[#787777] mb-3">Date</p>
                <p className="text-[#333333] font-medium">24 May 2025</p>
              </div>
              <div>
                <p className="text-[#787777] mb-3">Order ID</p>
                <p className="text-[#333333] font-medium">#654141646</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mb-12" />

            {/* Pricing Details */}
            <div className="space-y-6 mb-12 flex-grow">
              <div className="flex justify-between">
                <span className="text-[#333333]">Base Price</span>
                <span className="text-[#333333] font-medium">₹799</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#333333]">Total Savings</span>
                <span className="text-[#333333] font-medium">-₹299</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#333333]">Tax</span>
                <span className="text-[#333333] font-medium">₹152</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 mb-8" />

            {/* Total Amount */}
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-[#333333]">Total Amount</span>
              <span className="text-[#333333]">₹299</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderConfirm