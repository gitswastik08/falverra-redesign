import Button from "../../../components/Button";
export default function PlanChart() {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₹99/mp",
      services: "Limited (5 credits)",
      delivery: "48 hrs",
      dashboard: "Yes",
      support: "Email Only",
      revisions: "1",
      branding: "No",
      api: "No",
      cancel: "Yes",
      popular: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: "₹299/mp",
      services: "All Services",
      delivery: "24 hrs",
      dashboard: "Yes",
      support: "Email + Chat",
      revisions: "2",
      branding: "Yes",
      api: "No",
      cancel: "Yes",
      popular: true,
    },
    {
      id: "business",
      name: "Business",
      price: "₹799/mp",
      services: "All Services + Custom API Tasks",
      delivery: "Priority (Same-day*)",
      dashboard: "Yes",
      support: "Personal Support Rep",
      revisions: "Unlimited",
      branding: "Yes",
      api: "Yes",
      cancel: "Yes",
      popular: false,
    },
  ]

  const features = [
    { key: "price", label: "Price", type: "price" },
    { key: "services", label: "Services Access", type: "text" },
    { key: "delivery", label: "Delivery Time", type: "text" },
    { key: "dashboard", label: "Dashboard Access", type: "text" },
    { key: "support", label: "Customer Support", type: "text" },
    { key: "revisions", label: "Revisions", type: "text" },
    { key: "branding", label: "Branding Support", type: "text" },
    { key: "api", label: "API Access (Future)", type: "text" },
    { key: "cancel", label: "Cancel Anytime", type: "text" },
  ]

  return (
    <section className="py-8 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000d2] mb-6 sm:mb-8 md:mb-12 px-4">
            Flexible Pricing Plans To Suit Your Needs
          </h2>

          {/* Billing Toggle */}
          <div className="flex justify-center">
            <div className="flex bg-[#f5f4f1] rounded-xl p-[4px] border border-[#fdca14cf]">
              <button className="bg-[#FDCB14] text-black px-4 sm:px-9 py-2 sm:py-2 rounded-lg font-light text-lg">
                Monthly
              </button>
              <button className="text-gray-600 px-4 sm:px-9 py-2 sm:py-2 rounded-lg font-light text-lg hover:text-black">
                Quarterly
              </button>
              <button className="text-gray-600 px-4 sm:px-9 py-2 sm:py-2 rounded-lg font-light text-lg hover:text-black">
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 relative border border-gray-200 ${
                plan.popular ? "bg-[#FDCA1533] border-2 border-[#FDCB14]" : "bg-[#f5f4f1]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FDCB14] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-[#333333] mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-[#333333]">{plan.price}</p>
              </div>
              <div className="space-y-3 mb-6">
                {features.slice(1).map((feature) => (
                  <div key={feature.key} className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="font-semibold text-[#333333]">{feature.label}:</span>
                    <span className="text-[#666666]">{plan[feature.key]}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#FDCB14] hover:bg-[#e6b512] text-black font-semibold py-3 px-8 rounded-lg transition-colors">
                Start Now
              </button>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block rounded-3xl overflow-hidden border border-gray-200">
          {/* Header Row */}
          <div className="grid grid-cols-4">
            <div className="p-4 md:p-7 font-bold text-[#333333] text-base md:text-lg bg-[#FDCA1533] border border-gray-200">
              Plans
            </div>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 md:p-7 text-center font-bold text-[#333333] text-base md:text-lg border border-gray-200 relative ${
                  plan.popular ? "bg-[#FDCA1533]" : "bg-[#FDCA1533]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 left-0 right-0 h-10 w-full flex items-center justify-center rounded-b-[80vw] ">
                   <img src="https://ik.imagekit.io/bqzlidc77g/falverra-redesign/Vector%2015.png?updatedAt=1749115369969" alt="" />
                    <span className="absolute z-10 text-white text-xs md:text-sm font-light">Most Popular</span>
                  </div>    
                )}
                <span className={plan.popular ? "relative z-20" : ""}>{plan.name}</span>
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {features.map((feature) => (
            <div key={feature.key} className="grid grid-cols-4">
              <div className="p-4 md:p-7 font-semibold text-[#333333] text-sm md:text-base border border-gray-200">
                {feature.label}
              </div>
              {plans.map((plan) => (
                <div
                  key={`${feature.key}-${plan.id}`}
                  className={`p-4 md:p-7 text-center border border-gray-200 text-sm md:text-base ${
                    plan.popular ? "bg-[#FDCA1533]" : ""
                  } ${feature.type === "price" ? "font-bold text-[#333333]" : "text-[#666666]"}`}
                >
                  {plan[feature.key]}
                </div>
              ))}
            </div>
          ))}

          {/* Buttons Row */}
          <div className="grid grid-cols-4">
            <div className="p-4 md:p-7 border border-gray-200"></div>
            {plans.map((plan) => (
              <div
                key={`button-${plan.id}`}
                className={`p-4 md:p-4 text-center border border-gray-200 ${plan.popular ? "bg-[#FDCA1533]" : ""}`}
              >
                <button className="bg-[#FDCB14] hover:bg-[#e6b512] text-black font-medium py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base">
                  Start Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
