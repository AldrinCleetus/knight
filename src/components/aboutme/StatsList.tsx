import React from "react"
import GeneralProjectCard from "../cards/GeneralProjectCard"
import WorkExperienceCard from "./WorkExperienceCard"

type Props = {}

const StatsList = (props: Props) => {
  return (
    <div className="flex flex-row justify-evenly gap-4 pt-10">
      <WorkExperienceCard />
      <WorkExperienceCard />
    </div>
  )
}

export default StatsList
