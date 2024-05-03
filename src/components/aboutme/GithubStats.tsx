import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import QuoteIcon from "../icons/QuoteIcon"
import Image from "next/image"

type Props = {}

const GithubStats = (props: Props) => {
  return (
    <div className={clsx("flex flex-1")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=AldrinCleetus&theme=github-dark-blue&hide_border=true&border_radius=25"
            alt="GitHub Streak"
            width={495}
            height={400}
          />
        </div>
      </GradientBorder>
    </div>
  )
}

export default GithubStats
