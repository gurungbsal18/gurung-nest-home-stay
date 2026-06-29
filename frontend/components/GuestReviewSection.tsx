"use client"
import { fadeInUp } from "@/lib/animation"
import { motion } from "framer-motion"

function GuestReviewSection() {
  return (
    <motion.div className="container mx-auto">
      <div className="mb-14 flex flex-col items-center gap-2">
        <motion.h4
          className="text-3xl font-bold sm:text-4xl lg:text-5xl"
          variants={fadeInUp}
        >
          <span className="text-primary">Guest</span> Review
        </motion.h4>
        <motion.p className="text-center font-medium" variants={fadeInUp}>
          Hear from our guests about their experience.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default GuestReviewSection
