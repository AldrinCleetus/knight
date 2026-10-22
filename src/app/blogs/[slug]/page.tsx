import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllBlogSlugs, getBlogPostBySlug } from "@/utils/helpers/blogHelper"
import CalendarIcon from "@/components/icons/CalendarIcon"
import ClockIcon from "@/components/icons/ClockIcon"
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon"
import GradientBorder from "@/components/wrapper/GradientBorder"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) {
    return {
      title: "Blog Not Found | Aldrin Cleetus",
    }
  }

  return {
    title: `${post.title} | Aldrin Cleetus`,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || "Aldrin Cleetus"],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col flex-1 pb-24 max-w-4xl mx-auto w-full pt-8">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-light text-text-secondary-light-gray hover:text-primary-cyan transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>.back_to_blogs</span>
        </Link>
      </div>

      {/* Article Header Card */}
      <GradientBorder rounded="3xl" expandFull>
        <header className="p-6 md:p-10 bg-primary-background-black rounded-3xl w-full">
          {/* Metadata: Date, Time & Reading Time */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-text-secondary-light-gray mb-6">
            <div className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-primary-cyan" />
              <time dateTime={post.date}>
                {post.formattedDate}
                {post.formattedTime ? ` • ${post.formattedTime}` : ""}
              </time>
            </div>
            <span className="text-secondary-background-gray">•</span>
            <div className="flex items-center gap-1.5 bg-capsule-background-gray px-3 py-1 rounded-full text-white/90">
              <ClockIcon className="w-3.5 h-3.5 text-primary-cyan" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Subtitle / Excerpt */}
          {post.description && (
            <p className="text-lg md:text-xl text-text-secondary-light-gray leading-relaxed mb-6 font-light">
              {post.description}
            </p>
          )}

          {/* Author and Tags Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-capsule-background-gray border border-white/20 flex items-center justify-center font-bold text-primary-cyan text-sm">
                {post.author?.name
                  ? post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                  : "AC"}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author?.name || "Aldrin Cleetus"}
                </p>
                {post.author?.role && (
                  <p className="text-xs text-text-secondary-light-gray font-light">
                    {post.author.role}
                  </p>
                )}
              </div>
            </div>

            {/* Tags styled with capsule badges matching portfolio */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                {post.tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-3 py-1 bg-capsule-background-gray rounded-full"
                  >
                    <p className="text-xs font-light text-white/90">{tag}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </header>
      </GradientBorder>

      {/* Article Content Container */}
      <article className="mt-10 px-2 md:px-4">
        <div
          className="prose prose-invert prose-cyan max-w-none
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
            prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
            prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-text-secondary-light-gray prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:font-light
            prose-a:text-primary-cyan prose-a:underline hover:prose-a:text-white
            prose-blockquote:border-l-4 prose-blockquote:border-l-primary-cyan prose-blockquote:bg-primary-background-black/80 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-2xl prose-blockquote:text-white/90 prose-blockquote:italic
            prose-code:text-primary-cyan prose-code:bg-capsule-background-gray/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-primary-background-black prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:p-5 prose-pre:shadow-2xl
            prose-ul:text-text-secondary-light-gray prose-ol:text-text-secondary-light-gray
            prose-li:my-1.5"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />
      </article>

      {/* Footer navigation */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-light text-primary-cyan hover:underline"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>.all_articles</span>
        </Link>
        <p className="text-xs text-text-secondary-light-gray font-light">
          Jack of all trades, master of none, though ofttimes better than master of one.
        </p>
      </div>
    </div>
  )
}
