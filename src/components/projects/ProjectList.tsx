import React from "react"
import GeneralProjectCard from "../cards/GeneralProjectCard"

type Props = {}

const ProjectList = (props: Props) => {
  return (
    <div className="flex flex-col justify-evenly gap-4 pt-10">
      <div className="flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard />
        <GeneralProjectCard size="max" />
      </div>
      <div className="flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard />
        <GeneralProjectCard />

        <GeneralProjectCard />
      </div>
    </div>
  )
}

export default ProjectList
