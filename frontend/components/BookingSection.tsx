"use client"
import { fadeInUp, staggerContainer } from "@/lib/animation"
import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { BookingForm } from "./BookingForm"

function BookingSection() {
  return (
    <div className="container mx-auto">
      <motion.div
        className="mb-14 flex flex-col items-center gap-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView={"visible"}
      >
        <motion.p
          className="flex items-center gap-1 rounded-lg bg-yellow-500/60 px-4 py-2 text-xs font-semibold"
          variants={fadeInUp}
        >
          <CalendarDays size={"16"} /> Book Your Stay
        </motion.p>
        <motion.h4
          className="text-3xl font-bold sm:text-4xl lg:text-5xl"
          variants={fadeInUp}
        >
          Reserve Your<span className="text-primary"> Hilltop Retreat</span>
        </motion.h4>
        <motion.p className="text-center font-medium" variants={fadeInUp}>
          Book the entire home for your family or group.
        </motion.p>
      </motion.div>

      <BookingForm />
    </div>
  )
}

export default BookingSection
