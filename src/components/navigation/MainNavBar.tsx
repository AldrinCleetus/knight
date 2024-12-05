import { mainRoutes } from "@/contants/navigationConstants"
import Link from "next/link"
import CapsuleButton from "../buttons/CapsuleButton"
import { mySignatureFont } from "@/contants/fonts"
import { generalInformation } from "@/contants/portfolioData"

function MainNavBar() {
  return (
    <nav className=" py-2 md:py-10   w-full  flex flex-row justify-between">
      <div className="self-center">
        <h1 className={`${mySignatureFont.className} text-3xl lg:text-5xl   `}>
          <Link href={mainRoutes.HOME.link}>{generalInformation.name}</Link>
        </h1>
      </div>
      <div className="flex-row flex gap-11 self-center">
        <div
          className={`hidden  flex-row md:flex gap-11 self-center font-light `}
        >
          <Link href={mainRoutes.PROJECTS.link}>
            <p className="text-2xl ">.projects</p>
          </Link>
          {/* <Link href={mainRoutes.SKILLS.link}>
            <p className="text-2xl ">.skills</p>
          </Link> */}
          <Link href={mainRoutes.ABOUTME.link}>
            <p className="text-2xl ">.about_me</p>
          </Link>
        </div>
        <CapsuleButton />
      </div>
    </nav>
  )
}

export default MainNavBar
