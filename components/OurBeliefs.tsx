import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const beliefs = [
  "The divine inspiration and authority of the Bible",
  "The Trinity: Father, Son, and Holy Spirit",
  "Salvation by grace through faith in Jesus Christ",
  "The importance of baptism and communion",
  "The church as the body of Christ",
  "The second coming of Jesus Christ",
]

export default function OurBeliefs() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Beliefs</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              At Rhema Church, our beliefs are rooted in the timeless truths of the Bible. We hold to the fundamental
              doctrines of the Christian faith, which have guided believers for centuries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              While we embrace these core beliefs, we also recognize that there can be diversity in non-essential
              matters. We encourage thoughtful exploration of Scripture and respectful dialogue within our community.
            </p>
            <Button className="bg-[#4688D9] text-white hover:bg-[#12355A]">Read Our Full Statement of Faith</Button>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold mb-6">Core Beliefs</h3>
            <ul className="space-y-4">
              {beliefs.map((belief, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-[#09192A] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{belief}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

