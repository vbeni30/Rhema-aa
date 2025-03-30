"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Filter, Calendar, Clock, ChevronDown } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { OptimizedImage } from "@/components/ui/optimized-image"

const sermons = [
  {
    id: 1,
    title: "The Power of Prayer",
    speaker: "Pastor John Doe",
    date: "June 5, 2024",
    duration: "45 min",
    category: "Prayer",
    image:
      "https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Finding Your Purpose",
    speaker: "Pastor Sarah Johnson",
    date: "May 29, 2024",
    duration: "38 min",
    category: "Purpose",
    image:
      "https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Overcoming Adversity",
    speaker: "Pastor John Doe",
    date: "May 22, 2024",
    duration: "42 min",
    category: "Faith",
    image:
      "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "The Heart of Worship",
    speaker: "Pastor Michael Smith",
    date: "May 15, 2024",
    duration: "40 min",
    category: "Worship",
    image:
      "https://images.unsplash.com/photo-1519834089823-9a9583a3f2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Building Strong Families",
    speaker: "Pastor Sarah Johnson",
    date: "May 8, 2024",
    duration: "47 min",
    category: "Family",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Walking in Faith",
    speaker: "Pastor John Doe",
    date: "May 1, 2024",
    duration: "39 min",
    category: "Faith",
    image:
      "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

const categories = ["All", "Faith", "Prayer", "Purpose", "Worship", "Family"]

export function SermonArchiveSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredSermons = sermons.filter((sermon) => {
    const matchesCategory = selectedCategory === "All" || sermon.category === selectedCategory
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Sermon Archive
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Browse our collection of past sermons and find inspiration for your spiritual journey.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                className="flex items-center justify-between bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white w-full md:w-auto min-w-[200px]"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <div className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  <span>{selectedCategory}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
              </button>

              {isFilterOpen && (
                <div className="absolute z-20 mt-2 w-full bg-gray-800 border border-white/20 rounded-lg shadow-xl">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors ${
                        selectedCategory === category ? "text-blue-400" : "text-white"
                      }`}
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsFilterOpen(false)
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 h-full flex flex-col">
                <div className="relative h-48">
                  <OptimizedImage src={sermon.image} alt={sermon.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {sermon.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">{sermon.title}</h3>
                  <p className="text-gray-400 mb-4">{sermon.speaker}</p>

                  <div className="flex items-center text-gray-400 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{sermon.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{sermon.duration}</span>
                    </div>
                  </div>

                  <AnimatedButton
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 w-full mt-auto"
                  >
                    Listen Now
                  </AnimatedButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No sermons found matching your search criteria.</p>
          </div>
        )}

        {filteredSermons.length > 0 && (
          <div className="mt-12 text-center">
            <AnimatedButton
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
              hoverScale={1.05}
            >
              Load More Sermons
            </AnimatedButton>
          </div>
        )}
      </div>
    </section>
  )
}

export default SermonArchiveSection

