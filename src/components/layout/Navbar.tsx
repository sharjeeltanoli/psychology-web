"use client"

import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-[#2C3E50]">
            {SITE_CONFIG.name}
          </span>
          <span className="text-xs text-[#7EB5A6]">Clinical Psychologist</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-[#4A7B9D] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
<div className="hidden md:block">
  <Link href="/booking">
    <Button className="bg-[#4A7B9D] hover:bg-[#2C3E50] text-white rounded-full px-6">
      Book Session
    </Button>
  </Link>
</div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 mt-8">
              <p className="text-xs text-gray-400 mb-3 px-2">Navigation</p>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-gray-700 hover:text-[#4A7B9D] hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-2">
                <Button className="w-full bg-[#4A7B9D] hover:bg-[#2C3E50] text-white rounded-full">
                  Book Session
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}