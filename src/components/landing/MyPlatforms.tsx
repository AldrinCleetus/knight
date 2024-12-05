import React from "react"
import BentoButton from "../buttons/BentoButton"
import BentoCard from "../cards/BentoCard"
import GitHubIcon from "../icons/GithubIcon"
import EmailIcon from "../icons/EmailIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import SignalIcon from "../icons/SignalIcon"
import DiscordIcon from "../icons/DiscordIcon"
import SketchFabIcon from "../icons/SketchFabIcon"
import { socialMediaLinks } from "@/contants/externalLinks"
import { generalInformation } from "@/contants/portfolioData"
import BlueskyIcon from "../icons/BlueskyIcon"
import DribbleIcon from "../icons/DribbleIcon"

type Props = {}

const MyPlatforms = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col gap-4 mx-auto">
      <div className="h-40 flex flex-row gap-4 ">
        <div className="flex flex-col justify-between">
          <BentoButton linkURL={socialMediaLinks.github}>
            <GitHubIcon width={32} height={32} fill="white" />
          </BentoButton>
          <BentoButton linkURL={socialMediaLinks.gmail} useRegularLink>
            <EmailIcon width={32} height={32} fill="white" />
          </BentoButton>
        </div>

        <BentoCard>
          <div className="flex flex-1 w-full  flex-col text-xl px-4 py-4 ">
            <h3 className="text-text-secondary-light-gray text-base lg:text-xl">
              Current Role
            </h3>
            <h2 className="text-xl lg:text-2xl font-semibold">
              {generalInformation.currentRole}
            </h2>
            <p className="text-base lg:text-xl opacity-85">
              Feel free to reach out to me, on any of these platforms 😇
            </p>
          </div>
        </BentoCard>
      </div>
      <div className="flex flex-row justify-start lg:justify-evenly gap-2 ">
        <div className="flex flex-row justify-between gap-2">
          <BentoButton linkURL={socialMediaLinks.linkedIn}>
            <LinkedInIcon width={32} height={32} fill="white" />
          </BentoButton>
          <BentoButton linkURL={socialMediaLinks.bluesky}>
            <BlueskyIcon width={32} height={32} fill="white" />
          </BentoButton>
        </div>
        <div className="hidden md:flex flex-row gap-2">
          <BentoButton linkURL={socialMediaLinks.discord}>
            <DiscordIcon width={32 * 4} height={32} fill="white" />
          </BentoButton>
          <BentoButton linkURL={socialMediaLinks.dribble}>
            <DribbleIcon width={32 * 4} height={32} fill="white" />
          </BentoButton>
        </div>
        <div className=" md:hidden flex   flex-row gap-2">
          <BentoButton linkURL={socialMediaLinks.discord}>
            <DiscordIcon width={32} height={32} fill="white" />
          </BentoButton>
          <BentoButton linkURL={socialMediaLinks.dribble}>
            <DribbleIcon width={32} height={32} fill="white" />
          </BentoButton>
        </div>
      </div>
    </div>
  )
}

export default MyPlatforms
