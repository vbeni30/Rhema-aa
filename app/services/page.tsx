"use client"

import { ScrollProgress } from "@/components/ui/scroll-progress"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BackToTop } from "@/components/back-to-top"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-red-900/30 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200">
            Join us in worship, fellowship, and spiritual growth through our various services and ministries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#weekly-services"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium"
            >
              View Schedule
            </a>
            <a
              href="#live"
              className="border-2 border-white/50 text-white bg-white/5 hover:bg-white/15 px-8 py-4 rounded-full text-lg"
            >
              Watch Live
            </a>
          </div>
        </div>
      </section>

      {/* Weekly Services Section */}
      <section id="weekly-services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Weekly Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Join us throughout the week for worship, teaching, and fellowship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
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
                    className="h-8 w-8 text-white"
                  >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Sunday Morning Service</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center">
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
                        className="h-4 w-4 mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      9:00 AM - 10:30 AM
                    </div>
                    <div className="flex items-center">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Main Sanctuary
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our main worship service featuring contemporary and traditional worship, prayer, and biblical
                    teaching.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 bg-opacity-10 text-white rounded-full text-sm">
                      Worship Team
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 bg-opacity-10 text-white rounded-full text-sm">
                      Children's Church
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
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
                    className="h-8 w-8 text-white"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Wednesday Bible Study</h3>
                  <div className="flex items-center gap-4 text-gray-300 mb-4">
                    <div className="flex items-center">
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
                        className="h-4 w-4 mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      7:00 PM - 8:30 PM
                    </div>
                    <div className="flex items-center">
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
                        className="h-4 w-4 mr-2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Fellowship Hall
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Mid-week biblical teaching and small group discussions for spiritual growth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 bg-opacity-10 text-white rounded-full text-sm">
                      Group Discussion
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 bg-opacity-10 text-white rounded-full text-sm">
                      Prayer Meeting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Special Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Join us for these special gatherings throughout the month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Special Service 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Baptism Service</h3>
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-blue-400"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  First Sunday of every month
                </div>
                <div className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  11:00 AM
                </div>
              </div>
              <p className="text-gray-300">
                Celebrate new beginnings as believers publicly declare their faith through baptism.
              </p>
            </div>

            {/* Special Service 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Communion Service</h3>
              <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                <div className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-blue-400"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  Last Sunday of every month
                </div>
                <div className="flex items-center">
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
                    className="h-5 w-5 mr-2 text-blue-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  All Services
                </div>
              </div>
              <p className="text-gray-300">Join us in remembering Christ's sacrifice through the Lord's Supper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 relative">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: "url('/placeholder.svg?height=600&width=800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Join Us This Week
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
              Whether you're a long-time believer or just starting to explore faith, there's a place for you here. Come
              as you are and experience God's love in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium"
              >
                Plan Your Visit
              </a>
              <a
                href="/contact"
                className="border-2 border-white/50 text-white bg-white/5 hover:bg-white/15 px-8 py-4 rounded-full text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}

