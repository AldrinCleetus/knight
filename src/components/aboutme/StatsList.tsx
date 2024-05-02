import React from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import GeneralCard from "./LocationCard"
import QuoteCard from "./QuoteCard"

type Props = {}

const StatsList = (props: Props) => {
  return (
    <div className="flex flex-row justify-evenly gap-4 pt-10">
      <WorkExperienceCard />
      <div className="flex flex-col gap-4">
        <GeneralCard />
        <GeneralCard />
      </div>

      <QuoteCard />
    </div>
  )
}

export default StatsList
