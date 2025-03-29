"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AboutHero from "@/components/about/AboutHero"
import OurStory from "@/components/about/OurStory"
import OurBeliefs from "@/components/about/OurBeliefs"
import LeadershipTeam from "@/components/about/LeadershipTeam"
import MissionAndVision from "@/components/about/MissionAndVision"
import CommunityImpact from "@/components/about/CommunityImpact"
import Testimonials from "@/components/about/Testimonials"
import FAQSection from "@/components/about/FAQSection"
import JoinUs from "@/components/about/JoinUs"
import { BackToTop } from "@/components/back-to-top"

export default function AboutPage() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionAndVision />
      <OurBeliefs />
      <LeadershipTeam />
      <CommunityImpact />
      <Testimonials />
      <FAQSection />
      <JoinUs />
      <Footer />
      <BackToTop />
    </motion.main>
  )
}

