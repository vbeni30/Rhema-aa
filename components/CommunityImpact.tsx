import { Heart, Users, School, Globe } from "lucide-react"

const impactAreas = [
  {
    icon: Heart,
    title: "Local Outreach",
    description: "Serving our community through food banks, homeless shelters, and crisis support.",
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Offering various support groups for addiction recovery, grief, and more.",
  },
  {
    icon: School,
    title: "Education",
    description: "Providing after-school programs and adult education classes to empower our community.",
  },
  {
    icon: Globe,
    title: "Global Missions",
    description: "Supporting missionaries and humanitarian efforts around the world.",
  },
]

export default function CommunityImpact() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Community Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, index) => (
            <div key={index} className="text-center">
              <area.icon className="h-16 w-16 text-[#09192A] mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-4">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

