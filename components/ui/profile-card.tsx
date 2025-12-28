"use client"

import { Check, Sparkles, Layers, Cpu } from "lucide-react"

interface ProfileCardProps {
  role: string
  name: string
  status: string
  availability: string
}

export function ProfileCard({
  role,
  name,
  status,
  availability,
}: ProfileCardProps) {
  const capabilities = [
    {
      icon: Check,
      title: "FEASIBILITY_CHECK",
      items: ["Tech Stack Analysis", "Cost Projection", "Risk Assessment"],
    },
    {
      icon: Sparkles,
      title: "RAPID_PROTOTYPING",
      items: ["48h Turnaround", "Working MVP", "Live Demo Environment"],
    },
    {
      icon: Layers,
      title: "SCALE_ARCHITECTURE",
      items: ["Production Ready", "Load Balancing", "Security Audit"],
    },
  ]

  return (
    <div className="relative p-6 bg-surface border border-border rounded-sm w-full max-w-sm overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Avatar placeholder */}
            <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-neon/20 to-neon/5 border border-neon/30 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-neon" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-neon uppercase tracking-wider">
                {role}
              </p>
              <p className="text-lg font-semibold text-accent">{name}</p>
            </div>
          </div>
          <div className="w-6 h-6 border border-border rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-neon/50 rounded-full" />
          </div>
        </div>

        {/* Protocol label */}
        <div className="mb-4 pb-4 border-b border-border">
          <p className="text-[10px] font-mono text-muted uppercase tracking-wider">
            Execution_Protocol_V1
          </p>
        </div>

        {/* Capabilities */}
        <div className="space-y-4">
          {capabilities.map((cap) => (
            <div key={cap.title}>
              <div className="flex items-center gap-2 mb-2">
                <cap.icon className="w-3 h-3 text-neon" />
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {cap.title}
                </span>
              </div>
              <ul className="pl-5 space-y-1">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-muted flex items-center gap-2"
                  >
                    <span className="text-muted/50">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Status footer */}
        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-muted uppercase">
              Status:
            </span>
            <span className="text-[10px] font-mono text-neon uppercase">
              {status}
            </span>
          </div>
          <span className="text-xs text-accent">{availability}</span>
        </div>
      </div>
    </div>
  )
}
