import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Our Services Hero Image"
        fill
        priority
        className="object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">Our Services</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200">
          Join us in worship, fellowship, and spiritual growth through our various services and ministries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#C31707] hover:bg-gray-100 px-8 py-6 text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            View Schedule
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg"
          >
            Watch Live
          </Button>
        </div>
      </div>
    </section>
  )
}
