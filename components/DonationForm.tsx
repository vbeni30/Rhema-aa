"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Lock, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

const amounts = ["25", "50", "100", "250", "500", "1000"]

export default function DonationForm() {
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")
  const [frequency, setFrequency] = useState("one-time")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section ref={ref} className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl"
          style={{ y, opacity }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4">
            <AnimatedGradientText>Make a Donation</AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Your gift helps us continue our mission and serve our community.
          </p>
        </ScrollReveal>

        <motion.div
          className="bg-gray-50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: ["rgb(220, 252, 231)", "rgb(187, 247, 208)", "rgb(220, 252, 231)"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <CheckCircle className="h-10 w-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Thank You for Your Generosity!</h3>
              <p className="text-gray-600 mb-6">
                Your donation has been processed successfully. A confirmation email has been sent to your inbox.
              </p>
              <Button className="bg-[#4688D9] hover:bg-[#12355A] text-white" onClick={() => setIsSubmitted(false)}>
                Make Another Donation
              </Button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <Label className="text-lg mb-4 block">Select Amount</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amounts.map((amount) => (
                    <motion.div key={amount} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`text-lg py-8 w-full ${selectedAmount === amount ? "bg-[#4688D9] text-white" : ""}`}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                      >
                        ${amount}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <Input
                    type="number"
                    name="custom-amount"
                    id="custom-amount"
                    className="pl-7"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount("")
                    }}
                  />
                </div>
              </div>

              <div>
                <Label className="text-lg mb-4 block">Frequency</Label>
                <RadioGroup value={frequency} onValueChange={setFrequency} className="grid gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">One-time gift</Label>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly recurring gift</Label>
                  </motion.div>
                </RadioGroup>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="pt-6 border-t">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#4688D9] text-white hover:bg-[#12355A] h-12 text-lg"
                    disabled={isSubmitting || (!selectedAmount && !customAmount)}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" /> Donate Securely
                      </>
                    )}
                  </Button>
                </motion.div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Your donation is secure and encrypted. You can change or cancel your donation at any time.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

