import * as React from "react"
import { SVGProps } from "react"
import StackIcon from "tech-stack-icons"
const NodeJsIcon = (props: SVGProps<SVGSVGElement>) => (
  <div
    style={{
      width: props.width,
      height: props.height,
    }}
  >
    <StackIcon
      style={{
        width: props.width,
        height: props.width,
      }}
      name="typescript"
    />
  </div>
)
export default NodeJsIcon
