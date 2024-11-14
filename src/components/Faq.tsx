"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does SwissahEcom protect my payment?",
    answer: "SwissahEcom uses advanced encryption and secure payment gateways to protect your payment information. All transactions are processed through trusted third-party providers, ensuring your financial data remains confidential and secure."
  },
  {
    question: "How fast do sellers get paid?",
    answer: "Sellers typically receive their payments within 3-5 business days after the order is successfully delivered and the buyer confirms receipt. This timeframe may vary depending on the seller's chosen payout method and banking institution."
  },
  {
    question: "Can I track my order after making a purchase?",
    answer: "Yes, you can track your order after making a purchase. Once your order is shipped, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package's progress in real-time."
  },
  {
    question: "Can sellers choose their delivery agents?",
    answer: "Sellers have the option to choose from a list of approved delivery agents partnered with SwissahEcom. This allows sellers to select the most suitable delivery service based on their location, product type, and customer preferences."
  },
  {
    question: "How do logistics companies get paid?",
    answer: "Logistics companies are paid directly by SwissahEcom for their services. The shipping cost is typically included in the total order amount paid by the buyer. SwissahEcom then settles the payment with the logistics companies based on pre-agreed terms and rates."
  }
]

export default function Faq() {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12">
        Have any questions?
        <br />
        Read popular answers below
      </h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems} className="w-full mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
            <AccordionTrigger className="flex justify-between items-center w-full text-left py-4 px-2 hover:bg-gray-50 transition-colors duration-200">
              <span className="text-lg font-semibold">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-2 py-4 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}