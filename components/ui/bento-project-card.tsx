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
      }, 2000)
    } else {
      setCurrentImage(0)
    }
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-surface/30 transition-all duration-500 hover:border-neon/30 hover:shadow-[0_0_30px_rgba(var(--neon-rgb),0.05)] flex flex-col h-full",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Dedicated for visual impact */}
      <div className="relative h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </AnimatePresence>

        {/* Play overlay for slideshow hint */}
        {images.length > 1 && (
          <div className="absolute top-3 right-3 p-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-2.5 h-2.5 text-white fill-white" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-mono text-neon border border-neon/20 px-2 py-0.5 rounded-full bg-neon/5 uppercase tracking-wider">
            {year}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-white/5 border border-white/10 text-muted hover:text-accent hover:bg-white/10 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon transition-colors tracking-tight">
          {title}
        </h3>

        <div className="space-y-2 mb-6 flex-grow">
          {description.map((line, i) => (
            <p
              key={i}
              className="text-sm text-muted/80 leading-relaxed font-sans"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/30">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-sm bg-surface-lighter text-muted-foreground border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
        <div className="absolute top-0 right-0 w-[1px] h-4 bg-neon/30" />
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-neon/30" />
      </div>
    </div>
  )
}
