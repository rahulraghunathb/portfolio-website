"use client"

import { motion } from "framer-motion"

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function RevealText({
  children,
  delay = 0,
  className,
}: RevealTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
