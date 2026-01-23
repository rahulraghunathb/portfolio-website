"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface BentoProjectCardProps {
  title: string
  description: string[]
  year: number | string
  tech: string[]
  link?: string
  images: string[]
  className?: string
}

export function BentoProjectCard({
  title,
  description,
  year,
  tech,
  link,
  images,
  className,
}: BentoProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 1500)
    } else {
      setCurrentImage(0)
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-border bg-surface/50 p-6 transition-all hover:border-neon/50 flex flex-col h-full",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image/Slideshow */}
      <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-background/50">
        {images.length > 0 && (
          <img
            src={images[currentImage]}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-mono text-muted border border-border px-2 py-1 rounded-sm bg-background/50">
          {year}
        </span>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-sm bg-background/50 border border-border text-muted hover:text-neon hover:border-neon/50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-neon transition-colors">
        {title}
      </h3>

      <div className="space-y-2 mb-6 flex-grow">
        {description.map((line, i) => (
          <p key={i} className="text-xs text-muted leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-xs bg-accent/10 text-accent/80 border border-accent/20"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
