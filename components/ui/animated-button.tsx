"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  hoverScale?: number
  tapScale?: number
}

export function AnimatedButton({
  children,
  className,
  onClick,
  disabled = false,
  variant = "default",
  size = "default",
  hoverScale = 1.05,
  tapScale = 0.95,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-primary bg-transparent text-primary hover:bg-primary/10"
      case "ghost":
        return "bg-transparent text-primary hover:bg-primary/10"
      default:
        return "bg-primary text-primary-foreground hover:bg-primary/90"
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-8 px-3 text-xs"
      case "lg":
        return "h-12 px-8 text-lg"
      case "icon":
        return "h-9 w-9 p-0"
      default:
        return "h-10 px-4 py-2"
    }
  }

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        getVariantClasses(),
        getSizeClasses(),
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : hoverScale }}
      whileTap={{ scale: disabled ? 1 : tapScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant === "default" && !disabled && (
        <motion.span
          className="absolute inset-0 rounded-md bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}

