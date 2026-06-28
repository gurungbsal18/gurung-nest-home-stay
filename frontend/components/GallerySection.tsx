"use client"
import { fadeInUp, staggerContainer } from "@/lib/animation"
import { motion } from "framer-motion"

function GallerySection() {
  return (
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
          Photo <span className="text-primary">Gallery</span>
        </motion.h4>
        <motion.p className="text-center font-medium" variants={fadeInUp}>
          A glimpse into the beauty of our homestay and its surroundings.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default GallerySection
