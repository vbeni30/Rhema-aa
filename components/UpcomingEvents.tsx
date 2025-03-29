"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"
import { CalendarDays, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

const events = [
  {
    title: "Summer Youth Camp",
    date: "July 15-20, 2025",
    time: "All Day",
    location: "Camp Wilderness",
    description: "A week-long adventure for teens to grow in faith and friendship.",
    image:
      "https://images.unsplash.com/photo-1595003969098-b84179ec337f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
  },
  {
    title: "Community Outreach Day",
    date: "August 5, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Various Locations",
    description: "Join us as we serve our community through various projects.",
    image:
      "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=400&width=600",
  },
  {
    title: "Fall Revival Services",
    date: "September 10-12, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Three nights of powerful worship and inspiring messages.",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
  },
  {
    title: "Christmas Concert",
    date: "December 18, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "A special evening of Christmas music and celebration.",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "New Year's Eve Prayer Service",
    date: "December 31, 2025",
    time: "10:00 PM - 12:30 AM",
    location: "Main Sanctuary",
    description: "Ring in the new year with prayer, worship, and fellowship.",
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isAnimating])

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const handleDotClick = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  // Calculate indices for the 3-card view
  const getVisibleIndices = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % events.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 50,
      rotateY: custom * 45,
      scale: 0.8,
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.2,
      },
    }),
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section ref={containerRef} className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 h-72 bg-red-100 rounded-full opacity-30 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <ScrollReveal>
        <h2 className="text-center font-serif text-4xl font-normal mb-6 text-gray-900">
          <AnimatedGradientText>Upcoming Events</AnimatedGradientText>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Join us for these special gatherings and be part of our vibrant community
        </p>
      </ScrollReveal>

      {/* 3D Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {visibleIndices.map((index, i) => (
                <motion.div
                  key={`${events[index].title}-${i}`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative ${i === 1 ? "z-10 scale-105 md:mt-[-20px]" : "z-0 opacity-90"}`}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 20,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform perspective-1000">
                    <div className="relative h-48 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"
                        whileHover={{ opacity: 0.7 }}
                      />
                      <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }}>
                        <Image
                          src={events[index].image || "/placeholder.svg"}
                          alt={events[index].title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute top-4 right-4 bg-[#4688D9] text-white px-3 py-1 rounded-full text-sm font-medium z-20"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        Upcoming
                      </motion.div>
                    </div>
                    <div className="p-6 bg-white">
                      <motion.h3
                        className="font-serif text-xl font-semibold mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        {events[index].title}
                      </motion.h3>
                      <motion.div
                        className="space-y-2 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="flex items-center text-gray-600">
                          <CalendarDays className="h-4 w-4 mr-2 text-[#4688D9]" />
                          <span>{events[index].date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-[#4688D9]" />
                          <span>{events[index].time}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-[#4688D9]" />
                          <span>{events[index].location}</span>
                        </div>
                      </motion.div>
                      <motion.p
                        className="text-gray-700 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        {events[index].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <AnimatedButton className="w-full bg-[#4688D9] hover:bg-[#12355A] text-white">
                          Learn More & Register
                        </AnimatedButton>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4688D9] p-3 rounded-full shadow-lg z-20 hidden md:block"
          onClick={prevSlide}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>

        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#4688D9] p-3 rounded-full shadow-lg z-20 hidden md:block"
          onClick={nextSlide}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        {events.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#4688D9]" : "bg-gray-300"}`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === activeIndex ? [1, 1.2, 1] : 1,
              transition: {
                duration: index === activeIndex ? 1.5 : 0.3,
                repeat: index === activeIndex ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <AnimatedButton
          className="bg-transparent border-2 border-[#4688D9] text-[#4688D9] hover:bg-[#4688D9]/10 px-8 py-3 text-lg"
          hoverScale={1.05}
        >
          View All Events
        </AnimatedButton>
      </div>
    </section>
  )
}

