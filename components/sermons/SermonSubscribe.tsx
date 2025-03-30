"use client"

import { motion } from "framer-motion"
import { Podcast, Youtube, AirplayIcon as Spotify, Rss } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

const platforms = [
  {
    id: 1,
    name: "Apple Podcasts",
    icon: Podcast,
    color: "bg-gradient-to-r from-purple-600 to-pink-600",
    link: "#",
  },
  {
    id: 2,
    name: "YouTube",
    icon: Youtube,
    color: "bg-gradient-to-r from-red-600 to-red-500",
    link: "#",
  },
  {
    id: 3,
    name: "Spotify",
    icon: Spotify,
    color: "bg-gradient-to-r from-green-600 to-green-500",
    link: "#",
  },
  {
    id: 4,
    name: "RSS Feed",
    icon: Rss,
    color: "bg-gradient-to-r from-orange-600 to-orange-500",
    link: "#",
  },
]

export function SermonSubscribe() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
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
            Subscribe to Our Sermons
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Never miss a message. Subscribe to our sermons on your favorite platforms or sign up for email
            notifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">Available Platforms</h3>

            <div className="grid grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <a key={platform.id} href={platform.link} className="group" target="_blank" rel="noopener noreferrer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full ${platform.color} flex items-center justify-center mb-4`}>
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-medium text-white">{platform.name}</h4>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get Email Updates</h3>
            <p className="text-gray-300 mb-6">
              Sign up to receive email notifications when new sermons are posted, along with sermon notes and resources.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>

              <div className="pt-2">
                <AnimatedButton
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                  hoverScale={1.02}
                >
                  Subscribe Now
                </AnimatedButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SermonSubscribe

