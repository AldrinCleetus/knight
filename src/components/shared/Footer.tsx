import { getFooterText } from "@/utils/helpers/generalHelper"
import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex w-full my-20 justify-center">
      <p className="text text-tertiary-background-gray  ">{getFooterText()}</p>
    </footer>
  )
}

export default Footer
