"use client"
import { motion } from "framer-motion"
import { FaWifi } from "react-icons/fa6"
import { LuUtensils } from "react-icons/lu"
import { LuShowerHead } from "react-icons/lu"
import { LuCircleParking } from "react-icons/lu"
import { SlCup } from "react-icons/sl"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { LuTrees } from "react-icons/lu"
import { PiFlowerTulip } from "react-icons/pi"
import { TbSofa } from "react-icons/tb"
import { PiSecurityCamera } from "react-icons/pi"
import { MdOutlineWaterDrop } from "react-icons/md"
import { MdOutlinePower } from "react-icons/md"
import { fadeInUp, staggerContainer } from "@/lib/animation"

const amenitiesDb = [
  {
    id: 1,
    title: "WiFi",
    icon: FaWifi,
  },
  {
    id: 2,
    title: "Kitchen",
    icon: LuUtensils,
  },
  {
    id: 3,
    title: "Hot Water",
    icon: LuShowerHead,
  },
  {
    id: 4,
    title: "Parking",
    icon: LuCircleParking,
  },
  {
    id: 5,
    title: "Balcony",
    icon: SlCup,
  },
  {
    id: 6,
    title: "City View",
    icon: MdOutlineRemoveRedEye,
  },
  {
    id: 7,
    title: "Peaceful Environment",
    icon: LuTrees,
  },
  {
    id: 8,
    title: "Garden",
    icon: PiFlowerTulip,
  },
  {
    id: 9,
    title: "Living Hall",
    icon: TbSofa,
  },
  {
    id: 10,
    title: "Security",
    icon: PiSecurityCamera,
  },
  {
    id: 11,
    title: "Drinking Water",
    icon: MdOutlineWaterDrop,
  },
  {
    id: 12,
    title: "Power Backup",
    icon: MdOutlinePower,
  },
]

function AmenitiesSection() {
  return (
    <div
      className="flex flex-col gap-16 py-32 md:gap-32 dark:bg-secondary/20!"
      style={{ background: "#FBFAF8" }}
    >
      <div className="container mx-auto">
        <motion.div
          className="mb-14 flex flex-col items-center gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView={"visible"}
        >
          <motion.h4
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            variants={fadeInUp}
          >
            <span className="text-primary">Amenities</span> & Services
          </motion.h4>
          <motion.p className="text-center font-medium" variants={fadeInUp}>
            Everything you need for a comfortable and relaxing stay.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, margin: "-50px" }}
        >
          {amenitiesDb.map((list) => {
            const Icon = list.icon
            return (
              <motion.div
                key={list.id}
                className="border-border-20 flex flex-col items-center justify-center gap-4 rounded-2xl border bg-white p-4 transition-all duration-200 hover:border-primary/40 hover:bg-accent/5 md:flex-row md:justify-start dark:bg-black"
                variants={fadeInUp}
              >
                <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/30">
                  <Icon className="text-primary" />
                </div>
                <p className="text-center md:text-start">{list.title}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default AmenitiesSection
