import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { AOSProvider } from "@/components/aos-provider"
import "./globals.css"

// Define metadata for the site
export const metadata: Metadata = {
  title: "Rhema Church",
  description: "A life-changing journey to God",
  generator: "Next.js",
  icons: {
    icon: "/Logo Rhema No Text(1).ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: ["church", "worship", "community", "Rhema Church"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Rhema Church",
    description: "A life-changing journey to God",
    url: "https://rhema-aa-church.vercel.app/",
    siteName: "Rhema Church",
    images: [
      {
        url: "/Logo Rhema No Text(1).webp",
        width: 1200,
        height: 630,
        alt: "Rhema Church",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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