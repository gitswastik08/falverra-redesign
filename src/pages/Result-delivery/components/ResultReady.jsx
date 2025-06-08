import React from 'react'

const ResultReady = () => {
 return (
    <section className="py-12 sm:py-24 px-4   ">
      <div className="max-w-6xl sm:mt-14 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-7">
            {/* Thank You Message - Updated heading based on image */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333]">
                Your Result <span className="text-[#FDCB14]">Is Ready!</span>
              </h1>
            </div>

            {/* Updated Confirmation Message */}
            <p className="text-lg font-normal font-sans text-[#484848] leading-relaxed">
              Here's Your Final Output. You Can View, Download, Or Request A Revision (If Applicable).
            </p>

            {/* Order Details - Updated with new fields from image */}
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Service Name</span>
                <span className="text-[#333333] font-medium">#Social Media Calendar - May</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Order ID</span>
                <span className="text-[#333333] font-medium">#0123_45678</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Date Completed</span>
                <span className="text-[#333333] font-medium">October 19, 2023</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Turnaround Time</span>
                <span className="text-[#333333] font-medium">18 hrs</span>
              </div>
              <div className="flex items-start gap-x-16 sm:gap-x-24">
                <span className="text-[#787777] w-32">Status</span>
                <span className="text-[#333333] font-medium ">Delivered</span>
              </div>
            </div>
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

export default ResultReady