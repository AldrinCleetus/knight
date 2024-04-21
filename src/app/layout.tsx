import type { Metadata } from "next"
import { Lexend_Deca } from "next/font/google"

import "./globals.css"
import BottomNavigationBar from "@/components/navigation/BottomNavigationBar"
import MainNavBar from "@/components/navigation/MainNavBar"

const Lexend_Font = Lexend_Deca({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aldrin Cleetus",
  description: "Portfolio page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Lexend_Font.className}>
        <main className="flex flex-1 bg-grid-pattern bg-repeat  justify-center flex-col">
          <section className="overflow-hidden flex-col flex flex-1 px-4 md:px-10  2xl:px-80 ">
            <MainNavBar />
            {children}
          </section>
        </main>
        <BottomNavigationBar />
      </body>
    </html>
  )
}
