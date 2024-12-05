import { generalInformation } from "@/contants/portfolioData"

export const getFooterText = ()=>{
    return `@${new Date().getFullYear()} ${generalInformation.name}`
}


export function formatYearRange(startDate: Date, endDate: Date | null): string {
    const startYear = startDate.getFullYear();
    const endYear = endDate ? endDate.getFullYear() : "ongoing";
    return `${startYear} - ${endYear}`;
  }


  export function getDurationString(startDate: Date, endDate: Date | null): string {
    const end = endDate || new Date(); // Use the current date if endDate is null
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();
  
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
  
    if (years > 0 && months > 0) {
      return `${years} yr ${months} mon`;
    } else if (years > 0) {
      return `${years} yr`;
    } else {
      return `${months} mon`;
    }
  }