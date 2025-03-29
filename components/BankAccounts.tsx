"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Copy, CheckCircle2, CreditCard, Shield, Lock } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

const accounts = [
  {
    bankName: "Birhan Bank",
    logo: "/birihan.png",
    purpose: "Tithes & General Offerings",
    details: {
      accountName: "Rhema Church",
      accountNumber: "160009000278",
    },
    color: "from-blue-500 to-cyan-400",
  },
  {
    bankName: "CBE Bank",
    logo: "/cbe.png",
    purpose: "Tithes & General Offerings",
    details: {
      accountName: "Rhema Church",
      accountNumber: "1000000943006",
    },
    color: "from-emerald-500 to-teal-400",
  },
  {
    bankName: "Abyssinia Bank",
    logo: "/Abyssinia.png",
    purpose: "Tithes & General Offerings",
    details: {
      accountName: "Rhema Church",
      accountNumber: "157245554",
    },
    color: "from-purple-500 to-indigo-400",
  },
]

export default function BankAccounts() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  // Floating elements
  const floatingElements = [
    { icon: CreditCard, delay: 0 },
    { icon: Shield, delay: 1.5 },
    { icon: Lock, delay: 3 },
  ]

  return (
    <section ref={ref} className="py-24 px-8 bg-gray-900 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-[100px]"
          style={{ y, opacity }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

        {/* Floating elements */}
        {typeof window !== "undefined" &&
          floatingElements.map((element, index) => {
            // Generate random values only once per element
            const xPos = typeof window !== "undefined" ? Math.random() * window.innerWidth : 0
            const yPos = typeof window !== "undefined" ? Math.random() * window.innerHeight : 0
            const rotation = Math.random() * 360
            const scale = 0.5 + Math.random() * 1.5
            const duration = 15 + Math.random() * 10
            const iconSize = 40 + Math.floor(Math.random() * 40)

            return (
              <motion.div
                key={index}
                className="absolute text-gray-600 opacity-10"
                initial={{
                  x: xPos,
                  y: yPos,
                  rotate: rotation,
                  scale: scale,
                }}
                animate={{
                  y: [yPos, yPos - 50, yPos],
                  rotate: [rotation, rotation + 360],
                  opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                  duration: duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: element.delay,
                  repeatType: "reverse",
                }}
              >
                <element.icon size={iconSize} />
              </motion.div>
            )
          })}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4 text-white">
            <AnimatedGradientText from="from-blue-300" via="via-purple-300" to="to-pink-300">
              Secure Banking Details
            </AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
            Transfer directly to our accounts with state-of-the-art security and instant processing
          </p>
        </ScrollReveal>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {accounts.map((account, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative group"
            >
              {/* Glowing border effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${account.color} rounded-2xl -m-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                animate={{
                  boxShadow:
                    activeCard === index
                      ? ["0 0 0px rgba(79,70,229,0.2)", "0 0 20px rgba(79,70,229,0.4)", "0 0 0px rgba(79,70,229,0.2)"]
                      : "none",
                }}
                transition={{
                  duration: 2,
                  repeat: activeCard === index ? Number.POSITIVE_INFINITY : 0,
                }}
              />

              <motion.div className="bg-gray-800 backdrop-blur-lg rounded-xl p-6 border border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <motion.div
                    className="w-40 h-20 relative flex-shrink-0 bg-gray-900 rounded-lg p-4 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={account.logo || "/placeholder.svg"}
                      alt={account.bankName}
                      width={160}
                      height={80}
                      className="object-contain p-2"
                    />

                    {/* Subtle animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${account.color} opacity-10`}
                      animate={{
                        opacity: [0.05, 0.15, 0.05],
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                        mixBlendMode: "overlay",
                      }}
                    />
                  </motion.div>

                  <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400">Purpose</label>
                      <p className="font-medium text-lg text-white">{account.purpose}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400">Account Name</label>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-200">{account.details.accountName}</p>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="h-6 w-6 p-0 text-gray-400 hover:text-gray-200"
                          onClick={() => handleCopy(account.details.accountName, `${index}-name`)}
                        >
                          {copiedField === `${index}-name` ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400">Account Number</label>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-200 font-mono">{account.details.accountNumber}</p>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="h-6 w-6 p-0 text-gray-400 hover:text-gray-200"
                          onClick={() => handleCopy(account.details.accountNumber, `${index}-account`)}
                        >
                          {copiedField === `${index}-account` ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copy notification */}
                <AnimatePresence>
                  {copiedField && copiedField.startsWith(`${index}`) && (
                    <motion.div
                      className="absolute top-2 right-2 bg-green-500/90 text-white text-sm py-1 px-3 rounded-full"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security badge */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-2 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Lock className="h-4 w-4" />
          <span>All transactions are secure and encrypted with bank-level security</span>
        </motion.div>
      </div>
    </section>
  )
}

