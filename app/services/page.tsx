"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { AnimatedBlob } from "@/components/ui/animated-blob"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BackToTop } from "@/components/back-to-top"
import ServicesHero from "@/components/services/ServicesHero"
import WeeklyServices from "@/components/services/WeeklyServices"
import SpecialServices from "@/components/services/SpecialServices"
import ServiceTimes from "@/components/services/ServiceTimes"
import ServiceLocation from "@/components/services/ServiceLocation"
import JoinService from "@/components/services/JoinService"
import MinistryAreas from "@/components/services/MinistryAreas"

export default function ServicesPage() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress color="#4688D9" />
      <AnimatedBlob color="#4688D9" opacity={0.15} />
      <AnimatedBackground particleCount={30} particleColor="rgba(70, 136, 217, 0.2)" />
      <Navbar />
      <ServicesHero />
      <WeeklyServices />
      <MinistryAreas />
      <SpecialServices />
      <ServiceTimes />
      <ServiceLocation />
      <JoinService />
      <Footer />
      <BackToTop />
    </motion.main>
  )
}

