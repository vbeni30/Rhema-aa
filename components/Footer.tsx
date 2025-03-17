import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">Rhema</h3>
          <p className="text-gray-400 mb-4">A life-changing journey to God.</p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
              <Link key={index} href="#" className="text-gray-400 hover:text-white">
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Services", "Events", "Sermons", "Give"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-gray-400 hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">
            Addis Ababa, Ethiopia
            <br />
            Mexico, Addis Ababa
          </p>
          <p className="text-gray-400 mt-2">
            Phone: +251 923 406 576
            <br />
            Email: info@rhemachurch.com
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Service Times</h4>
          <p className="text-gray-400">Sunday Worship: 10:00 AM</p>
          <p className="text-gray-400">Wednesday Bible Study: 7:00 PM</p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2025 Rhema Church. All rights reserved.</p>
      </div>
    </footer>
  )
}

