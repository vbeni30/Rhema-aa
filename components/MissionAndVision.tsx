import { Target, Eye } from "lucide-react"

export default function MissionAndVision() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-[#09192A] mb-6" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To spread the love of Christ, nurture spiritual growth, and serve our community with compassion and grace.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Eye className="h-12 w-12 text-[#09192A] mb-6" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be a vibrant, inclusive community of faith that transforms lives and impacts the world for Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

