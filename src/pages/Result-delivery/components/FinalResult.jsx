import React from 'react'

const FinalResult = () => {
   return (
    <div className="w-full max-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* PDF Viewer Image */}
        <div className="bg-white rounded-lg overflow-hidden mb-6">
          <img
            src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/final.png?updatedAt=1749223905065"
            alt="PDF Viewer Interface"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
          <button className="bg-[#FDCB14] hover:bg-[#e6b912] text-black font-medium py-3 px-6 rounded-md min-w-[200px]">
            Download File
          </button>
          <button className="border-2 border-gray-600 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-md min-w-[200px]">
            Request Revision
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinalResult