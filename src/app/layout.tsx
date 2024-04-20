import type { Metadata } from "next"
import { Lexend_Deca } from "next/font/google"

import "./globals.css"

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
      <body className={Lexend_Font.className}>{children}</body>
    </html>
  )
}
