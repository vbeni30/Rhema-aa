import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AboutHero from "@/components/AboutHero"
import OurStory from "@/components/OurStory"
import OurBeliefs from "@/components/OurBeliefs"
import LeadershipTeam from "@/components/LeadershipTeam"
import MissionAndVision from "@/components/MissionAndVision"
import CommunityImpact from "@/components/CommunityImpact"
import Testimonials from "@/components/Testimonials"
import FAQSection from "@/components/FAQSection"
import JoinUs from "@/components/JoinUs"

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
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
    </main>
  )
}

