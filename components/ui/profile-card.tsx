"use client"

import { Check, Sparkles, Layers, Cpu } from "lucide-react"

interface ProfileCardProps {
  role: string
  name: string
  status: string
  availability: string
  imageSrc?: string
  email?: string
  phone?: string
}

export function ProfileCard({
  role,
  name,
  status,
  availability,
  imageSrc,
  email,
  phone,
}: ProfileCardProps) {
  const capabilities = [
    {
      icon: Cpu,
      title: "BUILD_ANYTHING",
      items: [
        "End-to-end Execution",
        "Hardware-Software Bridge",
        "System Optimization",
      ],
    },
    {
      icon: Sparkles,
      title: "FAST_LEARNING",
      items: ["New Tech Onboarding", "Rapid Prototyping", "Technical Research"],
    },
    {
      icon: Layers,
      title: "PRODUCT_FIRST",
      items: ["UX-Centric Engineering", "Scalable Foundations"],
    },
  ]

  return (
    <div className="relative p-8 bg-surface border border-border rounded-sm w-full max-w-sm overflow-hidden group">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Large Circular Avatar */}
        <div className="relative mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 border border-neon/30 flex items-center justify-center overflow-hidden ring-4 ring-background shadow-[0_0_30px_rgba(var(--neon-rgb),0.1)]">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <Cpu className="w-16 h-16 text-neon" />
            )}
          </div>
          {/* Status Indicator */}
          <div className="absolute bottom-4 right-4 w-5 h-5 bg-background rounded-full border border-border flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-neon rounded-full animate-pulse" />
          </div>
        </div>

        {/* Identity */}
        <div className="mb-8">
          <p className="text-xs font-mono text-neon uppercase tracking-[0.2em] mb-2">
            {role.replace("_", " ")}
          </p>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-4">
            {name}
          </h2>

          {/* Contact Info below name */}
          {(email || phone) && (
            <div className="flex flex-col gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted/60 mt-4 pt-4 border-t border-border/30">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="hover:text-neon transition-colors select-all"
                >
                  {email}
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hover:text-neon transition-colors select-all"
                >
                  {phone}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Capabilities - Grid for more visual weight */}
        <div className="w-full space-y-6 text-left">
          {capabilities.map((cap) => (
            <div key={cap.title} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-sm bg-neon/10 border border-neon/20 flex items-center justify-center">
                  <cap.icon className="w-3.5 h-3.5 text-neon" />
                </div>
                <span className="text-sm font-bold text-foreground/90 uppercase tracking-wide">
                  {cap.title}
                </span>
              </div>
              <ul className="grid grid-cols-1 gap-1.5 pl-9">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-muted flex items-start gap-2"
                  >
                    <span className="text-neon/40 mt-1">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 w-full pt-6 border-t border-border/50 flex items-center justify-between">
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
            Protocol: Active
          </span>
          <span className="text-[10px] font-mono text-neon uppercase tracking-widest">
            {status}
          </span>
        </div>
      </div>
    </div>
  )
}
