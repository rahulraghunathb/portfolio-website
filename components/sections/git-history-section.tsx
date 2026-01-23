"use client"

import dynamic from "next/dynamic"
import { RevealText } from "@/components/ui/reveal-text"

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
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-neon">⌘</span>
              <h2 className="text-sm font-mono text-muted uppercase tracking-widest">
                Git Activity
              </h2>
            </div>
            <div className="text-[10px] font-mono text-muted/50">
              SOURCE: GITHUB
            </div>
          </div>
        </RevealText>

        <RevealText delay={0.1}>
          <div className="w-full overflow-x-auto bg-surface/30 p-6 rounded-md border border-border flex justify-center">
            <div className="min-w-[600px]">
              <GitHubCalendar
                username="rahulraghunathb"
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
