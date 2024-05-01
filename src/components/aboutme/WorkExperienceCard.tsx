import React from "react"
import LogoCard from "../cards/LogoCard"
import NextJsIcon from "../icons/NextJsIcon"
import ReactIcon from "../icons/ReactIcon"
import FigmaIcon from "../icons/FigmaIcon"
import GitIcon from "../icons/GitIcon"
import GitHubIcon from "../icons/GithubIcon"
import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"

type Props = {}

const WorkExperienceCard = (props: Props) => {
  return (
    <div className={clsx("flex flex-1")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-col">
            <div className="flex flex-row justify-between"></div>
            <h3 className="font-bold text-2xl">My Journey</h3>
            {/* <p className="text-text-secondary-light-gray ">#morax</p> */}
            <p
              className={clsx("font-light text-text-secondary-light-gray ", {
                // "w-[33%]": size !== 1,
              })}
            >
              Craft Your Perfect Calendar: Add Images, Events, and More!
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-2">
              <LogoCard>
                <NextJsIcon width={32} height={32} fill="white" />
              </LogoCard>
              <LogoCard>
                <ReactIcon width={32} height={32} fill="white" />
              </LogoCard>
              <LogoCard>
                <FigmaIcon width={32} height={32} fill="white" />
              </LogoCard>
              <LogoCard>
                <GitIcon width={32} height={32} fill="white" />
              </LogoCard>
            </div>
            <div className="flex flex-row gap-2 mt-4 ">
              <div className="bg-secondary-background-gray px-6 py-2 rounded-lg cursor-pointer justify-center flex hover:scale-105 transition-all ease-in-out">
                <p className="text-md self-center">Visit Site</p>
              </div>
              <LogoCard>
                <GitHubIcon width={32} height={32} fill="white" />
              </LogoCard>
            </div>
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default WorkExperienceCard
