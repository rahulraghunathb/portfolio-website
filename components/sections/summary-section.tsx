"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { PRDPreview } from "@/components/ui/prd-preview"

export function SummarySection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-16 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Column - Text */}
        <div className="flex-1 space-y-8">
          <RevealText>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border text-xs font-mono text-muted">
                01
              </span>
              <p className="text-xs font-mono uppercase tracking-widest text-muted">
                Objective
              </p>
            </div>
          </RevealText>

          <RevealText delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
              Engineering from{" "}
              <span className="text-neon">First Principles</span>.
            </h2>
          </RevealText>

          <RevealText delay={0.2}>
            <div className="prose prose-invert text-muted">
              <p className="text-lg leading-relaxed">
                Lead Product Engineer capable of breaking complex systems into
                fundamentals and building scalable, high-performance solutions.
              </p>
              <p className="mt-4 leading-relaxed">
                Fast learner with experience delivering production-grade AI and
                distributed systems. Focusing on architectures that can survive
                scale and uncertainty.
              </p>
            </div>
          </RevealText>
        </div>

        {/* Right Column - PRD Preview Visual */}
        <div className="flex-1 w-full relative">
          <RevealText delay={0.3} className="w-full">
            <PRDPreview />
          </RevealText>
        </div>
      </div>
    </section>
  )
}
