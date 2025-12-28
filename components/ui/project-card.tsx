"use client"

import { motion } from "framer-motion"
import { RevealText } from "./reveal-text"

interface ProjectCardProps {
  index: string
  title: string
  description: string
  outcome: string
  tech: string[]
}

export function ProjectCard({
  index,
  title,
  description,
  outcome,
  tech,
}: ProjectCardProps) {
  return (
    <RevealText>
      <motion.article
        className="group relative p-8 md:p-12 bg-surface border border-border rounded-sm overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          {/* Index */}
          <p className="text-xs font-mono text-muted mb-8">{index}</p>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-serif text-accent mb-4 group-hover:text-highlight transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted text-lg mb-6 max-w-xl">{description}</p>

          {/* Outcome */}
          <p className="text-sm text-accent/80 mb-8">→ {outcome}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-mono bg-background border border-border rounded-sm text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </RevealText>
  )
}
