"use client"

import { AlertTriangle } from "lucide-react"

interface DiagnosticAlertProps {
  code: string
  title: string
  description: string
  highlight: string
}

export function DiagnosticAlert({
  code,
  title,
  description,
  highlight,
}: DiagnosticAlertProps) {
  return (
    <div className="relative p-6 bg-surface border border-border rounded-sm max-w-md overflow-hidden">
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.02)_50%)] bg-[length:100%_4px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-sm">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
              Diagnostic Alert
            </span>
            <span className="text-[10px] font-mono text-amber-500">
              Code: {code}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-accent mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted">
          {description} <span className="text-amber-500">{highlight}</span>
        </p>
      </div>
    </div>
  )
}
