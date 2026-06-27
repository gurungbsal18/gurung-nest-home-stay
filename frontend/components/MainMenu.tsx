import React from "react"
import { Button } from "./ui/button"

function MainMenu() {
  return (
    <div className="fixed top-0 z-1 w-full py-4 font-semibold text-white shadow-2xl">
      <div className="container mx-auto flex justify-between">
        <p>Gurung Nest Home Stay</p>

        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
          </ul>

          <Button size={"lg"} variant={"secondary"}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
