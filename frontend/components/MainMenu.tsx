"use client"

import { useEffect, useState } from "react"
import { Menu, X, MapPin } from "lucide-react"

import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Rooms", id: "rooms" },
  { label: "Gallery", id: "gallery" },
  { label: "Amenities", id: "amenities" },
  { label: "Attractions", id: "attractions" },
  { label: "Contact", id: "contact" },
] as const

function MainMenu() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      target?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/15 bg-zinc-950/70 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
          : "bg-gradient-to-b from-zinc-950/45 to-transparent backdrop-blur-md"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4 py-4 lg:py-5">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home section"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              <MapPin className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="font-heading text-lg font-bold text-white lg:text-xl">
                Gurung Nest
              </p>
              <p className="text-xs font-medium tracking-[0.24em] text-white/70 uppercase">
                Homestay Ramkot
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-2 shadow-lg shadow-black/10 backdrop-blur-md xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              type="button"
              size="lg"
              className="hidden rounded-full px-6 shadow-lg shadow-primary/20 md:inline-flex"
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="icon-sm"
              className="inline-flex rounded-full bg-white/10 text-white hover:bg-white/20 xl:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-[max-height,opacity,transform] duration-300 xl:hidden",
            mobileOpen
              ? "pointer-events-auto max-h-[30rem] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          )}
        >
          <div className="mb-4 rounded-3xl border border-white/10 bg-zinc-950/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition-all duration-200 hover:border-primary/40 hover:bg-primary/15 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button
              type="button"
              className="mt-3 w-full rounded-2xl"
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainMenu
