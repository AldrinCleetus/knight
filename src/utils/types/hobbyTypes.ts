export interface Photo {
  src: string
  alt: string
  width: number
  height: number
  title?: string
  location?: string
  takenAt?: string
  camera?: string
}

export interface HobbyCategory {
  slug: string
  name: string
  description: string
  coverImage?: string
  available: boolean
}
