"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix characters (mix of katakana, numbers, symbols)
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]|/\\"
    const charArray = chars.split("")

    // Column setup - varied spacing for organic feel
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Each column has its own drop position and speed
    const drops: { y: number; speed: number; size: number; opacity: number }[] =
      []
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: 0.3 + Math.random() * 0.7, // Varied speeds
        size: 10 + Math.random() * 8, // Varied sizes (10-18px)
        opacity: 0.1 + Math.random() * 0.4, // Varied opacity (0.1-0.5) - SUBTLE
      }
    }

    const draw = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)]

        const x = i * fontSize
        const y = drops[i].y * fontSize
        const size = drops[i].size
        const opacity = drops[i].opacity

        // Neon green with varied opacity
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`
        ctx.font = `${size}px monospace`
        ctx.fillText(char, x, y)

        // Occasional brighter "head" character
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(180, 255, 180, ${opacity + 0.3})`
          ctx.fillText(char, x, y)
        }

        // Reset drop when it goes off screen
        if (y > canvas.height && Math.random() > 0.99) {
          drops[i].y = 0
          drops[i].speed = 0.3 + Math.random() * 0.7
        }

        drops[i].y += drops[i].speed
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }} // Overall opacity control
    />
  )
}
