"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Heart } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { TextReveal } from "@/components/ui/text-reveal"
import { RevealText } from "@/components/ui/reveal-text"

export default function DonationCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 px-8 bg-[#4688D9] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.05,
            y,
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative"
        >
          <Heart className="h-16 w-16 mx-auto mb-8" />
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <TextReveal
          text="Support Our Ministry"
          className="font-serif text-4xl font-normal mb-6"
          staggerChildren={0.05}
        />

        <RevealText className="text-xl mb-12 opacity-90" delay={0.4}>
          Your generous donations help us continue our mission and serve our community. Every contribution, no matter
          the size, makes a difference in the lives of those we reach and the ministries we support.
        </RevealText>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <AnimatedButton
            className="bg-white text-[#4688D9] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
            hoverScale={1.05}
          >
            Donate Now
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}

