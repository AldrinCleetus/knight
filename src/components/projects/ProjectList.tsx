import React from "react"
import GeneralProjectCard from "../cards/GeneralProjectCard"
import { featuredProjects } from "@/contants/portfolioData"

type Props = {}

const ProjectList = (props: Props) => {
  return (
    <div className="flex flex-col justify-evenly gap-4 pt-10">
      {/* Mobile */}
      <div className=" lg:hidden flex flex-col justify-evenly gap-4  ">
        <GeneralProjectCard size="double" project={featuredProjects.kalender} />
        <GeneralProjectCard size="double" project={featuredProjects.kalender} />
      </div>
      <div className=" lg:hidden flex flex-col  justify-evenly gap-4 ">
        <GeneralProjectCard size="double" project={featuredProjects.kalender} />
        <GeneralProjectCard size="double" project={featuredProjects.kalender} />
        <GeneralProjectCard size="double" project={featuredProjects.kalender} />
      </div>

      {/* Web */}
      <div className="hidden lg:flex flex-row justify-evenly gap-4  ">
        <GeneralProjectCard project={featuredProjects.kalender} />
        <GeneralProjectCard size="max" project={featuredProjects.kalender} />
      </div>
      <div className="hidden lg:flex flex-row  justify-evenly gap-4  ">
        <GeneralProjectCard project={featuredProjects.kalender} />
        <GeneralProjectCard project={featuredProjects.kalender} />
        <GeneralProjectCard project={featuredProjects.kalender} />
      </div>
    </div>
  )
}

export default ProjectList
