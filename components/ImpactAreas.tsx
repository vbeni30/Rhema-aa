"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Heart, Users, Globe } from "lucide-react"

const impactAreas = [
  {
    title: "Local Outreach",
    description: "Support our food bank, homeless ministry, and community programs",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    progress: 65,
    goal: "$25,000",
    raised: "$16,250",
    details:
      "Our local outreach programs provide food, clothing, and support services to those in need in our community. We partner with local shelters, schools, and organizations to identify and address the most pressing needs in our area.",
    icon: Heart,
    color: "from-pink-500 to-red-500",
    stats: [
      { label: "Families Helped", value: 120 },
      { label: "Meals Provided", value: 5600 },
      { label: "Volunteers", value: 48 },
    ],
  },
  {
    title: "Youth Ministry",
    description: "Help us nurture the next generation through programs and events",
    image:
      "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    progress: 42,
    goal: "$15,000",
    raised: "$6,300",
    details:
      "Our youth ministry provides a safe, engaging environment where young people can grow in their faith, develop leadership skills, and build lasting friendships. Your support helps fund retreats, mission trips, weekly activities, and mentoring programs.",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    stats: [
      { label: "Youth Engaged", value: 85 },
      { label: "Events Held", value: 24 },
      { label: "Mentors", value: 16 },
    ],
  },
  {
    title: "Building Fund",
    description: "Contribute to maintaining and improving our facilities",
    image:
      "https://images.unsplash.com/photo-1501183638272-442d85fb850a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    progress: 78,
    goal: "$50,000",
    raised: "$39,000",
    details:
      "Our building fund ensures that our facilities remain safe, accessible, and welcoming to all. Current projects include roof repairs, updating our HVAC system, improving accessibility features, and renovating our children's ministry spaces.",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    stats: [
      { label: "Projects Completed", value: 7 },
      { label: "Square Feet Renovated", value: 3200 },
      { label: "Energy Savings", value: "32%" },
    ],
  },
]

export default function ImpactAreas() {
  const [selectedArea, setSelectedArea] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [inViewStates, setInViewStates] = useState(impactAreas.map(() => false))

  // Custom counter hook state
  const [counters, setCounters] = useState(impactAreas.map(() => 0))

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set up intersection observer for counting animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index || "-1", 10)
            if (index !== -1 && !inViewStates[index]) {
              setInViewStates((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const cards = document.querySelectorAll(".impact-card")
    cards.forEach((card, index) => {
      card.dataset.index = String(index)
      observer.observe(card)
    })

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [inViewStates])

  // Custom counter hook
  const useCounter = (end: number, inView: boolean, index: number, duration = 2) => {
    useEffect(() => {
      if (!inView) return

      let startTime: number | null = null
      let animationFrame: number

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const currentCount = Math.floor(progress * end)

        setCounters((prevCounters) => {
          const newCounters = [...prevCounters]
          newCounters[index] = currentCount
          return newCounters
        })

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCount)
        } else {
          setCounters((prevCounters) => {
            const newCounters = [...prevCounters]
            newCounters[index] = end
            return newCounters
          })
        }
      }

      animationFrame = requestAnimationFrame(updateCount)
      return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, inView, index])

    return counters[index]
  }

  // Calculate parallax values based on scroll
  const calculateParallax = (base: number) => {
    return scrollY * base
  }

  return (
    <section ref={ref} className="py-24 px-8 bg-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-[100px]"
          style={{
            y: calculateParallax(-0.1),
            opacity: Math.max(0.1, 1 - scrollY / 1000),
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-[100px]"
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

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Your Impact Visualized
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Explore how your contributions create meaningful change across our key initiatives
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative impact-card"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br rounded-2xl -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  zIndex: -1,
                  background: `linear-gradient(135deg, ${area.color.split(" ")[0].replace("from-", "")} 0%, ${area.color.split(" ")[1].replace("to-", "")} 100%)`,
                  filter: "blur(8px)",
                }}
              />

              <motion.div className="bg-gray-800 backdrop-blur-lg rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-gray-700 h-full">
                <div className="relative h-48">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {/* Floating icon */}
                  <motion.div
                    className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${area.color} shadow-lg`}
                    animate={{
                      y: hoveredCard === index ? [0, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: hoveredCard === index ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }}
                  >
                    <area.icon className="h-5 w-5 text-white" />
                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.h3
                      className="font-serif text-xl font-semibold mb-2 text-white"
                      animate={{
                        textShadow: hoveredCard === index ? "0 0 8px rgba(255,255,255,0.5)" : "none",
                      }}
                    >
                      {area.title}
                    </motion.h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 mb-4">{area.description}</p>

                  {/* Stats with animated counters */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {area.stats.map((stat, statIndex) => {
                      const count = useCounter(
                        typeof stat.value === "number" ? stat.value : 0,
                        inViewStates[index],
                        index,
                      )
                      return (
                        <div key={statIndex} className="text-center">
                          <span
                            className={`block text-xl font-bold bg-gradient-to-r ${area.color} bg-clip-text text-transparent`}
                          >
                            {typeof stat.value === "number" ? count : stat.value}
                          </span>
                          <span className="text-xs text-gray-400">{stat.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Raised: {area.raised}</span>
                      <span className="text-gray-300">Goal: {area.goal}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${area.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <AnimatedButton
                      className={`flex-1 bg-gradient-to-r ${area.color} text-white hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]`}
                    >
                      Give Now
                    </AnimatedButton>
                    <AnimatedButton
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700/50"
                      onClick={() => setSelectedArea(index)}
                    >
                      Learn More
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Impact Area Details Modal */}
      <AnimatePresence>
        {selectedArea !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArea(null)}
          >
            <motion.div
              className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={impactAreas[selectedArea].image || "/placeholder.svg"}
                  alt={impactAreas[selectedArea].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <motion.div
                  className="absolute top-4 right-4 p-4 rounded-full bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(135deg, ${impactAreas[selectedArea].color.split(" ")[0].replace("from-", "")} 0%, ${impactAreas[selectedArea].color.split(" ")[1].replace("to-", "")} 100%)`,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {React.createElement(impactAreas[selectedArea].icon, { className: "h-6 w-6 text-white" })}
                </motion.div>

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl font-semibold text-white mb-2">
                    {impactAreas[selectedArea].title}
                  </h3>
                </div>

                <button
                  className="absolute top-4 left-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
                  onClick={() => setSelectedArea(null)}
                >
                  ✕
                </button>
              </div>

              <div className="p-8 text-gray-300">
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Raised: {impactAreas[selectedArea].raised}</span>
                    <span>Goal: {impactAreas[selectedArea].goal}</span>
                  </div>
                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${impactAreas[selectedArea].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${impactAreas[selectedArea].progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <p className="mb-6">{impactAreas[selectedArea].details}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {impactAreas[selectedArea].stats.map((stat, statIndex) => {
                    const count = useCounter(typeof stat.value === "number" ? stat.value : 0, true, selectedArea)
                    return (
                      <motion.div
                        key={statIndex}
                        className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                      >
                        <span
                          className={`block text-2xl font-bold bg-gradient-to-r ${impactAreas[selectedArea].color} bg-clip-text text-transparent`}
                        >
                          {typeof stat.value === "number" ? count : stat.value}
                        </span>
                        <span className="text-sm text-gray-400">{stat.label}</span>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="flex justify-end space-x-3">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                    onClick={() => setSelectedArea(null)}
                  >
                    Close
                  </Button>
                  <Button className={`bg-gradient-to-r ${impactAreas[selectedArea].color} hover:opacity-90 text-white`}>
                    Donate Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

