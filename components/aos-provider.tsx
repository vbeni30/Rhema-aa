"use client"

import type React from "react"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      delay: 50,
    })
  }, [])

  return <>{children}</>
}

