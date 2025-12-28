"use client"

import { RevealText } from "./reveal-text"

interface CapabilityCardProps {
  title: string
  description: string
  delay?: number
}

export function CapabilityCard({
  title,
  description,
  delay = 0,
}: CapabilityCardProps) {
  return (
    <RevealText delay={delay}>
      <div className="group p-6 border-t border-border hover:bg-surface/50 transition-colors duration-300">
        <h4 className="text-xl font-serif text-accent mb-3 group-hover:text-highlight transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </RevealText>
  )
}
