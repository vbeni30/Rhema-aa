import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const ministries = [
  {
    name: "Children's Ministry",
    description: "Nurturing young hearts in faith through age-appropriate teaching and activities.",
    image: "https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 3-12",
  },
  {
    name: "Youth Ministry",
    description: "Empowering teenagers to grow in their faith journey through fellowship and mentorship.",
    image: "https://images.unsplash.com/photo-1594913421979-b9399c0cd4f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 13-18",
  },
  {
    name: "Young Women",
    description: "Building community and faith among young professionals and college students.",
    image: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 18-30",
  },
  {
    name: "Adult Ministry",
    description: "Deepening faith through Bible study, small groups, and fellowship.",
    image: "https://images.unsplash.com/photo-1697490251908-5a364a6b5e0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "Ages 30+",
  },
  {
    name: "Business Owners",
    description: "Fellowship and spiritual growth opportunities.",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "All Ages",
  },
  {
    name: "Marriage Ministry",
    description: "Supporting and strengthening marriages through counseling and workshops.",
    image: "https://images.unsplash.com/photo-1480623940435-62a1340b08c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600",
    ages: "All Couples",
  },
]

export default function MinistryAreas() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="font-serif text-4xl font-normal mb-4">Ministry Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer various ministries to serve every age group and life stage in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48">
                <Image
                  src={ministry.image || "/placeholder.svg"}
                  alt={ministry.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">{ministry.ages}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{ministry.name}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <Button variant="ghost" className="group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

