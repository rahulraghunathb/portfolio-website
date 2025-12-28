"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { ProjectCard } from "@/components/ui/project-card"

const projects = [
  {
    index: "001",
    title: "Crop Advisory Platform",
    description:
      "End-to-end system for agricultural advisory. From soil data ingestion to WhatsApp message delivery at scale.",
    outcome: "10,000+ concurrent geospatial jobs processed per batch.",
    tech: ["FastAPI", "Redis", "Celery", "WhatsApp API", "AWS"],
  },
  {
    index: "002",
    title: "Chronos SFTP Engine",
    description:
      "Automated ingestion pipeline for weather model datasets. Fault-tolerant, self-healing, zero-touch operation.",
    outcome: "Zero-downtime reliability with automatic recovery.",
    tech: ["Python", "Paramiko", "S3", "Lambda", "SNS"],
  },
  {
    index: "003",
    title: "Voice Agent Integration",
    description:
      "Domain-specific fine-tuning for agri-tech conversational AI. Natural language understanding for farmer queries.",
    outcome: "Sub-2s response latency in production.",
    tech: ["Whisper", "LangChain", "FastAPI", "WebSockets"],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <div className="flex items-baseline gap-4 mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
              03
            </p>
            <h2 className="text-lg font-serif text-highlight">Selected Work</h2>
          </div>
        </RevealText>

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.index}
              index={project.index}
              title={project.title}
              description={project.description}
              outcome={project.outcome}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
