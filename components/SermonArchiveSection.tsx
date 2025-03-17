"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Play, Download, Calendar, Clock } from "lucide-react"

const sermons = [
  {
    title: "Walking in God's Purpose",
    speaker: "Pastor Jane Smith",
    date: "February 18, 2024",
    duration: "45 mins",
    series: "Purpose Driven Life",
    category: "Spiritual Growth",
  },
  {
    title: "The Heart of Worship",
    speaker: "Pastor John Doe",
    date: "February 11, 2024",
    duration: "38 mins",
    series: "Worship Series",
    category: "Worship",
  },
  {
    title: "Building Strong Relationships",
    speaker: "Pastor Michael Johnson",
    date: "February 4, 2024",
    duration: "42 mins",
    series: "Family Matters",
    category: "Relationships",
  },
  // Add more sermons as needed
]

export default function SermonArchiveSection() {
  const [view, setView] = useState<"grid" | "list">("list")

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Sermon Archive</h2>
          <div className="h-1 w-20 bg-[#4688D9] mx-auto" />
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Series</SelectItem>
                <SelectItem value="purpose">Purpose Driven Life</SelectItem>
                <SelectItem value="worship">Worship Series</SelectItem>
                <SelectItem value="family">Family Matters</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Speaker" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Speakers</SelectItem>
                <SelectItem value="john">Pastor John Doe</SelectItem>
                <SelectItem value="jane">Pastor Jane Smith</SelectItem>
                <SelectItem value="michael">Pastor Michael Johnson</SelectItem>
              </SelectContent>
            </Select>

            <Input type="month" className="w-[180px]" />
          </div>

          <div className="flex gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("grid")}
              className="hidden sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </Button>
            <Button
              variant={view === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("list")}
              className="hidden sm:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>

        <div className={`grid gap-6 ${view === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                view === "list" ? "flex flex-col sm:flex-row sm:items-center" : ""
              }`}
            >
              <div className={`relative aspect-video bg-gray-900 ${view === "list" ? "sm:w-64 sm:aspect-[4/3]" : ""}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#9B2B3A] hover:bg-gray-100 h-12 w-12 rounded-full"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="p-6 flex-1">
                <div className="mb-4">
                  <h3 className="font-serif text-xl font-semibold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600">{sermon.speaker}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {sermon.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {sermon.duration}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">{sermon.series}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">{sermon.category}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4 mr-2" /> Watch
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More Sermons
          </Button>
        </div>
      </div>
    </section>
  )
}

