import Link from "next/link"
import { HobbyCategory } from "@/utils/types/hobbyTypes"
import GradientBorder from "@/components/wrapper/GradientBorder"

interface HobbyCategoryCardProps {
  category: HobbyCategory
}

export default function HobbyCategoryCard({ category }: HobbyCategoryCardProps) {
  const cardInner = (
    <div className="bg-primary-background-black rounded-3xl p-8 flex flex-col gap-4 w-full h-full min-h-[180px] relative overflow-hidden">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-bold text-white">.{category.name}</h2>
        {!category.available && (
          <span className="text-xs font-light px-3 py-1 rounded-full bg-capsule-background-gray text-text-secondary-light-gray border border-white/10">
            coming_soon
          </span>
        )}
      </div>
      <p className="text-text-secondary-light-gray font-light text-sm leading-relaxed flex-1">
        {category.description}
      </p>
      {category.available && (
        <span className="text-primary-cyan text-sm font-light">explore →</span>
      )}
    </div>
  )

  if (!category.available) {
    return (
      <GradientBorder rounded="3xl">
        <div className="w-full opacity-60">{cardInner}</div>
      </GradientBorder>
    )
  }

  return (
    <Link href={`/hobbies/${category.slug}`} className="group">
      <GradientBorder rounded="3xl" button>
        <div className="w-full group-hover:opacity-90 transition-opacity">{cardInner}</div>
      </GradientBorder>
    </Link>
  )
}
