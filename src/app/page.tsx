import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import AboutSection from "@/components/sections/AboutSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection"
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
    </main>
  )
}