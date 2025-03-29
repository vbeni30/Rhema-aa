"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { HelpCircle, MessageCircle } from "lucide-react"

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
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24 px-8 bg-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-[100px]"
          style={{ y, opacity }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        {/* Floating question marks */}
        {typeof window !== "undefined" &&
          Array.from({ length: 10 }).map((_, i) => {
            // Generate random values only once per element
            const xPos = typeof window !== "undefined" ? Math.random() * window.innerWidth : 0
            const yPos = typeof window !== "undefined" ? Math.random() * window.innerHeight : 0
            const rotation = Math.random() * 360
            const scale = 0.5 + Math.random() * 1
            const duration = 15 + Math.random() * 10
            const iconSize = 20 + Math.floor(Math.random() * 20)

            return (
              <motion.div
                key={i}
                className="absolute text-gray-600 opacity-5"
                initial={{
                  x: xPos,
                  y: yPos,
                  rotate: rotation,
                  scale: scale,
                }}
                animate={{
                  y: [yPos, yPos - 50, yPos],
                  rotate: [rotation, rotation + 360],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                  repeatType: "reverse",
                }}
              >
                <HelpCircle size={iconSize} />
              </motion.div>
            )
          })}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Frequently Asked Questions
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 mb-16">Find answers to common questions about giving to our church</p>
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
              <AccordionItem
                value={`item-${index}`}
                className="border border-gray-700 rounded-lg mb-4 overflow-hidden backdrop-blur-sm"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 transition-opacity duration-300 -z-10 ${
                    hoveredItem === index ? "opacity-100" : ""
                  }`}
                />

                <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-800/50 transition-colors text-white">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <motion.span
                      animate={{
                        color: hoveredItem === index ? "#a78bfa" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.question}
                    </motion.span>
                  </motion.span>
                </AccordionTrigger>

                <AnimatePresence>
                  {openItem === `item-${index}` && (
                    <AccordionContent className="px-6 py-4 bg-gray-800/30">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-300"
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
          <motion.div
            className="mt-12 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-3"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <MessageCircle className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-semibold text-white">Still have questions?</h3>
            </motion.div>
            <p className="text-gray-300 mb-4">
              Our finance team is ready to assist you with any additional questions about giving options
            </p>
            <motion.button
              className="text-blue-400 hover:text-blue-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

