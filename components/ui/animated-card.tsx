"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
  duration?: number
}

export function AnimatedCard({
  children,
  className,
  hoverScale = 1.03,
  hoverY = -5,
  duration = 0.2,
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        transition: { duration },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration }}
      />
    </motion.div>
  )
}

