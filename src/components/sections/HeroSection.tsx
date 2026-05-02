"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCountUp } from "@/hooks/useCountUp"

export default function HeroSection() {
  
// Experience automatically calculates from start year
// Update startYear when doctor began practice
const startYear = 2021
const currentYear = new Date().getFullYear()
const experience = currentYear - startYear
const years = useCountUp(experience)
  
  
  const [mounted, setMounted] = useState(false)
  const clients = useCountUp(500)
  const satisfaction = useCountUp(98)




  useEffect(() => {
    setMounted(true)
  }, [])


  

  return (
    <section className="relative overflow-hidden bg-[#F7F3EE] min-h-[90vh] flex items-center">

      {/* Background circle */}
      <div className="absolute -top-20 -right-16 w-[420px] h-[420px] rounded-full bg-[#7EB5A6]/10 pointer-events-none" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#4A7B9D] via-[#7EB5A6] to-transparent" />

      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text */}
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8F4F0] border border-[#7EB5A6]/30 text-[#0F6E56] text-xs font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7EB5A6] animate-pulse" />
            Now accepting online sessions worldwide
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1E2D3D] leading-[1.15] mb-5">
            Healing minds,{" "}
            <em className="text-[#4A7B9D] not-italic">restoring lives</em>{" "}
            with compassion
          </h1>

          {/* Subtext */}
          <p className="text-[#5a6a7a] text-base leading-relaxed max-w-md mb-8">
            Professional therapy for anxiety, depression & relationships.
            Online sessions available globally — in a safe, confidential space.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Link
              href="/booking"
              className="bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a Session
            </Link>
            <Link
              href="/about"
              className="border border-[#4A7B9D]/40 hover:border-[#4A7B9D] hover:bg-[#4A7B9D]/5 text-[#4A7B9D] px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="flex items-center gap-6">
            <div ref={clients.ref}>
              <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                {clients.count}+
              </p>
              <p className="text-xs text-[#8a9aaa]">Clients helped</p>
            </div>
            <div className="w-px h-10 bg-[#d0dae3]" />
            <div ref={years.ref}>
              <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                {years.count}+
              </p>
              <p className="text-xs text-[#8a9aaa]">Years experience</p>
            </div>
            <div className="w-px h-10 bg-[#d0dae3]" />
            <div ref={satisfaction.ref}>
              <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                {satisfaction.count}%
              </p>
              <p className="text-xs text-[#8a9aaa]">Satisfaction rate</p>
            </div>
          </div>

        </div>
        {/* LEFT END */}

        {/* RIGHT — Photo */}
        <div className={`flex justify-center items-center relative transition-all duration-700 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>

          {/* Blob photo frame */}
          <div
            className="relative w-[300px] h-[360px] overflow-hidden"
            style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
          >
            <Image
          src="/images/ayman.jpg"
          alt="Ms. Ayman Yamin - Clinical Psychologist"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority
              />
          </div>

          {/* Float card 1 */}
          <div className="absolute bottom-5 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#e8eef3]">
            <p className="text-[10px] text-[#8a9aaa]">Session mood</p>
            <p className="text-sm font-medium text-[#2C3E50]">Calm & focused</p>
            <div className="flex gap-1 items-end h-5 mt-1">
              {[6, 14, 10, 18, 8].map((h, i) => (
  <span
    key={i}
    className="w-1 bg-[#7EB5A6] rounded-sm"
    style={{
      height: h,
      animation: `waveBar 1.2s ease-in-out infinite`,
      animationDelay: `${i * 0.2}s`,
    }}
  />
))}
            </div>
          </div>

          {/* Float card 2 */}
          <div className="absolute top-8 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#e8eef3]">
            <p className="text-[10px] text-[#8a9aaa]">Next available</p>
            <p className="text-sm font-medium text-[#2C3E50]">Today, 4:00 PM</p>
          </div>

        </div>
        {/* RIGHT END */}

      </div>
    </section>
  )
}
