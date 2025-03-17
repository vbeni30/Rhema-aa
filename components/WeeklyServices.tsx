import { Clock, MapPin, Music, Book, Users, Heart } from "lucide-react"

const services = [
  {
    name: "Sunday Morning Service",
    time: "9:00 AM - 10:30 AM",
    description:
      "Our main worship service featuring contemporary and traditional worship, prayer, and biblical teaching.",
    features: ["Worship Team", "Children's Church", "Nursery Available", "Live Stream"],
    icon: Music,
  },
  {
    name: "Sunday Evening Service",
    time: "6:00 PM - 7:30 PM",
    description: "An intimate evening service focused on deeper biblical study and worship.",
    features: ["Bible Study", "Youth Group", "Prayer Time"],
    icon: Book,
  },
  {
    name: "Wednesday Bible Study",
    time: "7:00 PM - 8:30 PM",
    description: "Mid-week biblical teaching and small group discussions for spiritual growth.",
    features: ["Group Discussion", "Prayer Meeting", "Fellowship"],
    icon: Users,
  },
  {
    name: "Friday Prayer Service",
    time: "6:30 PM - 8:00 PM",
    description: "Dedicated time for corporate prayer and intercession for our church and community.",
    features: ["Worship", "Intercession", "Testimonies"],
    icon: Heart,
  },
]

export default function WeeklyServices() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Weekly Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us throughout the week for worship, teaching, and fellowship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 transition-all hover:shadow-lg">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#4688D9]/10 rounded-xl">
                  <service.icon className="h-8 w-8 text-[#09192A]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold mb-2">{service.name}</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Main Sanctuary
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-3 py-1 bg-[#4688D9]/5 text-[#09192A] rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

