import { privacyPolicy } from "@/data/legal"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ms. Ayman Yamin",
  description: "Privacy Policy for aymanyamin.com — Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-3xl">
          <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
            Legal
          </span>
          <h1 className="font-serif text-4xl text-[#1E2D3D] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#8a9aaa]">
            Last updated: {privacyPolicy.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="space-y-10">
          {privacyPolicy.sections.map((section, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#e8eef3]">
              <h2 className="font-serif text-2xl text-[#1E2D3D] mb-4">
                {section.title}
              </h2>
              <div className="text-sm text-[#5a6a7a] leading-relaxed whitespace-pre-line">
                {section.content.split("\n").map((line, j) => {
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={j} className="font-medium text-[#1E2D3D] mt-3 mb-1">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <p key={j} className="flex items-start gap-2 my-1">
                        <span className="text-[#7EB5A6] mt-1">•</span>
                        {line.replace("- ", "")}
                      </p>
                    )
                  }
                  return <p key={j} className="my-1">{line}</p>
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm text-[#4A7B9D] hover:text-[#2C3E50] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
