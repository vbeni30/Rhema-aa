"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DonateSection() {
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
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]"
          style={{ y }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 30 }).map((_, i) => (
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
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative inline-block mb-8"
          >
            <Heart className="h-16 w-16 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: ["0 0 0 0 rgba(255, 255, 255, 0.7)", "0 0 0 20px rgba(255, 255, 255, 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Support Our Ministry
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Your generous donations help us continue our mission and serve our community. Every contribution, no matter
            the size, makes a difference in the lives of those we reach.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <DonateCard
              title="One-Time Gift"
              description="Make a single contribution to support our ministry and mission."
              index={0}
            />
            <DonateCard
              title="Recurring Giving"
              description="Set up automatic monthly or weekly donations."
              index={1}
            />
            <DonateCard title="Legacy Giving" description="Include our church in your estate planning." index={2} />
          </div>

          <Link href="/give">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg">
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function DonateCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
    >
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

