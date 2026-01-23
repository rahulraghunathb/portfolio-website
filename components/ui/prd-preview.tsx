"use client"

import { RevealText } from "@/components/ui/reveal-text"

export function PRDPreview() {
  return (
    <div className="w-full max-w-2xl mx-auto my-12 relative group rounded-md border border-border bg-surface/50 overflow-hidden">
      {/* Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50 backdrop-blur-sm">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <div className="ml-4 text-[10px] font-mono text-muted flex items-center gap-2">
          <span>PRODUCT_REQUIREMENTS_DOC.md</span>
          <span className="px-1.5 py-0.5 rounded-xs bg-neon/10 text-neon border border-neon/20">
            EDITING
          </span>
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-6 md:p-8 font-mono text-sm leading-relaxed overflow-hidden relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="relative z-10 space-y-4 text-muted-foreground">
          <div className="flex gap-4">
            <span className="text-muted/30 select-none">01</span>
            <div>
              <span className="text-purple-400"># Problem Statement</span>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-muted/30 select-none">02</span>
            <div>
              Legacy systems scale linearly.{" "}
              <span className="text-foreground">
                Complexity scales exponentially.
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-muted/30 select-none">03</span>
            <div>We need a comprehensive solution that addresses:</div>
          </div>

          <div className="flex gap-4">
            <span className="text-muted/30 select-none">04</span>
            <div className="pl-4 border-l border-border">
              - <span className="text-neon">Resilience</span> under high load
              <br />- <span className="text-neon">Observability</span> by
              default
              <br />- <span className="text-neon">Developer Experience</span> as
              a first-class citizen
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-muted/30 select-none">05</span>
            <div>
              <span className="text-blue-400">## Solution Architecture</span>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-muted/30 select-none">06</span>
            <div>
              <span className="italic">Analysis complete.</span> System
              optimized for{" "}
              <span className="bg-neon/10 text-neon px-1">
                High Performance
              </span>{" "}
              execution.
              <span className="animate-pulse inline-block w-2 H-4 bg-neon/50 ml-1 align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
