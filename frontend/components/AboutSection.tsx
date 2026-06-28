import React from "react"
import { SlLocationPin } from "react-icons/sl"

function AboutSection() {
  return (
    <div className="container mx-auto">
      <div className="mb-14 flex flex-col items-center gap-2">
        <p className="text-xs font-medium tracking-[0.2em]">
          ABOUT THE HOMESTAY
        </p>
        <h4 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-center">
          Wake Up <span className="text-primary">Above Kathmandu</span>
        </h4>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="space-y-5 lg:col-span-3">
          <p>
            Nestled on the peaceful hills of Ramkot, our homestay offers a
            unique escape from the busy city while keeping Kathmandu within easy
            reach. Enjoy spectacular panoramic views directly from your room and
            private balcony, surrounded by fresh air, green hills, and tranquil
            nature.
          </p>
          <div className="relative my-8 border-l-4 border-primary/40 py-3 pl-6">
            <p className="font-heading text-lg leading-relaxed text-foreground/70 italic sm:text-xl">
              A unique escape from the busy city while keeping the heart of
              Kathmandu within easy reach.
            </p>
          </div>
          <p className="">
            Whether you're visiting Kathmandu for vacation, work, or a weekend
            retreat, our home provides comfort, privacy, and unforgettable
            scenery. From morning mist over the valley to evening lights of the
            city below, every moment here is a memory in the making.
          </p>
        </div>
        <div className="relative lg:col-span-2">
          <div className="relative h-75 overflow-hidden rounded-2xl shadow-lg sm:h-100">
            <img
              src="/images/kathmandu-view.webp"
              alt="kathmandu"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2.5 -left-5 flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
            <div className="flex h-10 w-10 items-center rounded-full bg-primary/10 p-3">
              <SlLocationPin size={"24"} />
            </div>
            <div>
              <p className="text-xs">Located in</p>
              <p className="text-sm font-semibold">Ramkot, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
