import Image from "next/image"
import React from "react"

function Footer() {
  return (
    <div className="border border-t-gray-200">
      <div className="container mx-auto py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Gurung Nest Home Stay"
              height={300}
              width={300}
            />
            <p className="rounded-full bg-primary/10 px-4 py-2 text-center text-xl font-semibold text-primary">
              Stay with Comfort, Feel Like Home
            </p>
          </div>
          {/* <div>
            <p className="mb-2 font-heading font-semibold text-primary">
              Quick Links
            </p>
            <p className="text-gray-500">Terms and Condition</p>
            <p className="text-gray-500">Privacy Policy</p>
          </div> */}

          <div className="flex flex-col gap-2 text-center">
            <p className="text-center font-heading text-xl font-bold text-primary">
              CONTACT
            </p>
            <p className="text-gray-500">Ramkot, Kathmandu, Nepal</p>
            <a href="tel:+9779700941788">
              <p className="text-gray-500 hover:text-primary">
                +977 9700941788
              </p>
            </a>
            <a href="mailto:gurungnesthomestay@gmail.com">
              <p className="text-gray-500 hover:text-primary">
                gurungnesthomestay@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-between border-t border-gray-200 py-4 text-sm text-gray-500 lg:flex-row">
        <p>&copy; Gurung Nest Homestay. All rights reserved.</p>
        <p>Crafted with care above Kathmandu Valley</p>
      </div>
    </div>
  )
}

export default Footer
