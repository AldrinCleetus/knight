import Link from "next/link"
import { getAllBlogPosts } from "@/utils/helpers/blogHelper"
import BlogCard from "./BlogCard"
import GradientBorder from "../wrapper/GradientBorder"

export default function RecentBlogs() {
  const posts = getAllBlogPosts().slice(0, 2)

  if (posts.length === 0) {
    return (
      <div className="flex justify-center mt-8">
        <GradientBorder rounded="3xl">
          <div className="bg-primary-background-black rounded-3xl px-8 py-6 text-center max-w-md">
            <p className="text-base font-semibold text-white mb-1">.stay_tuned</p>
            <p className="text-xs text-text-secondary-light-gray font-light">
              Articles and engineering logs are currently in the works!
            </p>
          </div>
        </GradientBorder>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/blogs">
          <GradientBorder rounded="full" button>
            <div className="px-6 py-2.5 rounded-full bg-primary-background-black text-sm font-semibold text-white hover:text-primary-cyan transition-colors flex items-center gap-2">
              <span>View all blogs</span>
              <span>→</span>
            </div>
          </GradientBorder>
        </Link>
      </div>
    </div>
  )
}
