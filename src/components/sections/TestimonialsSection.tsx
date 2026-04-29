"use client"

import { useEffect, useRef, useState } from "react"
import { testimonials } from "@/data/testimonials"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
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

  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) => {
      const isFull = star <= Math.floor(rating)
      const isHalf = !isFull && star === Math.ceil(rating) && rating % 1 !== 0

      return (
        <span key={star} className="relative w-4 h-4 inline-block">
          {/* Background star (empty) */}
          <Star className="w-4 h-4 absolute top-0 left-0 text-[#d0dae3]" />
          {/* Full star */}
          {isFull && (
            <Star className="w-4 h-4 absolute top-0 left-0 fill-[#F5C842] text-[#F5C842]" />
          )}
          {/* Half star */}
          {isHalf && (
            <span
              className="absolute top-0 left-0 overflow-hidden"
              style={{ width: "50%" }}
            >
              <Star className="w-4 h-4 fill-[#F5C842] text-[#F5C842]" />
            </span>
          )}
        </span>
      )
    })
  }

  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mt-3 mb-4">
            What Clients Say
          </h2>
          <p className="text-[#5a6a7a] text-base leading-relaxed">
            Real stories from real people who took the first step towards healing.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#e8eef3] hover:shadow-lg transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
              }}
            >
              {/* Stars + Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(t.rating)}
                <span className="text-xs text-[#8a9aaa] ml-1">{t.rating}</span>
              </div>

              {/* Review */}
              <p className="text-sm text-[#5a6a7a] leading-relaxed mb-6 italic">
                "{t.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#e8eef3]">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1E2D3D]">{t.name}</p>
                    <p className="text-xs text-[#8a9aaa]">{t.location}</p>
                  </div>
                </div>
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${t.avatarColor}15`,
                    color: t.avatarColor,
                  }}
                >
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
