import AboutSection from "@/components/AboutSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection"
import GallerySection from "@/components/GallerySection"
import HeroSection from "@/components/HeroSection"
import PanoramicExperience from "@/components/PanoramicExperience"
import Rooms from "@/components/Rooms"
import { Button } from "@/components/ui/button"
import WhySection from "@/components/WhySection"

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-32 pb-32">
        <div
          className="flex flex-col gap-16 py-32 md:gap-32 dark:bg-secondary/20!"
          style={{ background: "#FBFAF8" }}
        >
          <AboutSection />
          <WhySection />
        </div>
        <EverythingYouNeedSection />
        <Rooms />
        <PanoramicExperience />
        <GallerySection />
        <AmenitiesSection />
      </div>
    </>
  )
}
