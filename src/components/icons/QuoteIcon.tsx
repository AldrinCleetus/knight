import * as React from "react"
import { SVGProps } from "react"
const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M6.67 26.06c.09 0 8.77-.14 8.77-11.89a7.22 7.22 0 1 0-9.77 6.73v4.16a1 1 0 0 0 1 1ZM3 14.17a5.22 5.22 0 1 1 10.44 0c0 7.5-3.88 9.31-5.77 9.75v-3.75a1 1 0 0 0-.75-1 5.21 5.21 0 0 1-3.92-5Z" />
    <path d="M22.22 26.06c.09 0 8.78-.14 8.78-11.89a7.22 7.22 0 1 0-9.78 6.73v4.16a1 1 0 0 0 1 1Zm-3.66-11.89a5.22 5.22 0 1 1 10.44 0c0 7.5-3.89 9.31-5.78 9.75v-3.75a1 1 0 0 0-.75-1 5.21 5.21 0 0 1-3.91-5Z" />
  </svg>
)
export default QuoteIcon
