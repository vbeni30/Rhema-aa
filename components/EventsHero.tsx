"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, ChevronDown } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { RevealText } from "@/components/ui/reveal-text"

export default function EventsHero() {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

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

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

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
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: yValue,
          scale: scaleValue,
        }}
      />

      <div className="text-center z-10 px-6 max-w-4xl" style={{ opacity: opacityValue }}>
        <TextReveal
          text="Church Events"
          className="font-serif text-5xl md:text-7xl font-normal mb-6"
          staggerChildren={0.05}
        />

        <RevealText className="text-xl md:text-2xl max-w-2xl mx-auto mb-12" delay={0.4}>
          Join us in worship, fellowship, and community service. There's always something happening at Rhema Church!
        </RevealText>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <AnimatedButton
            className="bg-white text-[#4688D9] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            hoverScale={1.05}
          >
            <Calendar className="mr-2 h-5 w-5" />
            View All Events
          </AnimatedButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown className="h-12 w-12" />
      </motion.div>
    </motion.section>
  )
}

