"use client"

import { RevealText } from "@/components/ui/reveal-text"

const beliefs = [
  { id: "OBS_001", text: "If it can't be observed, it's broken." },
  {
    id: "ABS_002",
    text: "Abstractions should reduce cognitive load, not hide complexity.",
  },
  { id: "SYS_003", text: "The best systems feel inevitable in hindsight." },
]

export function PhilosophySection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Subtle grid overlay like hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Terminal-style header */}
        <RevealText>
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-neon/30 rounded-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-[10px] font-mono text-neon uppercase tracking-wider">
                Core Principles
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            <span className="text-[10px] font-mono text-muted/50">01</span>
          </div>
        </RevealText>

        {/* Main philosophy statement - large bold like hero */}
        <RevealText delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-12">
            <span className="text-foreground">Product intent</span>
            <br />
            <span className="text-foreground">meets</span>{" "}
            <span className="text-neon">system reality.</span>
          </h2>
        </RevealText>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Terminal log style beliefs */}
          <RevealText delay={0.2}>
            <div className="space-y-4">
              <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-4">
                // BELIEF_SYSTEM.log
              </p>
              <div className="bg-surface/50 border border-border rounded-sm p-4 space-y-3">
                {beliefs.map((belief, idx) => (
                  <div key={belief.id} className="flex gap-3 text-sm font-mono">
                    <span className="text-muted/50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-cyan">[{belief.id}]</span>
                    <span className="text-muted">{belief.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealText>

          {/* Right - Philosophy cards */}
          <RevealText delay={0.3}>
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="group bg-surface/30 border border-border hover:border-neon/30 rounded-sm p-5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-neon text-lg">◈</span>
                  <p className="text-[10px] font-mono text-amber uppercase tracking-wider">
                    Infrastructure Philosophy
                  </p>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-7">
                  Infrastructure is a product decision. APIs are contracts, not
                  endpoints. Event-driven systems age better than
                  request-response ones.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-surface/30 border border-border hover:border-neon/30 rounded-sm p-5 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-neon text-lg">◈</span>
                  <p className="text-[10px] font-mono text-amber uppercase tracking-wider">
                    Chaos Engineering
                  </p>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-7">
                  Every pipeline I build is designed for failure. Every platform
                  I architect assumes chaos. Shipping is the only strategy that
                  matters.
                </p>
              </div>
            </div>
          </RevealText>
        </div>

        {/* Bottom status bar like hero */}
        <RevealText delay={0.4}>
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted/50">
              <span className="text-neon">▶</span> philosophy.config loaded
            </div>
            <div className="text-[10px] font-mono text-muted/30">
              SYSTEMS_THINKING // ENABLED
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  )
}
