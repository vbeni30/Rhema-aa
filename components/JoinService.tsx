import { Button } from "@/components/ui/button"

export default function JoinService() {
  return (
    <section className="py-24 px-8 bg-[#4688D9] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="font-serif text-4xl font-normal mb-6">Join Us This Week</h2>
        <p className="text-xl mb-12 opacity-90">
          Whether you're a long-time believer or just starting to explore faith, there's a place for you here. Come as
          you are and experience God's love in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#9B2B3A] hover:bg-gray-100 px-8">
            Plan Your Visit
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20 px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}

