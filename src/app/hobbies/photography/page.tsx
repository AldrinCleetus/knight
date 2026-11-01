import { Metadata } from "next"
import Link from "next/link"
import SectionHeading from "@/components/shared/SectionHeading"
import PhotoGallery from "@/components/hobbies/PhotoGallery"
import { photographyData } from "@/contants/photographyData"

export const metadata: Metadata = {
  title: "Photography | Aldrin Cleetus",
  description: "A gallery of moments — landscapes, light, and quiet scenes captured through the lens.",
}

export default function PhotographyPage() {
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

      <PhotoGallery photos={photographyData} />
    </div>
  )
}
