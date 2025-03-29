import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const sermonSeries = [
  {
    title: "Unshakeable Faith",
    description: "Discover how to build a faith that stands strong in the face of life's challenges.",
    image: "/placeholder.svg?height=400&width=600",
    current: true,
  },
  {
    title: "Living with Purpose",
    description: "Explore God's unique calling for your life and how to fulfill it.",
    image: "/placeholder.svg?height=400&width=600",
    current: false,
  },
  {
    title: "Grace Unveiled",
    description: "Dive deep into the transformative power of God's grace in our lives.",
    image: "/placeholder.svg?height=400&width=600",
    current: false,
  },
]

export default function SermonSeries() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Sermon Series</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermonSeries.map((series, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-lg shadow-md overflow-hidden ${series.current ? "ring-2 ring-[#4688D9]" : ""}`}
            >
              <div className="relative h-48">
                <Image src={series.image || "/placeholder.svg"} alt={series.title} fill className="object-cover" />
                {series.current && (
                  <div className="absolute top-4 right-4 bg-[#4688D9] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Current Series
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{series.title}</h3>
                <p className="text-gray-600 mb-4">{series.description}</p>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  Explore Series
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-[#4688D9] hover:bg-[#12355A] text-white px-8 py-6 text-lg">
            View All Sermon Series
          </Button>
        </div>
      </div>
    </section>
  )
}

