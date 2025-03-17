import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-24 px-8 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-normal mb-6">Stay Connected</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter to receive updates on church events, sermons, and community outreach
          opportunities.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit" className="bg-[#EA1908] hover:bg-[#B71607] text-white">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

