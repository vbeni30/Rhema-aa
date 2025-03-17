import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import EventsHero from "@/components/EventsHero"
import UpcomingEvents from "@/components/UpcomingEvents"
import RecurringEvents from "@/components/RecurringEvents"
import SermonSeries from "@/components/SermonSeries"

export default function EventsPage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <EventsHero />
      <UpcomingEvents />
      <RecurringEvents />
      <SermonSeries />
      <Footer />
    </main>
  )
}

