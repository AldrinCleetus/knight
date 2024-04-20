import { SVGProps } from "react"
const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5v2H5v12h12v-5h2Zm-.003-7.586-7.293 7.293-1.414-1.414L17.583 5h-4.586V3h8v8h-2V6.414Z"
    />
  </svg>
)
export default ExternalLinkIcon
