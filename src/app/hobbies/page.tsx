import { Metadata } from "next"
import { notFound } from "next/navigation"
import SectionHeading from "@/components/shared/SectionHeading"
import HobbyCategoryCard from "@/components/hobbies/HobbyCategoryCard"
import { HobbyCategory } from "@/utils/types/hobbyTypes"

export const metadata: Metadata = {
  title: "Hobbies | Aldrin Cleetus",
  description: "Beyond the code — exploring photography, cosplay, and creative pursuits.",
}

const hobbyCategories: HobbyCategory[] = [
  {
    slug: "photography",
    name: "photography",
    description:
      "Capturing moments through the lens — landscapes, candid street scenes, and the quiet beauty of everyday life.",
    available: true,
  },
  {
    slug: "cosplay",
    name: "cosplay",
    description:
      "Bringing fictional characters to life through costumes, props, and the art of transformation.",
    available: false,
  },
]

export default function HobbiesPage() {
  // Temporarily disabled so no one can visit — remove notFound() to re-enable
  notFound()

  return (
    <div className="flex flex-col flex-1 pb-20">
      <SectionHeading
        title=".hobbies"
        id="hobbies"
        subtitle="Life beyond the terminal — the things that keep the creative spark alive."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {hobbyCategories.map((category) => (
          <HobbyCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  )
}
