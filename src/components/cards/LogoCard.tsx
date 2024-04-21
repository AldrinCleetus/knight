import React from "react"
import GradientBorder from "../wrapper/GradientBorder"

type Props = { children: React.ReactNode }

const LogoCard = ({ children }: Props) => {
  return (
    <div className="bg-secondary-background-gray rounded-xl p-2 hover:rotate-3  flex-row flex-0 justify-center hover:scale-105 transition-all ease-in-out cursor-pointer">
      {children}
    </div>
  )
}

export default LogoCard
