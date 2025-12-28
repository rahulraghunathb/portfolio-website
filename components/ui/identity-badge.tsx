"use client"

interface IdentityBadgeProps {
  name: string
}

export function IdentityBadge({ name }: IdentityBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
      </span>
      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted">
        Identity: <span className="text-accent">{name}</span>
      </span>
    </div>
  )
}
