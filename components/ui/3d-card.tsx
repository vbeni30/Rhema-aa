"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  glareOpacity?: number
  rotationIntensity?: number
  borderRadius?: number
  shadow?: boolean
}

export function ThreeDCard({
  children,
  className,
  glareOpacity = 0.2,
  rotationIntensity = 10,
  borderRadius = 16,
  shadow = true,
}: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -rotationIntensity
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * rotationIntensity

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)

    // Calculate glare position
    const glareX = ((mouseX - rect.left) / rect.width) * 100
    const glareY = ((mouseY - rect.top) / rect.height) * 100
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        borderRadius: `${borderRadius}px`,
        transformStyle: "preserve-3d",
        boxShadow: shadow ? "0 10px 30px -15px rgba(0, 0, 0, 0.2)" : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareOpacity}), transparent)`,
          borderRadius: `${borderRadius}px`,
        }}
      />
    </motion.div>
  )
}

