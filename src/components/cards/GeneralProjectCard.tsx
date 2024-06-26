import React from "react"
import GradientBorder from "../wrapper/GradientBorder"
import DiscordIcon from "../icons/DiscordIcon"
import clsx from "clsx"
import LogoCard from "./LogoCard"
import GitHubIcon from "../icons/GithubIcon"
import BentoButton from "../buttons/BentoButton"
import NextJsIcon from "../icons/NextJsIcon"
import ReactIcon from "../icons/ReactIcon"
import Image from "next/image"

type Props = {
  size?: "normal" | "double" | "max"
}

const GeneralProjectCard = ({ size = "normal" }: Props) => {
  return (
    <div
      className={clsx("flex ", {
        "flex-[1]": size === "max",
        "w-[33%]": size === "normal",
      })}
    >
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          {size === "max" && (
            <>
              <Image
                className="absolute  left-52 top-20 -rotate-12 scale-50 border-4 border-gradient-background-from rounded-xl 
                hover:rotate-0 hover:-translate-x-44 hover:z-10  hover:-translate-y-[24%]  hover:scale-75 transition-all ease-in-out 
                
                "
                width={1280}
                height={720}
                alt="project screenshot"
                src={"/project_screenshots/morax_1.png"}
              />
              <Image
                className="absolute  left-[30%] top-[10%] -rotate-12 scale-50 border-4 border-gradient-background-from rounded-xl
                hover:rotate-0 hover:-translate-x-52 hover:z-10  hover:-translate-y-[12%] hover:scale-75 transition-all ease-in-out 
                "
                width={1280}
                height={720}
                alt="project screenshot"
                src={"/project_screenshots/morax_1.png"}
              />
            </>
          )}
          <div className="mb-4 gap-3 flex flex-col">
            <NextJsIcon width={32} height={32} fill="white" />
            <h3 className="font-bold text-xl">Kalendar</h3>
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

export default GeneralProjectCard
