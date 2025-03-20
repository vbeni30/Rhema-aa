"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1738597452982-5759da74f68d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Life-Changing Journey to God",
    description:
      "Our common creed is our belief in the Bible, our deep faith in Jesus Christ, and our acceptance of the unconditional love of God.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Join Our Vibrant Community",
    description:
      "Experience the warmth and fellowship of our church family. Together, we grow in faith and serve our community.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    title: "Discover Your Purpose",
    description:
      "Through worship, study, and service, we help you uncover God's plan for your life and empower you to live it out.",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0} // preload the first slide
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="relative z-20 flex items-center justify-center h-full px-8">
            <div className="text-center text-white max-w-3xl">
              <h1
                className="font-serif text-5xl md:text-7xl font-normal leading-tight mb-6"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                {slide.title}
              </h1>
              <p
                className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {slide.description}
              </p>
              <Button
                className="bg-[#4688D9] hover:bg-[#12355A] text-white px-8 py-6 text-lg"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full z-30"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full z-30"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </section>
  )
}
