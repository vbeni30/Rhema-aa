"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

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
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
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
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]"
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
            Our Leadership Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Meet the dedicated individuals who guide our church with wisdom, vision, and compassion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-1 text-white">{leader.name}</h3>
                  <p className="text-blue-400">{leader.role}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6">{leader.bio}</p>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 w-full"
                  onClick={() => setSelectedLeader(index)}
                >
                  Read Full Bio
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedLeader !== null && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl max-w-2xl w-full overflow-hidden border border-white/10 shadow-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48">
                <Image
                  src={leaders[selectedLeader].image || "/placeholder.svg"}
                  alt={leaders[selectedLeader].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{leaders[selectedLeader].name}</h3>
                  <p className="text-blue-400">{leaders[selectedLeader].role}</p>
                </div>

                <button
                  className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
                  onClick={() => setSelectedLeader(null)}
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <p className="text-gray-300 mb-6">{leaders[selectedLeader].fullBio}</p>
                <div className="flex justify-end">
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setSelectedLeader(null)}>
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

