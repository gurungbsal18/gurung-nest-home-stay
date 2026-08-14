"use client"
import { fadeInUp, staggerContainer } from "@/lib/animation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui/button"
// import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    image: "/images/gurung-nest-images/entry.jpg",
  },
  {
    id: 2,
    image: "/images/gurung-nest-images/bedroom-1.jpg",
  },
  {
    id: 3,
    image: "/images/gurung-nest-images/bedroom.jpg",
  },
  {
    id: 4,
    image: "/images/gurung-nest-images/building-1.jpg",
  },
  {
    id: 5,
    image: "/images/gurung-nest-images/building.jpg",
  },
  {
    id: 6,
    image: "/images/gurung-nest-images/living-room-1.jpg",
  },
  {
    id: 7,
    image: "/images/gurung-nest-images/living-room-2.jpg",
  },
  {
    id: 8,
    image: "/images/gurung-nest-images/living-room-3.jpg",
  },
  {
    id: 9,
    image: "/images/gurung-nest-images/living-room-4.jpg",
  },
  {
    id: 10,
    image: "/images/gurung-nest-images/living-room-5.jpg",
  },
  {
    id: 11,
    image: "/images/gurung-nest-images/living-room-6.jpg",
  },
  {
    id: 12,
    image: "/images/gurung-nest-images/living-room.jpg",
  },
  {
    id: 13,
    image: "/images/gurung-nest-images/view.jpg",
  },
  {
    id: 14,
    image: "/images/gurung-nest-images/kitchen.jpg",
  },
  {
    id: 15,
    image: "/images/gurung-nest-images/balcony.jpg",
  },
]

function GallerySection() {
  // const [activeTab, setActiveTab] = useState(Boolean)
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

      <div className="mb-8 flex w-full justify-center gap-4">
        <Button>Living Room</Button>
        <Button>Bed Room</Button>
        <Button>Building</Button>
        <Button>Kitchen</Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((list) => (
          <div key={list.id} className="col-span-1">
            <Image
              src={list.image}
              alt="gurung nest"
              height={800}
              width={800}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection
