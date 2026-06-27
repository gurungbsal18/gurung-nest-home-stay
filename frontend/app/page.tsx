import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import { Button } from "@/components/ui/button"
import WhySection from "@/components/WhySection"

export default function Page() {
  return (
    <>
     <HeroSection />
      <div className="flex flex-col gap-32 pb-32">
        <div
          className="flex flex-col gap-32 py-32"
          style={{ background: "#FBFAF8" }}
        >
          <AboutSection />
          <WhySection />
        </div>
      </div></>
  )
}
