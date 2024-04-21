import React from "react"
import GradientBorder from "../wrapper/GradientBorder"
import DiscordIcon from "../icons/DiscordIcon"
import clsx from "clsx"
import LogoCard from "./LogoCard"
import GitHubIcon from "../icons/GithubIcon"
import BentoButton from "../buttons/BentoButton"

type Props = {
  size?: 1 | 2 | 3
}

const GeneralProjectCard = ({ size = 3 }: Props) => {
  return (
    <div
      className={clsx("flex ", {
        "flex-[1]": size > 1,
        "w-[33%]": size === 1,
      })}
    >
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between"
          )}
        >
          <div>
            <h3 className="font-bold mb-4 text-xl">Project name</h3>
            <p
              className={clsx(
                "font-light text-text-secondary-light-gray mb-6",
                {
                  // "w-[33%]": size !== 1,
                }
              )}
            >
              Craft Your Perfect Calendar: Add Images, Events, and More!
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-2">
              <LogoCard>
                <DiscordIcon width={32} height={32} fill="white" />
              </LogoCard>
              <LogoCard>
                <DiscordIcon width={32} height={32} fill="white" />
              </LogoCard>
            </div>
            <div className="flex flex-row gap-2 mt-4 ">
              <div className="bg-secondary-background-gray px-4 py-2 rounded-lg cursor-pointer  hover:scale-105 transition-all ease-in-out">
                <p className="text-xl">Visit Site</p>
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

export default GeneralProjectCard
