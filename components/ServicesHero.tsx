"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { RevealText } from "@/components/ui/reveal-text"
import { OptimizedImage } from "@/components/ui/optimized-image"

export default function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
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

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

  // Calculate parallax values based on scroll progress
  const yValue = `${scrollProgress * 50}%`
  const opacityValue = 1 - scrollProgress
  const scaleValue = 1 + scrollProgress * 0.1

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={{
          y: yValue,
          scale: scaleValue,
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
        }}
        className="absolute inset-0 z-0"
      >
        <OptimizedImage
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Our Services Hero Image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </motion.div>

      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-red-900/40 z-10 mix-blend-overlay"></div>

      {/* Particle system */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
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
      </div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 py-24 text-center" style={{ opacity: opacityValue }}>
        <TextReveal
          text="Our Services"
          className="font-serif text-5xl md:text-7xl font-normal mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-red-200"
          staggerChildren={0.05}
        />

        <RevealText className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200" delay={0.4}>
          Join us in worship, fellowship, and spiritual growth through our various services and ministries.
        </RevealText>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <AnimatedButton
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_15px_rgba(66,153,225,0.5)]"
            hoverScale={1.05}
          >
            <Calendar className="mr-2 h-5 w-5" />
            View Schedule
          </AnimatedButton>
          <AnimatedButton
            size="lg"
            variant="outline"
            className="border-2 border-white/50 text-white bg-white/5 hover:bg-white/15 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
          >
            Watch Live
          </AnimatedButton>
        </motion.div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg z-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg z-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg z-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg z-30"></div>
    </motion.section>
  )
}

