import { Button } from "@/components/ui/button"
import { Play, Download, Share2, BookOpen } from "lucide-react"

export default function LatestSermon() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Latest Message</h2>
          <div className="h-1 w-20 bg-[#9B2B3A] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1616876195047-522271a73305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
            <Button
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#9B2B3A] hover:bg-gray-100 h-16 w-16 rounded-full p-0"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl mb-2">The Power of Unwavering Faith</h3>
              <p className="text-gray-600">Sunday, February 25, 2024</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                In this powerful message, Pastor John explores the transformative power of unwavering faith in our daily
                lives. Drawing from biblical examples and contemporary experiences, he shows us how to maintain strong
                faith even in challenging times.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Faith</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Spiritual Growth</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Perseverance</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#4688D9] hover:bg-[#12355A]">
                <Play className="mr-2 h-4 w-4" /> Watch Now
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
              <Button variant="outline">
                <BookOpen className="mr-2 h-4 w-4" /> Study Guide
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>

            <div className="pt-6 border-t">
              <p className="font-medium mb-2">Speaker</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-medium">Pastor John Doe</p>
                  <p className="text-sm text-gray-600">Senior Pastor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

