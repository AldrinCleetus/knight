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
    <div className={clsx("flex flex-1 ")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-col">
            <h3 className="font-bold text-2xl text-tertiary-background-gray">
              My Journey
            </h3>
          </div>
          {/* timeline */}

          <div className="flex flex-1 flex-row">
            <div className="flex my-10  bg-tertiary-background-gray bg-opacity-50 ml-6 rounded-full w-3 "></div>
            <div className="flex  flex-1 my-6 ">
              <ol className="flex gap-12 lg:gap-1 justify-between flex-col  ml-[-29px]  flex-1 ">
                {Array(4)
                  .fill(1)
                  .map((item, index) => {
                    return (
                      <li key={index} className="flex flex-row gap-4">
                        <div>
                          <LogoCard animate={false}>
                            <NextJsIcon width={32} height={32} fill="white" />
                          </LogoCard>
                        </div>
                        <div className="flex flex-1  flex-row justify-between gap-16">
                          <div className="">
                            <h4>Testing</h4>
                            <p className="text-sm font-light text-nowrap ">
                              Jr UI Designer
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-light text-text-secondary-light-gray">
                              2022-2023
                            </p>
                            <p className="text-sm font-light text-text-secondary-light-gray text-right">
                              5 mos
                            </p>
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ol>
            </div>
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default WorkExperienceCard
