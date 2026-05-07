"use client"

import Image from "next/image"
import Link from "next/link"
import { aboutData } from "@/data/about"
import { CheckCircle, MapPin, Globe, Award, Briefcase } from "lucide-react"
import { usePageAnimation } from "@/hooks/usePageAnimation"

export default function AboutPageContent() {
  const { fadeUp } = usePageAnimation()

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left — Text */}
            <div>
              <div style={fadeUp(0)}>
                <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
                  About Me
                </span>
              </div>
              <div style={fadeUp(0.1)}>
                <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
                  {aboutData.name}
                </h1>
              </div>
              <div style={fadeUp(0.2)}>
                <p className="text-[#4A7B9D] font-medium mb-6">{aboutData.title}</p>
                <p className="text-[#5a6a7a] leading-relaxed mb-6 italic text-lg">
                  "{aboutData.tagline}"
                </p>
              </div>

              {/* Quick Stats */}
              <div style={fadeUp(0.3)} className="flex flex-wrap gap-6 mb-8">
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                    {aboutData.experience}
                  </p>
                  <p className="text-xs text-[#8a9aaa]">Years Experience</p>
                </div>
                <div className="w-px bg-[#d0dae3]" />
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                    {aboutData.experience_details.length}
                  </p>
                  <p className="text-xs text-[#8a9aaa]">Institutions</p>
                </div>
                <div className="w-px bg-[#d0dae3]" />
                <div>
                  <p className="font-serif text-3xl font-semibold text-[#4A7B9D]">
                    {aboutData.languages.length}
                  </p>
                  <p className="text-xs text-[#8a9aaa]">Languages</p>
                </div>
              </div>

              <div style={fadeUp(0.35)}>
                <div className="flex items-center gap-2 mb-8">
                  <Globe className="w-4 h-4 text-[#7EB5A6]" />
                  <span className="text-sm text-[#5a6a7a]">
                    Services in:{" "}
                    <span className="font-medium text-[#2C3E50]">
                      {aboutData.languages.join(" & ")}
                    </span>
                  </span>
                </div>
              </div>

              <div style={fadeUp(0.4)} className="flex gap-3">
                <Link
                  href="/booking"
                  className="bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  Book a Session
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#4A7B9D]/40 hover:border-[#4A7B9D] text-[#4A7B9D] px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — Photo */}
            <div style={fadeUp(0.2)} className="flex justify-center">
              <div
                className="relative w-[280px] h-[340px] overflow-hidden"
                style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
              >
                <Image
                  src="/images/ayman.png"
                  alt="Ms. Ayman Yamin - Clinical Psychologist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl space-y-16">

        {/* Bio */}
        <section style={fadeUp(0.1)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">My Story</h2>
          <div className="space-y-4">
            {aboutData.bio.map((para, i) => (
              <p key={i} className="text-[#5a6a7a] leading-relaxed">{para}</p>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={fadeUp(0.15)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">Education</h2>
          <div className="space-y-4">
            {aboutData.education.map((edu, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8eef3] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4A7B9D15] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#4A7B9D]" />
                </div>
                <div>
                  <p className="font-medium text-[#1E2D3D]">{edu.degree}</p>
                  <p className="text-sm text-[#7EB5A6] mt-1">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section style={fadeUp(0.2)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {aboutData.experience_details.map((exp, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8eef3]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7EB5A615] flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-[#7EB5A6]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1E2D3D]">{exp.place}</p>
                      <p className="text-sm text-[#7EB5A6]">{exp.role}</p>
                    </div>
                  </div>
                  {exp.current && (
                    <span className="text-xs bg-[#E8F4F0] text-[#0F6E56] px-3 py-1 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#5a6a7a] leading-relaxed pl-14">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Therapy Approaches */}
        <section style={fadeUp(0.25)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">
            Therapy Approaches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.approaches.map((approach, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8eef3]"
              >
                <p className="font-medium text-[#1E2D3D] mb-2">{approach.name}</p>
                <p className="text-sm text-[#5a6a7a] leading-relaxed">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section style={fadeUp(0.3)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">
            Clinical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {aboutData.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 bg-white border border-[#e8eef3] px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-[#7EB5A6]" />
                <span className="text-sm text-[#2C3E50]">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Memberships & Workshops */}
        <section style={fadeUp(0.35)}>
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-6">
            Memberships & Workshops
          </h2>
          <div className="space-y-4">
            {aboutData.memberships.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8eef3] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B5A6D415] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#B5A6D4]" />
                </div>
                <div>
                  <p className="font-medium text-[#1E2D3D]">{m.name}</p>
                  <p className="text-sm text-[#5a6a7a] mt-1">{m.description}</p>
                </div>
              </div>
            ))}
            {aboutData.workshops.map((w, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#e8eef3] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8A59815] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E8A598]" />
                </div>
                <div>
                  <p className="font-medium text-[#1E2D3D]">{w.title}</p>
                  <p className="text-sm text-[#5a6a7a] mt-1">{w.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={fadeUp(0.4)} className="bg-white rounded-2xl p-10 border border-[#e8eef3] text-center">
          <h2 className="font-serif text-3xl text-[#1E2D3D] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#5a6a7a] mb-8 max-w-lg mx-auto">
            Take the first step towards healing. Book a session with Ms. Ayman
            Yamin today — online sessions available worldwide.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-200"
          >
            Book a Session
          </Link>
        </section>

      </div>
    </main>
  )
}
