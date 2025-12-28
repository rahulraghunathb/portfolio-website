"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const [uptimeMs, setUptimeMs] = useState(0)

  useEffect(() => {
    // Initialize time on client
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Uptime counter
    const uptimeInterval = setInterval(() => {
      setUptimeMs((prev) => prev + 42)
    }, 42)

    return () => {
      clearInterval(interval)
      clearInterval(uptimeInterval)
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-8 px-6 md:px-12 lg:px-16 bg-background border-t border-border/30">
      {/* Subtle scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,#00000010_50%)] bg-[size:100%_4px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left - Neural Feed with live updates */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
              </span>
              <span className="text-[10px] font-mono text-neon uppercase tracking-wider">
                Neural Feed // Live
              </span>
            </div>

            {/* Terminal log box */}
            <div className="px-4 py-2 bg-surface/80 border border-border/50 rounded-sm font-mono text-[10px]">
              <div className="flex items-center gap-4">
                <span className="text-amber">
                  [{currentTime || "00:00:00"}]
                </span>
                <span className="text-cyan">ANALYZING</span>
                <span className="text-muted/50">T+ {uptimeMs}ms</span>
              </div>
              <div className="text-muted/60 mt-1">
                Call Batch #892 processed
              </div>
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-6">
            {/* Copyright */}
            <p className="hidden md:block text-[10px] font-mono text-muted/40 uppercase tracking-[0.15em]">
              © 2025 Rahul Raghunath Bodanki
            </p>

            {/* CI/CD Status */}
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-muted/50">
              <span className="text-neon">●</span>
              CI/CD: GitHub Actions
            </div>

            {/* Back to Top */}
            <button
              onClick={handleBackToTop}
              className="group flex items-center gap-2 px-4 py-2.5 bg-transparent border border-foreground/80 hover:border-neon hover:bg-neon/10 rounded-sm text-[11px] font-mono text-foreground hover:text-neon transition-all cursor-pointer uppercase tracking-wider"
            >
              <span className="group-hover:-translate-y-0.5 transition-transform">
                ↑
              </span>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/20">
          <div className="flex items-center gap-4 text-[9px] font-mono text-muted/30 uppercase">
            <span>v2.0.0</span>
            <span>•</span>
            <span>Next.js 16</span>
            <span>•</span>
            <span>Turbopack</span>
          </div>
          <div className="text-[9px] font-mono text-muted/30">
            SYSTEM_STATUS: <span className="text-neon/50">OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
