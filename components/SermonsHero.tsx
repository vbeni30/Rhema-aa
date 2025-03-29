import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SermonsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-normal mb-6">Sermons</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200">
          Explore our collection of inspiring messages that will encourage and strengthen your faith journey.
        </p>
        <div className="max-w-2xl mx-auto flex gap-4">
          <Input
            type="search"
            placeholder="Search sermons by title, speaker, or topic..."
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
          />
          <Button size="lg" className="bg-white text-[#9B2B3A] hover:bg-gray-100">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}

