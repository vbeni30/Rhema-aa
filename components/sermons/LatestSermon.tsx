"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Download, Share2 } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export function LatestSermon() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(currentProgress)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const percentClicked = (clickPosition / progressBar.offsetWidth) * 100
      setProgress(percentClicked)
      videoRef.current.currentTime = (percentClicked / 100) * videoRef.current.duration
    }
  }

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
            Latest Sermon
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Watch our most recent message and be inspired by the Word of God.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1616442830389-0fe0305dd61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress Bar */}
              <div className="h-1 bg-gray-600 rounded-full mb-4 cursor-pointer" onClick={handleSeek}>
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlay}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
                    aria-label="Download"
                  >
                    <Download className="h-5 w-5" />
                  </button>

                  <button
                    className="bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors"
                    aria-label="Share"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Finding Peace in Troubled Times</h3>

            <div className="flex items-center mb-6 text-gray-400">
              <span className="mr-4">Pastor John Doe</span>
              <span className="mr-4">•</span>
              <span>June 12, 2024</span>
            </div>

            <p className="text-gray-300 mb-6">
              In this powerful message, Pastor John explores how we can find God's peace even in the midst of life's
              most challenging circumstances. Drawing from Philippians 4:6-7, he shares practical insights on overcoming
              anxiety and experiencing the peace that surpasses all understanding.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Faith</span>
              <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">Peace</span>
              <span className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-sm">Anxiety</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <AnimatedButton
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
                hoverScale={1.05}
              >
                Watch Full Sermon
              </AnimatedButton>

              <AnimatedButton variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Notes
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LatestSermon

