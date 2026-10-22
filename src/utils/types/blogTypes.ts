export interface BlogAuthor {
  name: string
  role?: string
  avatar?: string
}

export interface BlogFrontmatter {
  title: string
  date: string
  description?: string
  tags?: string[]
  author?: BlogAuthor
  coverImage?: string
  readTime?: string
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string
  readTime: string
  formattedDate: string
  formattedTime: string
  year: number
}

export interface BlogPost extends BlogPostMeta {
  content: string
  contentHtml?: string
}
