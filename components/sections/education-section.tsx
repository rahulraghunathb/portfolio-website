"use client"

import { RevealText } from "@/components/ui/reveal-text"

const education = [
  {
    type: "Degree",
    title: "B.Tech + M.Tech (Dual Degree)",
    field: "Mechanical Engineering & Entrepreneurship Engineering",
    institution: "Indian Institute of Technology, Kharagpur",
    year: "2019-2024",
    score: "7.55/10",
    image: "https://placehold.co/100x100/1e293b/cbd5e1?text=IIT", // Placeholder for college image
  },
  {
    type: "Schooling",
    title: "ICSE (Class X)",
    field: "Science Stream",
    institution: "Etasi Timpany School, Visakhapatnam",
    year: "2017",
    score: "91%",
    image: null,
  },
]

export function EducationSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <RevealText>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-neon">✦</span>
            <h2 className="text-lg font-mono uppercase tracking-widest text-muted">
              Education
            </h2>
          </div>
        </RevealText>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <RevealText key={idx} delay={idx * 0.1}>
              <div className="flex gap-4 p-6 rounded-md bg-surface/30 border border-border items-start group hover:border-neon/30 transition-colors">
                {edu.image ? (
                  <div className="w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 border border-border bg-background">
                    <img
                      src={edu.image}
                      alt={edu.institution}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-sm flex-shrink-0 border border-border bg-background flex items-center justify-center text-muted font-bold text-xs">
                    {edu.title.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-neon transition-colors">
                    {edu.title}
                  </h3>
                  <div className="text-sm text-accent mb-2">{edu.field}</div>
                  <div className="text-xs font-mono text-muted mb-4">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono uppercase text-muted/70">
                    <span className="bg-background/50 px-2 py-1 rounded-sm border border-border">
                      {edu.year}
                    </span>
                    <span className="text-neon">{edu.score}</span>
                  </div>
                </div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </section>
  )
}
