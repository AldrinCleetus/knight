import React from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import GeneralCard from "./LocationCard"
import QuoteCard from "./QuoteCard"
import GithubStats from "./GithubStats"
import InterestsCard from "./InterestsCard"

type Props = {}

const StatsList = (props: Props) => {
  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap justify-evenly gap-4 pt-10">
      <WorkExperienceCard />
      <div className="flex flex-col flex-wrap gap-4">
        <div className="flex flex-row flex-wrap gap-4">
          <div className="flex flex-col gap-4 flex-wrap flex-1 lg:flex-none">
            <GeneralCard />
            <InterestsCard />
          </div>

          <QuoteCard />
        </div>
        <GithubStats />
      </div>
    </div>
  )
}

export default StatsList
