import React from "react"
import GeneralProjectCard from "../cards/GeneralProjectCard"

type Props = {}

const ProjectList = (props: Props) => {
  return (
    <div className="flex flex-col justify-evenly gap-4 pt-10">
      <div className="flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard size={1} />
        <GeneralProjectCard />
      </div>
      <div className="flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard size={1} />
        <GeneralProjectCard />

        <GeneralProjectCard />
      </div>
    </div>
  )
}

export default ProjectList
