"use client"
import { LuCalendarDays } from "react-icons/lu"
import { GrLocation } from "react-icons/gr"
import { motion } from "framer-motion"
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animation"
import { ChevronDown } from "lucide-react"

function HeroSection() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    target?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

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
            <span className="text-yellow-500">Experience Kathmandu</span> from
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
          className="flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView={"visible"}
        >
          {/* <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 sm:w-auto sm:min-w-56 sm:text-base"
            variants={fadeIn}
          >
            <LuCalendarDays size={20} className="transition-transform duration-300 group-hover:scale-110" />
            Book Your Stay
          </motion.button> */}
          <motion.button
            type="button"
            onClick={() => scrollToSection("rooms")}
            className="group inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/80 hover:bg-primary/20 sm:w-auto sm:min-w-56 sm:text-base"
            variants={fadeIn}
          >
            Explore Rooms
          </motion.button>
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
