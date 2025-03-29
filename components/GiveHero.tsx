"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ChevronDown, Sparkles } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { RevealText } from "@/components/ui/reveal-text"

export default function GiveHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [particlesVisible, setParticlesVisible] = useState(false)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      duration: number
      delay: number
    }>
  >([])
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate rotation based on mouse position relative to center
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -5

      setRotation({ x: rotateX, y: rotateY })
    }

    // Generate particles
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      })),
    )

    // Show particles after a delay
    const timer = setTimeout(() => {
      setParticlesVisible(true)
    }, 1000)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-red-900/30 z-[1]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Animated particles */}
      <AnimatePresence>
        {particlesVisible && (
          <>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white z-[2] opacity-70"
                initial={{
                  opacity: 0,
                  x: `${particle.x}%`,
                  y: `${particle.y}%`,
                  width: 0,
                  height: 0,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  x: [`${particle.x}%`, `${particle.x + (Math.random() * 10 - 5)}%`],
                  y: [`${particle.y}%`, `${particle.y - 10}%`],
                  width: particle.size,
                  height: particle.size,
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: particle.delay,
                  ease: "linear",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* 3D Perspective Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-24 text-center perspective-[1000px]"
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Animated Heart with Glow */}
        <motion.div className="relative mb-8">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0.7)", "0 0 0 20px rgba(255, 255, 255, 0)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.2, 1],
              rotateZ: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Heart className="h-20 w-20 mx-auto text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />

            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-xl opacity-50"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                mixBlendMode: "screen",
              }}
            />

            {/* Sparkles */}
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{
                rotate: [0, 20, 0, -20, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Sparkles className="h-6 w-6 text-yellow-300" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Glass Card Container */}
        <motion.div
          className="backdrop-blur-md bg-white/10 p-10 rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TextReveal
            text="Empower Our Vision"
            className="font-serif text-5xl md:text-7xl font-normal mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-pink-200"
            staggerChildren={0.05}
          />

          <RevealText className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200" delay={0.4}>
            Your contribution fuels our mission to transform lives and build a brighter future together.
          </RevealText>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <AnimatedButton
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]"
              hoverScale={1.05}
            >
              <motion.span
                className="flex items-center"
                animate={{
                  textShadow: isHovering ? "0 0 8px rgba(255,255,255,0.8)" : "none",
                }}
              >
                Give Now
              </motion.span>
            </AnimatedButton>

            <AnimatedButton
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white bg-white/5 hover:bg-white/15 px-10 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              Learn More
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
        }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <ChevronDown className="h-12 w-12 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
          <motion.div
            className="absolute inset-0 bg-white rounded-full filter blur-md opacity-20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

