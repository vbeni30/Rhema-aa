"use client"

import { motion } from "framer-motion"
import { Calendar, Book, Users, Music, Clock, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ThreeDCard } from "@/components/ui/3d-card"
import { useState, useEffect } from "react"

const services = [
  {
    name: "Sunday Morning Service",
    time: "9:00 AM - 10:30 AM",
    description:
      "Our main worship service featuring contemporary and traditional worship, prayer, and biblical teaching.",
    features: ["Worship Team", "Children's Church", "Nursery Available", "Live Stream"],
    icon: Music,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Sunday Evening Service",
    time: "6:00 PM - 7:30 PM",
    description: "An intimate evening service focused on deeper biblical study and worship.",
    features: ["Bible Study", "Youth Group", "Prayer Time"],
    icon: Book,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Wednesday Bible Study",
    time: "7:00 PM - 8:30 PM",
    description: "Mid-week biblical teaching and small group discussions for spiritual growth.",
    features: ["Group Discussion", "Prayer Meeting", "Fellowship"],
    icon: Users,
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Friday Prayer Service",
    time: "6:30 PM - 8:00 PM",
    description: "Dedicated time for corporate prayer and intercession for our church and community.",
    features: ["Worship", "Intercession", "Testimonies"],
    icon: Calendar,
    color: "from-emerald-500 to-teal-600",
  },
]

export default function WeeklyServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      speed: number
    }>
  >([])

  // Generate particles
  useEffect(() => {
    if (typeof window !== "undefined") {
      const colors = ["#4688D9", "#9B2B3A", "#ffffff"]
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 1.5 + 0.5,
      }))
      setParticles(newParticles)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}

        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Weekly Services
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Join us throughout the week for worship, teaching, and fellowship.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <ThreeDCard className="bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border border-gray-700 transition-all hover:shadow-lg h-full">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-br ${service.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    animate={{
                      boxShadow:
                        hoveredService === index
                          ? [
                              "0 0 0px rgba(59, 130, 246, 0)",
                              "0 0 20px rgba(59, 130, 246, 0.5)",
                              "0 0 0px rgba(59, 130, 246, 0)",
                            ]
                          : "none",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="font-serif text-2xl font-semibold mb-2 text-white"
                      whileHover={{ color: "#4688D9" }}
                    >
                      {service.name}
                    </motion.h3>
                    <div className="flex items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {service.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Main Sanctuary
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${service.color} bg-opacity-10 text-white rounded-full text-sm`}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(70, 136, 217, 0.2)" }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

