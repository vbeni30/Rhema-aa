import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { AOSProvider } from "@/components/aos-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gospel Church",
  description: "A life-changing journey to God",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AOSProvider>{children}</AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'