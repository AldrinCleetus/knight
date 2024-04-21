import React, { ReactSVG } from "react"
import GradientBorder from "../wrapper/GradientBorder"
import ExternalLinkIcon from "../icons/ExternalLinkIcon"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  linkURL?: string
  useRegularLink?: boolean
}

const BentoButton = ({
  children,
  linkURL = "",
  useRegularLink = false,
}: Props) => {
  return (
    <GradientBorder button rounded="3xl">
      {useRegularLink && (
        <Link href={linkURL}>
          <div className="bg-primary-background-black rounded-3xl p-5  flex-row flex justify-center">
            {children}
          </div>
        </Link>
      )}
      {!useRegularLink && (
        <a href={linkURL}>
          <div className="bg-primary-background-black rounded-3xl p-5  flex-row flex justify-center">
            {children}
          </div>
        </a>
      )}
    </GradientBorder>
  )
}

export default BentoButton
