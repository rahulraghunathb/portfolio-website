"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { RevealText } from "@/components/ui/reveal-text"
import { cn } from "@/lib/utils"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
  },
)

// Custom theme for the calendar to match the portfolio
const theme = {
  light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
}

export function GitHistorySection() {
  const [selectedYear, setSelectedYear] = useState<number | "last">(2025)
  const years = [2026, 2025, 2024, 2023]

  return (
    <section className="py-8 px-6 md:px-12 lg:px-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-neon">⌘</span>
              <h2 className="text-sm font-mono text-muted uppercase tracking-widest flex items-center gap-3">
                Git Activity
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neon/10 border border-neon/20 animate-pulse">
                  <span className="w-1 h-1 rounded-full bg-neon" />
                  <span className="text-[9px] text-neon leading-none">
                    REALTIME
                  </span>
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year === 2026 ? "last" : year)} // Adjusting since 2026 might not have data yet or 'last' is better for current
                  className={cn(
                    "px-3 py-1 rounded-sm text-[10px] font-mono border transition-all",
                    selectedYear === year ||
                      (selectedYear === "last" && year === 2026)
                      ? "bg-neon border-neon text-background"
                      : "bg-surface border-border text-muted hover:border-neon/50 hover:text-accent",
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <div className="w-full overflow-x-auto bg-surface/30 p-6 rounded-md border border-border flex justify-center">
            <div className="min-w-[600px]">
              <GitHubCalendar
                username="rahulraghunathb"
                year={selectedYear}
                colorScheme="dark"
                theme={theme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  )
}
