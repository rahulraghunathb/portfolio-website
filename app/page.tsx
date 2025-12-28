"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { EditorialSection } from "@/components/ui/editorial-section"
import { ProjectCard } from "@/components/ui/project-card"
import { CapabilityCard } from "@/components/ui/capability-card"
import { MatrixRain } from "@/components/ui/matrix-rain"
import { IdentityBadge } from "@/components/ui/identity-badge"
import { DiagnosticAlert } from "@/components/ui/diagnostic-alert"
import { ProfileCard } from "@/components/ui/profile-card"
import { SecurityLog } from "@/components/ui/security-log"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-accent">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO - Reference Layout */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen px-6 md:px-12 lg:px-16 py-12 overflow-hidden">
        {/* Matrix rain background */}
        <MatrixRain />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] z-[1]" />

        {/* Main content grid */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start pt-8">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Identity Badge */}
            <RevealText>
              <IdentityBadge name="Rahul Bodanki" />
            </RevealText>

            {/* Large Title - Space Grotesk */}
            <RevealText delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight">
                <span className="text-foreground">Lead</span>
                <br />
                <span className="text-foreground">Product</span>
                <br />
                <span className="text-foreground">Engineer</span>
              </h1>
            </RevealText>

            {/* Diagnostic Alert Card */}
            <RevealText delay={0.2}>
              <DiagnosticAlert
                code="404_SCALABILITY"
                title="Your System Might Not Scale."
                description="Let me find out before it's too late."
                highlight="Architecture reviews & production-ready systems in 48 hours."
              />
            </RevealText>

            {/* Tagline */}
            <RevealText delay={0.3}>
              <div className="space-y-2">
                <p className="font-mono text-sm">
                  <span className="text-neon">
                    {">>"} Deep technical execution + product strategy.
                  </span>
                </p>
                <p className="font-mono text-sm text-muted">
                  No handoffs, no surprises.
                </p>
              </div>
            </RevealText>

            {/* Security Log + Social Links */}
            <RevealText delay={0.4}>
              <div className="flex flex-wrap items-end gap-8 pt-8">
                <SecurityLog />

                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/rahul-raghunath-bodanki"
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-sm text-xs font-mono text-muted hover:text-accent hover:border-neon/50 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-neon">in</span> LINKEDIN
                  </a>
                  <a
                    href="https://github.com/rahulraghunathb"
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-sm text-xs font-mono text-muted hover:text-accent hover:border-neon/50 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-neon">⌘</span> GITHUB
                  </a>
                </div>
              </div>
            </RevealText>
          </div>

          {/* RIGHT COLUMN - Profile Card */}
          <RevealText delay={0.2} className="lg:sticky lg:top-12">
            <ProfileCard
              role="Systems_Architect"
              name="Rahul Bodanki"
              status="Available"
              availability="Open to Opportunities"
            />
          </RevealText>
        </div>

        {/* Bottom hint */}
        <div className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-2 text-[10px] font-mono text-muted">
          <span className="opacity-50">⌘</span> HOLD [SPACE] FOR X-RAY
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PHILOSOPHY - Editorial split layout */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <EditorialSection chapter="01" title="Philosophy">
        <div className="space-y-12">
          <RevealText>
            <p className="text-2xl md:text-3xl font-serif leading-relaxed">
              I work at the intersection of product intent and system reality.
            </p>
          </RevealText>

          <RevealText delay={0.1}>
            <div className="space-y-6 text-muted">
              <p>
                I believe infrastructure is a product decision. That APIs are
                contracts, not endpoints. That event-driven systems age better
                than request-response ones.
              </p>
              <p>
                Every pipeline I build is designed for failure. Every platform I
                architect assumes chaos. Shipping is the only strategy that
                matters.
              </p>
            </div>
          </RevealText>

          {/* Beliefs as a list */}
          <RevealText delay={0.2}>
            <ul className="border-l border-border pl-6 space-y-4 text-sm text-muted">
              <li>"If it can't be observed, it's broken."</li>
              <li>
                "Abstractions should reduce cognitive load, not hide
                complexity."
              </li>
              <li>"The best systems feel inevitable in hindsight."</li>
            </ul>
          </RevealText>
        </div>
      </EditorialSection>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CAPABILITIES - Grid */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <EditorialSection chapter="02" title="Capabilities">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          <CapabilityCard
            title="Event Architecture"
            description="Redis, Celery, Webhooks, async retries. Systems that communicate through events, not assumptions."
            delay={0}
          />
          <CapabilityCard
            title="Cloud Platforms"
            description="AWS, Docker, ECS, NGINX. Secure VPCs with strict RBAC. Infrastructure as code, not infrastructure as prayer."
            delay={0.1}
          />
          <CapabilityCard
            title="ML Pipelines"
            description="Random Forest, Earth Engine, QGIS. Turning satellite imagery and weather models into actionable insights."
            delay={0.2}
          />
          <CapabilityCard
            title="API Design"
            description="FastAPI, Flask, REST, WebSockets. 200+ production APIs. Contracts that don't break when you're asleep."
            delay={0.3}
          />
          <CapabilityCard
            title="Real-Time Systems"
            description="WhatsApp Business API, Firebase, push notifications at scale. Messages that arrive when they matter."
            delay={0.4}
          />
          <CapabilityCard
            title="Data Engineering"
            description="MySQL, MongoDB, geospatial data, ETL pipelines. Data that's clean, accessible, and actually useful."
            delay={0.5}
          />
        </div>
      </EditorialSection>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* WORK - Featured projects */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <RevealText>
            <div className="flex items-baseline gap-4 mb-16">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
                03
              </p>
              <h2 className="text-lg font-serif text-highlight">
                Selected Work
              </h2>
            </div>
          </RevealText>

          <div className="grid gap-8">
            <ProjectCard
              index="001"
              title="Crop Advisory Platform"
              description="End-to-end system for agricultural advisory. From soil data ingestion to WhatsApp message delivery at scale."
              outcome="10,000+ concurrent geospatial jobs processed per batch."
              tech={["FastAPI", "Redis", "Celery", "WhatsApp API", "AWS"]}
            />
            <ProjectCard
              index="002"
              title="Chronos SFTP Engine"
              description="Automated ingestion pipeline for weather model datasets. Fault-tolerant, self-healing, zero-touch operation."
              outcome="Zero-downtime reliability with automatic recovery."
              tech={["Python", "Paramiko", "S3", "Lambda", "SNS"]}
            />
            <ProjectCard
              index="003"
              title="Voice Agent Integration"
              description="Domain-specific fine-tuning for agri-tech conversational AI. Natural language understanding for farmer queries."
              outcome="Sub-2s response latency in production."
              tech={["Whisper", "LangChain", "FastAPI", "WebSockets"]}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SCALE - Stats */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <EditorialSection chapter="04" title="Scale" reverse>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <RevealText>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-highlight mb-2">
                200+
              </p>
              <p className="text-sm text-muted">APIs shipped to production</p>
            </div>
          </RevealText>
          <RevealText delay={0.1}>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-highlight mb-2">
                10k+
              </p>
              <p className="text-sm text-muted">Concurrent jobs processed</p>
            </div>
          </RevealText>
          <RevealText delay={0.2}>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-highlight mb-2">
                99.9%
              </p>
              <p className="text-sm text-muted">Platform uptime maintained</p>
            </div>
          </RevealText>
        </div>
      </EditorialSection>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CONTACT - Full bleed, centered */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section
        id="contact"
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 border-t border-border"
      >
        <RevealText>
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted mb-8">
            05
          </p>
        </RevealText>

        <RevealText delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            Let's build something
            <br />
            <span className="text-highlight">that lasts.</span>
          </h2>
        </RevealText>

        <RevealText delay={0.2}>
          <p className="text-muted max-w-md mb-12">
            Currently open to senior engineering roles, technical leadership
            positions, and interesting consulting projects.
          </p>
        </RevealText>

        <RevealText delay={0.3}>
          <div className="flex gap-8 text-sm font-mono">
            <a
              href="https://github.com/rahulraghunathb"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rahul-raghunath-bodanki"
              className="text-muted hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:rahulraghunathb2.0@gmail.com"
              className="text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </RevealText>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FOOTER */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
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
            Rahul Bodanki © 2025
          </p>

          {/* Right - Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 px-4 py-2 bg-surface/50 border border-border/50 rounded-sm text-[10px] font-mono text-muted hover:text-neon hover:border-neon/50 transition-all cursor-pointer"
          >
            <span className="group-hover:-translate-y-0.5 transition-transform">
              ↑
            </span>
            BACK TO TOP
          </button>
        </div>
      </footer>
    </main>
  )
}
