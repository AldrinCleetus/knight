import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { BlogPost, BlogPostMeta } from "../types/blogTypes"

const BLOGS_DIRECTORY = path.join(process.cwd(), "src", "content", "blogs")
const ROOT_BLOGS_DIRECTORY = path.join(process.cwd(), "content", "blogs")

function getBlogDirectory(): string {
  if (fs.existsSync(BLOGS_DIRECTORY)) {
    return BLOGS_DIRECTORY
  }
  if (fs.existsSync(ROOT_BLOGS_DIRECTORY)) {
    return ROOT_BLOGS_DIRECTORY
  }
  return BLOGS_DIRECTORY
}

export function calculateReadingTime(content: string): string {
  // Strip code blocks and markdown symbols roughly to count words
  const cleanContent = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/#+\s/g, "")
    .replace(/[*_~`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim()

  const words = cleanContent.split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))
  return `${minutes} min read`
}

export function formatDateTime(dateInput: string | Date): {
  formattedDate: string
  formattedTime: string
  isoString: string
  year: number
} {
  const dateObj = typeof dateInput === "string" ? new Date(dateInput) : dateInput

  if (isNaN(dateObj.getTime())) {
    return {
      formattedDate: typeof dateInput === "string" ? dateInput : "Unknown date",
      formattedTime: "",
      isoString: "",
      year: new Date().getFullYear(),
    }
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(dateObj)

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(dateObj)

  return {
    formattedDate,
    formattedTime,
    isoString: dateObj.toISOString(),
    year: dateObj.getFullYear(),
  }
}

export function getAllBlogSlugs(): string[] {
  const dir = getBlogDirectory()
  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs.readdirSync(dir)
  return files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => file.replace(/\.(md|mdx)$/, ""))
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const dir = getBlogDirectory()
  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs.readdirSync(dir)
  const posts: BlogPostMeta[] = []

  for (const file of files) {
    if (!file.endsWith(".md") && !file.endsWith(".mdx")) {
      continue
    }

    const slug = file.replace(/\.(md|mdx)$/, "")
    const fullPath = path.join(dir, file)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    const dateTime = formatDateTime(data.date || new Date().toISOString())
    const readTime = data.readTime || calculateReadingTime(content)

    posts.push({
      slug,
      title: data.title || slug,
      date: data.date ? String(data.date) : new Date().toISOString(),
      formattedDate: dateTime.formattedDate,
      formattedTime: dateTime.formattedTime,
      year: dateTime.year,
      readTime,
      description: data.description || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || { name: "Aldrin Cleetus", role: "Software Engineer" },
      coverImage: data.coverImage,
    })
  }

  // Sort posts by date descending
  return posts.sort((a, b) => {
    const timeA = new Date(a.date).getTime()
    const timeB = new Date(b.date).getTime()
    if (isNaN(timeA) || isNaN(timeB)) return 0
    return timeB - timeA
  })
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const dir = getBlogDirectory()
  const mdPath = path.join(dir, `${slug}.md`)
  const mdxPath = path.join(dir, `${slug}.mdx`)

  let filePath = ""
  if (fs.existsSync(mdPath)) {
    filePath = mdPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  const dateTime = formatDateTime(data.date || new Date().toISOString())
  const readTime = data.readTime || calculateReadingTime(content)

  const processedContent = await remark().use(html, { sanitize: false }).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date) : new Date().toISOString(),
    formattedDate: dateTime.formattedDate,
    formattedTime: dateTime.formattedTime,
    year: dateTime.year,
    readTime,
    description: data.description || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    author: data.author || { name: "Aldrin Cleetus", role: "Software Engineer" },
    coverImage: data.coverImage,
    content,
    contentHtml,
  }
}
