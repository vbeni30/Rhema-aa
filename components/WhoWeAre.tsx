"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Church, Cross } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ThreeDCard } from "@/components/ui/3d-card"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { useRef, useEffect, useState } from "react"

const features = [
  {
    title: "Our Beliefs",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Our Church",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: Church,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Our Mission",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: Cross,
    color: "from-red-500 to-orange-600",
  },
]

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
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

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate particles
  useEffect(() => {
    if (typeof window !== "undefined") {
      const colors = ["#4688D9", "#9B2B3A", "#ffffff"]
      const newParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 1.5 + 0.5,
      }))
      setParticles(newParticles)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
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
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <ScrollReveal>
        <h2 className="text-center font-serif text-sm font-normal text-gray-400 uppercase tracking-widest mb-4">
          Who we are
        </h2>
        <AnimatedGradientText className="text-center font-serif text-5xl font-normal mb-16 from-blue-300 via-purple-300 to-pink-300">
          Discover Our Purpose
        </AnimatedGradientText>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <ScrollReveal key={index} delay={index * 0.2} direction={index % 2 === 0 ? "up" : "down"}>
            <ThreeDCard className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700 h-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="text-center flex flex-col items-center h-full">
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 0px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="font-serif text-2xl font-normal mb-4 text-white">{feature.title}</h3>
                <p className="text-base leading-relaxed text-gray-300 mb-6">{feature.description}</p>

                <motion.div className="mt-auto" whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center gap-2">
                    <span className="text-lg">+</span> Read more
                  </Link>
                </motion.div>
              </div>
            </ThreeDCard>
          </ScrollReveal>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  )
}

