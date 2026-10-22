import Link from "next/link"
import GradientBorder from "../wrapper/GradientBorder"
import CalendarIcon from "../icons/CalendarIcon"
import ClockIcon from "../icons/ClockIcon"
import { BlogPostMeta } from "@/utils/types/blogTypes"

interface BlogCardProps {
  post: BlogPostMeta
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex flex-1 h-full">
      <GradientBorder rounded="3xl" expandFull button>
        <article className="flex flex-col flex-1 justify-between p-6 md:p-8 bg-primary-background-black rounded-3xl transition-all duration-200 w-full">
          <div>
            {/* Meta Row: Date, Time & Reading Time */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-text-secondary-light-gray mb-4">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-primary-cyan" />
                <time dateTime={post.date}>
                  {post.formattedDate}
                  {post.formattedTime ? ` • ${post.formattedTime}` : ""}
                </time>
              </div>
              <span className="text-secondary-background-gray">•</span>
              <div className="flex items-center gap-1.5 bg-capsule-background-gray px-2.5 py-0.5 rounded-full text-white/90">
                <ClockIcon className="w-3 h-3 text-primary-cyan" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-cyan transition-colors mb-3 leading-snug">
              {post.title}
            </h3>

            {/* Excerpt / Description */}
            {post.description && (
              <p className="text-sm text-text-secondary-light-gray line-clamp-3 leading-relaxed mb-6 font-light">
                {post.description}
              </p>
            )}
          </div>

          {/* Footer: Tags and Link */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
            <div className="flex flex-wrap gap-2 items-center">
              {post.tags &&
                post.tags.slice(0, 3).map((tag, idx) => (
                  <div
                    key={idx}
                    className="px-2.5 py-1 bg-capsule-background-gray rounded-full"
                  >
                    <p className="text-xs font-light text-white/80">{tag}</p>
                  </div>
                ))}
              {post.tags && post.tags.length > 3 && (
                <span className="text-xs text-text-secondary-light-gray font-light">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-sm font-light text-primary-cyan group-hover:translate-x-1 transition-transform self-end sm:self-auto">
              <span>.read_post</span>
              <span>→</span>
            </div>
          </div>
        </article>
      </GradientBorder>
    </Link>
  )
}

export default BlogCard
