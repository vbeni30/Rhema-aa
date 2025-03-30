"use client"

import { motion } from "framer-motion"
import { FileText, Headphones, Download, BookOpen, Video } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"

const resources = [
  {
    id: 1,
    title: "Sermon Notes",
    description: "Download sermon notes to follow along and take your own notes during the message.",
    icon: FileText,
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    title: "Audio Podcasts",
    description: "Listen to our sermons on the go through our podcast available on multiple platforms.",
    icon: Headphones,
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 3,
    title: "Study Guides",
    description: "Dive deeper into the sermon topics with our comprehensive study guides.",
    icon: BookOpen,
    color: "from-green-600 to-green-400",
  },
  {
    id: 4,
    title: "Video Archives",
    description: "Watch past sermons and special services in our complete video library.",
    icon: Video,
    color: "from-red-600 to-red-400",
  },
]

export function SermonResources() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
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
            Sermon Resources
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Access additional materials to enhance your sermon experience and deepen your understanding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatedCard className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 text-center">
                <div
                  className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${resource.color} flex items-center justify-center mb-6`}
                >
                  <resource.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-6">{resource.description}</p>

                <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="mr-2">Access Now</span>
                  <Download className="h-4 w-4" />
                </button>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SermonResources

