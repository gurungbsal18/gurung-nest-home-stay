import Link from "next/link"
import React from "react"

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
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full w-7xl flex-col items-center justify-center gap-8 text-white">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="rounded-lg bg-yellow-500/60 px-4 py-2 text-xs font-semibold">
            RAMKOT, KATHMANDU
          </p>
          <h2 className="text-6xl font-bold">Escape the City</h2>
          <h2 className="text-6xl font-bold">
            Experience Kathmandu from Above
          </h2>
          <p className="mt-4 w-5xl text-xl">
            A peaceful hilltop homestay in Ramkot featuring breathtaking
            panoramic views of Kathmandu Valley, modern comfort, and
            unforgettable sunsets.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href=""
            className="flex h-16 items-center justify-center rounded-xl bg-primary px-8 py-6 duration-500 ease-in-out hover:bg-primary/80"
          >
            Book Your Stay
          </Link>
          <Link
            href=""
            className="flex h-16 items-center justify-center rounded-xl border border-white px-8 py-6 duration-500 ease-in-out hover:border-primary hover:bg-primary"
          >
            Explore Rooms
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
