"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  intensity?: number
  onClick?: () => void
  disabled?: boolean
}

export function MagneticButton({
  children,
  className,
  intensity = 0.3,
  onClick,
  disabled = false,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const deltaX = mouseX - centerX
    const deltaY = mouseY - centerY

    setPosition({
      x: deltaX * intensity,
      y: deltaY * intensity,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      className={cn("relative", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      animate={{
        x: position.x,
        y: position.y,
        transition: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  )
}

