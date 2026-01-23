"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { BentoProjectCard } from "@/components/ui/bento-project-card"
import { BentoExperienceCard } from "@/components/ui/bento-experience-card"

export function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <div className="flex items-center gap-4 mb-12">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-border text-xs font-mono text-muted">
              02
            </span>
            <h2 className="text-xl font-display font-bold">
              Experience & Projects
            </h2>
          </div>
        </RevealText>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-min">
          {/* Main Experience Card - Spans 2 cols */}
          <div className="md:col-span-2 row-span-2">
            <RevealText delay={0.1} className="h-full">
              <BentoExperienceCard
                company="MacroCosmos Creations"
                location="Bangalore, India"
                duration="May 2023 – Present"
                roles={[
                  {
                    title: "Lead Product Engineer",
                    responsibilities: [
                      "Built Redis-based message queue and geospatial processing pipelines using FastAPI, Docker, AWS Lambda, S3.",
                      "Designed distributed rate limiting service with per-day/IP/global quotas.",
                      "Optimized job execution from minutes to seconds using tile chunking and Celery parallel processing.",
                      "Implemented RBAC with 9 roles in multi-tenant monolith.",
                      "Developed real-time multilingual voice agent using OpenAI GPT Realtime API.",
                      "Led cross-functional execution and code reviews.",
                    ],
                  },
                  {
                    title: "Software Engineer",
                    responsibilities: [
                      "Firebase multilingual notifs (~300k/day).",
                      "Razorpay & MSG91 integrations.",
                      "Cron-based SFTP ingestion pipelines on EC2.",
                      "Rule-based agronomy intelligence engines.",
                    ],
                  },
                  {
                    title: "Backend Developer Intern",
                    responsibilities: [
                      "WhatsApp Business API notification services.",
                      "REST APIs in Node.js/FastAPI.",
                      "OpenAI chatbot with caching.",
                    ],
                  },
                ]}
                className="h-full"
              />
            </RevealText>
          </div>

          {/* Project 1 - Excel Lite */}
          <div className="md:col-span-1 min-h-[300px]">
            <RevealText delay={0.2} className="h-full">
              <BentoProjectCard
                title="Excel Lite"
                description={[
                  "Spreadsheet-style Excel/CSV viewer and editor inside VS Code.",
                  "100+ marketplace downloads.",
                ]}
                year="2026"
                tech={["JavaScript", "Node.js", "Webview"]}
                link="https://marketplace.visualstudio.com/items?itemName=rahulraghunathb.excel-lite"
                images={[
                  "https://placehold.co/600x400/22c55e/ffffff?text=Excel+Lite+1",
                  "https://placehold.co/600x400/16a34a/ffffff?text=Excel+Lite+2",
                ]}
                className="h-full"
              />
            </RevealText>
          </div>

          {/* Project 2 - RAG AI Tutor */}
          <div className="md:col-span-1 min-h-[300px]">
            <RevealText delay={0.3} className="h-full">
              <BentoProjectCard
                title="RAG AI Tutor"
                description={[
                  "Full RAG pipeline with semantic search.",
                  "Quiz engine with LLM grading.",
                ]}
                year="2025"
                tech={["FastAPI", "ChromaDB", "Ollama"]}
                link="https://github.com/rahulraghunathb/rag-tutor"
                images={[
                  "https://placehold.co/600x400/3b82f6/ffffff?text=RAG+Tutor+1",
                  "https://placehold.co/600x400/2563eb/ffffff?text=RAG+Tutor+2",
                ]}
                className="h-full"
              />
            </RevealText>
          </div>

          {/* Project 3 - IoT App */}
          <div className="md:col-span-1 md:col-start-3 min-h-[300px]">
            <RevealText delay={0.4} className="h-full">
              <BentoProjectCard
                title="IoT Air Quality"
                description={[
                  "Real-time AQI monitoring app for IIT Kharagpur.",
                  "QR-based device onboarding.",
                ]}
                year="2023"
                tech={["React Native", "Node.js", "IoT"]}
                images={[
                  "https://placehold.co/600x400/ef4444/ffffff?text=IoT+App+1",
                  "https://placehold.co/600x400/dc2626/ffffff?text=IoT+App+2",
                ]}
                className="h-full"
              />
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  )
}
