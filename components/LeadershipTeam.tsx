"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { ThreeDCard } from "@/components/ui/3d-card"

const leaders = [
  {
    name: "Apostle Fistum W/aregay",
    role: "Apostle",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pastor John has been leading our congregation for over 20 years with wisdom and compassion.",
    fullBio:
      "Pastor John has been leading our congregation for over 20 years with wisdom and compassion. He received his theological education from Seminary College and has dedicated his life to serving the church community. Under his leadership, our church has grown significantly and established numerous outreach programs that have positively impacted our local community.",
  },
  {
    name: "Apostle Tamirat",
    role: "Apostle",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane's focus on youth ministry has helped shape the next generation of believers in our church.",
    fullBio:
      "Jane's focus on youth ministry has helped shape the next generation of believers in our church. With a background in education and counseling, she brings a unique perspective to our leadership team. She has developed innovative programs that engage young people and help them grow in their faith journey. Her passion for mentoring has created a strong youth community within our church.",
  },
  {
    name: "Pastor Shimeles",
    role: "Pastor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael's gift for music has elevated our worship services and brought us closer to God.",
    fullBio:
      "Michael's gift for music has elevated our worship services and brought us closer to God. With formal training in music and theology, he has transformed our worship experience. He leads our worship team with passion and creativity, introducing both traditional hymns and contemporary worship songs. His commitment to excellence in worship has drawn many new members to our congregation.",
  },
  {
    name: "Pastor Tewoderos",
    role: "Pastor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah's dedication to community service has expanded our church's impact in the local area.",
    fullBio:
      "Sarah's dedication to community service has expanded our church's impact in the local area. With a background in social work, she has established partnerships with local organizations to address community needs. She oversees our food bank, homeless outreach, and family support programs. Her compassionate approach has made our church a trusted resource for those in need throughout our community.",
  },
]

export default function LeadershipTeam() {
  const [selectedLeader, setSelectedLeader] = useState<number | null>(null)

  return (
    <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-100 opacity-20 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">
            <AnimatedGradientText>Our Leadership Team</AnimatedGradientText>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <ThreeDCard className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <motion.h3 className="font-serif text-xl font-semibold mb-2" whileHover={{ color: "#C31707" }}>
                    {leader.name}
                  </motion.h3>
                  <p className="text-[#C31707] mb-4">{leader.role}</p>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <Button
                    variant="outline"
                    className="w-full hover:bg-[#4688D9] hover:text-white transition-colors duration-300"
                    onClick={() => setSelectedLeader(index)}
                  >
                    Read Full Bio
                  </Button>
                </div>
              </ThreeDCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedLeader !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-2xl w-full p-8 relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedLeader(null)}
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={leaders[selectedLeader].image || "/placeholder.svg"}
                      alt={leaders[selectedLeader].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <h3 className="font-serif text-2xl font-semibold mb-1">{leaders[selectedLeader].name}</h3>
                  <p className="text-[#C31707] mb-4">{leaders[selectedLeader].role}</p>
                  <p className="text-gray-700">{leaders[selectedLeader].fullBio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

