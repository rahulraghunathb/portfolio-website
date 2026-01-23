"use client"

import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  as?: any
}

export function GlitchText({
  text,
  className,
  as: Component = "span",
}: GlitchTextProps) {
  return (
    <Component className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon opacity-0 group-hover:opacity-100 animate-glitch-1 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan opacity-0 group-hover:opacity-100 animate-glitch-2 select-none">
        {text}
      </span>
    </Component>
  )
}
