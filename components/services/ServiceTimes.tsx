"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock } from "lucide-react"

const weeklySchedule = [
  { day: "Sunday", times: ["9:00 AM - 10:30 AM", "6:00 PM - 7:30 PM"] },
  { day: "Monday", times: ["7:00 PM - 8:30 PM (Prayer Group)"] },
  { day: "Tuesday", times: ["10:00 AM - 11:30 AM (Women's Bible Study)"] },
  { day: "Wednesday", times: ["7:00 PM - 8:30 PM (Bible Study)"] },
  { day: "Thursday", times: ["6:30 PM - 8:00 PM (Youth Group)"] },
  { day: "Friday", times: ["6:30 PM - 8:00 PM (Prayer Service)"] },
  { day: "Saturday", times: ["5:00 PM - 6:30 PM (Prayer & Worship)"] },
]

export default function ServiceTimes() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <Clock className="h-12 w-12 mx-auto mb-6 text-blue-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Weekly Schedule
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Join us throughout the week for various services and activities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
        >
          {weeklySchedule.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 ${
                index !== weeklySchedule.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="w-32">
                <h3 className="font-bold text-xl text-blue-400">{schedule.day}</h3>
              </div>
              <div className="flex-1">
                {schedule.times.map((time, timeIndex) => (
                  <div key={timeIndex} className={`flex items-center ${timeIndex > 0 ? "mt-2" : ""}`}>
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-300">{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

