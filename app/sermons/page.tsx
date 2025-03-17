"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SermonsHero from "@/components/SermonsHero"
import LatestSermon from "@/components/LatestSermon"
import SermonSeries from "@/components/SermonSeries"
import SermonArchiveSection from "@/components/SermonArchiveSection"
import SermonResources from "@/components/SermonResources"
import SermonSubscribe from "@/components/SermonSubscribe"

export default function SermonsPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <SermonsHero />
      <LatestSermon />
      <SermonSeries />
      <SermonArchiveSection />
      <SermonResources />
      <SermonSubscribe />
      <Footer />
    </main>
  )
}

