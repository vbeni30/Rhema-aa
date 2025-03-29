import { Button } from "@/components/ui/button"
import { BookOpen, Headphones, FileText, Share2 } from "lucide-react"

const resources = [
  {
    title: "Study Guides",
    description: "Download companion study materials for deeper reflection",
    icon: BookOpen,
    action: "Browse Guides",
  },
  {
    title: "Podcast",
    description: "Listen to our sermons on your favorite podcast platform",
    icon: Headphones,
    action: "Subscribe Now",
  },
  {
    title: "Sermon Notes",
    description: "Access weekly sermon notes and discussion questions",
    icon: FileText,
    action: "View Notes",
  },
  {
    title: "Share & Connect",
    description: "Share sermons with friends and join the conversation",
    icon: Share2,
    action: "Share",
  },
]

export default function SermonResources() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Sermon Resources</h2>
          <div className="h-1 w-20 bg-[#4688D9] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
              <resource.icon className="h-12 w-12 mx-auto mb-6 text-[#09192A]" />
              <h3 className="font-serif text-xl font-semibold mb-4">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <Button variant="outline" className="w-full">
                {resource.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

