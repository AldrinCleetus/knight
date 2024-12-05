import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import QuoteIcon from "../icons/QuoteIcon"
import Image from "next/image"
import GitHubCalendar from "react-github-calendar"
import { ColorPallete } from "@/utils/theme/colors"

type Props = {}

const GithubStats = (props: Props) => {
  return (
    <div className={clsx("hidden lg:flex flex-1 ")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 gap-4 justify-between overflow-clip relative"
          )}
        >
          <div className=" p-4 rounded-xl mx-auto">
            <GitHubCalendar
              username="AldrinCleetus"
              colorScheme="dark"
              theme={{
                dark: [
                  "hsl(0, 0%, 22%)",
                  ColorPallete["knight-blue"]["50"],
                  ColorPallete["knight-blue"]["300"],
                  ColorPallete["knight-blue"]["500"],
                  ColorPallete["knight-blue"]["800"],
                ],
              }}
            />
          </div>

          <div className="flex flex-row justify-between px-4 gap-4">
            <Image
              unoptimized
              src="https://github-readme-streak-stats.herokuapp.com/?user=AldrinCleetus&theme=github-dark-blue&hide_border=true&border_radius=20"
              alt="GitHub Streak"
              width={495}
              height={400}
            />

            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=AldrinCleetus&theme=dark&hide_border=true&border_radius=10&include_all_commits=false&count_private=false&layout=compact"
              alt="Trulli"
              width="350"
              height="250"
            />
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default GithubStats
