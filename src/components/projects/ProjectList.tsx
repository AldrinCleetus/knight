import React from "react"
import GeneralProjectCard from "../cards/GeneralProjectCard"

type Props = {}

const ProjectList = (props: Props) => {
  return (
    <div className="flex flex-col justify-evenly gap-4 pt-10">
      {/* Mobile */}
      <div className=" lg:hidden flex flex-col justify-evenly gap-4  ">
        <GeneralProjectCard size="double" />
        <GeneralProjectCard size="double" />
      </div>
      <div className=" lg:hidden flex flex-col  justify-evenly gap-4 ">
        <GeneralProjectCard size="double" />
        <GeneralProjectCard size="double" />
        <GeneralProjectCard size="double" />
      </div>

      {/* Web */}
      <div className="hidden lg:flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard />
        <GeneralProjectCard size="max" />
      </div>
      <div className="hidden lg:flex flex-row  justify-evenly gap-4  ">
        <GeneralProjectCard />
        <GeneralProjectCard />
        <GeneralProjectCard />
      </div>
    </div>
  )
}

export default ProjectList
