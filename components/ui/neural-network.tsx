"use client"

import { useEffect, useRef } from "react"

interface NeuralNetworkProps {
  className?: string
  interactive?: boolean
}

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

export function NeuralNetwork({
  className,
  interactive = true,
}: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Neon green color
    const neonGreen = { r: 74, g: 222, b: 128 }

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
        initNodes()
      }
    }

    // Initialize nodes - MORE DENSE
    const initNodes = () => {
      const nodeCount = Math.min(
        80, // Increased from 40 to 80
        Math.floor((canvas.width * canvas.height) / 6000) // More nodes per area
      )
      nodesRef.current = []

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    const connectionDistance = 120 // Shorter connections for denser look
    const mouseInfluenceRadius = 150
    const mouseRepelStrength = 0.15 // Stronger repel

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = Date.now() * 0.001
      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Base movement - continuous drift
        node.x += node.vx
        node.y += node.vy

        // Mouse interaction - nodes are repelled by cursor
        // NO RETURN TO ORIGINAL POSITION
        if (interactive && mouse.active) {
          const dx = mouse.x - node.x
          const dy = mouse.y - node.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseInfluenceRadius && dist > 0) {
            const force = (1 - dist / mouseInfluenceRadius) * mouseRepelStrength
            // Repel from cursor - permanent velocity change
            node.vx -= (dx / dist) * force
            node.vy -= (dy / dist) * force
          }
        }

        // Apply friction (slight)
        node.vx *= 0.995
        node.vy *= 0.995

        // Wrap around edges instead of bouncing
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        // Draw connections - all neon green
        nodes.forEach((other, j) => {
          if (i >= j) return
          const cdx = node.x - other.x
          const cdy = node.y - other.y
          const distance = Math.sqrt(cdx * cdx + cdy * cdy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.5

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b}, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })

        // Pulse effect
        const pulseScale = 1 + Math.sin(time * 2 + node.pulsePhase) * 0.3

        // Draw node glow - neon green
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 5 * pulseScale
        )
        glowGradient.addColorStop(
          0,
          `rgba(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b}, 0.4)`
        )
        glowGradient.addColorStop(
          0.4,
          `rgba(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b}, 0.15)`
        )
        glowGradient.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 5 * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Draw node core - neon green
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b})`
        ctx.fill()
      })

      // Draw mouse influence area when active
      if (interactive && mouse.active) {
        const mouseGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouseInfluenceRadius
        )
        mouseGradient.addColorStop(
          0,
          `rgba(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b}, 0.08)`
        )
        mouseGradient.addColorStop(
          0.5,
          `rgba(${neonGreen.r}, ${neonGreen.g}, ${neonGreen.b}, 0.03)`
        )
        mouseGradient.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouseInfluenceRadius, 0, Math.PI * 2)
        ctx.fillStyle = mouseGradient
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
      cancelAnimationFrame(animationRef.current)
    }
  }, [interactive])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        cursor: interactive ? "crosshair" : "default",
      }}
    />
  )
}
