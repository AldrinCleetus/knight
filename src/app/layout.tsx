import type { Metadata } from "next"
import { Lexend_Deca } from "next/font/google"

import "./globals.css"
import BottomNavigationBar from "@/components/navigation/BottomNavigationBar"
import MainNavBar from "@/components/navigation/MainNavBar"
import Footer from "@/components/shared/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { generalMetaInformation } from "@/contants/portfolioData"

const Lexend_Font = Lexend_Deca({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aldrin Cleetus",
  description: generalMetaInformation.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={generalMetaInformation.content} />
        <meta
          property="og:description"
          content={generalMetaInformation.description}
        />
        <meta property="og:image" content={generalMetaInformation.image} />
        <meta property="og:url" content={generalMetaInformation.url} />
        <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <body className={Lexend_Font.className + " bg-grid-pattern  "}>
        <SpeedInsights />
        <Analytics />
        <main className="flex flex-1  bg-repeat  justify-center flex-col 2xl:max-w-[1900px] 2xl:mx-auto">
          <section className="overflow-hidden flex-col flex flex-1 px-4 md:px-10  2xl:px-80 ">
            <MainNavBar />
            {children}
          </section>
        </main>
        {/* <BottomNavigationBar /> */}
        <Footer />
      </body>
    </html>
  )
}
