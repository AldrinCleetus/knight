export interface Photo {
  slug: string
  src: string
  rawUrl?: string
  alt: string
  width: number
  height: number
  title?: string
  description?: string
  location?: string
  takenAt?: string
  // Technical metadata
  gear?: string
  iso?: string
  aperture?: string
  shutterSpeed?: string
  focalLength?: string
}

export interface HobbyCategory {
  slug: string
  name: string
  description: string
  coverImage?: string
  available: boolean
}
