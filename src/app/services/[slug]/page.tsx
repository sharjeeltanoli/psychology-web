import { services } from "@/data/services"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Clock, DollarSign, Brain, Zap, Flame, Sparkles, ShieldAlert, Heart } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Brain, Zap, Flame, Sparkles, ShieldAlert, Heart,
}

// SEO ke liye dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | Ms. Ayman Yamin`,
    description: service.shortDescription,
  }
}

// Static paths generate karo — SEO ke liye
export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) notFound()

  const Icon = iconMap[service.icon]

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <Link
            href="/#services"
            className="text-sm text-[#7EB5A6] hover:text-[#4A7B9D] mb-6 inline-flex items-center gap-1 transition-colors"
          >
            ← Back to Services
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-6">
            {/* Left — Text */}
            <div>
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}15` }}
              >
                {Icon && <Icon className="w-7 h-7" style={{ color: service.color }} />}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
                {service.title}
              </h1>
              <p className="text-[#5a6a7a] text-lg leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              {/* Price + Duration */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#F7F3EE] px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-[#7EB5A6]" />
                  <span className="text-sm text-[#2C3E50]">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-[#F7F3EE] px-4 py-2 rounded-full">
                  <DollarSign className="w-4 h-4 text-[#7EB5A6]" />
                  <span className="text-sm text-[#2C3E50]">
                    PKR {service.pricePKR.toLocaleString()} / ${service.priceUSD}
                  </span>
                </div>
              </div>
            </div>

            {/* Right — Image */}
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#D6E8F0] to-[#C5DED8]">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {Icon && <Icon className="w-20 h-20 opacity-20" style={{ color: service.color }} />}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">

          {/* Full Description */}
          <div>
            <h2 className="font-serif text-2xl text-[#1E2D3D] mb-4">Overview</h2>
            <p className="text-[#5a6a7a] leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Symptoms */}
          <div>
            <h2 className="font-serif text-2xl text-[#1E2D3D] mb-4">Common Signs</h2>
            <ul className="space-y-3">
              {service.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-center gap-3 text-[#5a6a7a]">
                  <CheckCircle className="w-4 h-4 text-[#7EB5A6] shrink-0" />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div>
            <h2 className="font-serif text-2xl text-[#1E2D3D] mb-4">My Approach</h2>
            <ul className="space-y-3">
              {service.approach.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#5a6a7a]">
                  <CheckCircle className="w-4 h-4 text-[#4A7B9D] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="font-serif text-2xl text-[#1E2D3D] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl p-6 border border-[#e8eef3]"
                >
                  <h3 className="font-medium text-[#1E2D3D] mb-2">{faq.question}</h3>
                  <p className="text-sm text-[#5a6a7a] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar CTA */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white rounded-2xl p-6 border border-[#e8eef3] shadow-sm">
            <h3 className="font-serif text-xl text-[#1E2D3D] mb-2">
              Ready to begin?
            </h3>
            <p className="text-sm text-[#5a6a7a] mb-6">
              Book a session with Ms. Ayman Yamin and take the first step towards healing.
            </p>
            <div className="space-y-3">
              <Link
                href="/booking"
                className="block w-full text-center bg-[#4A7B9D] hover:bg-[#2C3E50] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
              >
                Book a Session
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center border border-[#4A7B9D]/40 hover:border-[#4A7B9D] text-[#4A7B9D] px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
              >
                Ask a Question
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-[#e8eef3]">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#7EB5A6]" />
                <span className="text-xs text-[#5a6a7a]">{service.duration} per session</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#7EB5A6]" />
                <span className="text-xs text-[#5a6a7a]">
                  PKR {service.pricePKR.toLocaleString()} / ${service.priceUSD}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
