import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function AboutHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')",
      }}
    >
      <div className="text-center z-10">
        <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6 animate-fade-in-up">About Our Church</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
          Discover our journey of faith, community, and service spanning over seven decades.
        </p>
        <Button className="bg-white text-[#9B2B3A] hover:bg-gray-100 px-8 py-6 text-lg font-semibold animate-fade-in-up animation-delay-600">
          Our Story
        </Button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-12 w-12" />
      </div>
    </section>
  )
}

