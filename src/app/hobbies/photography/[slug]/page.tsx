import { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/shared/SectionHeading"
import PhotoGallery from "@/components/hobbies/PhotoGallery"
import { photographyData } from "@/contants/photographyData"
import { notFound } from "next/navigation"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return photographyData.map((photo) => ({ slug: photo.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const photo = photographyData.find((p) => p.slug === params.slug)
  if (!photo) return {}
  return {
    title: `${photo.title ?? photo.slug} | Photography | Aldrin Cleetus`,
    description: photo.description ?? photo.alt,
  }
}

export default function PhotoDetailPage({ params }: Props) {
  const photo = photographyData.find((p) => p.slug === params.slug)
  if (!photo) notFound()

  return (
    <div className="flex flex-col flex-1">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-text-secondary-light-gray font-light mt-6">
        <Link href="/hobbies" className="hover:text-primary-cyan transition-colors">
          .hobbies
        </Link>
        <span>/</span>
        <span className="text-white">.photography</span>
      </div>

      <SectionHeading
        title=".photography"
        id="photography"
        subtitle="Moments captured in light — step inside."
      />

      <PhotoGallery photos={photographyData} initialSlug={params.slug} />
    </div>
  )
}
