"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, MapPin, ArrowRight } from "lucide-react"

const services = [
  {
    day: "Sunday",
    name: "Main Worship Service",
    time: "10:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    description: "Join us for praise and worship, prayer, and an inspiring message from God's Word.",
  },
  {
    day: "Wednesday",
    name: "Bible Study",
    time: "7:00 PM - 8:30 PM",
    location: "Fellowship Hall",
    description: "Dive deeper into Scripture with our midweek Bible study and prayer service.",
  },
  {
    day: "Friday",
    name: "Youth Service",
    time: "6:30 PM - 8:30 PM",
    location: "Youth Center",
    description: "A dynamic service designed specifically for teenagers and young adults.",
  },
]

export default function ServicesSection() {
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
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
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
            Join us throughout the week for worship, teaching, and fellowship as we grow together in faith.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/services">
            <button className="inline-flex items-center justify-center rounded-full px-8 py-6 text-lg bg-transparent border border-white/20 text-white transition-colors hover:bg-white/10">
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full flex flex-col"
    >
      <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium self-start mb-6">
        {service.day}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>

      <div className="space-y-3 mb-6 text-gray-300">
        <div className="flex items-center">
          <Clock className="h-5 w-5 mr-3 text-gray-400" />
          <span>{service.time}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 mr-3 text-gray-400" />
          <span>{service.location}</span>
        </div>
      </div>

      <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>

      <Link href="/services" className="mt-auto">
        <button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 bg-transparent border border-white/20 text-white transition-colors hover:bg-white/10">
          Learn More
        </button>
      </Link>
    </motion.div>
  )
}

