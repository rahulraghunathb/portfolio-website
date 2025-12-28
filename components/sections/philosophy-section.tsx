"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { EditorialSection } from "@/components/ui/editorial-section"

export function PhilosophySection() {
  return (
    <EditorialSection chapter="01" title="Philosophy">
      <div className="space-y-12">
        <RevealText>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed">
            I work at the intersection of product intent and system reality.
          </p>
        </RevealText>

        <RevealText delay={0.1}>
          <div className="space-y-6 text-muted">
            <p>
              I believe infrastructure is a product decision. That APIs are
              contracts, not endpoints. That event-driven systems age better
              than request-response ones.
            </p>
            <p>
              Every pipeline I build is designed for failure. Every platform I
              architect assumes chaos. Shipping is the only strategy that
              matters.
            </p>
          </div>
        </RevealText>

        {/* Beliefs as a list */}
        <RevealText delay={0.2}>
          <ul className="border-l border-border pl-6 space-y-4 text-sm text-muted">
            <li>"If it can't be observed, it's broken."</li>
            <li>
              "Abstractions should reduce cognitive load, not hide complexity."
            </li>
            <li>"The best systems feel inevitable in hindsight."</li>
          </ul>
        </RevealText>
      </div>
    </EditorialSection>
  )
}
