import type { Metadata } from "next"
import AboutPageContent from "@/components/sections/AboutPageContent"

export const metadata: Metadata = {
  title: "About | Ms. Ayman Yamin",
  description: "Learn about Ms. Ayman Yamin, a dedicated Clinical Psychologist with over 5 years of experience.",
}

export default function AboutPage() {
  return <AboutPageContent />
}