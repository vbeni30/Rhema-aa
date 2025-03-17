import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes, all donations to our church are tax-deductible. You will receive a giving statement at the end of the year for your tax records.",
  },
  {
    question: "Can I set up recurring donations?",
    answer:
      "Yes, you can easily set up recurring donations on a weekly, monthly, or custom schedule through our online giving platform.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, ACH bank transfers, and digital payment methods. You can also give by check or cash during services.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Your donations support our ministry operations, community outreach programs, missions, and facility maintenance. We maintain full financial transparency.",
  },
  {
    question: "Is online giving secure?",
    answer:
      "Yes, we use industry-standard encryption and secure payment processing. Your financial information is never stored on our servers.",
  },
  {
    question: "How do I cancel or modify my recurring donation?",
    answer:
      "You can easily manage your recurring donations through your online giving account or by contacting our finance office.",
  },
]

export default function GivingFAQ() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about giving to our church.</p>
        </div>

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

