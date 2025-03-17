import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ServicesHero from "@/components/ServicesHero"
import WeeklyServices from "@/components/WeeklyServices"
import MinistryAreas from "@/components/MinistryAreas"
import SpecialServices from "@/components/SpecialServices"
import ServiceTimes from "@/components/ServiceTimes"
import ServiceLocation from "@/components/ServiceLocation"
import JoinService from "@/components/JoinService"

export default function ServicesPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <ServicesHero />
      <WeeklyServices />
      <MinistryAreas />
      <SpecialServices />
      <ServiceTimes />
      <ServiceLocation />
      <JoinService />
      <Footer />
    </main>
  )
}

