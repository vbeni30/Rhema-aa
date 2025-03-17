import { Gift, Landmark, Phone, Clock } from "lucide-react"

const ways = [
  {
    title: "Mail a Check",
    description: "Send your donation to: 123 Faith Street, Heavenly City, HC 12345",
    icon: Gift,
  },
  {
    title: "Bank Transfer",
    description: "Set up a direct bank transfer for your convenience",
    icon: Landmark,
  },
  {
    title: "Call to Give",
    description: "Call (555) 123-4567 to make a donation over the phone",
    icon: Phone,
  },
  {
    title: "Visit Us",
    description: "Give in person during our service times",
    icon: Clock,
  },
]

export default function OtherWaysToGive() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Other Ways to Give</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the giving method that works best for you. All donations support our ministry and mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <div key={index} className="bg-white rounded-xl p-8">
              <way.icon className="h-12 w-12 text-[#09192A] mb-6" />
              <h3 className="font-serif text-xl font-semibold mb-4">{way.title}</h3>
              <p className="text-gray-600">{way.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

