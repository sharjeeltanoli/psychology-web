"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"

const highlights = [
  "5+ years of clinical experience",
  "Member of American Psychological Association",
  "CBT Trained Practitioner",
  "Online sessions in Urdu & English",
  "Worked in AFIMH, CMH & Benazir Bhutto Hospital",
]

export default function AboutSection() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F7F3EE] py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left — Photo */}
          <div
            className="flex justify-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="relative">
              {/* Background blob */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#7EB5A6]/10 rounded-3xl" />
              <div
                className="relative w-[280px] h-[340px] overflow-hidden"
                style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
              >
                <Image
                  src="/images/ayman.jpg"
                  alt="Ms. Ayman Yamin - Clinical Psychologist"
                  fill
                  sizes="280px"
                  className="object-cover object-center"
                />
              </div>
              {/* APA Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#e8eef3]">
                <p className="text-xs text-[#8a9aaa]">Member</p>
                <p className="text-sm font-medium text-[#2C3E50]">APA</p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
              About Ms. Ayman
            </span>
            <h2 className="font-serif text-4xl text-[#1E2D3D] mb-4">
              A Compassionate Guide on Your Healing Journey
            </h2>
            <p className="text-[#5a6a7a] leading-relaxed mb-6">
              Ms. Ayman Yamin is a dedicated Clinical Psychologist with over 5 years of experience in mental health and psychological care. She has worked across hospitals, rehabilitation centers, and private practice — helping individuals overcome anxiety, depression, trauma, addiction, and more.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#7EB5A6] shrink-0" />
                  <span className="text-sm text-[#5a6a7a]">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Learn More About Ms. Ayman →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}