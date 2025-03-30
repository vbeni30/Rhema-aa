"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  via?: string
  to?: string
}

export function AnimatedGradientText({
  children,
  className,
  from = "from-[#4688D9]",
  via = "via-[#9B2B3A]",
  to = "to-[#4688D9]",
}: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return

      const { left, top, width, height } = textRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      textRef.current.style.setProperty("--mouse-x", `${x}`)
      textRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={textRef}
      className={cn("animate-text-gradient bg-gradient-to-r bg-clip-text text-transparent", from, via, to, className)}
      style={{
        backgroundSize: "300% 300%",
        backgroundPosition: "calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%)",
      }}
    >
      {children}
    </div>
  )
}

