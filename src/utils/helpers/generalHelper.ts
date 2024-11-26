import { generalInformation } from "@/contants/portfolioData"

export const getFooterText = ()=>{
    return `@${new Date().getFullYear()} ${generalInformation.name}`
}