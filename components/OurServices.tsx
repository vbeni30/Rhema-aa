import { Calendar, Book, Users, Music } from "lucide-react"

const services = [
  { icon: Calendar, title: "Weekly Services", description: "Join us every Sunday for worship and fellowship." },
  { icon: Book, title: "Bible Study", description: "Deepen your understanding of scripture through our study groups." },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Serve others and make a difference in our local community.",
  },
  {
    icon: Music,
    title: "Worship Ministry",
    description: "Use your musical talents to glorify God in our worship team.",
  },
]

export default function OurServices() {
  return (
    <section className="py-32 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <service.icon className="mx-auto mb-6 h-12 w-12 text-[#12355A]" />
              <h3 className="font-serif text-xl font-normal mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

