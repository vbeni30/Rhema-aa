"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const specialServices = [
  {
    name: "Baptism Service",
    date: "First Sunday of every month",
    time: "11:00 AM",
    description: "Celebrate new beginnings as believers publicly declare their faith through baptism.",
  },
  {
    name: "Communion Service",
    date: "Last Sunday of every month",
    time: "All Services",
    description: "Join us in remembering Christ's sacrifice through the Lord's Supper.",
  },
  {
    name: "Healing Service",
    date: "Third Wednesday of every month",
    time: "7:00 PM",
    description: "A special time of prayer for healing and restoration.",
  },
  {
    name: "Night of Worship",
    date: "Second Friday of every month",
    time: "7:00 PM",
    description: "An extended evening of praise and worship.",
  },
]

export default function SpecialServices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
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
            Special Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us for these special gatherings throughout the month.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                  {service.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-400" />
                  {service.time}
                </div>
              </div>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

