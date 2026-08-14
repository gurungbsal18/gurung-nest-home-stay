"use client"
import { fadeInUp, staggerContainer } from "@/lib/animation"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "./ui/button"

const galleryTabs = [
  {
    id: "living-room",
    label: "Living Room",
    images: [
      "/images/gurung-nest-images/living-room-1.jpg",
      "/images/gurung-nest-images/living-room-2.jpg",
      "/images/gurung-nest-images/living-room-3.jpg",
      "/images/gurung-nest-images/living-room-4.jpg",
      "/images/gurung-nest-images/living-room-5.jpg",
      "/images/gurung-nest-images/living-room-6.jpg",
      "/images/gurung-nest-images/living-room.jpg",
    ],
  },
  {
    id: "bed-room",
    label: "Bed Room",
    images: [
      "/images/gurung-nest-images/bedroom-1.jpg",
      "/images/gurung-nest-images/bedroom.jpg",
    ],
  },
  {
    id: "building",
    label: "Building",
    images: [
      "/images/gurung-nest-images/entry.jpg",
      "/images/gurung-nest-images/building-1.jpg",
      "/images/gurung-nest-images/building.jpg",
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    images: [
      "/images/gurung-nest-images/kitchen.jpg",
      "/images/gurung-nest-images/balcony.jpg",
      "/images/gurung-nest-images/view.jpg",
    ],
  },
] as const

type GalleryTabId = (typeof galleryTabs)[number]["id"]

function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryTabId>(galleryTabs[0].id)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const activeGallery =
    galleryTabs.find((tab) => tab.id === activeTab) ?? galleryTabs[0]
  const activeImage =
    activeImageIndex !== null ? activeGallery.images[activeImageIndex] : null

  const closeLightbox = () => setActiveImageIndex(null)
  const openLightbox = (index: number) => setActiveImageIndex(index)
  const showNextImage = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((activeImageIndex + 1) % activeGallery.images.length)
  }
  const showPreviousImage = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex(
      (activeImageIndex - 1 + activeGallery.images.length) %
        activeGallery.images.length,
    )
  }

  useEffect(() => {
    if (!activeImage) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowRight") {
        showNextImage()
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImage, activeGallery.images.length])

  useEffect(() => {
    closeLightbox()
  }, [activeTab])

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

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {galleryTabs.map((tab) => {
          const isActive = tab.id === activeTab

          return (
            <Button
              key={tab.id}
              type="button"
              variant={isActive ? "default" : "outline"}
              onClick={() => setActiveTab(tab.id)}
              className="min-w-32"
            >
              {tab.label}
            </Button>
          )
        })}
      </div>

      <motion.div
        key={activeGallery.id}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {activeGallery.images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => openLightbox(index)}
            className="group cursor-zoom-in overflow-hidden rounded-2xl border border-border/60 bg-muted/30 text-left shadow-sm"
          >
            <Image
              src={image}
              alt={`${activeGallery.label} view of Gurung Nest`}
              height={800}
              width={800}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </motion.div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              variant="secondary"
              size="icon-sm"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10"
              aria-label="Close gallery preview"
            >
              <X className="size-4" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon-sm"
              onClick={showPreviousImage}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon-sm"
              onClick={showNextImage}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2"
              aria-label="Next image"
            >
              <ChevronRight className="size-4" />
            </Button>
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                src={activeImage}
                alt={`${activeGallery.label} enlarged view of Gurung Nest`}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
              {activeImageIndex !== null ? activeImageIndex + 1 : 0} /{" "}
              {activeGallery.images.length}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default GallerySection
