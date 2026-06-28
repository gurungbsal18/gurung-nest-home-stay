"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { MdOutlineWbSunny } from "react-icons/md"
import { FiCoffee } from "react-icons/fi"
import { LuMoonStar } from "react-icons/lu"
import { fadeInUp, staggerContainer } from "@/lib/animation"

function PanoramicExperience() {
  return (
    <motion.div
      className="container mx-auto"
      variants={staggerContainer}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div className="col-span-1" variants={fadeInUp}>
          <div className="h-100 overflow-hidden rounded-xl">
            <img
              src="/images/kathmandu-view.webp"
              alt="kathmandu"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <div className="col-span-1 flex flex-col gap-8">
          <motion.h4
            className="text-center text-3xl font-bold sm:text-4xl md:text-left lg:text-5xl"
            variants={fadeInUp}
          >
            The <span className="text-primary">Panoramic</span> Experience
          </motion.h4>
          <motion.div className="flex flex-col gap-4" variants={fadeInUp}>
            <p className="flex items-center gap-3">
              <MdOutlineWbSunny size={"24"} /> Wake up to breathtaking sunrise
              views over Kathmandu Valley.
            </p>
            <p className="flex items-center gap-3">
              <FiCoffee size={"24"} />
              Enjoy coffee on your private balcony while overlooking the city
              skyline.
            </p>
            <p className="flex items-center gap-3">
              <LuMoonStar size={"24"} />
              As night falls, witness Kathmandu transform into a sea of
              sparkling lights.
            </p>
          </motion.div>
          <motion.p className="font-heading italic" variants={fadeInUp}>
            This is more than accommodation—it's an experience.
          </motion.p>
          <motion.div
            className="flex w-full justify-center md:justify-start"
            variants={fadeInUp}
          >
            <Button className="w-fit" size={"lg"}>
              Book Your Experience
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default PanoramicExperience
