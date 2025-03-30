"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const beliefs = [
  "The divine inspiration and authority of the Bible",
  "The Trinity: Father, Son, and Holy Spirit",
  "Salvation by grace through faith in Jesus Christ",
  "The importance of baptism and communion",
  "The church as the body of Christ",
  "The second coming of Jesus Christ",
]

export default function OurBeliefs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]"
          style={{ y: y2 }}
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
            Our Beliefs
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            At Rhema Church, our beliefs are rooted in the timeless truths of the Bible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              At Rhema Church, our beliefs are rooted in the timeless truths of the Bible. We hold to the fundamental
              doctrines of the Christian faith, which have guided believers for centuries.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              While we embrace these core beliefs, we also recognize that there can be diversity in non-essential
              matters. We encourage thoughtful exploration of Scripture and respectful dialogue within our community.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
              Read Our Full Statement of Faith
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Core Beliefs</h3>
            <ul className="space-y-4">
              {beliefs.map((belief, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-full p-1 mr-3 mt-1"
                  >
                    <Check className="h-5 w-5 text-blue-400" />
                  </motion.div>
                  <span className="text-lg text-gray-300">{belief}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

