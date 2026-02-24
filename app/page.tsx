import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProductionPipelineSection } from "@/components/production-pipeline-section"
import { EngineeringStackSection } from "@/components/engineering-stack-section"
import { VibeCodingSection } from "@/components/vibe-coding-section"
import { AboutSection } from "@/components/about-section"
import { BrainSection } from "@/components/brain-section"

export default function Page() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <Navigation />
      <HeroSection />
      <ProductionPipelineSection />
      <EngineeringStackSection />
      <VibeCodingSection />
      <AboutSection />
      <BrainSection />
    </main>
  )
}
