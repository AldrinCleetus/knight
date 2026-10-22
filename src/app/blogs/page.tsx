import { Metadata } from "next"
import SectionHeading from "@/components/shared/SectionHeading"
import BlogListClient from "@/components/blogs/BlogListClient"
import { getAllBlogPosts } from "@/utils/helpers/blogHelper"

export const metadata: Metadata = {
  title: "Blogs | Aldrin Cleetus",
  description: "Thoughts, engineering logs, and notes on software engineering, tech stacks, and building modern apps.",
}

export default function BlogsPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="flex flex-col flex-1 pb-20">
      <SectionHeading
        title=".blogs"
        id="blogs"
        subtitle="Thoughts, tech deep dives, and documenting the journey of building software."
      />
      <BlogListClient initialPosts={posts} />
    </div>
  )
}
