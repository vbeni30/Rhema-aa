"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

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
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">
            <AnimatedGradientText>Frequently Asked Questions</AnimatedGradientText>
          </h2>
        </ScrollReveal>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem || undefined}
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-50 transition-colors">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {faq.question}
                  </motion.span>
                </AccordionTrigger>
                <AnimatePresence>
                  {openItem === `item-${index}` && (
                    <AccordionContent className="px-6 py-4">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  )}
                </AnimatePresence>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>

        <ScrollReveal delay={0.5}>
          <motion.div className="mt-12 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <p className="text-[#4688D9] font-medium cursor-pointer">Have more questions? Contact us</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

