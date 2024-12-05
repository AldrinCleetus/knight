import Image from "next/image"
import React from "react"

type ImageComponentProps = {
  width: number
  height: number
  fill: string
  className?: string // Optional prop
}
const NavaLogo = ({ width, height }: ImageComponentProps) => {
  return (
    <div>
      <Image
        width={width}
        height={height}
        alt="project screenshot"
        src={"/company_logo/nava_design_innovation_private_limited_logo.png"}
      />
    </div>
  )
}

export default NavaLogo
