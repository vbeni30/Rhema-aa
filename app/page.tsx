import Navbar from "@/components/Navbar"
import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import ServicesSection from "@/components/home/ServicesSection"
import EventsSection from "@/components/home/EventsSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"
import DonateSection from "@/components/home/DonateSection"
import ConnectSection from "@/components/home/ConnectSection"
import Footer from "@/components/Footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialsSection />
      <DonateSection />
      <ConnectSection />
      <Footer />
      <BackToTop />
    </main>
  )
}

