import { useNavigate } from "react-router-dom";

export default function OurServices() {


  // Service data array
  const services = [
    {
      id: 1,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
    {
      id: 2,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
    {
      id: 3,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
    {
      id: 4,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
    {
      id: 5,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
    {
      id: 6,
      title: "Offer Letter Creator",
      description:
        "Get ready-to-use solutions like funnels, invoices, calendars, and offer letters—on-demand or on a subscription.",
      deliveryTime: "Delivered in 24–48 hrs",
      image: "https://ik.imagekit.io/bqzlidc77g/falverra-redesign/servivecardimg.jpg?updatedAt=1748859121293",
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#fffbf4]">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Our Services</h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Map through services array */}
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              deliveryTime={service.deliveryTime}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Service Card Component
function ServiceCard({ title, description, deliveryTime, image }) {
  
   const navigate = useNavigate();
   const handleClick = () => {
    navigate("/service-details"); 
  };
  return (
    <div onClick={handleClick} className="bg-[#fffbf4] rounded-2xl shadow-lg border border-gray-300 overflow-hidden cursor-pointer">
      {/* Card Image */}
      <div className="h-48 sm:h-40 bg-gray-100 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Card Content */}
      <div className="px-6 py-4">
        <h3 className="text-xl sm:text-xl font-medium text-black mb-1">{title}</h3>
        <p className="text-gray-600 sm:text-xs text-sm  mb-2 leading-loose">{description}</p>
        <div className="mb-2">
          <span className="text-gray-700 text-sm font-medium">Time: </span>
          <span className="text-black text-sm font-medium">{deliveryTime}</span>
        </div>
        <button className="w-full sm:w-auto bg-[#fbbf24] hover:bg-[#f59e0b] text-black text-sm font-normal py-2 px-6 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </div>
  )
}
