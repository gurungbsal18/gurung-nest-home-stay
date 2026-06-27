"use client";
import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";

function MainMenu() {
      const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    // <div className="fixed top-0 z-1 w-full py-4 font-semibold text-white shadow-2xl">
     <div
      className={cn(
        "fixed top-0 z-50 w-full py-4 transition-all duration-300",
        scrolled
          ? "bg-white shadow-lg backdrop-blur-md text-primary"
          : "shadow-lg backdrop-blur-md text-white"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p>Gurung Nest Home Stay</p>

        {/* <div className="flex items-center gap-4"> */}
          <ul className="flex justify-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Rooms</li>
            <li>Gallery</li>
            <li>Amenities</li>
            <li>Attractions</li>            
            <li>Contact</li>
          </ul>

          <Button size={"lg"} variant={"secondary"}>
            Book Now
          </Button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default MainMenu
