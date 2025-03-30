"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Welcome to Rhema Church
            </h2>

            <p className="text-gray-300 mb-6 text-lg">
              We are a vibrant community of believers dedicated to spreading God's love and message of hope. Our church
              is built on the foundation of faith, community, and service.
            </p>

            <p className="text-gray-300 mb-8 text-lg">
              Whether you're exploring faith for the first time or looking for a new church home, we invite you to join
              us and experience the transformative power of God's love in a welcoming environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-6">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Church community"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute -bottom-10 -left-10 w-[200px] aspect-square rounded-2xl overflow-hidden border-4 border-gray-900">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Worship service"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-10 -right-10 w-[150px] aspect-square rounded-2xl overflow-hidden border-4 border-gray-900 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Community service"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <StatCard number="25+" label="Years of Service" />
          <StatCard number="1,000+" label="Community Members" />
          <StatCard number="50+" label="Outreach Programs" />
          <StatCard number="3" label="Service Locations" />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
      whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
        {number}
      </h3>
      <p className="text-gray-400">{label}</p>
    </motion.div>
  )
}

