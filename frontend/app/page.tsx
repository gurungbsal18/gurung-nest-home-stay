import AboutSection from "@/components/AboutSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import BookingSection from "@/components/BookingSection"
import EverythingYouNeedSection from "@/components/EverythingYouNeedSection"
import GallerySection from "@/components/GallerySection"
import GuestReviewSection from "@/components/GuestReviewSection"
import HeroSection from "@/components/HeroSection"
import PanoramicExperience from "@/components/PanoramicExperience"
import Rooms from "@/components/Rooms"
import WhySection from "@/components/WhySection"

export default function Page() {
  return (
    <>
      <section id="home" className="scroll-mt-28">
        <HeroSection />
      </section>
      <div className="flex flex-col gap-32 pb-32">
        <section
          id="about"
          className="flex scroll-mt-28 flex-col gap-16 py-32 md:gap-32 dark:bg-secondary/20!"
          style={{ background: "#FBFAF8" }}
        >
          <AboutSection />
          <WhySection />
        </section>
        <section id="highlights" className="scroll-mt-28">
          <EverythingYouNeedSection />
        </section>
        <section id="rooms" className="scroll-mt-28">
          <Rooms />
        </section>
        <section id="attractions" className="scroll-mt-28">
          <PanoramicExperience />
        </section>
        <section id="gallery" className="scroll-mt-28">
          <GallerySection />
        </section>
        <section id="amenities" className="scroll-mt-28">
          <AmenitiesSection />
        </section>
        <section id="reviews" className="scroll-mt-28">
          <GuestReviewSection />
        </section>
        {/* <section id="contact" className="scroll-mt-28">
          <BookingSection />
        </section> */}
      </div>
    </>
  )
}
