"use client"
import { motion } from "framer-motion"
import { PiMountains } from "react-icons/pi"
import { TbSunset2 } from "react-icons/tb"
import { FiHome } from "react-icons/fi"
import { LuBedDouble } from "react-icons/lu"
import { TbSofa } from "react-icons/tb"
import { LuCookingPot } from "react-icons/lu"
import { SlCup } from "react-icons/sl"
import { LuTrees } from "react-icons/lu"
import { FaWifi } from "react-icons/fa6"
import { LuCircleParking } from "react-icons/lu"
import { LuShowerHead } from "react-icons/lu"
import { GrLocation } from "react-icons/gr"
import { fadeInUp, staggerContainer } from "@/lib/animation"

const db = [
  {
    id: 1,
    title: "Panoramic View",
    icon: PiMountains,
  },
  {
    id: 2,
    title: "Sunset View",
    icon: TbSunset2,
  },
  {
    id: 3,
    title: "Entire Private Home",
    icon: FiHome,
  },
  {
    id: 4,
    title: "Master Bedroom",
    icon: LuBedDouble,
  },
  {
    id: 5,
    title: "Spacious Living Room",
    icon: TbSofa,
  },
  {
    id: 6,
    title: "Modern Modular Kitchen",
    icon: LuCookingPot,
  },
  {
    id: 7,
    title: "Private Balcony",
    icon: SlCup,
  },
  {
    id: 8,
    title: "Peaceful Environment",
    icon: LuTrees,
  },
  {
    id: 9,
    title: "High Speed WiFi",
    icon: FaWifi,
  },
  {
    id: 10,
    title: "Parking Available",
    icon: LuCircleParking,
  },
  {
    id: 11,
    title: "24/7 Hot Water",
    icon: LuShowerHead,
  },
  {
    id: 12,
    title: "Easy Access to Kathmandu",
    icon: GrLocation,
  },
]

function EverythingYouNeedSection() {
  return (
    <div className="container mx-auto">
      <motion.div
        className="mb-14 flex flex-col items-center gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h4
          className="text-3xl font-bold sm:text-4xl lg:text-5xl"
          variants={fadeInUp}
        >
          <span className="text-primary">Everything</span> You Need
        </motion.h4>
        <motion.p className="text-center font-medium" variants={fadeInUp}>
          Thoughtfully designed spaces and amenities for a comfortable stay.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {db.map((list) => {
          const Icon = list.icon
          return (
            <motion.div
              key={list.id}
              className="flex flex-col items-center justify-start gap-2 rounded-xl border border-border/80 p-4 duration-700 ease-in-out hover:border-primary/80 hover:shadow-sm dark:bg-secondary/20"
              variants={fadeInUp}
            >
              <span className="w-fit rounded-full bg-primary/10 p-4 text-primary">
                <Icon size={"24"} />
              </span>
              <p className="text-center text-sm font-medium">{list.title}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default EverythingYouNeedSection
