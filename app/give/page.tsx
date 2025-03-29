"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { AnimatedBlob } from "@/components/ui/animated-blob"
import { AnimatedBackground } from "@/components/ui/animated-background"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GiveHero from "@/components/GiveHero"
import ImpactAreas from "@/components/ImpactAreas"
import BankAccounts from "@/components/BankAccounts"
import GivingFAQ from "@/components/GivingFAQ"
import OtherWaysToGive from "@/components/OtherWaysToGive"
import { BackToTop } from "@/components/back-to-top"

export default function GivePage() {
  return (
    <motion.main
      className="bg-gray-900 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress color="#9B2B3A" />
      <AnimatedBlob color="#9B2B3A" opacity={0.15} />
      <AnimatedBackground particleCount={30} particleColor="rgba(155, 43, 58, 0.2)" />
      <Navbar />
      <GiveHero />
      <ImpactAreas />
      <BankAccounts />
      <OtherWaysToGive />
      <GivingFAQ />
      <Footer />
      <BackToTop />
    </motion.main>
  )
}

