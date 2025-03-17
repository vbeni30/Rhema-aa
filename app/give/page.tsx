import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GiveHero from "@/components/GiveHero"
import ImpactAreas from "@/components/ImpactAreas"
import BankAccounts from "@/components/BankAccounts"
import GivingFAQ from "@/components/GivingFAQ"
import OtherWaysToGive from "@/components/OtherWaysToGive"

export default function GivePage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <GiveHero />
      <ImpactAreas />
      <BankAccounts />
      <OtherWaysToGive />
      <GivingFAQ />
      <Footer />
    </main>
  )
}

