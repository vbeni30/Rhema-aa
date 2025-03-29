import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BackToTop from "@/components/back-to-top"
import SermonsHero from "@/components/sermons/SermonsHero"
import LatestSermon from "@/components/sermons/LatestSermon"
import SermonSeries from "@/components/sermons/SermonSeries"
import SermonArchiveSection from "@/components/sermons/SermonArchiveSection"
import SermonResources from "@/components/sermons/SermonResources"
import SermonSubscribe from "@/components/sermons/SermonSubscribe"

export const metadata: Metadata = {
  title: "Sermons | Rhema Church",
  description:
    "Explore our collection of inspiring sermons that will strengthen your faith and deepen your understanding of God's Word.",
}

export default function SermonsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SermonsHero />
        <LatestSermon />
        <SermonSeries />
        <SermonArchiveSection />
        <SermonResources />
        <SermonSubscribe />
      </main>
      <BackToTop />
      <Footer />
    </>
  )
}

