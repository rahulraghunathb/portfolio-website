"use client"

import { useEffect, useState } from "react"

export function SecurityLog() {
  const [time, setTime] = useState("00:00:00")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-GB"))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-muted">[{time}]</span>
        <span className="text-[10px] font-mono text-neon uppercase">
          Security
        </span>
        <span className="text-[10px] font-mono text-muted">T+ 24ms</span>
      </div>
      <p className="text-xs text-muted">Inbound request verified</p>
      <div className="w-40 h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-neon transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
