import React from "react"
import { PiMountainsLight } from "react-icons/pi"
import { TbSunset2 } from "react-icons/tb"
import { RiHome4Line } from "react-icons/ri"
import { PiMapPinLineLight } from "react-icons/pi"

const whyDb = [
  {
    id: 1,
    title: "Panoramic Valley Views",
    description:
      "Wake up to breathtaking views of the Kathmandu valley from your private balcony.",
    icon: PiMountainsLight,
  },
  {
    id: 2,
    title: "Sunrise & Sunset",
    description:
      "Experience golden hours over the Himalayas from our hilltop location.",
    icon: TbSunset2,
  },
  {
    id: 3,
    title: "Private Hilltop Home",
    description:
      "Enjoy the entire home to yourself with complete privacy and comfort.",
    icon: RiHome4Line,
  },
  {
    id: 4,
    title: "Easily City Access",
    description:
      "Just 30 minutes from central Kathmandu, peaceful yet perfectly connected.",
    icon: PiMapPinLineLight,
  },
]

function WhySection() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-8">
      <p className="font-semibold uppercase">Why Guests Love Staying Here</p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {whyDb.map((list) => {
          const Icon = list.icon

          return (
            <div
              key={list.id}
              className="flex flex-col items-start justify-center gap-4 rounded-lg p-6 shadow-lg duration-800 ease-in-out hover:border hover:border-primary hover:shadow-2xl"
            >
              <div className="flex w-full justify-center">
                <Icon className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <p className="font-semibold">{list.title}</p>
                <p className="text-xs text-gray-600">{list.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WhySection
