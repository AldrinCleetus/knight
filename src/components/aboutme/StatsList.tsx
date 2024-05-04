import React from "react"
import WorkExperienceCard from "./WorkExperienceCard"
import GeneralCard from "./LocationCard"
import QuoteCard from "./QuoteCard"
import GithubStats from "./GithubStats"

type Props = {}

const StatsList = (props: Props) => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly gap-4 pt-10">
      <WorkExperienceCard />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <GeneralCard />
            <GeneralCard />
          </div>

          <QuoteCard />
        </div>
        <GithubStats />
      </div>
    </div>
  )
}

export default StatsList
