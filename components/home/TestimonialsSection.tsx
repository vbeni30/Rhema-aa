"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "This church has transformed my life. I've found a loving community and deepened my faith.",
    author: "Sarah Johnson",
    role: "Member since 2018",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The sermons are inspiring and relevant to modern life. I always leave feeling uplifted.",
    author: "Michael Thompson",
    role: "New Member",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "I'm grateful for the outreach programs. They've helped me give back to our community.",
    author: "Rebecca Williams",
    role: "Volunteer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The youth program has been amazing for my teenagers. They've grown so much in their faith.",
    author: "David Anderson",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
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
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y }}
        />

        {/* Floating Particles */}
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

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Testimonials
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hear from our community members about their experiences at Rhema Church.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <Quote className="h-16 w-16 text-white/20 mb-6" />

            <p className="text-xl md:text-2xl text-gray-200 mb-8 italic">"{testimonials[activeIndex].quote}"</p>

            <div className="flex items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].author}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-white">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-400">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

