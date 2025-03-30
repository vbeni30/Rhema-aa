"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  const [openItem, setOpenItem] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our church and services.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem || undefined}
          onValueChange={(value) => setOpenItem(value)}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-white/10 rounded-lg mb-4 overflow-hidden backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-white/5 transition-colors text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white/5">
                  <p className="text-gray-300">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-blue-400 hover:text-blue-300 cursor-pointer">Have more questions? Contact us</p>
        </motion.div>
      </div>
    </section>
  )
}

