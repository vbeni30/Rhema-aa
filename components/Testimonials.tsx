import Image from "next/image"

const testimonials = [
  {
    quote: "This church has transformed my life. I've found a loving community and deepened my faith.",
    author: "Birhanu lemma",
    role: "Church Member for 10 years",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The sermons are inspiring and relevant to modern life. I always leave feeling uplifted.",
    author: "Alem Girma",
    role: "New Member",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "I'm grateful for the outreach programs. They've helped me give back to our community.",
    author: "Besufikad Yidres",
    role: "Volunteer",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-4xl font-normal mb-16 text-gray-900">What Our Community Says</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

