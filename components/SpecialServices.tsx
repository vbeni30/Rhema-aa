import { Calendar, Clock } from "lucide-react"

const specialServices = [
  {
    name: "Baptism Service",
    date: "First Sunday of every month",
    time: "11:00 AM",
    description: "Celebrate new beginnings as believers publicly declare their faith through baptism.",
  },
  {
    name: "Communion Service",
    date: "Last Sunday of every month",
    time: "All Services",
    description: "Join us in remembering Christ's sacrifice through the Lord's Supper.",
  },
  {
    name: "Healing Service",
    date: "Third Wednesday of every month",
    time: "7:00 PM",
    description: "A special time of prayer for healing and restoration.",
  },
  {
    name: "Night of Worship",
    date: "Second Friday of every month",
    time: "7:00 PM",
    description: "An extended evening of praise and worship.",
  },
]

export default function SpecialServices() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Special Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Join us for these special gatherings throughout the month.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-[#4688D9]/20 transition-colors"
            >
              <h3 className="font-serif text-2xl font-semibold mb-4">{service.name}</h3>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#09192A]" />
                  {service.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#09192A]" />
                  {service.time}
                </div>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

