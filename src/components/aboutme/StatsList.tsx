import React from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import GeneralCard from "./LocationCard"

type Props = {}

const StatsList = (props: Props) => {
  return (
    <div className="flex flex-row justify-evenly gap-4 pt-10">
      <WorkExperienceCard />
      <GeneralCard />
    </div>
  )
}

export default StatsList
