"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ministries = [
  {
    name: "Children's Ministry",
    description: "Nurturing young hearts in faith through age-appropriate teaching and activities.",
    image:
      "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 3-12",
    details:
      "Our children's ministry provides a safe, fun environment where children learn biblical truths through interactive lessons, games, crafts, and worship. We use age-appropriate curriculum to help children develop a strong foundation of faith.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Youth Ministry",
    description: "Empowering teenagers to grow in their faith journey through fellowship and mentorship.",
    image:
      "https://images.unsplash.com/photo-1594913421979-b9399c0cd4f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 13-18",
    details:
      "Our youth ministry creates a space where teenagers can explore their faith, build meaningful relationships, and develop leadership skills. Through weekly gatherings, retreats, and service projects, we help young people navigate the challenges of adolescence with Christ-centered guidance.",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Young Women",
    description: "Building community and faith among young professionals and college students.",
    image:
      "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 18-30",
    details:
      "Our young women's ministry provides support, mentorship, and fellowship for women navigating early adulthood. Through Bible studies, social events, and mentoring relationships, we help young women grow in their faith and discover God's purpose for their lives.",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Adult Ministry",
    description: "Deepening faith through Bible study, small groups, and fellowship.",
    image:
      "https://images.unsplash.com/photo-1697490251908-5a364a6b5e0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 30+",
    details:
      "Our adult ministry offers various opportunities for spiritual growth and community connection. Through small groups, Bible studies, and fellowship events, adults can deepen their understanding of Scripture, build meaningful relationships, and apply biblical principles to everyday life.",
    color: "from-emerald-500 to-teal-600",
  },
]

export default function MinistryAreas() {
  const [selectedMinistry, setSelectedMinistry] = useState<number | null>(null)
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
            Ministry Areas
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We offer various ministries to serve every age group and life stage in our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg h-full"
            >
              <div className="relative h-48">
                <Image
                  src={ministry.image || "/placeholder.svg"}
                  alt={ministry.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-4 right-4">
                  <motion.span
                    className={`px-3 py-1 bg-gradient-to-r ${ministry.color} rounded-full text-sm font-medium text-white shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {ministry.ages}
                  </motion.span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{ministry.name}</h3>
                <p className="text-gray-300 mb-4">{ministry.description}</p>
                <Button
                  variant="ghost"
                  className="group text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
                  onClick={() => setSelectedMinistry(index)}
                >
                  Learn More
                  <motion.span className="inline-block ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ministry Details Modal */}
      <AnimatePresence>
        {selectedMinistry !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMinistry(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl max-w-3xl w-full overflow-hidden border border-white/10 shadow-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <Image
                  src={ministries[selectedMinistry].image || "/placeholder.svg"}
                  alt={ministries[selectedMinistry].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{ministries[selectedMinistry].name}</h3>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${ministries[selectedMinistry].color} rounded-full text-sm font-medium text-white shadow-lg`}
                  >
                    {ministries[selectedMinistry].ages}
                  </span>
                </div>

                <button
                  className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
                  onClick={() => setSelectedMinistry(null)}
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <p className="text-gray-300 mb-6">{ministries[selectedMinistry].details}</p>
                <div className="flex justify-end">
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setSelectedMinistry(null)}>
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

