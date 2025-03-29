"use client"

import { motion } from "framer-motion"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { BackToTop } from "@/components/back-to-top"
import Image from "next/image"

export default function EventsPage() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-red-900/30 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Church Events
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-gray-200">
            Join us in worship, fellowship, and community service. There's always something happening at Rhema Church!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#upcoming-events"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium"
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
                className="inline-block mr-2 h-5 w-5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Upcoming Events
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Join us for these special gatherings and be part of our vibrant community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1595003969098-b84179ec337f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Summer Youth Camp"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Summer Youth Camp</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>July 15-20, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>All Day</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Camp Wilderness</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">A week-long adventure for teens to grow in faith and friendship.</p>
                <button className="w-full bg-white text-black hover:bg-gray-200 py-2 px-4 rounded-md">
                  Learn More & Register
                </button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1553073520-80b5ad5ec870?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Community Outreach Day"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Community Outreach Day</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>August 5, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Various Locations</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">Join us as we serve our community through various projects.</p>
                <button className="w-full bg-white text-black hover:bg-gray-200 py-2 px-4 rounded-md">
                  Learn More & Register
                </button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fall Revival Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Fall Revival Services</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>September 10-12, 2025</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
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
                      className="h-4 w-4 mr-2 text-blue-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Main Sanctuary</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">Three nights of powerful worship and inspiring messages.</p>
                <button className="w-full bg-white text-black hover:bg-gray-200 py-2 px-4 rounded-md">
                  Learn More & Register
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            <button className="w-8 h-3 bg-blue-500 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
          </div>

          <div className="mt-16 text-center">
            <a
              href="/events/all"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium inline-block"
            >
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* Recurring Events Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Recurring Events
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Join us for our regular weekly gatherings and activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recurring Event 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Sunday Worship Service</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
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
                  <span>Every Sunday</span>
                </div>
                <div className="flex items-center text-gray-300">
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
                  <span>10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center text-gray-300">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Main Sanctuary</span>
                </div>
              </div>
              <p className="text-gray-300">
                Our Sunday worship service includes contemporary and traditional worship, prayer, and biblical teaching.
                Children's church and nursery services are available during this time.
              </p>
            </div>

            {/* Recurring Event 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Bible Study Group</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
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
                  <span>Every Wednesday</span>
                </div>
                <div className="flex items-center text-gray-300">
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
                  <span>7:00 PM - 8:30 PM</span>
                </div>
                <div className="flex items-center text-gray-300">
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Fellowship Hall</span>
                </div>
              </div>
              <p className="text-gray-300">
                Our midweek Bible study provides in-depth teaching and small group discussion. This is a great
                opportunity to deepen your understanding of Scripture and connect with others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Sermon Series
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Explore our current and past sermon series</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Series Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 ring-2 ring-blue-500">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Unshakeable Faith"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Current Series
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Unshakeable Faith</h3>
                <p className="text-gray-300 mb-4">
                  Discover how to build a faith that stands strong in the face of life's challenges.
                </p>
                <button className="w-full border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-md flex items-center justify-center">
                  Explore Series
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
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Series Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Living with Purpose"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Living with Purpose</h3>
                <p className="text-gray-300 mb-4">Explore God's unique calling for your life and how to fulfill it.</p>
                <button className="w-full border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-md flex items-center justify-center">
                  Explore Series
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
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Series Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Grace Unveiled"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Grace Unveiled</h3>
                <p className="text-gray-300 mb-4">
                  Dive deep into the transformative power of God's grace in our lives.
                </p>
                <button className="w-full border border-white/20 text-white hover:bg-white/10 py-2 px-4 rounded-md flex items-center justify-center">
                  Explore Series
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
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/sermons"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full text-lg font-medium inline-block"
            >
              View All Sermon Series
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </motion.main>
  )
}

