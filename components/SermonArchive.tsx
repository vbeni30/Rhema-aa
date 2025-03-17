import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const sermons = [
  {
    title: "እግዚአብሄርን መፍራት",
    speaker: "Teacher Solomon",
    date: "1 month ago",
    thumbnail: "https://i.ytimg.com/vi/f126MMAH2Og/maxresdefault.jpg",
    videoId: "f126MMAH2Og",    
  },
  {
    title: "Pastor Aser",
    speaker: "Guest speaker Pastor Aser",
    date: "4 months ago",
    thumbnail: "https://i.ytimg.com/vi/oMriVefc2I0/maxresdefault.jpg",
    videoId: "oMriVefc2I0", 
  },
  {
    title: "የተትረፈረፈ ህይወት በመጋቢ ፋሲል ቀ/ወርቅ ",
    speaker: "Pastor Fasil K/werk",
    date: "4 months ago",
    thumbnail: "https://i.ytimg.com/vi/VmOhCKYIZ5M/maxresdefault.jpg",
    videoId: "VmOhCKYIZ5M",   
  },
]

export default function SermonArchive() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900" data-aos="fade-down">
          Recent Sermons
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* YouTube Video Embed */}
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${sermon.videoId}`}
                  title={sermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <p className="text-sm">{sermon.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-[#4688D9] hover:bg-[#12355A] text-white px-8 py-6 text-lg">View All Sermons</Button>
        </div>
      </div>
    </section>
  )
}

