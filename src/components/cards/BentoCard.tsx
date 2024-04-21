import React from "react"
import GradientBorder from "../wrapper/GradientBorder"

type Props = { children: React.ReactNode }

const BentoCard = (props: Props) => {
  return (
    <GradientBorder rounded="3xl">
      <div className="bg-primary-background-black rounded-3xl">
        {props.children}
      </div>
    </GradientBorder>
  )
}

export default BentoCard
