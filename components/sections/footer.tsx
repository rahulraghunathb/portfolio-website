"use client"

export function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-6 px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Neural Feed Style */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-neon uppercase tracking-wider">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Neural Feed // Live
          </div>
          <div className="hidden md:block px-3 py-1.5 bg-surface/50 border border-border/50 rounded-sm">
            <p className="text-[10px] font-mono text-muted">
              <span className="text-amber">
                [
                {new Date().toLocaleTimeString("en-US", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
                ]
              </span>{" "}
              <span className="text-cyan">ANALYZING</span>
              <span className="ml-4 text-muted/50">T+ 42ms</span>
            </p>
            <p className="text-[10px] font-mono text-muted/70 mt-0.5">
              Portfolio v2.0 deployed
            </p>
          </div>
        </div>

        {/* Center - Copyright */}
        <p className="hidden lg:block text-[10px] font-mono text-muted/40 uppercase tracking-[0.2em]">
          Rahul Raghunath Bodanki © 2025
        </p>

        {/* Right - Back to Top */}
        <button
          onClick={handleBackToTop}
          className="group flex items-center gap-2 px-4 py-2 bg-surface/50 border border-border/50 rounded-sm text-[10px] font-mono text-muted hover:text-neon hover:border-neon/50 transition-all cursor-pointer"
        >
          <span className="group-hover:-translate-y-0.5 transition-transform">
            ↑
          </span>
          BACK TO TOP
        </button>
      </div>
    </footer>
  )
}
