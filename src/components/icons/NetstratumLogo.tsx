import Image from "next/image"
import React from "react"

type ImageComponentProps = {
  width: number
  height: number
  fill: string
  className?: string // Optional prop
}
const NetstratumLogo = ({ width, height }: ImageComponentProps) => {
  return (
    <div>
      <Image
        width={width}
        height={height}
        alt="project screenshot"
        src={"/company_logo/netstratum_logo.png"}
      />
    </div>
  )
}

export default NetstratumLogo
