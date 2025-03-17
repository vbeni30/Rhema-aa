import { CalendarDays, Clock, MapPin, Users, Book, Music, Heart } from "lucide-react"

const events = [
  {
    title: "Sunday Worship Service",
    day: "Every Sunday",
    time: "10:00 AM - 11:30 AM",
    location: "Main Sanctuary",
    icon: Users,
  },
  {
    title: "Bible Study Group",
    day: "Every Wednesday",
    time: "7:00 PM - 8:30 PM",
    location: "Fellowship Hall",
    icon: Book,
  },
  {
    title: "Youth Group",
    day: "Every Friday",
    time: "6:30 PM - 8:30 PM",
    location: "Youth Center",
    icon: Heart,
  },
  {
    title: "Choir Practice",
    day: "Every Thursday",
    time: "7:00 PM - 9:00 PM",
    location: "Choir Room",
    icon: Music,
  },
]

export default function RecurringEvents() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">Recurring Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <event.icon className="h-12 w-12 text-[#09192A] mr-6 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span>{event.day}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

