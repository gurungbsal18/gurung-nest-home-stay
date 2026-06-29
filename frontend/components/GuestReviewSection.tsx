"use client"
import { fadeInUp, staggerContainer } from "@/lib/animation"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"

const reviewDb = [
  {
    id: 1,
    name: "The Shrestha Family",
    location: "Lalitpur, Nepal",
    review:
      "A perfect weekend escape from the city. Our kids love it and we finally got to rest properly",
  },
  {
    id: 2,
    name: "Shopie L",
    location: "Berlin, Germany",
    review:
      "Worked from balcony every morning. The quiet, the views, the coffee - best workstation I've ever had.",
  },
  {
    id: 3,
    name: "Anjali and Rohan",
    location: "Mumbai, India",
    review:
      "We woke up to clouds rolling through the valley. Absolutely unreal. The host made us feel like family",
  },
]

function GuestReviewSection() {
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
          <span className="text-primary">Guest</span> Review
        </motion.h4>
        <motion.p className="text-center font-medium" variants={fadeInUp}>
          Hear from our guests about their experience.
        </motion.p>
      </motion.div>

      {/* review carousel */}

      {/* <Carousel className="w-full max-w-[12rem] sm:max-w-xs"> */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={"visible"}
      >
        <motion.div className="flex w-full justify-center" variants={fadeInUp}>
          <Carousel
            className="flex w-full flex-col justify-center md:max-w-150"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {reviewDb.map((list) => (
                <CarouselItem key={list.id}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-start justify-start gap-8 p-6">
                        <p className="text-lg font-medium text-gray-500 italic">
                          "{list.review}"
                        </p>
                        <div className="flex flex-col">
                          <p className="font-bold">{list.name}</p>
                          <p className="text-sm text-gray-500">
                            {list.location}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GuestReviewSection
