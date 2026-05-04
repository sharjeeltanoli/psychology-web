"use client"

import { useRef, useState, useEffect } from "react"
import { Shield, Globe, Clock, Heart, Award, MessageCircle } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Safe & Confidential",
    description: "Everything shared in sessions is completely confidential. Your privacy is our highest priority.",
    color: "#4A7B9D",
  },
  {
    icon: Globe,
    title: "Available Worldwide",
    description: "Online sessions available globally. Connect from the comfort of your home in Urdu or English.",
    color: "#7EB5A6",
  },
  {
    icon: Award,
    title: "Evidence-Based Care",
    description: "Trained in CBT and other evidence-based approaches. Member of the American Psychological Association.",
    color: "#B5A6D4",
  },
  {
    icon: Heart,
    title: "Compassionate Approach",
    description: "A warm, non-judgmental space where you are truly heard, understood, and supported.",
    color: "#E8A598",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at a time that works for you — evenings and weekends available.",
    color: "#4A7B9D",
  },
  {
    icon: MessageCircle,
    title: "Urdu & English",
    description: "Sessions available in both Urdu and English — making therapy comfortable and accessible.",
    color: "#7EB5A6",
  },
]

export default function WhyChooseSection() {
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
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest">
            Why Choose Ms. Ayman
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mt-3 mb-4">
            Therapy That Feels Like Home
          </h2>
          <p className="text-[#5a6a7a] text-base leading-relaxed">
            A safe, professional, and compassionate space designed around your unique needs.
          </p>
        </div>

        {/* Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-[#F7F3EE] rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background-color 0.2s ease, box-shadow 0.2s ease`,
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${reason.color}15` }}
              >
                <reason.icon className="w-5 h-5" style={{ color: reason.color }} />
              </div>

              <h3 className="font-serif text-xl text-[#1E2D3D] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[#5a6a7a] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}