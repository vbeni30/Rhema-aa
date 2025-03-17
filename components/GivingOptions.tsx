import { Button } from "@/components/ui/button"
import { CreditCard, CalendarDays, Smartphone, Building } from "lucide-react"

const options = [
  {
    title: "One-Time Gift",
    description: "Make a single contribution to support our ministry and mission",
    icon: CreditCard,
    primary: true,
  },
  {
    title: "Recurring Giving",
    description: "Set up automatic monthly or weekly donations",
    icon: CalendarDays,
    primary: false,
  },
  {
    title: "Mobile Giving",
    description: "Give easily through our secure mobile app",
    icon: Smartphone,
    primary: false,
  },
  {
    title: "Text to Give",
    description: "Send your gift by texting GIVE to (555) 123-4567",
    icon: Building,
    primary: false,
  },
]

export default function GivingOptions() {
  return (
    <section className="py-24 px-8 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Ways to Give</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the giving option that works best for you. All donations are tax-deductible and processed securely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`relative group rounded-xl p-8 transition-all duration-300 ${
                option.primary ? "bg-[#9B2B3A] text-white" : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="mb-6">
                <option.icon className={`h-12 w-12 ${option.primary ? "text-white" : "text-[#09192A]"}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">{option.title}</h3>
              <p className={`mb-6 ${option.primary ? "text-white/90" : "text-gray-600"}`}>{option.description}</p>
              <Button
                className={`w-full ${
                  option.primary
                    ? "bg-white text-[#4688D9] hover:bg-gray-100"
                    : "bg-[#4688D9] text-white hover:bg-[#12355A]"
                }`}
              >
                Select
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

