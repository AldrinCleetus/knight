import Image from "next/image"
import React from "react"

type ImageComponentProps = {
  width: number
  height: number
  fill: string
  className?: string // Optional prop
}
const EdithIndustriesLogo = ({ width, height }: ImageComponentProps) => {
  return (
    <div>
      <Image
        width={width}
        height={height}
        alt="project screenshot"
        src={"/company_logo/edithindustries_logo.png"}
      />
    </div>
  )
}

export default EdithIndustriesLogo
