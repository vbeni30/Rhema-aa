"use client"

import { motion } from "framer-motion"
import { CreditCard, CalendarDays, Smartphone, Building } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"

const options = [
  {
    title: "One-Time Gift",
    description: "Make a single contribution to support our ministry and mission",
    icon: CreditCard,
    primary: true,
  },
  {
    title: "Recurring Giving",
    description: "Set up automatic monthly or weekly donations",
    icon: CalendarDays,
    primary: false,
  },
  {
    title: "Mobile Giving",
    description: "Give easily through our secure mobile app",
    icon: Smartphone,
    primary: false,
  },
  {
    title: "Text to Give",
    description: "Send your gift by texting GIVE to (555) 123-4567",
    icon: Building,
    primary: false,
  },
]

export default function GivingOptions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-24 px-8 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #9B2B3A 0%, transparent 50%), radial-gradient(circle at 80% 70%, #4688D9 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-center font-serif text-4xl font-normal mb-4">
            <AnimatedGradientText>Ways to Give</AnimatedGradientText>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Choose the giving option that works best for you. All donations are tax-deductible and processed securely.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
              className={`relative group rounded-xl p-8 transition-all duration-300 ${
                option.primary ? "bg-[#9B2B3A] text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="mb-6">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, type: "spring" }}>
                  <option.icon className={`h-12 w-12 ${option.primary ? "text-white" : "text-[#09192A]"}`} />
                </motion.div>
              </div>
              <motion.h3
                className="font-serif text-xl font-semibold mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {option.title}
              </motion.h3>
              <p className={`mb-6 ${option.primary ? "text-white/90" : "text-gray-600"}`}>{option.description}</p>
              <AnimatedButton
                className={`w-full ${
                  option.primary
                    ? "bg-white text-[#4688D9] hover:bg-gray-100"
                    : "bg-[#4688D9] text-white hover:bg-[#12355A]"
                }`}
              >
                Select
              </AnimatedButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

