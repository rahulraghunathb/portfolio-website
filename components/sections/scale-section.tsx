"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { EditorialSection } from "@/components/ui/editorial-section"

const stats = [
  { value: "200+", label: "APIs shipped to production", delay: 0 },
  { value: "10k+", label: "Concurrent jobs processed", delay: 0.1 },
  { value: "99.9%", label: "Platform uptime maintained", delay: 0.2 },
]

export function ScaleSection() {
  return (
    <EditorialSection chapter="04" title="Scale" reverse>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        {stats.map((stat) => (
          <RevealText key={stat.label} delay={stat.delay}>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-highlight mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          </RevealText>
        ))}
      </div>
    </EditorialSection>
  )
}
