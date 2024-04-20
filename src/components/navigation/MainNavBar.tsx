import { mainRoutes } from "@/contants/navigationConstants"
import Link from "next/link"
import CapsuleButton from "../buttons/CapsuleButton"

function MainNavBar() {
  return (
    <nav className=" py-2 md:py-10   w-full  flex flex-row justify-between">
      <div className="self-center">
        <h1 className="text-2xl lg:text-4xl  font-bold ">Name here</h1>
      </div>
      <div className="flex-row flex gap-11 self-center">
        <div
          className={`hidden  flex-row md:flex gap-11 self-center font-light `}
        >
          <Link href={mainRoutes.PROJECTS.link}>
            <p className="text-2xl lg:text-4xl">.projects</p>
          </Link>
          <Link href={mainRoutes.SKILLS.link}>
            <p className="text-2xl lg:text-4xl">.skills</p>
          </Link>
          <Link href={mainRoutes.BLOG.link}>
            <p className="text-2xl lg:text-4xl">.blogs</p>
          </Link>
        </div>
        <CapsuleButton />
      </div>
    </nav>
  )
}

export default MainNavBar
