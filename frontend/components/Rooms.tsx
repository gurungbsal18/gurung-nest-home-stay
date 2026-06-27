import React from "react"
import { PiMountainsLight } from "react-icons/pi"
import { LuBedDouble } from "react-icons/lu";
import { HiOutlineSun } from "react-icons/hi";
import { FaMattressPillow } from "react-icons/fa6";
import { TbSofa } from "react-icons/tb";
import { IoTvOutline } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { TbFridge } from "react-icons/tb";
import { LuMicrowave } from "react-icons/lu";
import { LuUtensilsCrossed } from "react-icons/lu";
import { ImInsertTemplate } from "react-icons/im";

const roomdb = [
  {
    id: 1,
    title: "Master Bedroom",
    description:
      "King-size bed with large windows offering scenic city views and comfortable mattress for a restful sleep.",
    image: "/images/bed-room.jpg",
    amenities: [
      {
        id: 1,
        icon: LuBedDouble,
        title: "King-size Bed",
      },
      {
        id: 2,
        icon: HiOutlineSun,
        title: "Large Windows",
      },
      {
        id: 3,
        icon: PiMountainsLight,
        title: "City Views",
      },
      {
        id: 4,
        icon: FaMattressPillow,
        title: "Premium Mattress",
      },
    ],
  },
  {
    id: 2,
    title: "Living Room",
    description:
      "Comfortable sofa, smart TV, and cozy seating with abundant natural lighting for relaxation.",
    image: "/images/living-room.jpg",
    amenities: [
      {
        id: 1,
        icon: TbSofa,
        title: "Comfortable Sofa",
      },
      {
        id: 2,
        icon: IoTvOutline,
        title: "72 inc Smart TV",
      },
      {
        id: 3,
        icon: RiSofaLine,
        title: "Cozy Seating",
      },
      {
        id: 4,
        icon: HiOutlineSun,
        title: "Natural Lighting",
      },
    ],
  },
  {
    id: 3,
    title: "Modular Kitchen",
    description:
      "Fully equipped modern kitchen with refrigerator, stove, microwave, and dining area.",
    image: "/images/kitchen.jpg",
    amenities: [
      {
        id: 1,
        icon: TbFridge,
        title: "Refrigerator",
      },
      {
        id: 2,
        icon: ImInsertTemplate,
        title: "Stove",
      },
      {
        id: 3,
        icon: LuMicrowave,
        title: "Microwave",
      },
      {
        id: 4,
        icon: LuUtensilsCrossed,
        title: "Dinning Area",
      },
    ],
  },
]

function Rooms() {
  return (
    <div className="container mx-auto">
      <div className="mb-14 flex flex-col items-center gap-2">
        <h4 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Your <span className="text-primary">Private</span> Retreat
        </h4>
        <p className="font-medium">
          Every space is designed for comfort, relaxation, and enjoying the
          views.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-16">
        {roomdb.map((room) => (
          <div
            key={room.id}
            className="rounded-xl border border-gray-200 duration-700 ease-in-out hover:shadow-2xl"
          >
            <div className="h-80 overflow-hidden">
              <img
                src={room.image}
                alt={room.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xl font-semibold font-heading mb-4">{room.title}</p>
              <p className="mb-4 text-gray-500">{room.description}</p>

              <div className="grid grid-cols-2 gap-4 text-gray-500">
                {room.amenities.map((amenity) => {
                  const Icon = amenity.icon

                  return (
                    <div key={amenity.id} className="flex items-center gap-2">
                      <Icon className="text-xl text-primary" />
                      <p className="text-xs">{amenity.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms
