import StatsList from "@/components/aboutme/StatsList"
import IntroductionSection from "@/components/landing/IntroductionSection"
import MyPlatforms from "@/components/landing/MyPlatforms"
import ProjectList from "@/components/projects/ProjectList"
import SectionHeading from "@/components/shared/SectionHeading"

export default function Home() {
  return (
    <div>
      <div className="flex flex-1 flex-col lg:flex-row justify-between gap-12 lg:gap-56 mt-20  ">
        <IntroductionSection />
        <MyPlatforms />
      </div>
      <SectionHeading
        title="Projects"
        id="projects"
        subtitle="Some of my recent projects I've been working on."
      />
      <ProjectList />
      <SectionHeading
        title="About Me"
        id="aboutme"
        subtitle={"Turning coffee into code and bugs into features!"}
      />
      <StatsList />
    </div>
  )
}
