

import { Star } from "lucide-react"

const Rating = () => {
  return (
    <div className="w-full max-h-screen flex items-center justify-center p-4 ">
      <div className="bg-[#FFFBF4] rounded-lg  mt-12 sm:mt-0 sm:p-16 lg:p-20 sm:max-w-4xl  w-full text-center ">
        {/* Main Heading */}
        <h1 className="text-3xl  sm:text-4xl  font-bold text-[#424040] mb-6 sm:whitespace-nowrap">
          How Satisfied Are You With This Task?
        </h1>

        {/* Subtext */}
        <p className="text-lg  font-sans text-[#464343] mb-8">Give a Ratings</p>

        {/* Star Rating */}
        <div className="flex justify-center gap-2 mb-10">
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <Star key={starIndex} size={40} className="fill-[#FFA500] text-[#FFA500]" />
          ))}
        </div>

        {/* Submit Button */}
        <button className="bg-[#FDCB14] text-black font-medium py-4 px-8 rounded-lg text-lg">Submit Feedback</button>
      </div>
    </div>
  )
}

export default Rating
