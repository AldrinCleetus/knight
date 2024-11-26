import DiscordIcon from "@/components/icons/DiscordIcon"
import EmailIcon from "@/components/icons/EmailIcon"
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon"
import FigmaIcon from "@/components/icons/FigmaIcon"
import GitIcon from "@/components/icons/GitIcon"
import GitHubIcon from "@/components/icons/GithubIcon"
import LinkedInIcon from "@/components/icons/LinkedInIcon"
import MapIcon from "@/components/icons/MapIcon"
import NextJsIcon from "@/components/icons/NextJsIcon"
import KalenderIcon from "@/components/icons/ProjectKalenderIcon"
import ReactIcon from "@/components/icons/ReactIcon"
import SignalIcon from "@/components/icons/SignalIcon"
import TypescriptIcon from "@/components/icons/TypescriptIcon"

export const myIcons = {
  discord: {
    icon: <DiscordIcon width={32} height={32} fill="white" />,
  },
  Email: {
    icon: <EmailIcon width={32} height={32} fill="white" />,
  },
  ExternalLinkIcon: {
    icon: <ExternalLinkIcon width={32} height={32} fill="white" />,
  },
  FigmaIcon: {
    icon: <FigmaIcon width={32} height={32} fill="white" />,
  },
  GitHubIcon: {
    icon: <GitHubIcon width={32} height={32} fill="white" />,
  },
  GitIcon: {
    icon: <GitIcon width={32} height={32} fill="white" />,
  },
  LinkedInIcon: {
    icon: <LinkedInIcon width={32} height={32} fill="white" />,
  },
  MapIcon: {
    icon: <MapIcon width={32} height={32} fill="white" />,
  },
  NextJsIcon: {
    icon: <NextJsIcon width={32} height={32} fill="white" />,
  },
  SignalIcon: {
    icon: <SignalIcon width={32} height={32} fill="white" />,
  },
  ReactIcon: {
    icon: <ReactIcon width={32} height={32} fill="white" />,
  },
  TypescriptIcon: {
    icon: <TypescriptIcon width={32} height={32} />,
  },

  // project icons
  KalendarIcon: {
    icon: <KalenderIcon width={42} height={42} fill="white" />,
  },
} as const
