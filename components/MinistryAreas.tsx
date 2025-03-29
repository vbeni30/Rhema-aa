"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

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
  {
    name: "Business Owners",
    description: "Fellowship and spiritual growth opportunities.",
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "All Ages",
    details:
      "Our business owners ministry provides networking, support, and biblical guidance for entrepreneurs and business professionals. We offer regular gatherings where business owners can share experiences, pray for one another, and learn how to integrate faith principles into their business practices.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Marriage Ministry",
    description: "Supporting and strengthening marriages through counseling and workshops.",
    image:
      "https://images.unsplash.com/photo-1480623940435-62a1340b08c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "All Couples",
    details:
      "Our marriage ministry is dedicated to helping couples build strong, Christ-centered marriages. Through workshops, retreats, and counseling services, we provide couples with practical tools and biblical wisdom to navigate the joys and challenges of married life.",
    color: "from-pink-500 to-purple-600",
  },
]

export default function MinistryAreas() {
  const [selectedMinistry, setSelectedMinistry] = useState<number | null>(null)
  const [hoveredMinistry, setHoveredMinistry] = useState<number | null>(null)
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      speed: number
    }>
  >([])

  // Generate particles
  useEffect(() => {
    if (typeof window !== "undefined") {
      const colors = ["#4688D9", "#9B2B3A", "#ffffff"]
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 1.5 + 0.5,
      }))
      setParticles(newParticles)
    }
  }, [])

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
            }}
            animate={{
              y: [0, -window.innerHeight],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 / particle.speed,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}

        {/* Premium grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ministry-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ministry-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Ministry Areas
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            We offer various ministries to serve every age group and life stage in our community.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.3)] h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredMinistry(index)}
                onMouseLeave={() => setHoveredMinistry(null)}
              >
                <div className="relative h-48">
                  <Image
                    src={ministry.image || "/placeholder.svg"}
                    alt={ministry.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/60 transition-colors duration-300" />

                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  />

                  <div className="absolute top-4 right-4">
                    <motion.span
                      className={`px-3 py-1 bg-gradient-to-r ${ministry.color} rounded-full text-sm font-medium text-white shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={{
                        boxShadow:
                          hoveredMinistry === index
                            ? [
                                "0 0 0px rgba(59, 130, 246, 0)",
                                "0 0 15px rgba(59, 130, 246, 0.7)",
                                "0 0 0px rgba(59, 130, 246, 0)",
                              ]
                            : "none",
                      }}
                      transition={{ duration: 1.5, repeat: hoveredMinistry === index ? Number.POSITIVE_INFINITY : 0 }}
                    >
                      {ministry.ages}
                    </motion.span>
                  </div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="font-serif text-xl font-semibold mb-2 text-white"
                    whileHover={{ color: "#4688D9" }}
                  >
                    {ministry.name}
                  </motion.h3>
                  <p className="text-gray-300 mb-4">{ministry.description}</p>
                  <Button
                    variant="ghost"
                    className="group/btn text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
                    onClick={() => setSelectedMinistry(index)}
                  >
                    Learn More
                    <motion.span className="inline-block ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
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
              className="bg-gray-800/90 backdrop-blur-md rounded-2xl max-w-3xl w-full overflow-hidden border border-gray-700 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]"
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

                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${ministries[selectedMinistry].color} opacity-20 mix-blend-overlay`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-3xl font-semibold text-white mb-2">
                    {ministries[selectedMinistry].name}
                  </h3>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${ministries[selectedMinistry].color} rounded-full text-sm font-medium text-white shadow-lg`}
                  >
                    {ministries[selectedMinistry].ages}
                  </span>
                </div>

                <button
                  className="absolute top-4 right-4 text-white bg-black/30 backdrop-blur-md rounded-full p-2 hover:bg-black/50"
                  onClick={() => setSelectedMinistry(null)}
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <p className="text-gray-300 mb-6">{ministries[selectedMinistry].details}</p>
                <div className="flex justify-end">
                  <Button
                    className={`bg-gradient-to-r ${ministries[selectedMinistry].color} hover:opacity-90 text-white`}
                    onClick={() => setSelectedMinistry(null)}
                  >
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

