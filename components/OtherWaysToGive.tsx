"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gift, Landmark, Phone, Clock, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ThreeDCard } from "@/components/ui/3d-card"

const ways = [
  {
    title: "Mail a Check",
    description: "Send your donation to: 123 Faith Street, Heavenly City, HC 12345",
    icon: Gift,
    color: "from-pink-500 to-rose-500",
    details:
      "Make checks payable to 'Rhema Church'. Please include your name, address, and purpose of donation on the memo line for proper acknowledgment and tax receipts.",
  },
  {
    title: "Bank Transfer",
    description: "Set up a direct bank transfer for your convenience",
    icon: Landmark,
    color: "from-blue-500 to-indigo-500",
    details:
      "Contact your bank to set up recurring or one-time transfers. Use your name as the reference and notify our finance team to ensure proper allocation of your gift.",
  },
  {
    title: "Call to Give",
    description: "Call (555) 123-4567 to make a donation over the phone",
    icon: Phone,
    color: "from-emerald-500 to-teal-500",
    details:
      "Our finance team is available Monday through Friday, 9am to 5pm, to assist with phone donations. We accept all major credit cards and can set up recurring giving options.",
  },
  {
    title: "Visit Us",
    description: "Give in person during our service times",
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    details:
      "Donation boxes are available at all entrances during service times. Our welcome team can also assist you with electronic giving options at our welcome center.",
  },
]

export default function OtherWaysToGive() {
  const [selectedWay, setSelectedWay] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 px-8 bg-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #9B2B3A 0%, transparent 50%), radial-gradient(circle at 80% 70%, #4688D9 0%, transparent 50%)",
          }}
        />

        {/* Animated particles */}
        {typeof window !== "undefined" &&
          Array.from({ length: 20 }).map((_, i) => {
            // Generate random values only once per particle
            const width = Math.random() * 4 + 1
            const height = Math.random() * 4 + 1
            const left = `${Math.random() * 100}%`
            const top = `${Math.random() * 100}%`
            const duration = Math.random() * 10 + 10
            const delay = Math.random() * 5

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white opacity-10"
                style={{
                  width,
                  height,
                  left,
                  top,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay,
                }}
              />
            )
          })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Alternative Giving Methods
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Multiple convenient options to support our mission in ways that work for you
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <ThreeDCard
                className="bg-gray-800 backdrop-blur-lg rounded-xl p-8 border border-gray-700 h-full shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                glareOpacity={0.1}
                rotationIntensity={5}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <motion.div
                    className={`mb-6 p-4 rounded-full bg-gradient-to-r ${way.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    animate={{
                      boxShadow:
                        hoveredCard === index
                          ? ["0 0 0px rgba(79,70,229,0)", "0 0 20px rgba(79,70,229,0.5)", "0 0 0px rgba(79,70,229,0)"]
                          : "none",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <way.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  <motion.h3
                    className="font-serif text-xl font-semibold mb-4 text-white"
                    animate={{
                      textShadow: hoveredCard === index ? "0 0 8px rgba(255,255,255,0.5)" : "none",
                    }}
                  >
                    {way.title}
                  </motion.h3>

                  <p className="text-gray-300 mb-6">{way.description}</p>

                  <motion.button
                    className="mt-auto flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    onClick={() => setSelectedWay(index)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.button>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedWay !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWay(null)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl max-w-md w-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${ways[selectedWay].color}`}></div>

              <div className="p-6">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-3 rounded-full bg-gradient-to-r ${ways[selectedWay].color} mr-4`}
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {React.createElement(ways[selectedWay].icon, { className: "h-6 w-6 text-white" })}
                  </motion.div>

                  <h3 className="font-serif text-2xl font-semibold text-white">{ways[selectedWay].title}</h3>
                </div>

                <p className="text-gray-300 mb-8">{ways[selectedWay].details}</p>

                <div className="flex justify-end">
                  <motion.button
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${ways[selectedWay].color} text-white`}
                    onClick={() => setSelectedWay(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

