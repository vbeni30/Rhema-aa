"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Lock } from "lucide-react"

const amounts = ["25", "50", "100", "250", "500", "1000"]

export default function DonationForm() {
  const [customAmount, setCustomAmount] = useState("")
  const [selectedAmount, setSelectedAmount] = useState("")

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Make a Donation</h2>
          <p className="text-gray-600">Your gift helps us continue our mission and serve our community.</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <form className="space-y-8">
            <div>
              <Label className="text-lg mb-4 block">Select Amount</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={`text-lg py-8 ${selectedAmount === amount ? "bg-[#4688D9] text-white" : ""}`}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="custom-amount">Custom Amount</Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <Input
                  type="number"
                  name="custom-amount"
                  id="custom-amount"
                  className="pl-7"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount("")
                  }}
                />
              </div>
            </div>

            <div>
              <Label className="text-lg mb-4 block">Frequency</Label>
              <RadioGroup defaultValue="one-time" className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">One-time gift</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly recurring gift</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email address" />
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button className="w-full bg-[#4688D9] text-white hover:bg-[#12355A] h-12 text-lg">
                <Lock className="mr-2 h-4 w-4" /> Donate Securely
              </Button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Your donation is secure and encrypted. You can change or cancel your donation at any time.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

