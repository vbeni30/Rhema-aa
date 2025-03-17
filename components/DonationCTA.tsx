import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export default function DonationCTA() {
  return (
    <section className="py-24 px-8 bg-[#4688D9] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="h-16 w-16 mx-auto mb-8" data-aos="zoom-in" />
        <h2 className="font-serif text-4xl font-normal mb-6" data-aos="fade-up" data-aos-delay="200">
          Support Our Ministry
        </h2>
        <p className="text-xl mb-12 opacity-90" data-aos="fade-up" data-aos-delay="400">
          Your generous donations help us continue our mission and serve our community. Every contribution, no matter
          the size, makes a difference.
        </p>
        <Button
          className="bg-white text-[#12355A] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Donate Now
        </Button>
      </div>
    </section>
  )
}

