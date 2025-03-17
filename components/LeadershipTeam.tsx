import Image from "next/image"
import { Button } from "@/components/ui/button"

const leaders = [
  {
    name: "Apostle Fistum W/aregay",
    role: "Apostle",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Pastor John has been leading our congregation for over 20 years with wisdom and compassion.",
  },
  {
    name: "Apostle Tamirat",
    role: "Apostel",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jane's focus on youth ministry has helped shape the next generation of believers in our church.",
  },
  {
    name: "Pastor Shimeles",
    role: "Pastor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael's gift for music has elevated our worship services and brought us closer to God.",
  },
  {
    name: "Pastor Tewoderos",
    role: "Pastor",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah's dedication to community service has expanded our church's impact in the local area.",
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{leader.name}</h3>
                <p className="text-[#C31707] mb-4">{leader.role}</p>
                <p className="text-gray-600 mb-4">{leader.bio}</p>
                <Button variant="outline" className="w-full">
                  Read Full Bio
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

