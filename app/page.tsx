import {
  HeroSection,
  SummarySection,
  CapabilitiesSection,
  WorkSection,
  EducationSection,
  GitHistorySection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-accent">
      <HeroSection />
      <SummarySection />
      <WorkSection />
      <CapabilitiesSection />
      <EducationSection />
      <GitHistorySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
