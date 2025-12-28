"use client"

import { NeuralNetwork } from "@/components/ui/neural-network"

export function NeuralNetworkDivider() {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Neural network with full interactivity */}
      <NeuralNetwork interactive={true} />

      {/* Gradient fade edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background via-transparent to-background opacity-50" />

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-neon/50" />
          <span className="text-[10px] font-mono text-neon/60 uppercase tracking-[0.3em]">
            Neural Pathways Active
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-neon/50" />
        </div>
      </div>
    </section>
  )
}
