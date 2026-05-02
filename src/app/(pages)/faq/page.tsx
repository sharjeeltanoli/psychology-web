"use client"

import { useState } from "react"
import Link from "next/link"
import { faqs } from "@/data/faqs"
import { ChevronDown } from "lucide-react"
import { usePageAnimation } from "@/hooks/usePageAnimation"
import type { Metadata } from "next"

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))]

export default function FAQPage() {
  const { fadeUp } = usePageAnimation()
  const [activeCategory, setActiveCategory] = useState("All")
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory)

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
          <div style={fadeUp(0)}>
            <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
              FAQ
            </span>
          </div>
          <div style={fadeUp(0.1)}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
              Frequently Asked Questions
            </h1>
          </div>
          <div style={fadeUp(0.2)}>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto">
              Have questions about therapy, sessions, or payments? Find your answers below.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-3xl">

        {/* Category Filter */}
        <div style={fadeUp(0.1)} className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? "#4A7B9D" : "white",
                color: activeCategory === cat ? "white" : "#5a6a7a",
                border: activeCategory === cat ? "1px solid #4A7B9D" : "1px solid #e8eef3",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div style={fadeUp(0.2)} className="space-y-3">
          {filtered.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#e8eef3] overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-[#1E2D3D] pr-4">{faq.question}</span>
                <ChevronDown
                  className="w-5 h-5 text-[#7EB5A6] shrink-0 transition-transform duration-300"
                  style={{
                    transform: openId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-[#e8eef3] mb-4" />
                  <p className="text-sm text-[#5a6a7a] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={fadeUp(0.3)} className="mt-16 bg-white rounded-2xl p-10 border border-[#e8eef3] text-center">
          <h2 className="font-serif text-2xl text-[#1E2D3D] mb-3">
            Still have questions?
          </h2>
          <p className="text-[#5a6a7a] text-sm mb-6">
            Feel free to reach out — Ms. Ayman is happy to answer any questions before you book.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/booking"
              className="border border-[#4A7B9D]/40 hover:border-[#4A7B9D] text-[#4A7B9D] px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Book a Session
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
