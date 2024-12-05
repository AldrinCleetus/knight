import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import LogoCard from "./LogoCard"
import GitHubIcon from "../icons/GithubIcon"
import Image from "next/image"
import { myIcons } from "@/contants/iconData"
import { Project } from "@/utils/types/generalTypes"
import Link from "next/link"

type Props = {
  size?: "normal" | "double" | "max"
  project: Project
}

const GeneralProjectCard = ({ size = "normal", project }: Props) => {
  return (
    <div
      className={clsx("flex ", {
        "flex-[1]": size === "max",
        "w-[33%]": size === "normal",
      })}
    >
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          {size === "max" && (
            <>
              <Image
                className="absolute  left-52 top-20 -rotate-12 scale-50 border-4 border-gradient-background-from rounded-xl 
                hover:rotate-0 hover:-translate-x-44 hover:z-10  hover:-translate-y-[24%]  hover:scale-75 transition-all ease-in-out 
                
                "
                width={1280}
                height={720}
                alt="project screenshot"
                src={"/project_screenshots/morax_2.png"}
              />
              <Image
                className="absolute  left-[30%] top-[10%] -rotate-12 scale-50 border-4 border-gradient-background-from rounded-xl
                hover:rotate-0 hover:-translate-x-52 hover:z-10  hover:-translate-y-[12%] hover:scale-75 transition-all ease-in-out 
                "
                width={1280}
                height={720}
                alt="project screenshot"
                src={"/project_screenshots/morax_1.png"}
              />
            </>
          )}
          <div className="mb-4 gap-3 flex flex-col">
            <div className="flex flex-row justify-between">
              {/* <NextJsIcon width={42} height={42} fill="white" /> */}
              {myIcons[project.icon].icon}

              {/* make this into a component */}
              <div
                className={clsx(" px-3  self-start rounded-full", {
                  "bg-green-600": project.status === "active",
                  "bg-red-600": project.status === "inactive",
                  "bg-orange-600": project.status === "deprecated",
                })}
              >
                <p className="text-sm text-center">{project.status}</p>
              </div>
            </div>
            <h3 className="font-bold text-xl">{project.name}</h3>
            {/* <p className="text-text-secondary-light-gray ">#morax</p> */}
            <p
              className={clsx("font-light text-text-secondary-light-gray ", {
                // "w-[33%]": size !== 1,
              })}
            >
              {project.description}
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-2">
              {project.techStack.map((tech) => {
                return (
                  <LogoCard key={tech}>
                    {/* {myIcons.NextJsIcon.icon} */}
                    {myIcons[tech].icon}
                  </LogoCard>
                )
              })}
            </div>
            <div className="flex flex-row gap-2 mt-4 ">
              <Link href={project.siteURL || ""}>
                <div className="bg-secondary-background-gray px-6 py-2 rounded-lg cursor-pointer justify-center flex hover:scale-105 transition-all ease-in-out">
                  <p className="text-md self-center">Visit Site</p>
                </div>
              </Link>
              <Link href={project.githubURL || ""}>
                <LogoCard>
                  <GitHubIcon width={32} height={32} fill="white" />
                </LogoCard>
              </Link>
            </div>
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default GeneralProjectCard
