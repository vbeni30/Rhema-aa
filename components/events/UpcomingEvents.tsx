"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { CalendarDays, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Summer Youth Camp",
    date: "July 15-20, 2025",
    time: "All Day",
    location: "Camp Wilderness",
    description: "A week-long adventure for teens to grow in faith and friendship.",
    image:
      "https://images.unsplash.com/photo-1595003969098-b84179ec337f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Community Outreach Day",
    date: "August 5, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Various Locations",
    description: "Join us as we serve our community through various projects.",
    image:
      "https://images.unsplash.com/photo-1553073520-80b5ad5ec870?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fall Revival Services",
    date: "September 10-12, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Main Sanctuary",
    description: "Three nights of powerful worship and inspiring messages.",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
]

export default function UpcomingEvents() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

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

  // Calculate indices for the 3-card view
  const getVisibleIndices = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % events.length)
    }
    return indices
  }

  const visibleIndices = getVisibleIndices()

  return (
    <section id="upcoming-events" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Upcoming Events
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us for these special gatherings and be part of our vibrant community
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleIndices.map((index, i) => (
              <motion.div
                key={`${events[index].title}-${i}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative ${i === 1 ? "z-10 scale-105 md:mt-[-20px]" : "z-0 opacity-90"}`}
                whileHover={{
                  scale: 1.05,
                  zIndex: 20,
                }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg h-full">
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
                      className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      Upcoming
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{events[index].title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <CalendarDays className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{events[index].date}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{events[index].time}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{events[index].location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{events[index].description}</p>
                    <Button className="w-full bg-white text-black hover:bg-gray-200">Learn More & Register</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-20 hidden md:block"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-lg z-20 hidden md:block"
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
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setDirection(index > activeIndex ? 1 : -1)
                setActiveIndex(index)
              }}
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium">
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

