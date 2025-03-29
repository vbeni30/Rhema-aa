"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, Clock, MapPin, Users, Book, Music, Heart, Info } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ThreeDCard } from "@/components/ui/3d-card"

const events = [
  {
    title: "Sunday Worship Service",
    day: "Every Sunday",
    time: "10:00 AM - 11:30 AM",
    location: "Main Sanctuary",
    icon: Users,
    details:
      "Our Sunday worship service includes contemporary and traditional worship, prayer, and biblical teaching. Children's church and nursery services are available during this time.",
  },
  {
    title: "Bible Study Group",
    day: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    location: "Fellowship Hall",
    icon: Book,
    details:
      "Our midweek Bible study provides in-depth teaching and small group discussion. This is a great opportunity to deepen your understanding of Scripture and connect with others.",
  },
  {
    title: "Youth Group",
    day: "Every Friday",
    time: "6:30 PM - 8:30 PM",
    location: "Youth Center",
    icon: Heart,
    details:
      "Our youth group offers teenagers a safe and fun environment to grow in their faith, build friendships, and develop leadership skills through games, worship, and Bible teaching.",
  },
  {
    title: "Choir Practice",
    day: "Every Thursday",
    time: "7:00 PM - 9:00 PM",
    location: "Choir Room",
    icon: Music,
    details:
      "Our choir rehearses weekly to prepare music for Sunday services and special events. All skill levels are welcome, and no audition is required to join.",
  },
]

export default function RecurringEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  return (
    <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">
            <AnimatedGradientText>Recurring Events</AnimatedGradientText>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <ThreeDCard className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="flex items-start">
                  <motion.div
                    className="h-12 w-12 text-[#09192A] mr-6 flex-shrink-0 bg-blue-50 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360, backgroundColor: "#4688D9", color: "white" }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <event.icon className="h-6 w-6" />
                  </motion.div>
                  <div>
                    <motion.h3 className="font-serif text-xl font-semibold mb-2" whileHover={{ color: "#4688D9" }}>
                      {event.title}
                    </motion.h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarDays className="h-5 w-5 mr-2" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <motion.button
                      className="flex items-center text-[#4688D9] font-medium"
                      onClick={() => setSelectedEvent(index)}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Info className="h-4 w-4 mr-1" />
                      More Details
                    </motion.button>
                  </div>
                </div>
              </ThreeDCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-md w-full p-6"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-[#4688D9] text-white rounded-full flex items-center justify-center mr-3">
                  {React.createElement(events[selectedEvent].icon, { className: "h-5 w-5" })}
                </div>
                <h3 className="font-serif text-xl font-semibold">{events[selectedEvent].title}</h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <CalendarDays className="h-5 w-5 mr-2 text-[#4688D9]" />
                  <span>{events[selectedEvent].day}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-[#4688D9]" />
                  <span>{events[selectedEvent].time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-[#4688D9]" />
                  <span>{events[selectedEvent].location}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{events[selectedEvent].details}</p>

              <div className="flex justify-end">
                <motion.button
                  className="bg-[#4688D9] text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedEvent(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

