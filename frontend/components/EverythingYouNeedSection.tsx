import React from 'react'
import { PiMountains } from "react-icons/pi";
import { TbSunset2 } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { LuBedDouble } from "react-icons/lu";
import { TbSofa } from "react-icons/tb";
import { LuCookingPot } from "react-icons/lu";
import { SlCup } from "react-icons/sl";
import { LuTrees } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { LuCircleParking } from "react-icons/lu";
import { LuShowerHead } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

const db = [
    {
        id: 1,
        title: "Panoramic View",
        icon: PiMountains
    },
    {
        id: 2,
        title: "Sunset View",
        icon: TbSunset2
    },
    {
        id: 3,
        title: "Entire Private Home",
        icon: FiHome
    },
    {
        id: 4,
        title: "Master Bedroom",
        icon: LuBedDouble
    },
    {
        id: 5,
        title: "Spacious Living Room",
        icon: TbSofa
    },
    {
        id: 6,
        title: "Modern Modular Kitchen",
        icon: LuCookingPot
    },
    {
        id: 7,
        title: "Private Balcony",
        icon: SlCup
    },
    {
        id: 8,
        title: "Peaceful Environment",
        icon: LuTrees
    },
    {
        id: 9,
        title: "High Speed WiFi",
        icon: FaWifi
    },
    {
        id: 10,
        title: "Parking Available",
        icon: LuCircleParking
    },
    {
        id: 11,
        title: "24/7 Hot Water",
        icon: LuShowerHead
    },
    {
        id: 12,
        title: "Easy Access to Kathmandu",
        icon: GrLocation
    },
]

function EverythingYouNeedSection() {
  return (
    <div className='container mx-auto'>
      <div className="mb-14 flex flex-col items-center gap-2">
        <h4 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
         <span className="text-primary">Everything</span> You Need
        </h4>
        <p className="font-medium">
          Thoughtfully designed spaces and amenities for a comfortable stay.
        </p>
      </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16'>
        {db.map((list) => {
            const Icon = list.icon
            return (
              <div
                key={list.id}
                className="flex flex-col items-center justify-start gap-2 rounded-xl border border-border/80 p-4 duration-700 ease-in-out hover:border-primary/80 hover:shadow-sm dark:bg-secondary/20"
              >
                <span className="w-fit rounded-full bg-primary/10 p-4 text-primary">
                  <Icon size={"24"} />
                </span>
                <p className="text-center text-sm font-medium">{list.title}</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default EverythingYouNeedSection
