"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { usePageAnimation } from "@/hooks/usePageAnimation"
import type { BlogPost } from "@/data/blogs"

export default function BlogDetailContent({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  const { fadeUp } = usePageAnimation()

  // Convert markdown-like content to paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-serif text-2xl text-[#1E2D3D] mt-10 mb-4">
              {block.replace("## ", "")}
            </h2>
          )
        }
        if (block.startsWith("**") && block.endsWith("**")) {
          return (
            <p key={i} className="font-medium text-[#1E2D3D] mt-4">
              {block.replace(/\*\*/g, "")}
            </p>
          )
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter((l) => l.startsWith("- "))
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-[#5a6a7a] my-4">
              {items.map((item, j) => (
                <li key={j}>{item.replace("- ", "")}</li>
              ))}
            </ul>
          )
        }
        // Bold within paragraph
        const parts = block.split(/(\*\*.*?\*\*)/)
        return (
          <p key={i} className="text-[#5a6a7a] leading-relaxed my-4">
            {parts.map((part, j) =>
              part.startsWith("**") ? (
                <strong key={j} className="text-[#1E2D3D] font-medium">
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        )
      })
  }

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero Image */}
      <div style={fadeUp(0)} className="relative w-full h-72 md:h-96 bg-gradient-to-br from-[#D6E8F0] to-[#C5DED8]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#1E2D3D]/30" />
      </div>

      <div className="container mx-auto px-6 max-w-3xl">

        {/* Article Header */}
        <div style={fadeUp(0.1)} className="bg-white rounded-2xl p-8 border border-[#e8eef3] -mt-16 relative z-10 mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-[#7EB5A6] hover:text-[#4A7B9D] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <span className="inline-block bg-[#4A7B9D15] text-[#4A7B9D] text-xs font-medium px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="font-serif text-3xl md:text-4xl text-[#1E2D3D] mb-4 leading-snug">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#4A7B9D15]">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-[#1E2D3D]">{post.author.name}</p>
                <p className="text-xs text-[#8a9aaa]">{post.author.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#8a9aaa] ml-auto">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
              <span className="mx-1">·</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div style={fadeUp(0.2)} className="bg-white rounded-2xl p-8 border border-[#e8eef3] mb-10">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div style={fadeUp(0.3)} className="bg-[#4A7B9D] rounded-2xl p-8 text-white text-center mb-10">
          <h3 className="font-serif text-2xl mb-2">Ready to take the next step?</h3>
          <p className="text-white/80 text-sm mb-6">
            Book a session with Ms. Ayman Yamin and start your healing journey today.
          </p>
          <Link
            href="/booking"
            className="inline-block bg-white text-[#4A7B9D] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F7F3EE] transition-all duration-200"
          >
            Book a Session
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div style={fadeUp(0.4)} className="mb-16">
            <h3 className="font-serif text-2xl text-[#1E2D3D] mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-[#e8eef3] overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <div className="relative w-full h-36 bg-gradient-to-br from-[#D6E8F0] to-[#C5DED8]">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="50vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#8a9aaa] mb-1">{rel.readTime}</p>
                    <h4 className="font-serif text-base text-[#1E2D3D] group-hover:text-[#4A7B9D] transition-colors leading-snug">
                      {rel.title}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-[#4A7B9D] mt-2">
                      Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
