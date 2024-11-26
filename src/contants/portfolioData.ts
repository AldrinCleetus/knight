
import { Project, WorkExperience } from "@/utils/types/generalTypes";

export const featuredProjects : Record<string,Project> = {
    'kalender':{
        description:"Craft Your Perfect Calendar: Add Images, Events, and More!",
        githubURL:"https://github.com/AldrinCleetus/morax",
        icon: 'KalendarIcon',
        name:"Kalender",
        siteURL:"https://kalender.aldrincleetus.com/",
        status:"active",
        techStack:['ReactIcon',"FigmaIcon",'GitIcon']
    }
};
export const workExperience: WorkExperience[] = []

export const generalInformation = {
    name: "Aldrin Cleetus",
    currentRole: "Jr. Software Engineer",
    description: "You know, I’m something of a developer myself—been doing web, mobile, backend, and everything in between. Flying solo most of the time, learning on the job, and pretending I have a plan. My approach? ‘Figuring it out as I go,’ even when I have no idea what I’m doing. Less ‘the one,’ more let’s see where this goes",
}

export const aboutMeInformation = {
    aboutMeDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus",
    basedIn: "Kochi, Kerala",
    quote: 'Jack of all trades, master of none, though ofttimes better than master of one.',
}