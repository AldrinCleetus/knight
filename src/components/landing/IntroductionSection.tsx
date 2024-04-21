import React from "react"

type Props = {}

const IntroductionSection = (props: Props) => {
  return (
    <div className=" py-2 flex flex-1 flex-col gap-4">
      <h1 className="text-4xl font-bold">Hi 👋</h1>
      <div className="flex flex-col lg:flex-row gap-1">
        <p className="text-4xl font-bold ">I am </p>
        <p className="text-4xl font-bold   from-black to-primary-cyan  rounded-lg  lg:px-2  ">
          Mash Barndead
        </p>
      </div>
      <p className="font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias
        eius asperiores quibusdam, eaque delectus dolorem odit ab voluptatum
        ipsa maxime id corrupti, suscipit fugiat pariatur doloribus nulla
        maiores vel.
      </p>
    </div>
  )
}

export default IntroductionSection
