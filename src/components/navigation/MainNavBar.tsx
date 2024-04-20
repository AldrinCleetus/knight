import { mainRoutes } from "@/contants/navigationConstants"
import Image from "next/image"
import Link from "next/link"
import ExternalLinkIcon from "../icons/ExternalLinkIcon"
import CapsuleButton from "../buttons/CapsuleButton"

function MainNavBar() {
  return (
    <nav className="mt-10 w-full  flex flex-row justify-between">
      <div className="self-center">
        <h1 className="text-3xl font-bold ">Knight</h1>
      </div>
      <div className="flex-row flex gap-11 self-center">
        <div className="flex-row flex gap-11 self-center">
          <Link href={mainRoutes.PROJECTS}>
            <p className="text-2xl">.projects</p>
          </Link>
          <Link href={mainRoutes.SKILS}>
            <p className="text-2xl">.skills</p>
          </Link>
          <Link href={mainRoutes.BLOG}>
            <p className="text-2xl">.blogs</p>
          </Link>
        </div>
        <CapsuleButton />
      </div>
    </nav>
  )
}

export default MainNavBar
