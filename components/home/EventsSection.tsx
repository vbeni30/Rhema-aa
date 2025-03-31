"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

const events = [
  {
    title: "Summer Youth Camp",
    date: "July 15-20, 2024",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A week of fun, fellowship, and spiritual growth for teenagers.",
  },
  {
    title: "Women's Conference",
    date: "August 12-13, 2024",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Empowering women through faith, fellowship, and inspiration.",
  },
  {
    title: "Community Outreach Day",
    date: "September 5, 2024",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd59a0c3a9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Serving our local community through various service projects.",
  },
]

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

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

        {/* Floating Particles */}
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
            Join us for these special events and be part of our vibrant community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="/events">
            <button className="inline-flex items-center justify-center rounded-full px-8 py-6 text-lg bg-transparent border border-white/20 text-white transition-colors hover:bg-white/10">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col"
    >
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {event.date}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-white">{event.title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{event.description}</p>

        <Link href="/events" className="mt-auto">
          <button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 bg-transparent border border-white/20 text-white transition-colors hover:bg-white/10">
            Learn More
          </button>
        </Link>
      </div>
    </motion.div>
  )
}

