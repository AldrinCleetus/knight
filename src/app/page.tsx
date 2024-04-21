import IntroductionSection from "@/components/landing/IntroductionSection"
import MyPlatforms from "@/components/landing/MyPlatforms"
import SectionHeading from "@/components/shared/SectionHeading"

export default function Home() {
  return (
    <div>
      <div className="flex flex-1 flex-col lg:flex-row justify-between gap-12 lg:gap-56 mt-20">
        <IntroductionSection />
        <MyPlatforms />
      </div>
      <SectionHeading />
    </div>
  )
}
