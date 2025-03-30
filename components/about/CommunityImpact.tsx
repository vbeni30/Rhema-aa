"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, Users, School, Globe } from "lucide-react"

const impactAreas = [
  {
    icon: Heart,
    title: "Local Outreach",
    description: "Serving our community through food banks, homeless shelters, and crisis support.",
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Offering various support groups for addiction recovery, grief, and more.",
  },
  {
    icon: School,
    title: "Education",
    description: "Providing after-school programs and adult education classes to empower our community.",
  },
  {
    icon: Globe,
    title: "Global Missions",
    description: "Supporting missionaries and humanitarian efforts around the world.",
  },
]

export default function CommunityImpact() {
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
            Our Community Impact
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Making a difference in our local community and around the world through various outreach initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
              >
                <area.icon className="h-8 w-8 text-blue-400" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-white">{area.title}</h3>
              <p className="text-gray-300">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

