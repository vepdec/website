import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import LogoTicker from "@/components/sections/logo-ticker"
import ReviewsSection from "@/components/sections/reviews-section"
import ExperienceSection from "@/components/sections/experience-section"
import CallToAction from "@/components/sections/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <LogoTicker />
      <ServicesSection />
      <ExperienceSection />
      <ReviewsSection />
      <CallToAction />
    </div>
  )
}
