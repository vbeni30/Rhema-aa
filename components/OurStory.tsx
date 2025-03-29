"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

const timelineEvents = [
  { year: 1950, event: "Rhema Church founded" },
  { year: 1965, event: "New sanctuary built" },
  { year: 1980, event: "Community outreach program launched" },
  { year: 2000, event: "50th anniversary celebration" },
  { year: 2020, event: "Virtual services introduced" },
]

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
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

  // Handle scroll for timeline animation
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const { top, height } = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate scroll progress (0 to 1)
      const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Calculate timeline height based on scroll progress
  const lineHeight = `${scrollProgress * 100}%`

  return (
    <section ref={ref} className="py-24 px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
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
              <pattern id="story-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-16 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Our Story
            </AnimatedGradientText>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 1950, Rhema Church began as a small gathering of believers committed to sharing God's love
                with our community. Over the decades, we've grown in both size and impact, always staying true to our
                core mission of spreading the Gospel and serving others.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Through the years, we've weathered challenges and celebrated countless blessings, witnessing God's
                faithfulness at every turn. Our church has been a beacon of hope, a place of refuge, and a center for
                spiritual growth for generations of families.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full shadow-[0_0_15px_rgba(66,153,225,0.5)]">
                Learn More About Our History
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600"
                alt="Historic photo of Gospel Church"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-lg"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-lg"></div>
            </motion.div>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-center font-serif text-3xl font-normal mb-12 text-white">Our Timeline</h3>
          </ScrollReveal>

          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-indigo-600"
              style={{ height: lineHeight }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>

            {timelineEvents.map((event, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
                className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"} md:w-1/2`}
              >
                <motion.div
                  className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredEvent(index)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  animate={{
                    boxShadow:
                      hoveredEvent === index
                        ? [
                            "0 0 0px rgba(59, 130, 246, 0)",
                            "0 0 15px rgba(59, 130, 246, 0.7)",
                            "0 0 0px rgba(59, 130, 246, 0)",
                          ]
                        : "none",
                  }}
                  transition={{ duration: 1.5, repeat: hoveredEvent === index ? Number.POSITIVE_INFINITY : 0 }}
                ></motion.div>
                <motion.div
                  className="bg-gray-800/80 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-serif text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                    {event.year}
                  </h4>
                  <p className="text-gray-300">{event.event}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

