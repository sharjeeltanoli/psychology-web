"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { usePageAnimation } from "@/hooks/usePageAnimation"

export default function ContactPage() {
  const { fadeUp } = usePageAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  })

  setLoading(false)
  if (res.ok) {
    setSubmitted(true)
  }
}

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-5xl text-center">
          <div style={fadeUp(0)}>
            <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
              Contact
            </span>
          </div>
          <div style={fadeUp(0.1)}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
              Get in Touch
            </h1>
          </div>
          <div style={fadeUp(0.2)}>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto">
              Have a question or ready to take the first step? Ms. Ayman is here to help.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left — Contact Info */}
          <div style={fadeUp(0.1)} className="md:col-span-1 space-y-4">

            <div className="bg-white rounded-2xl p-6 border border-[#e8eef3]">
              <h3 className="font-serif text-xl text-[#1E2D3D] mb-6">Contact Info</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4A7B9D15] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#4A7B9D]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9aaa] mb-1">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-[#2C3E50] hover:text-[#4A7B9D] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7EB5A615] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#7EB5A6]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9aaa] mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2C3E50] hover:text-[#7EB5A6] transition-colors"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8A59815] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E8A598]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9aaa] mb-1">Location</p>
                    <p className="text-sm text-[#2C3E50]">{SITE_CONFIG.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B5A6D415] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#B5A6D4]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8a9aaa] mb-1">Response Time</p>
                    <p className="text-sm text-[#2C3E50]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <div className="bg-[#4A7B9D] rounded-2xl p-6 text-white">
              <h3 className="font-serif text-lg mb-2">Ready to book?</h3>
              <p className="text-sm text-white/80 mb-4">
                Skip the wait — book your session directly online.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-white text-[#4A7B9D] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#F7F3EE] transition-all duration-200"
              >
                Book a Session
              </Link>
            </div>

          </div>

          {/* Right — Form */}
          <div style={fadeUp(0.2)} className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-[#e8eef3]">

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8F4F0] flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#7EB5A6]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E2D3D] mb-2">Message Sent!</h3>
                  <p className="text-[#5a6a7a] text-sm max-w-sm">
                    Thank you for reaching out. Ms. Ayman will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-2xl text-[#1E2D3D] mb-6">Send a Message</h3>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#8a9aaa] mb-1 block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#e8eef3] text-sm text-[#2C3E50] placeholder-[#c0cad4] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#8a9aaa] mb-1 block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#e8eef3] text-sm text-[#2C3E50] placeholder-[#c0cad4] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE]"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-[#8a9aaa] mb-1 block">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 XXX XXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#e8eef3] text-sm text-[#2C3E50] placeholder-[#c0cad4] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-[#8a9aaa] mb-1 block">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#e8eef3] text-sm text-[#2C3E50] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE]"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Book a Session">Book a Session</option>
                        <option value="Pricing & Payments">Pricing & Payments</option>
                        <option value="Online Sessions">Online Sessions</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-[#8a9aaa] mb-1 block">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-[#e8eef3] text-sm text-[#2C3E50] placeholder-[#c0cad4] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE] resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 disabled:opacity-70"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#8a9aaa] text-center">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
