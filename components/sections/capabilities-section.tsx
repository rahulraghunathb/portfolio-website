"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { NeuralNetwork } from "@/components/ui/neural-network"
import { TechIcons } from "@/components/ui/tech-icons"

// Technology data with their categories
const technologies = [
  // Languages & Frameworks
  { name: "Python", iconKey: "Python", category: "Backend" },
  { name: "Node.js", iconKey: "NodeJS", category: "Backend" },
  { name: "FastAPI", iconKey: "FastAPI", category: "Backend" },
  { name: "Flask", iconKey: "Flask", category: "Backend" },
  { name: "Next.js", iconKey: "NextJS", category: "Frontend" },

  // Cloud & Infrastructure
  { name: "AWS", iconKey: "AWS", category: "Cloud" },
  { name: "EC2", iconKey: "EC2", category: "Cloud" },
  { name: "ECS", iconKey: "ECS", category: "Cloud" },
  { name: "Lambda", iconKey: "Lambda", category: "Cloud" },
  { name: "RDS", iconKey: "RDS", category: "Cloud" },
  { name: "Route 53", iconKey: "Route53", category: "Cloud" },
  { name: "ECR", iconKey: "ECR", category: "Cloud" },
  { name: "Docker", iconKey: "Docker", category: "DevOps" },
  { name: "NGINX", iconKey: "NGINX", category: "DevOps" },
  { name: "GitHub Actions", iconKey: "GitHub", category: "CI/CD" },

  // Data & Vector
  { name: "Redis", iconKey: "Redis", category: "Data" },
  { name: "MySQL", iconKey: "MySQL", category: "Data" },
  { name: "MongoDB", iconKey: "MongoDB", category: "Data" },
  { name: "ChromaDB", iconKey: "ChromaDB", category: "Vector" },
  { name: "Celery", iconKey: "Celery", category: "Queue" },
  { name: "Pub/Sub", iconKey: "PubSub", category: "Queue" },

  // APIs & Real-time
  { name: "REST", iconKey: "REST", category: "API" },
  { name: "WebSockets", iconKey: "WebSockets", category: "API" },
  { name: "WhatsApp API", iconKey: "WhatsApp", category: "Messaging" },
  { name: "Firebase", iconKey: "Firebase", category: "Cloud" },
  { name: "SSH", iconKey: "SSH", category: "Infra" },

  // AI & LLM
  { name: "OpenAI", iconKey: "OpenAI", category: "AI" },
  { name: "Gemini", iconKey: "Gemini", category: "AI" },
  { name: "LangChain", iconKey: "LangChain", category: "AI" },
  { name: "LiveKit", iconKey: "LiveKit", category: "Voice" },
  { name: "Cursor", iconKey: "Cursor", category: "AI IDE" },
  { name: "Windsurf", iconKey: "Windsurf", category: "AI IDE" },

  // Payments & Scraping
  { name: "Razorpay", iconKey: "Razorpay", category: "Payments" },
  { name: "Apify", iconKey: "Apify", category: "Scraping" },

  // Database & BaaS
  { name: "Supabase", iconKey: "Supabase", category: "BaaS" },

  // Geo & ML
  { name: "Earth Engine", iconKey: "EarthEngine", category: "ML" },
  { name: "QGIS", iconKey: "QGIS", category: "Geo" },
]

const capabilities = [
  {
    title: "Event Architecture",
    description:
      "Redis, Celery, Pub/Sub, async retries. Systems that communicate through events, not assumptions.",
    techs: ["Redis", "Celery", "Pub/Sub", "WebSockets"],
  },
  {
    title: "AWS Infrastructure",
    description:
      "EC2, ECS, Lambda, RDS, Route 53, ECR. Secure VPCs with strict RBAC. Infrastructure as code.",
    techs: ["EC2", "ECS", "Lambda", "RDS", "Route 53"],
  },
  {
    title: "LLM & Voice Agents",
    description:
      "OpenAI, Gemini APIs, LiveKit for real-time voice. LangChain for orchestration. AI-powered workflows.",
    techs: ["OpenAI", "Gemini", "LiveKit", "LangChain"],
  },
  {
    title: "API Design",
    description:
      "FastAPI, Flask, Node.js, REST, WebSockets. 200+ production APIs. Contracts that don't break.",
    techs: ["FastAPI", "Flask", "Node.js", "REST", "WebSockets"],
  },
  {
    title: "Payments & Scraping",
    description:
      "Razorpay payment gateway integration. Apify for web scraping at scale. SSH automation pipelines.",
    techs: ["Razorpay", "Apify", "SSH"],
  },
  {
    title: "Vector & Data",
    description:
      "ChromaDB for embeddings, Supabase, MySQL, MongoDB. Clean, accessible data at scale.",
    techs: ["ChromaDB", "Supabase", "MySQL", "MongoDB"],
  },
]

// Helper to get icon component
function TechIcon({ name, className }: { name: string; className?: string }) {
  const tech = technologies.find((t) => t.name === name)
  if (!tech) return null
  const IconComponent = TechIcons[tech.iconKey]
  if (!IconComponent) return null
  return <IconComponent className={className} />
}

export function CapabilitiesSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Neural network background animation */}
      <div className="absolute inset-0 opacity-40">
        <NeuralNetwork />
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <RevealText>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-cyan/30 rounded-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-[10px] font-mono text-cyan uppercase tracking-wider">
                Tech Stack
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            <span className="text-[10px] font-mono text-muted/50">02</span>
          </div>
        </RevealText>

        {/* Title */}
        <RevealText delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">Capabilities</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mb-12">
            Full-stack systems engineering with a focus on scalability,
            reliability, and developer experience.
          </p>
        </RevealText>

        {/* Floating tech icons with real SVGs */}
        <RevealText delay={0.2}>
          <div className="mb-16 overflow-hidden">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, idx) => {
                const IconComponent = TechIcons[tech.iconKey]
                return (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2 px-3 py-2 bg-surface/50 border border-border hover:border-neon/50 rounded-sm transition-all hover:scale-105 cursor-default"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </RevealText>

        {/* Capability cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <RevealText key={cap.title} delay={0.3 + idx * 0.1}>
              <div className="group h-full bg-surface/30 border border-border hover:border-neon/30 rounded-sm p-6 transition-all">
                {/* Title */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-neon text-lg">◈</span>
                  <h3 className="text-sm font-mono text-foreground uppercase tracking-wider">
                    {cap.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed mb-4 pl-7">
                  {cap.description}
                </p>

                {/* Tech tags with SVG icons */}
                <div className="flex flex-wrap gap-2 pl-7">
                  {cap.techs.map((techName) => (
                    <span
                      key={techName}
                      className="inline-flex items-center gap-1.5 px-2 py-1 bg-background/50 border border-border/50 rounded-sm text-[10px] font-mono text-muted"
                    >
                      <TechIcon name={techName} className="w-3 h-3" />
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </RevealText>
          ))}
        </div>

        {/* Bottom status */}
        <RevealText delay={0.8}>
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted/50">
              <span className="text-cyan">▶</span> {technologies.length}{" "}
              technologies indexed
            </div>
            <div className="text-[10px] font-mono text-muted/30">
              STACK_ANALYSIS // COMPLETE
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  )
}
