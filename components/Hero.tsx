"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { RevealText } from "@/components/ui/reveal-text"
import { ParallaxSection } from "@/components/ui/parallax-section"
import { OptimizedImage } from "@/components/ui/optimized-image"

// 3D particle system for hero background
const Particles = ({ count = 50 }) => {
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      color: string
      speed: number
    }>
  >([])

  useEffect(() => {
    // Generate particles only on client-side
    const colors = ["#4688D9", "#9B2B3A", "#ffffff"]
    const newParticles = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 1.5 + 0.5,
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
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
  )
}

const slides = [
  {
    image: "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?q=80&w=1200&auto=format&fit=crop",
    title: "Life-Changing Journey to God",
    description:
      "Our common creed is our belief in the Bible, our deep faith in Jesus Christ, and our acceptance of the unconditional love of God.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501371703172-691bc5437c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Join Our Vibrant Community",
    description:
      "Experience the warmth and fellowship of our church family. Together, we grow in faith and serve our community.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519834089823-9a9583a3f2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Discover Your Purpose",
    description:
      "Through worship, study, and service, we help you uncover God's plan for your life and empower you to live it out.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
      }
    }, 7000)
    return () => clearInterval(timer)
  }, [isAnimating])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const nextSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const backgroundVariants = {
    initial: { scale: 1.1 },
    animate: { scale: 1 },
    exit: { scale: 1.1 },
  }

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-red-900/30 z-20 mix-blend-overlay"></div>

      {/* Particle system */}
      <Particles count={50} />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 z-10 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={backgroundVariants}
          transition={{ duration: 1.5 }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
          }}
        >
          <OptimizedImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="z-0"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-30 flex items-center justify-center h-full px-8">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="text-center text-white max-w-4xl"
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            custom={currentSlide}
          >
            <ParallaxSection speed={0.2} direction="up" className="mb-6">
              <motion.h1
                className="font-serif text-5xl md:text-7xl font-normal leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-red-200"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                {slides[currentSlide].title}
              </motion.h1>
            </ParallaxSection>

            <RevealText className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 text-gray-200" delay={0.4}>
              {slides[currentSlide].description}
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AnimatedButton
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_15px_rgba(66,153,225,0.5)]"
                hoverScale={1.05}
              >
                Learn More
              </AnimatedButton>

              <AnimatedButton
                variant="outline"
                className="border-2 border-white/50 text-white bg-white/5 hover:bg-white/15 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                <span className="mr-2">Join Us</span>
                <ArrowRight className="h-5 w-5" />
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Futuristic navigation controls */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AnimatedButton
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full h-14 w-14 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          hoverScale={1.1}
        >
          <ChevronLeft className="h-6 w-6" />
        </AnimatedButton>
      </motion.div>

      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <AnimatedButton
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full h-14 w-14 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          hoverScale={1.1}
        >
          <ChevronRight className="h-6 w-6" />
        </AnimatedButton>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-2 rounded-full backdrop-blur-sm ${
              currentSlide === index ? "w-12 bg-gradient-to-r from-blue-400 to-indigo-600" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg z-30"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg z-30"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg z-30"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg z-30"></div>
    </section>
  )
}

