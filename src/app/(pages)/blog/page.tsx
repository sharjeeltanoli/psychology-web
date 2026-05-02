"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/data/blogs"
import { Search, Clock, ArrowRight } from "lucide-react"
import { usePageAnimation } from "@/hooks/usePageAnimation"

const categories = ["All", ...Array.from(new Set(blogPosts.map((b) => b.category)))]

export default function BlogPage() {
  const { fadeUp } = usePageAnimation()
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")

  const filtered = blogPosts.filter((post) => {
    const matchCategory = activeCategory === "All" || post.category === activeCategory
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="bg-[#F7F3EE] min-h-screen">

      {/* Hero */}
      <section className="bg-white border-b border-[#e8eef3]">
        <div className="container mx-auto px-6 py-16 max-w-5xl text-center">
          <div style={fadeUp(0)}>
            <span className="text-xs font-medium text-[#7EB5A6] uppercase tracking-widest mb-4 block">
              Blog
            </span>
          </div>
          <div style={fadeUp(0.1)}>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1E2D3D] mb-4">
              Mental Health Resources
            </h1>
          </div>
          <div style={fadeUp(0.2)}>
            <p className="text-[#5a6a7a] text-base leading-relaxed max-w-xl mx-auto mb-8">
              Insights, guides, and advice from Ms. Ayman Yamin to support your mental health journey.
            </p>
          </div>

          {/* Search */}
          <div style={fadeUp(0.3)} className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a9aaa]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-[#e8eef3] text-sm text-[#2C3E50] placeholder-[#c0cad4] focus:outline-none focus:border-[#4A7B9D] transition-colors bg-[#F7F3EE]"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 max-w-5xl">

        {/* Category Filter */}
        <div style={fadeUp(0.1)} className="flex flex-wrap gap-2 mb-10">
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

        {/* Blog Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#8a9aaa]">No articles found. Try a different search.</p>
          </div>
        ) : (
          <div style={fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-[#e8eef3] overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-[#D6E8F0] to-[#C5DED8] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-white/90 text-[#4A7B9D] text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#8a9aaa] mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-serif text-lg text-[#1E2D3D] mb-2 leading-snug group-hover:text-[#4A7B9D] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[#5a6a7a] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-[#4A7B9D]">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}
