"use client"

import { Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface Role {
  title: string
  responsibilities: string[]
}

interface BentoExperienceCardProps {
  company: string
  location: string
  duration: string
  roles: Role[]
  className?: string
}

export function BentoExperienceCard({
  company,
  location,
  duration,
  roles,
  className,
}: BentoExperienceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md border border-border bg-surface/30 p-6 md:p-8 flex flex-col h-full",
        className,
      )}
    >
      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-border/50 pb-4">
        <div>
          <h3 className="text-xl font-bold font-display text-foreground group-hover:text-neon transition-colors">
            {company}
          </h3>
          <p className="text-xs font-mono text-muted flex items-center gap-2 mt-1">
            <Briefcase className="w-3 h-3" />
            {location}
          </p>
        </div>
        <span className="text-xs font-mono text-cyan bg-cyan/10 px-2 py-1 rounded-sm border border-cyan/20 self-start md:self-auto">
          {duration}
        </span>
      </div>

      <div className="space-y-6 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent pr-2">
        {roles.map((role, idx) => (
          <div
            key={idx}
            className="relative pl-4 border-l border-border group-hover:border-neon/30 transition-colors"
          >
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-surface border border-border group-hover:border-neon/50 transition-colors" />
            <h4 className="text-sm font-semibold text-accent mb-2">
              {role.title}
            </h4>
            <ul className="space-y-2">
              {role.responsibilities.map((resp, rIdx) => (
                <li
                  key={rIdx}
                  className="text-xs text-muted leading-relaxed flex items-start gap-2"
                >
                  <span className="text-border min-w-[10px] mt-0.5">-</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
