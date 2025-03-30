"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedBlobProps {
  className?: string
  color?: string
  size?: number
  speed?: number
  opacity?: number
  blur?: number
}

export function AnimatedBlob({
  className = "",
  color = "#4688D9",
  size = 400,
  speed = 20,
  opacity = 0.3,
  blur = 60,
}: AnimatedBlobProps) {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!blobRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const blob = blobRef.current
      if (!blob) return

      // Add some delay for a more natural feel
      setTimeout(() => {
        blob.style.left = `${clientX - size / 2}px`
        blob.style.top = `${clientY - size / 2}px`
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [size])

  const variants = {
    initial: {
      scale: 1,
      borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
    },
    animate: {
      scale: [1, 1.05, 0.95, 1.05, 1],
      borderRadius: [
        "40% 60% 60% 40% / 60% 30% 70% 40%",
        "60% 40% 30% 70% / 50% 60% 40% 50%",
        "30% 60% 70% 40% / 50% 30% 70% 50%",
        "60% 40% 30% 70% / 60% 40% 60% 40%",
        "40% 60% 60% 40% / 60% 30% 70% 40%",
      ],
      transition: {
        duration: speed,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <motion.div
      ref={blobRef}
      className={`fixed pointer-events-none z-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        filter: `blur(${blur}px)`,
        mixBlendMode: "multiply",
      }}
      variants={variants}
      initial="initial"
      animate="animate"
    />
  )
}

