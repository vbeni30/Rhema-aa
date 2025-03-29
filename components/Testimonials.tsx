"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ThreeDCard } from "@/components/ui/3d-card"

const testimonials = [
  {
    quote: "This church has transformed my life. I've found a loving community and deepened my faith.",
    author: "Birhanu lemma",
    role: "Church Member for 10 years",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The sermons are inspiring and relevant to modern life. I always leave feeling uplifted.",
    author: "Alem Girma",
    role: "New Member",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "I'm grateful for the outreach programs. They've helped me give back to our community.",
    author: "Besufikad Yidres",
    role: "Volunteer",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-200 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <ScrollReveal>
        <h2 className="text-center font-serif text-4xl font-normal mb-6 text-gray-900">
          <AnimatedGradientText>What Our Community Says</AnimatedGradientText>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Hear from our members about their experiences at Rhema Church
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={index} delay={index * 0.2} direction="up">
            <ThreeDCard className="bg-white p-8 rounded-xl shadow-lg h-full">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-10 w-10 text-[#4688D9]/20 rotate-180" />
                <motion.p
                  className="text-lg text-gray-700 italic mb-8 relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <div className="flex items-center">
                  <motion.div
                    className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-[#4688D9]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.p className="font-semibold text-gray-900" whileHover={{ color: "#4688D9" }}>
                      {testimonial.author}
                    </motion.p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

