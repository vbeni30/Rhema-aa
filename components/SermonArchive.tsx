"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, Play } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ParallaxSection } from "@/components/ui/parallax-section"

const sermons = [
  {
    title: "እግዚአብሄርን መፍራት",
    speaker: "Teacher Solomon",
    date: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/f126MMAH2Og/maxresdefault.jpg",
    videoId: "f126MMAH2Og",
  },
  {
    title: "Pastor Aser",
    speaker: "Guest speaker Pastor Aser",
    date: "4 months ago",
    thumbnail: "https://i.ytimg.com/vi/oMriVefc2I0/maxresdefault.jpg",
    videoId: "oMriVefc2I0",
  },
  {
    title: "የተትረፈረፈ ህይወት በመጋቢ ፋሲል ቀ/ወርቅ ",
    speaker: "Pastor Fasil K/werk",
    date: "4 months ago",
    thumbnail: "https://i.ytimg.com/vi/VmOhCKYIZ5M/maxresdefault.jpg",
    videoId: "VmOhCKYIZ5M",
  },
]

export default function SermonArchive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-red-100 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <ParallaxSection speed={0.1} className="relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-6 text-gray-900">
            <AnimatedGradientText>Recent Sermons</AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Watch and listen to our latest messages to grow in your faith journey
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sermons.map((sermon, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* YouTube Video Embed with overlay */}
                <div className="relative aspect-video group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <iframe
                    src={`https://www.youtube.com/embed/${sermon.videoId}`}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/90 rounded-full p-4">
                      <Play className="h-8 w-8 text-[#4688D9]" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3 className="font-serif text-xl font-semibold mb-2" whileHover={{ color: "#4688D9" }}>
                    {sermon.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p className="text-sm">{sermon.date}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-16">
          <AnimatedButton className="bg-[#4688D9] hover:bg-[#12355A] text-white px-8 py-6 text-lg" hoverScale={1.05}>
            View All Sermons
          </AnimatedButton>
        </div>
      </ParallaxSection>
    </section>
  )
}

