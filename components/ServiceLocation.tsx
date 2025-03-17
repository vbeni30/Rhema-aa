import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ServiceLocation() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-normal mb-6">Location & Contact</h2>
            <p className="text-gray-600 mb-8">
              We're conveniently located in the heart of the city. Join us for our next service or reach out if you have
              any questions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-[#09192A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    Addis Ababa, Ethiopia
                    <br />
                    Mexico, Addis Ababa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-[#09192A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600">+251 912 326 587</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-[#09192A] mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@rhemachurch.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-[#4688D9] text-white hover:bg-[#12355A]"
                asChild
              >
                <a href="https://maps.app.goo.gl/chhngjF3vWrTrZ4f9" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="h-[400px] bg-gray-200 rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Rhema%20Faith%20Ministries%20A.A%20Church%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

