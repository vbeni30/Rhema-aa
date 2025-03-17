import { Clock } from "lucide-react"

const weeklySchedule = [
  { day: "Sunday", times: ["9:00 AM - 10:30 AM", "6:00 PM - 7:30 PM"] },
  { day: "Monday", times: ["7:00 PM - 8:30 PM (Prayer Group)"] },
  { day: "Tuesday", times: ["10:00 AM - 11:30 AM (Women's Bible Study)"] },
  { day: "Wednesday", times: ["7:00 PM - 8:30 PM (Bible Study)"] },
  { day: "Thursday", times: ["6:30 PM - 8:00 PM (Youth Group)"] },
  { day: "Friday", times: ["6:30 PM - 8:00 PM (Prayer Service)"] },
  { day: "Saturday", times: ["5:00 PM - 6:30 PM (Prayer & Worship)"] },
]

export default function ServiceTimes() {
  return (
    <section className="py-24 px-8 bg-[#4688D9]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Clock className="h-12 w-12 mx-auto mb-6 text-white" />
          <h2 className="font-serif text-4xl font-normal mb-4 text-white">Weekly Schedule</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Join us throughout the week for various services and activities.
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          {weeklySchedule.map((schedule, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 ${
                index !== weeklySchedule.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="w-32">
                <h3 className="font-serif text-xl font-semibold text-[#C31707]">{schedule.day}</h3>
              </div>
              <div className="flex-1">
                {schedule.times.map((time, timeIndex) => (
                  <div key={timeIndex} className={`flex items-center ${timeIndex > 0 ? "mt-2" : ""}`}>
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

