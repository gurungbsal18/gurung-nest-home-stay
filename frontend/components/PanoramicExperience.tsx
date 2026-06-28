import React from "react"
import { Button } from "./ui/button"
import { MdOutlineWbSunny } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";

function PanoramicExperience() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="h-100 overflow-hidden rounded-xl">
            <img
              src="/images/kathmandu-view.webp"
              alt="kathmandu"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-8">
          <h4 className="text-center text-3xl font-bold sm:text-4xl md:text-left lg:text-5xl">
            The <span className="text-primary">Panoramic</span> Experience
          </h4>
          <div className="flex flex-col gap-4">
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
          </div>
          <p className="font-heading italic">
            This is more than accommodation—it's an experience.
          </p>
          <div className="flex w-full justify-center md:justify-start">
            <Button className="w-fit" size={"lg"}>
              Book Your Experience
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PanoramicExperience
