"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { MatrixRain } from "@/components/ui/matrix-rain"
import { IdentityBadge } from "@/components/ui/identity-badge"
import { DiagnosticAlert } from "@/components/ui/diagnostic-alert"
import { ProfileCard } from "@/components/ui/profile-card"
import { SecurityLog } from "@/components/ui/security-log"
import { GlitchText } from "@/components/ui/glitch-text"

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 md:px-12 lg:px-16 py-12 overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] z-[1]" />

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start pt-8">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* Identity Badge */}
          <RevealText>
            <IdentityBadge name="Rahul Raghunath Bodanki" />
          </RevealText>

          {/* Large Title - Space Grotesk */}
          <RevealText delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
              <span className="text-foreground">Lead</span>
              <br />
              <GlitchText text="Product" className="text-foreground" />
              <br />
              <GlitchText text="Engineer" className="text-foreground" />
            </h1>
          </RevealText>

          {/* Diagnostic Alert Card */}
          <RevealText delay={0.2}>
            <DiagnosticAlert
              code="404_SCALABILITY"
              title="Your System Might Not Scale."
              description="Let me find out before it's too late."
              highlight="Architecture reviews & production-ready systems in 48 hours."
            />
          </RevealText>

          {/* Tagline */}
          <RevealText delay={0.3}>
            <div className="space-y-2">
              <p className="font-mono text-sm">
                <span className="text-neon">
                  {">>"} Deep technical execution + product strategy.
                </span>
              </p>
              <p className="font-mono text-sm text-muted">
                No handoffs, no surprises.
              </p>
            </div>
          </RevealText>

          {/* Security Log + Social Links */}
          <RevealText delay={0.4}>
            <div className="flex flex-wrap items-end gap-8 pt-8">
              <SecurityLog />

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/rahul-raghunath-bodanki"
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-sm text-xs font-mono text-muted hover:text-accent hover:border-neon/50 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-neon">in</span> LINKEDIN
                </a>
                <a
                  href="https://github.com/rahulraghunathb"
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-sm text-xs font-mono text-muted hover:text-accent hover:border-neon/50 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-neon">⌘</span> GITHUB
                </a>
              </div>
            </div>
          </RevealText>
        </div>

        {/* RIGHT COLUMN - Profile Card */}
        <RevealText delay={0.2} className="lg:sticky lg:top-12">
          <ProfileCard
            role="Systems_Architect"
            name="Rahul Raghunath Bodanki"
            status="Available"
            availability="Open to Opportunities"
            imageSrc="https://placehold.co/400x400/10b981/000000?text=Rahul"
          />
        </RevealText>
      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-2 text-[10px] font-mono text-muted">
        <span className="opacity-50">⌘</span> HOLD [SPACE] FOR X-RAY
      </div>
    </section>
  )
}
