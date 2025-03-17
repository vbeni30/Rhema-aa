import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function GiveHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <Heart className="h-16 w-16 mx-auto mb-8 animate-pulse" />
        <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">Give With Grace</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200">
          Your generosity helps us spread God's love and make a lasting impact in our community and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#9B2B3A] hover:bg-gray-100 px-8 py-6 text-lg">
            Give Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

