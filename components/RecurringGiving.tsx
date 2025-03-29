"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const benefits = [
  "Convenient automatic monthly giving",
  "Easy to start, change, or cancel anytime",
  "Help us plan and budget more effectively",
  "Receive annual giving statements",
  "Set up recurring giving in less than 2 minutes",
  "Choose your preferred payment method",
]

const frequencies = [
  { label: "Monthly", amount: "$50/month", selected: true },
  { label: "Quarterly", amount: "$150/quarter", selected: false },
  { label: "Annually", amount: "$600/year", selected: false },
]

export default function RecurringGiving() {
  const [selectedFrequency, setSelectedFrequency] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-24 px-8 bg-[#9B2B3A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="text-white">
              <h2 className="font-serif text-4xl font-normal mb-6">The Benefits of Recurring Giving</h2>
              <p className="text-xl text-white/90 mb-8">
                Join our faithful giving community by setting up a recurring donation. It's a convenient way to support
                our ministry consistently.
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.5 }}>
                      <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                    </motion.div>
                    <span className="text-white/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <AnimatedButton size="lg" className="bg-white text-[#9B2B3A] hover:bg-gray-100" hoverScale={1.05}>
                Set Up Recurring Gift
              </AnimatedButton>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <motion.div
                className="bg-white rounded-xl p-8 shadow-xl"
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  {frequencies.map((frequency, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                        selectedFrequency === index ? "bg-gray-50 border-[#9B2B3A]" : ""
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedFrequency(index)}
                    >
                      <div>
                        <p className="font-medium">{frequency.label}</p>
                        <p className="text-sm text-gray-600">{frequency.amount}</p>
                      </div>
                      <motion.div
                        className={`h-4 w-4 rounded-full border-2 ${
                          selectedFrequency === index ? "border-[#9B2B3A] bg-[#9B2B3A]/20" : "border-gray-300"
                        }`}
                        animate={selectedFrequency === index ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                  <div className="pt-6 border-t">
                    <AnimatedButton className="w-full bg-[#9B2B3A] text-white hover:bg-[#8a2533]">
                      Continue
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

