import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What time are your Sunday services?",
    answer:
      "We have two Sunday services: 9:00 AM and 11:00 AM. Both services are identical in content and last approximately 90 minutes.",
  },
  {
    question: "Do you have programs for children?",
    answer:
      "Yes, we offer age-appropriate programs for children from nursery through high school during our Sunday services.",
  },
  {
    question: "How can I get involved in the church?",
    answer:
      "There are many ways to get involved! You can join a small group, volunteer for one of our ministries, or participate in our community outreach programs. Visit our Welcome Center after the service for more information.",
  },
  {
    question: "What do I need to do to become a member?",
    answer:
      "We offer a membership class every quarter that covers our church's beliefs, values, and structure. After completing the class, you can apply for membership if you feel led to do so.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

