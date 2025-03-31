"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ConnectSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]"
          style={{ y }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Stay Connected
            </h2>

            <p className="text-gray-300 mb-6 text-lg">
              Join our mailing list to receive updates on church events, sermons, and community outreach opportunities.
            </p>

            <form className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>

              <Button className="bg-white text-black hover:bg-white/90 w-full h-12">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Visit Us</h3>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-2">Address</h4>
                <p className="text-gray-400">
                  Addis Ababa, Ethiopia
                  <br />
                  Mexico, Addis Ababa
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Service Times</h4>
                <p className="text-gray-400">
                  Sunday: 10:00 AM
                  <br />
                  Wednesday: 7:00 PM
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Contact</h4>
                <p className="text-gray-400">
                  Phone: +251 923 406 576
                  <br />
                  Email: info@rhemachurch.com
                </p>
              </div>
            </div>

            <Link href="/about">
              <button className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 bg-transparent border border-white/20 text-white transition-colors hover:bg-white/10">
                Plan Your Visit
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

