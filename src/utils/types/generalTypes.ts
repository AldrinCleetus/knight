import { myIcons } from "@/contants/iconData"

export type ProjectStatus = 'active' | 'completed' | 'inactive' | 'deprecated'

export type IconType = keyof typeof myIcons

export type Project = {
    icon: IconType,
    siteURL: string | null
    githubURL: string | null
    name: string
    description: string
    status: ProjectStatus
    techStack: IconType[],
    siteImage1?: string,
    siteImage2?: string
}

export type WorkExperience = {
   name: string
   title: string
   yearRange: string
   yearsOfExperience : string
}
