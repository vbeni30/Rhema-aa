"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const sermonSeries = [
  {
    title: "Unshakeable Faith",
    description: "Discover how to build a faith that stands strong in the face of life's challenges.",
    image: "/placeholder.svg?height=400&width=600",
    current: true,
  },
  {
    title: "Living with Purpose",
    description: "Explore God's unique calling for your life and how to fulfill it.",
    image: "/placeholder.svg?height=400&width=600",
    current: false,
  },
  {
    title: "Grace Unveiled",
    description: "Dive deep into the transformative power of God's grace in our lives.",
    image: "/placeholder.svg?height=400&width=600",
    current: false,
  },
]

export default function SermonSeries() {
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
            Sermon Series
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Explore our current and past sermon series</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sermonSeries.map((series, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg ${
                series.current ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="relative h-48">
                <Image src={series.image || "/placeholder.svg"} alt={series.title} fill className="object-cover" />
                {series.current && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current Series
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{series.title}</h3>
                <p className="text-gray-300 mb-4">{series.description}</p>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Explore Series
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/sermons">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium">
              View All Sermon Series
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

