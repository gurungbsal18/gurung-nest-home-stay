"use client";
import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";
import { IoMenu } from "react-icons/io5";

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
      <div className="container mx-auto flex justify-between items-center font-bold">
        <p>Gurung Nest Homestay</p>

          <ul className="lg:flex justify-center gap-4 hidden">
            <li>Home</li>
            <li>About</li>
            <li>Rooms</li>
            <li>Gallery</li>
            <li>Amenities</li>
            <li>Attractions</li>            
            <li>Contact</li>
          </ul>

          <Button size={"lg"} variant={"secondary"} className="hidden lg:block">
            Book Now
          </Button>

        
      <IoMenu className="block lg:hidden"/>
        
      </div>
    </div>
  )
}

export default MainMenu
