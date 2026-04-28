"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Zap, Flame, Sparkles, ShieldAlert, Heart } from "lucide-react"
import Link from "next/link"
import ServiceCard from "@/components/ui/ServiceCard"
import { services } from "@/data/services"
import { LucideIcon } from "lucide-react"

// Icon map — services.ts mein icon string hai, yahan component se map karte hain
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Zap,
  Flame,
  Sparkles,
  ShieldAlert,
  Heart,
}

export default function ServicesSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest">
            What I Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mt-3 mb-4">
            Services & Specializations
          </h2>
          <p className="text-[#5a6a7a] text-base leading-relaxed">
            Every session is tailored to your unique needs — in a safe,
            confidential and non-judgmental space.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              icon={iconMap[service.icon]}
              title={service.title}
              description={service.shortDescription}
              duration={service.duration}
              pricePKR={service.pricePKR}
              priceUSD={service.priceUSD}
              color={service.color}
              slug={service.slug}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[#5a6a7a] text-sm mb-4">
            Not sure which service is right for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#4A7B9D]/40 hover:border-[#4A7B9D] text-[#4A7B9D] px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#4A7B9D]/5"
          >
            Get a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}
