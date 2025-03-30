"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, MapPin, Music, Book, Users, Calendar } from "lucide-react"

const services = [
  {
    name: "Sunday Morning Service",
    time: "9:00 AM - 10:30 AM",
    description:
      "Our main worship service featuring contemporary and traditional worship, prayer, and biblical teaching.",
    features: ["Worship Team", "Children's Church", "Nursery Available", "Live Stream"],
    icon: Music,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Sunday Evening Service",
    time: "6:00 PM - 7:30 PM",
    description: "An intimate evening service focused on deeper biblical study and worship.",
    features: ["Bible Study", "Youth Group", "Prayer Time"],
    icon: Book,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Wednesday Bible Study",
    time: "7:00 PM - 8:30 PM",
    description: "Mid-week biblical teaching and small group discussions for spiritual growth.",
    features: ["Group Discussion", "Prayer Meeting", "Fellowship"],
    icon: Users,
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Friday Prayer Service",
    time: "6:30 PM - 8:00 PM",
    description: "Dedicated time for corporate prayer and intercession for our church and community.",
    features: ["Worship", "Intercession", "Testimonies"],
    icon: Calendar,
    color: "from-emerald-500 to-teal-600",
  },
]

export default function WeeklyServices() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="weekly-services" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
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
            Weekly Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us throughout the week for worship, teaching, and fellowship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-br ${service.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Main Sanctuary
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={featureIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${service.color} bg-opacity-10 text-white rounded-full text-sm`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

