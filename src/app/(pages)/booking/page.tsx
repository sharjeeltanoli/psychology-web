"use client"

import { InlineWidget } from "react-calendly"
import { usePageAnimation } from "@/hooks/usePageAnimation"
import { CheckCircle } from "lucide-react"
import { services } from "@/data/services"

const benefits = [
  "45-minute confidential session",
  "Available in Urdu & English",
  "Secure Google Meet video call",
  "Flexible scheduling worldwide",
  "No waiting rooms or commute",
]

export default function BookingPage() {
  const { fadeUp } = usePageAnimation()

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-5xl text-center">
          <div style={fadeUp(0)}>
            <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
              Book a Session
            </span>
          </div>
          <div style={fadeUp(0.1)}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
              Take the First Step
            </h1>
          </div>
          <div style={fadeUp(0.2)}>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto">
              Choose a time that works for you. Ms. Ayman Yamin is available for online sessions worldwide.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left — Info */}
          <div style={fadeUp(0.1)} className="md:col-span-1 space-y-4">

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8eef3]">
              <h3 className="font-serif text-xl text-[#1E2D3D] mb-5">
                What to expect
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#7EB5A6] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#5a6a7a]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

{/* Price */}
<div className="bg-white rounded-2xl p-6 border border-[#e8eef3]">
  <h3 className="font-serif text-xl text-[#1E2D3D] mb-4">
    Session Fees
  </h3>
  <div className="space-y-3">
    {services.map((service, i) => (
      <div
        key={service.slug}
        className={`flex items-center justify-between py-2 ${
          i !== services.length - 1 ? "border-b border-[#e8eef3]" : ""
        }`}
      >
        <span className="text-sm text-[#5a6a7a]">
          {service.title} ({service.duration})
        </span>
        <span className="text-sm font-medium text-[#2C3E50]">
          PKR {service.pricePKR.toLocaleString()} / ${service.priceUSD}
        </span>
      </div>
    ))}
  </div>
</div>

            {/* Payment */}
            <div className="bg-[#4A7B9D] rounded-2xl p-6 text-white">
              <h3 className="font-serif text-lg mb-2">Payment Info</h3>
              <p className="text-sm text-white/80 mb-3">
                Payment details will be shared after booking confirmation via email or WhatsApp.
              </p>
              <div className="space-y-1">
                <p className="text-xs text-white/70">🇵🇰 Local: JazzCash / Bank Transfer</p>
                <p className="text-xs text-white/70">🌍 International: PayPal / Bank Transfer</p>
              </div>
            </div>

          </div>

          {/* Right — Calendly */}
          <div style={fadeUp(0.2)} className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-[#e8eef3] overflow-hidden">
              <InlineWidget
                url="https://calendly.com/sheeeri333/30min"
                styles={{
                  height: "700px",
                  width: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: "4A7B9D",
                  textColor: "1E2D3D",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
