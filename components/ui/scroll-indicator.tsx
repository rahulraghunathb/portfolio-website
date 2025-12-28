"use client"

import { motion } from "framer-motion"

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted">
        Scroll
      </span>
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-muted to-transparent"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
