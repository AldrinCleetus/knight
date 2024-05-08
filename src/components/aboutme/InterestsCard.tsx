import React from "react"
import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import MapIcon from "../icons/MapIcon"

type Props = {}

const InterestsCard = (props: Props) => {
  return (
    <div className={clsx("flex flex-1 max-w-[400px]")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl text-tertiary-background-gray">
                Hobbies and Interests
              </h3>

              <div className="flex flex-row flex-wrap gap-2">
                {Array(4)
                  .fill(1)
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 py-1 bg-capsule-background-gray rounded-full"
                      >
                        <p className="text-sm font-light">👨🏽‍💻 Open </p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default InterestsCard
