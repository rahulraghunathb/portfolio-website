"use client"

import { RevealText } from "./reveal-text"
import { cn } from "@/lib/utils"

interface EditorialSectionProps {
  chapter: string
  title: string
  children: React.ReactNode
  className?: string
  reverse?: boolean
}

export function EditorialSection({
  chapter,
  title,
  children,
  className,
  reverse = false,
}: EditorialSectionProps) {
  return (
    <section className={cn("relative py-32 px-6 md:px-12 lg:px-24", className)}>
      <div
        className={cn(
          "max-w-7xl mx-auto grid gap-16",
          reverse ? "md:grid-cols-[1fr_200px]" : "md:grid-cols-[200px_1fr]"
        )}
      >
        {/* Chapter indicator */}
        <RevealText className={cn("order-1", reverse && "md:order-2")}>
          <div className="sticky top-32">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-2">
              {chapter}
            </p>
            <h2 className="text-lg font-serif text-highlight">{title}</h2>
            <div className="w-12 h-px bg-border mt-4" />
          </div>
        </RevealText>

        {/* Content */}
        <div className={cn("order-2", reverse && "md:order-1")}>{children}</div>
      </div>
    </section>
  )
}
