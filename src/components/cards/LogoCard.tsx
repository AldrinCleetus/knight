import React from "react"
import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"

type Props = { children: React.ReactNode; animate?: boolean }

const LogoCard = ({ children, animate = true }: Props) => {
  return (
    <div
      className={clsx(
        "bg-secondary-background-gray rounded-xl p-2   flex-row flex-0 justify-center  transition-all ease-in-out cursor-pointer",
        {
          "hover:rotate-3 hover:scale-105 ": animate,
        }
      )}
    >
      {children}
    </div>
  )
}

export default LogoCard
