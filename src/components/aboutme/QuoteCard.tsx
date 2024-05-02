import React from "react"
import LogoCard from "../cards/LogoCard"
import NextJsIcon from "../icons/NextJsIcon"
import ReactIcon from "../icons/ReactIcon"
import FigmaIcon from "../icons/FigmaIcon"
import GitIcon from "../icons/GitIcon"
import GitHubIcon from "../icons/GithubIcon"
import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import MapIcon from "../icons/MapIcon"
import QuoteIcon from "../icons/QuoteIcon"

type Props = {}

const QuoteCard = (props: Props) => {
  return (
    <div className={clsx("flex flex-1 ")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-row justify-between">
            <QuoteIcon
              className="rotate-180 "
              width={52}
              height={52}
              fill="#C7C7C7"
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-4xl ">Kochi, Kerala</p>
            </div>

            <QuoteIcon width={52} height={52} fill="#C7C7C7" />
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default QuoteCard
