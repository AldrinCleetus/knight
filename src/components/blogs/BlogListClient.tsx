"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { BlogPostMeta } from "@/utils/types/blogTypes"
import BlogCard from "./BlogCard"
import GradientBorder from "../wrapper/GradientBorder"

interface BlogListClientProps {
  initialPosts: BlogPostMeta[]
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All")

  // Extract all unique valid tags (ignoring empty or falsy strings)
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    initialPosts.forEach((post) => {
      post.tags?.forEach((tag) => {
        const trimmed = typeof tag === "string" ? tag.trim() : ""
        if (trimmed) {
          tagSet.add(trimmed)
        }
      })
    })
    return ["All", ...Array.from(tagSet)]
  }, [initialPosts])

  // Filter posts based on selected tag
  const filteredPosts = useMemo(() => {
    if (selectedTag === "All") {
      return initialPosts
    }
    return initialPosts.filter(
      (post) => post.tags && post.tags.includes(selectedTag)
    )
  }, [initialPosts, selectedTag])

  // Group filtered posts by year (e.g. 2026, 2025), sorted descending
  const postsByYear = useMemo(() => {
    const groups: Record<number, BlogPostMeta[]> = {}
    filteredPosts.forEach((post) => {
      const yr = post.year || new Date(post.date).getFullYear()
      if (!groups[yr]) {
        groups[yr] = []
      }
      groups[yr].push(post)
    })

    const sortedYears = Object.keys(groups)
      .map(Number)
      .sort((a, b) => b - a)

    return sortedYears.map((year) => ({
      year,
      posts: groups[year],
    }))
  }, [filteredPosts])

  // If there are zero blogs in total in the project
  if (initialPosts.length === 0) {
    return (
      <div className="flex justify-center items-center w-full mt-12">
        <GradientBorder rounded="3xl">
          <div className="bg-primary-background-black rounded-3xl p-10 md:p-14 flex flex-col items-center text-center max-w-md w-full">
            <div className="w-14 h-14 rounded-full bg-capsule-background-gray flex items-center justify-center text-2xl mb-4 border border-white/10">
              ✍️
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              .no_blogs_yet
            </h3>
            <p className="text-sm text-text-secondary-light-gray font-light leading-relaxed mb-6">
              Brewing up new thoughts, project breakdowns, and experiments. Check back soon!
            </p>
            <Link href="/">
              <div className="px-5 py-2 rounded-full bg-capsule-background-gray text-xs font-light text-white/90 hover:text-primary-cyan transition-colors border border-white/10">
                .back_to_home →
              </div>
            </Link>
          </div>
        </GradientBorder>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 w-full mt-10">
      {/* Clean Tag Filters - Centered below SectionHeading */}
      {allTags.length > 1 && (
        <div className="flex flex-wrap gap-2 items-center justify-center max-w-4xl mx-auto">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                  isActive
                    ? "bg-primary-cyan text-black font-semibold shadow-[0_0_12px_rgba(26,188,254,0.4)]"
                    : "bg-capsule-background-gray text-white/80 hover:text-white hover:bg-neutral-700"
                }`}
              >
                {tag === "All"
                  ? ".all"
                  : `.${tag.toLowerCase().replace(/\s+/g, "_")}`}
              </button>
            )
          })}
        </div>
      )}

      {/* Blog Cards Grouped by Year */}
      {postsByYear.length > 0 ? (
        <div className="flex flex-col gap-14 w-full">
          {postsByYear.map(({ year, posts: yearPosts }) => (
            <section key={year} className="flex flex-col gap-6">
              {/* Year Separator Header */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  .{year}
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-gradient-background-from via-gradient-background-to to-transparent" />
                <span className="text-xs text-text-secondary-light-gray font-light px-3 py-1 rounded-full bg-capsule-background-gray">
                  {yearPosts.length} {yearPosts.length === 1 ? "article" : "articles"}
                </span>
              </div>

              {/* Grid of posts for this specific year */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {yearPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-16 text-center border border-white/10 rounded-3xl bg-primary-background-black">
          <p className="text-xl font-bold text-white mb-2">No articles found</p>
          <p className="text-sm text-text-secondary-light-gray font-light">
            No posts found for this tag.
          </p>
          {selectedTag !== "All" && (
            <button
              onClick={() => setSelectedTag("All")}
              className="mt-4 text-sm font-light text-primary-cyan hover:underline"
            >
              .view_all_articles
            </button>
          )}
        </div>
      )}
    </div>
  )
}
