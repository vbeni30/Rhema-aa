"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye } from "lucide-react"

export default function MissionAndVision() {
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
            Our Mission & Vision
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Guided by faith and purpose, we strive to make a meaningful impact in our community and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6"
            >
              <Target className="h-8 w-8 text-blue-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300">
              To spread the love of Christ, nurture spiritual growth, and serve our community with compassion and grace.
              We are committed to sharing the Gospel message and demonstrating God's love through our words and actions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6"
            >
              <Eye className="h-8 w-8 text-purple-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300">
              To be a vibrant, inclusive community of faith that transforms lives and impacts the world for Christ. We
              envision a church that reaches across cultural and generational boundaries to bring hope and healing to
              our world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

