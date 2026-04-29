import Link from "next/link"
import { Mail, MapPin, MessageCircle } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

const socials = [
  {
    href: "https://www.linkedin.com/in/ayman-yamin-17184b29b/",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1E2D3D] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left — Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-tight mb-4">
              <span className="text-xl font-serif font-medium text-white">
                {SITE_CONFIG.name}
              </span>
              <span className="text-sm text-[#7EB5A6]">Clinical Psychologist</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Providing compassionate, evidence-based psychological care for individuals and couples worldwide.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 hover:border-[#7EB5A6] hover:bg-[#7EB5A6]/10 flex items-center justify-center text-gray-400 hover:text-[#7EB5A6] transition-all duration-200"
                >
                  {social.svg}
                </Link>
              ))}
            </div>
          </div>

          {/* Middle — Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#7EB5A6] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact + CTA */}
          <div>
            <h3 className="text-sm font-medium text-white uppercase tracking-widest mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#7EB5A6] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-gray-400 hover:text-[#7EB5A6] transition-colors duration-200"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#7EB5A6] mt-0.5 shrink-0" />
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#7EB5A6] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7EB5A6] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{SITE_CONFIG.location}</span>
              </li>
            </ul>
            <Link
              href="/booking"
              className="inline-block bg-[#4A7B9D] hover:bg-[#7EB5A6] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-200"
            >
              Book a Session
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-[#7EB5A6] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-[#7EB5A6] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
