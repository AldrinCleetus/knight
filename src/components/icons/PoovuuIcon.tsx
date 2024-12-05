import Image from "next/image"
import React from "react"

type ImageComponentProps = {
  width: number
  height: number
  fill: string
  className?: string // Optional prop
}
const PoovuIcon = ({ width, height }: ImageComponentProps) => {
  return (
    <div>
      <Image
        width={width}
        height={height}
        alt="project screenshot"
        src={"/project_icons/poovu.png"}
      />
    </div>
  )
}

export default PoovuIcon
