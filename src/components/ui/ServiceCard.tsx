import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  duration: string
  pricePKR: number
  priceUSD: number
  color: string
  index: number
  visible: boolean
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  duration,
  pricePKR,
  priceUSD,
  color,
  index,
  visible,
}: ServiceCardProps) {
  return (
    <div
      className="light-border relative rounded-2xl p-6 bg-[#F7F3EE] cursor-pointer border-2 border-transparent transition-colors duration-200 hover:bg-white hover:shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease`,
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-[#1E2D3D] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-[#5a6a7a] leading-relaxed mb-5">{description}</p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-[#8a9aaa]">{duration}</p>
          <p className="text-sm font-medium text-[#2C3E50]">
            PKR {pricePKR.toLocaleString()}{" "}
            <span className="text-xs text-[#8a9aaa]">/ ${priceUSD}</span>
          </p>
        </div>
        <Link
          href="/booking"
          className="text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
          style={{ backgroundColor: `${color}15`, color }}
        >
          Book Now →
        </Link>
      </div>
    </div>
  )
}
