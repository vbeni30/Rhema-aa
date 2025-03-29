"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section className="py-24 px-8 bg-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #4688D9 0%, transparent 50%), radial-gradient(circle at 80% 70%, #9B2B3A 0%, transparent 50%)",
          }}
        />
      </div>

      <ScrollReveal className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatedGradientText className="font-serif text-3xl font-normal mb-6">Stay Connected</AnimatedGradientText>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter to receive updates on church events, sermons, and community outreach
          opportunities.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 text-green-700 p-6 rounded-lg flex items-center justify-center"
          >
            <CheckCircle className="h-6 w-6 mr-2" />
            <span>Thank you for subscribing! We'll be in touch soon.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AnimatedButton
              type="submit"
              className="bg-[#4688D9] hover:bg-[#12355A] text-white h-12 px-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              ) : (
                <>
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </AnimatedButton>
          </form>
        )}
      </ScrollReveal>
    </section>
  )
}

