import React from "react"

function Footer() {
  return (
    <div className="border border-t-gray-200">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-24">
          <div className="col-span-1 flex flex-col gap-2 lg:col-span-2">
            <p className="font-heading text-2xl font-bold text-primary">
              Gurung Nest Homestay
            </p>
            <p className="text-sm text-gray-500">
              A peaceful hilltop homestay in Ramkot, Kathmandu offering
              breathtaking panoramic views of Kathmandu Valley, modern comfort,
              and unforgettable sunsets.
            </p>
          </div>
          <div>
            <p className="mb-2 font-heading font-semibold text-primary">
              Quick Links
            </p>
            <p className="text-gray-500">Terms and Condition</p>
            <p className="text-gray-500">Privacy Policy</p>
          </div>

          <div>
            <p className="mb-2 font-heading font-semibold text-primary">
              Contact
            </p>
            <p className="text-gray-500">Ramkot, Kathmandu, Nepal</p>
            <p className="text-gray-500">+977 9812345678</p>
            <p className="text-gray-500">info@gurungnesthomestay.com</p>
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
