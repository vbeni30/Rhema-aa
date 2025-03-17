import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Convenient automatic monthly giving",
  "Easy to start, change, or cancel anytime",
  "Help us plan and budget more effectively",
  "Receive annual giving statements",
  "Set up recurring giving in less than 2 minutes",
  "Choose your preferred payment method",
]

export default function RecurringGiving() {
  return (
    <section className="py-24 px-8 bg-[#9B2B3A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="font-serif text-4xl font-normal mb-6">The Benefits of Recurring Giving</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our faithful giving community by setting up a recurring donation. It's a convenient way to support
              our ministry consistently.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-white text-[#9B2B3A] hover:bg-gray-100">
              Set Up Recurring Gift
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Monthly</p>
                    <p className="text-sm text-gray-600">$50/month</p>
                  </div>
                  <div className="h-4 w-4 rounded-full border-2 border-[#9B2B3A]" />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div>
                    <p className="font-medium">Quarterly</p>
                    <p className="text-sm text-gray-600">$150/quarter</p>
                  </div>
                  <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Annually</p>
                    <p className="text-sm text-gray-600">$600/year</p>
                  </div>
                  <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                </div>
                <div className="pt-6 border-t">
                  <Button className="w-full bg-[#9B2B3A] text-white hover:bg-[#8a2533]">Continue</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

