"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  overflow?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  overflow = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const upTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const downTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const leftTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
  const rightTransform = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])

  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return upTransform
      case "down":
        return downTransform
      case "left":
        return leftTransform
      case "right":
        return rightTransform
      default:
        return upTransform
    }
  }

  const transformValue = getTransformValue()
  const isHorizontal = direction === "left" || direction === "right"

  return (
    <div ref={ref} className={`${className} ${overflow ? "overflow-hidden" : ""}`}>
      <motion.div
        style={{
          [isHorizontal ? "x" : "y"]: transformValue,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

