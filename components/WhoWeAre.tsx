import Link from "next/link";
import { BookOpen, Church, Cross } from "lucide-react"; // Import Lucide icons

const features = [
  {
    title: "Our Beliefs",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: BookOpen, // Replaced with Lucide icon
  },
  {
    title: "Our Church",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: Church, // Replaced with Lucide icon
  },
  {
    title: "Our Mission",
    description: "Worry Ends When Faith Begins. The Magnificent Story of a Life-Changing Journey to God.",
    icon: Cross, // Replaced with Lucide icon
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-32 px-8 bg-white">
      <h2
        className="text-center font-serif text-sm font-normal text-gray-600 uppercase tracking-widest mb-12"
        data-aos="fade-down"
      >
        Who we are
      </h2>
      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <feature.icon className="w-8 h-8 mb-8 text-gray-600" /> {/* Adjusted size here */}
            <h3 className="font-serif text-2xl font-normal mb-6 text-gray-900">{feature.title}</h3>
            <p className="text-base leading-relaxed text-gray-600 mb-6">{feature.description}</p>
            <Link href="#" className="text-[#4688D9] hover:text-[#8a2533] text-sm inline-flex items-center gap-2">
              <span className="text-lg">+</span> Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
