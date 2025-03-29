"use client"

import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

export default function SermonSubscribe() {
  return (
    <section className="py-24 px-8 bg-[#4688D9]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <Youtube className="h-16 w-16 mx-auto mb-8" />
        <h2 className="font-serif text-4xl font-normal mb-6">Never Miss a Sermon</h2>
        <p className="text-xl mb-12 opacity-90">
          Subscribe to our YouTube channel to watch our latest sermons, worship sessions, and special events.
        </p>
        <Button
          className="bg-white text-[#4688D9] hover:bg-gray-100 hover:text-[#12355A] px-8 py-6 text-lg font-semibold"
          onClick={() => window.open("https://youtube.com/@gospelchurch", "_blank")}
        >
          <Youtube className="mr-2 h-5 w-5" />
          Subscribe on YouTube
        </Button>
      </div>
    </section>
  )
}

