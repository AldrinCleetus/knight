export type ProjectStatus = 'active' | 'completed' | 'inactive' | 'deprecated'

export type Project = {
    icon: string,
    siteURL: string | null
    githubURL: string
    name: string
    description: string
    status: ProjectStatus
    techStack: string[]
}

export type WorkExperience = {
   name: string
   title: string
   yearRange: string
   yearsOfExperience : string
}