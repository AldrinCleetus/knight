import React from "react"
import ExternalLinkIcon from "../icons/ExternalLinkIcon"
import GradientBorder from "../wrapper/GradientBorder"

type Props = {}

const BottomNavigationBar = (props: Props) => {
  return (
    <div className="bottom-6 left-0 md:hidden sticky h-12 w-full  flex justify-center">
      <div className="self-center">
        <GradientBorder>
          <div className="self-center bg-primary-background-black rounded-full flex flex-row gap-4 p-2">
            <div className="flex flex-row gap-1 rounded-full px-4 py-2 bg-neutral-700">
              <ExternalLinkIcon
                width={20}
                height={20}
                fill="white"
                className="self-center"
              />
              <p className="self-center  font-light">Projects</p>
            </div>
            <div className="flex flex-row gap-1 rounded-full px-4 py-2 ">
              <ExternalLinkIcon
                width={20}
                height={20}
                fill="white"
                className="self-center"
              />
            </div>
            <div className="flex flex-row gap-1 rounded-full px-4 py-2 ">
              <ExternalLinkIcon
                width={20}
                height={20}
                fill="white"
                className="self-center"
              />
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  )
}

export default BottomNavigationBar
