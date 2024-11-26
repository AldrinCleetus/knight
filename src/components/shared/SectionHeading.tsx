import React from "react"

type Props = {
  title?: string
  subtitle?: string
  id: string
}

const SectionHeading = ({ subtitle, title = "No Title", id }: Props) => {
  return (
    <div id={id} className="text-center mt-20 gap-4 flex flex-col pt-2 ">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-text-secondary-light-gray">{subtitle}</p>
    </div>
  )
}

export default SectionHeading
