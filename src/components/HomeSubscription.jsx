import Button from "./Button";


export default function HomeSubscription() {
  return (
    <div className="min-h-screen bg-gray-50 px-14 hidden sm:block py-14">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-12 sm:py-10 gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Start Saving And Focus On Growing Your Business
          </h1>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black border-none font-medium px-6 sm:px-8 py-4 rounded-lg whitespace-nowrap">
            See Plans
          </Button>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-gray-200">
            <div className="p-6 sm:p-10 font-semibold text-gray-500 text-lg sm:text-2xl border-b sm:border-b-0 sm:border-r border-gray-200">
              Features
            </div>
            <div className="p-6 sm:p-10 font-semibold text-gray-700 text-lg sm:text-2xl text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              Subscription
            </div>
            <div className="p-6 sm:p-10 font-semibold text-gray-700 text-lg sm:text-2xl text-center">
              One-Time Comparison
            </div>
          </div>

          {/* Access to all tools */}
          <div className="grid text-2xl grid-cols-1 sm:grid-cols-3 border-b border-gray-200">
            <div className="p-6 sm:p-10 text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-200">
              Access to all tools
            </div>
            <div className="p-6 sm:p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-red-600 font-medium">Not Available</span>
            </div>
            <div className="p-6 sm:p-10 text-center">
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>

          {/* Unlimited tasks */}
          <div className="grid grid-cols-1 text-2xl sm:grid-cols-3 border-b border-gray-200">
            <div className="p-6 sm:p-10 text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-200">
              Unlimited tasks
            </div>
            <div className="p-6 sm:p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-red-600 font-medium">Not Available</span>
            </div>
            <div className="p-6 sm:p-10 text-center">
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>

          {/* Priority delivery */}
          <div className="grid grid-cols-1 text-2xl sm:grid-cols-3 border-b border-gray-200">
            <div className="p-6 sm:p-10 text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-200">
              Priority delivery
            </div>
            <div className="p-6 sm:p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-red-600 font-medium">No</span>
            </div>
            <div className="p-6 sm:p-10 text-center">
              <span className="text-green-600 font-medium">Yes</span>
            </div>
          </div>

          {/* Support */}
          <div className="grid grid-cols-1 text-2xl sm:grid-cols-3 border-b border-gray-200">
            <div className="p-6 sm:p-10 text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-200">
              Support
            </div>
            <div className="p-6 sm:p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-red-600 font-medium">Not Available</span>
            </div>
            <div className="p-6 sm:p-10 text-center">
              <span className="text-green-600 font-medium">Available</span>
            </div>
          </div>

          {/* Cost comparison */}
          <div className="grid grid-cols-1 text-2xl sm:grid-cols-3">
            <div className="p-6 sm:p-10 text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-200">
              Cost comparison
            </div>
            <div className="p-6 sm:p-10 text-center border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-gray-700 font-medium text-lg">₹3999/month</span>
            </div>
            <div className="p-6 sm:p-10 text-center">
              <span className="text-green-600 font-medium text-xl sm:text-2xl">₹14,999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
