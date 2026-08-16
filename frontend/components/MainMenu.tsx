"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Rooms", id: "rooms" },
  { label: "Gallery", id: "gallery" },
  { label: "Amenities", id: "amenities" },
  { label: "Attractions", id: "attractions" },
  // { label: "Contact", id: "contact" },
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

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  // Close on Escape, and auto-close if resized up to desktop nav breakpoint
  useEffect(() => {
    if (!mobileOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [mobileOpen])

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
        {/* 3-column grid: logo (auto) | nav (1fr, centered) | actions (auto).
            This is what actually centers the nav — a flex row can't center
            a middle item independently of however wide the outer items are,
            but a grid's middle 1fr column always centers regardless of what
            the logo or the action buttons measure. */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3 lg:py-4">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Go to home section"
          >
            {/* Fixed-height, auto-width image keeps the logo's own aspect
                ratio intact and gives the grid a stable, known column size —
                the previous h-15/w-100 classes don't exist in Tailwind's
                default scale, so the box had no reliable size at all. */}
            <Image
              src="/images/logo-white.png"
              alt="Gurung Nest Homestay"
              width={180}
              height={60}
              priority
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          </button>

          <nav className="hidden items-center gap-1 justify-self-center rounded-full border border-white/10 bg-white/10 px-2 py-2 shadow-lg shadow-black/10 backdrop-blur-md xl:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 justify-self-end">
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
              aria-controls="mobile-menu-panel"
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
          id="mobile-menu-panel"
          className={cn(
            "overflow-hidden transition-[max-height,opacity,transform] duration-300 xl:hidden",
            mobileOpen
              ? "pointer-events-auto max-h-[30rem] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          )}
        >
          <div className="mb-4 rounded-3xl border border-white/10 bg-zinc-950/90 p-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition-all duration-200 hover:border-primary/40 hover:bg-primary/15 hover:text-white",
                    "ease-out",
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-1 opacity-0"
                  )}
                  style={{
                    transitionDelay: mobileOpen ? `${index * 30}ms` : "0ms",
                    transitionDuration: "220ms",
                    transitionProperty: "transform, opacity",
                  }}
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