"use client"
import Link from "next/link"
import { LuCalendarDays } from "react-icons/lu"
import { GrLocation } from "react-icons/gr"
import { motion, stagger, type Variants } from "framer-motion"
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animation"
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

// const locationBadgeVariants: Variants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut" as const },
//   },
// }

function HeroSection() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "100vh",
        backgroundImage: 'url("/images/kathmandu-view.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" /> */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full w-full flex-col items-center justify-center gap-8 text-white lg:w-7xl">
        <motion.div
          className="flex flex-col items-center gap-2 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="flex items-center gap-1 rounded-lg bg-yellow-500/60 px-4 py-2 text-xs font-semibold"
            variants={fadeInUp}
          >
            <GrLocation /> RAMKOT, KATHMANDU
          </motion.p>
          <motion.h2
            className="text-3xl font-bold md:text-4xl lg:text-6xl"
            variants={fadeInUp}
          >
            Escape the City
          </motion.h2>
          <motion.h2
            className="text-2xl font-bold md:text-4xl lg:text-6xl"
            variants={fadeInUp}
          >
            <span className="text-primary">Experience Kathmandu</span> from
            Above
          </motion.h2>
          <motion.p
            className="mt-4 w-full text-base md:text-xl lg:w-5xl"
            variants={fadeInUp}
          >
            A peaceful hilltop homestay in Ramkot featuring breathtaking
            panoramic views of Kathmandu Valley, modern comfort, and
            unforgettable sunsets.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 md:flex-row md:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView={"visible"}
        >
          <Link href={""}>
            <motion.button
              className="flex h-8 items-center justify-center gap-2 rounded-xl bg-primary px-8 py-6 duration-500 ease-in-out hover:bg-primary/80 md:h-16"
              variants={fadeIn}
            >
              <LuCalendarDays size={"24"} />
              Book Your Stay
            </motion.button>
          </Link>
          <Link href="#">
            <motion.button
              className="flex h-8 w-full items-center justify-center rounded-xl border border-white px-8 py-6 duration-500 ease-in-out hover:border-primary hover:bg-primary md:h-16"
              variants={fadeIn}
            >
              Explore Rooms
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 z-[2] -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-6 text-white/60" />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
