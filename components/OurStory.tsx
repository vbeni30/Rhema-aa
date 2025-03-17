import Image from "next/image"
import { Button } from "@/components/ui/button"

const timelineEvents = [
  { year: 1950, event: "Rhema Church founded" },
  { year: 1965, event: "New sanctuary built" },
  { year: 1980, event: "Community outreach program launched" },
  { year: 2000, event: "50th anniversary celebration" },
  { year: 2020, event: "Virtual services introduced" },
]

export default function OurStory() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1950, Rhema Church began as a small gathering of believers committed to sharing God's love
              with our community. Over the decades, we've grown in both size and impact, always staying true to our core
              mission of spreading the Gospel and serving others.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through the years, we've weathered challenges and celebrated countless blessings, witnessing God's
              faithfulness at every turn. Our church has been a beacon of hope, a place of refuge, and a center for
              spiritual growth for generations of families.
            </p>
            <Button className="bg-[#4688D9] text-white hover:bg-[#12355A]">Learn More About Our History</Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=400&width=600"
              alt="Historic photo of Gospel Church"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-center font-serif text-3xl font-normal mb-12 text-gray-900">Our Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative mb-8 ${index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"} md:w-1/2`}
              >
                <div className="absolute left-1/2 md:left-auto md:right-0 transform -translate-x-1/2 md:translate-x-1/2 w-4 h-4 rounded-full bg-[#C31707] z-10"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-serif text-xl font-semibold mb-2">{event.year}</h4>
                  <p className="text-gray-700">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

