import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function EventsHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
      }}
    >
      <div className="text-center z-10 px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6 animate-fade-in-up">Church Events</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          Join us in worship, fellowship, and community service. There's always something happening at Gospel Church!
        </p>
        <Button className="bg-white text-[#4688D9] hover:bg-gray-100 px-8 py-6 text-lg font-semibold animate-fade-in-up animation-delay-600">
          <Calendar className="mr-2 h-5 w-5" />
          View All Events
        </Button>
      </div>
    </section>
  )
}

