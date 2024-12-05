import { Companies, Project, WorkExperience } from "@/utils/types/generalTypes"

export const featuredProjects: Record<string, Project> = {
  kalender: {
    description: "Craft Your Perfect Calendar: Add Images, Events, and More!",
    githubURL: "https://github.com/AldrinCleetus/morax",
    icon: "KalendarIcon",
    name: "Kalender",
    siteURL: "https://kalender.aldrincleetus.com/",
    status: "active",
    siteImage1: 'project_screenshots/morax_1.png',
    siteImage2: 'project_screenshots/morax_2.png',
    techStack: ["ReactIcon", "FigmaIcon", "GitIcon","TypescriptIcon"],
  },
  grimlock: {
    description: "A simple app that lets you download Simple Genshin Impact characters builds",
    githubURL: "https://github.com/AldrinCleetus/grimlock",
    icon: "GrimlockIcon",
    name: "Grimlock",
    siteURL: "https://grimlock-kappa.vercel.app",
    status: "deprecated",
    techStack: ["ReactIcon", "FigmaIcon", "GitIcon"],
  },
  poovu: {
    description: "A web app that lets you make beautiful Pokkalam Designs.",
    githubURL: "https://github.com/AldrinCleetus/poovu",
    icon: "PoovuIcon",
    name: "Poovu",
    siteURL: "https://pokkaldesigns.vercel.app/",
    status: "inactive",
    techStack: ["ReactIcon", "FigmaIcon", "GitIcon"],
  },
  venti: {
    description: "A cab booking service web app (concept).",
    githubURL: "https://github.com/AldrinCleetus/venti",
    icon: "VentiIcon",
    name: "Venti",
    siteURL: "https://venti-seven.vercel.app/",
    status: "inactive",
    techStack: ["ReactIcon", "FigmaIcon", "GitIcon"],
  },
  animelibrary: {
    description: "A cab booking service web app (concept).",
    githubURL: "https://github.com/AldrinCleetus/AnimeLibrary",
    icon: "AnimeLibraryIcon",
    name: "Anime Library",
    siteURL: "",
    status: "deprecated",
    techStack: ["ReactIcon", "FigmaIcon", "GitIcon","NodeJsIcon"],
  },
}
export const workExperience: WorkExperience[] = []

export const generalInformation = {
  name: "Aldrin Cleetus",
  currentRole: "Software Engineer",
  description:
    "You know, I’m something of a developer myself—been doing web, mobile, backend, and everything in between. Flying solo most of the time, learning on the job. As for my approach? ‘Figuring it out as I go,’ even when I have no idea what I’m doing.",
}

export const aboutMeInformation = {
  aboutMeDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus",
  basedIn: "Kochi, Kerala",
  quote:
    "Jack of all trades, master of none, though ofttimes better than master of one.",
}




export const workExperienceList : Companies[]= [
  {
    companyName: 'Netstratum Technologies',
    position: "Jr. Software Engineer",
    startDate: new Date("01 Aug 2023"),
    endDate: null,
    icon: "NetstratumLogo",
    linkedInPage:'https://www.linkedin.com/company/netstratum'
  },
  {
    companyName: 'NAVA Design and Innovations',
    position: "Embedded Systems Intern",
    startDate: new Date("01 Feb 2023"),
    endDate: new Date("01 Jun 2023"),
    icon: "NAVAlogo",
    linkedInPage:'https://www.linkedin.com/company/nava-design-innovation-private-limited'
  },
  {
    companyName: 'Edith Industries',
    position: "Frontend Developer Intern",
    startDate: new Date("01 Aug 2020"),
    endDate: new Date("01 Nov 2020"),
    icon: "EdithIndustriesLogo",
    linkedInPage:"https://www.linkedin.com/company/edithindustries"
  },
  
 
]


export const hobbiesAndInterests = ['Coding','Gaming','Anime','Sleeping','Movies','TV Shows','Typing']
