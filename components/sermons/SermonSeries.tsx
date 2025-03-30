"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { OptimizedImage } from "@/components/ui/optimized-image"

const sermonSeries = [
  {
    id: 1,
    title: "Foundations of Faith",
    description: "Exploring the core principles of Christian belief",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sermonCount: 6,
  },
  {
    id: 2,
    title: "Living with Purpose",
    description: "Discovering God's plan for your life",
    image:
      "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sermonCount: 4,
  },
  {
    id: 3,
    title: "Spiritual Warfare",
    description: "Standing firm against the enemy's attacks",
    image:
      "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sermonCount: 5,
  },
  {
    id: 4,
    title: "Family Matters",
    description: "Building strong, God-centered relationships",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    sermonCount: 3,
  },
]

export function SermonSeries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
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
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Dive deeper into God's Word with our thematic sermon collections.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sermonSeries.map((series, index) => (
            <motion.div
              key={series.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatedCard className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <OptimizedImage
                    src={series.image}
                    alt={series.title}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                    {series.sermonCount} Sermons
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{series.title}</h3>
                  <p className="text-gray-400 mb-4">{series.description}</p>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="mr-1">View Series</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SermonSeries

