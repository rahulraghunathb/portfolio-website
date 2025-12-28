import {
  HeroSection,
  PhilosophySection,
  CapabilitiesSection,
  NeuralNetworkDivider,
  WorkSection,
  ScaleSection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-accent">
      <HeroSection />
      <PhilosophySection />
      <CapabilitiesSection />
      <NeuralNetworkDivider />
      <WorkSection />
      <ScaleSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
