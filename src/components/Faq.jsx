import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What happens if I don't cancel?",
      answer:
        "Your subscription will continue automatically and you'll be charged for the next billing period according to your selected plan.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Are services reusable?",
      answer:
        "Yes, once you purchase a service, you can reuse the templates and automation tools multiple times without additional charges.",
    },
    {
      question: "Is there a free trial or refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with our services. No questions asked.",
    },
  ]
 return (
    <section className="py-3 sm:py-20 px-4  ">
      <div className="sm:max-w-7xl mx-auto ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left text-[#333333] mb-12 sm:mb-16">
          Frequently Asked Question
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-light text-[#333333] text-base sm:text-lg pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 sm:pb-5">
                  <p className="text-[#666666] leading-relaxed text-base sm:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq