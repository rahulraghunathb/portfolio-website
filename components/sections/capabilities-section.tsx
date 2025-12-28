"use client"

import { EditorialSection } from "@/components/ui/editorial-section"
import { CapabilityCard } from "@/components/ui/capability-card"

const capabilities = [
  {
    title: "Event Architecture",
    description:
      "Redis, Celery, Webhooks, async retries. Systems that communicate through events, not assumptions.",
    delay: 0,
  },
  {
    title: "Cloud Platforms",
    description:
      "AWS, Docker, ECS, NGINX. Secure VPCs with strict RBAC. Infrastructure as code, not infrastructure as prayer.",
    delay: 0.1,
  },
  {
    title: "ML Pipelines",
    description:
      "Random Forest, Earth Engine, QGIS. Turning satellite imagery and weather models into actionable insights.",
    delay: 0.2,
  },
  {
    title: "API Design",
    description:
      "FastAPI, Flask, REST, WebSockets. 200+ production APIs. Contracts that don't break when you're asleep.",
    delay: 0.3,
  },
  {
    title: "Real-Time Systems",
    description:
      "WhatsApp Business API, Firebase, push notifications at scale. Messages that arrive when they matter.",
    delay: 0.4,
  },
  {
    title: "Data Engineering",
    description:
      "MySQL, MongoDB, geospatial data, ETL pipelines. Data that's clean, accessible, and actually useful.",
    delay: 0.5,
  },
]

export function CapabilitiesSection() {
  return (
    <EditorialSection chapter="02" title="Capabilities">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
        {capabilities.map((capability) => (
          <CapabilityCard
            key={capability.title}
            title={capability.title}
            description={capability.description}
            delay={capability.delay}
          />
        ))}
      </div>
    </EditorialSection>
  )
}
