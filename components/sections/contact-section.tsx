"use client"

import { RevealText } from "@/components/ui/reveal-text"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rahulraghunathb",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-raghunath-bodanki/",
    external: true,
  },
  {
    label: "Portfolio",
    href: "https://portfolio-website-beta-two-82.vercel.app/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:rahulraghunathb2.0@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    href: "tel:+917477575111",
    external: false,
  },
]

export function ContactSection() {
  return (
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
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-accent transition-colors"
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.label}
            </a>
          ))}
        </div>
      </RevealText>
    </section>
  )
}
