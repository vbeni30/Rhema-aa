"use client"

import { motion } from "framer-motion"
import { Calendar, Book, Users, Music } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { useState, useEffect } from "react"

const services = [
  {
    icon: Calendar,
    title: "Weekly Services",
    description: "Join us every Sunday for worship and fellowship.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Book,
    title: "Bible Study",
    description: "Deepen your understanding of scripture through our study groups.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Serve others and make a difference in our local community.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Music,
    title: "Worship Ministry",
    description: "Use your musical talents to glorify God in our worship team.",
    color: "from-emerald-500 to-teal-600",
  },
]

export default function OurServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
    }>
  >([])

  // Generate particles for background
  useEffect(() => {
    if (typeof window !== "undefined") {
      const newParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
      }))
      setParticles(newParticles)
    }
  }, [])

  return (
    <section className="py-32 px-8 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full opacity-10 blur-[100px]"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 blur-[100px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
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
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
      </div>

      <ParallaxSection speed={0.1} className="relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-6 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Our Services
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Join us in worship and fellowship as we grow together in faith and community
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.15} distance={30}>
              <AnimatedCard
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-lg border border-gray-700 text-center h-full"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className={`relative mx-auto mb-6 w-20 h-20 flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color}`}
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
                    transition={{ duration: 2, repeat: hoveredService === index ? Number.POSITIVE_INFINITY : 0 }}
                  />
                  <service.icon className="h-10 w-10 text-white relative z-10" />
                </motion.div>

                <motion.h3 className="font-serif text-xl font-normal mb-4 text-white" whileHover={{ color: "#4688D9" }}>
                  {service.title}
                </motion.h3>

                <p className="text-gray-300">{service.description}</p>

                <motion.button
                  className="mt-6 text-blue-400 text-sm font-medium"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More →
                </motion.button>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </ParallaxSection>
    </section>
  )
}

