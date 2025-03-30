"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { CalendarDays, Clock, MapPin, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Sunday Worship Service",
    day: "Every Sunday",
    time: "10:00 AM - 11:30 AM",
    location: "Main Sanctuary",
    details:
      "Our Sunday worship service includes contemporary and traditional worship, prayer, and biblical teaching. Children's church and nursery services are available during this time.",
  },
  {
    title: "Bible Study Group",
    day: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    location: "Fellowship Hall",
    details:
      "Our midweek Bible study provides in-depth teaching and small group discussion. This is a great opportunity to deepen your understanding of Scripture and connect with others.",
  },
  {
    title: "Youth Group",
    day: "Every Friday",
    time: "6:30 PM - 8:30 PM",
    location: "Youth Center",
    details:
      "Our youth group offers teenagers a safe and fun environment to grow in their faith, build friendships, and develop leadership skills through games, worship, and Bible teaching.",
  },
  {
    title: "Choir Practice",
    day: "Every Thursday",
    time: "7:00 PM - 9:00 PM",
    location: "Choir Room",
    details:
      "Our choir rehearses weekly to prepare music for Sunday services and special events. All skill levels are welcome, and no audition is required to join.",
  },
]

export default function RecurringEvents() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]"
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
            Recurring Events
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us for our regular weekly gatherings and activities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{event.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <CalendarDays className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{event.day}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
                onClick={() => setSelectedEvent(index)}
              >
                <Info className="h-4 w-4 mr-1" />
                More Details
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl max-w-md w-full overflow-hidden border border-white/10 shadow-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">{events[selectedEvent].title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <CalendarDays className="h-5 w-5 mr-2 text-blue-400" />
                    <span>{events[selectedEvent].day}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" />
                    <span>{events[selectedEvent].time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                    <span>{events[selectedEvent].location}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{events[selectedEvent].details}</p>
                <div className="flex justify-end">
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setSelectedEvent(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

