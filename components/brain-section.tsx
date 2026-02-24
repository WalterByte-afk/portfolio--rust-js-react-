"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { BrainLoadingFallback } from "@/components/brain-loading-fallback"
import { ContactForm } from "@/components/contact-form"

const LazyWireframeBrain = dynamic(
  () => import("@/components/wireframe-brain").then(mod => ({ default: mod.WireframeBrain })),
  {
    loading: () => <BrainLoadingFallback />,
    ssr: false,
  }
)

const infoCards = [
  {
    label: ">_ Stack",
    items: ["TypeScript", "React / Next.js", "Three.js / WebGL", "Rust / WASM"],
    position: "top-8 left-6 md:top-20 md:left-12" as const,
  },
  {
    label: "[#] Focus",
    items: ["Creative Coding", "Performance Eng.", "Design Systems", "3D Experiences"],
    position: "top-8 right-6 md:top-20 md:right-12" as const,
  },
  {
    label: "[~] Status",
    items: ["Available for work", "Remote-first", "Open to collaborate"],
    position: "bottom-28 left-6 md:bottom-32 md:left-12" as const,
  },
]

const footerLinks = [
  { label: "[YT]", href: "https://www.youtube.com/@Theduck_kinStudio" },
  { label: "[GH]", href: "https://github.com/WalterByte-afk" },
  { label: "[AS]", href: "https://www.artstation.com/abdulrahman_q" },
]

export function BrainSection() {
  return (
    <section
      id="contact"
      className="relative w-full"
      style={{ height: "100vh", backgroundColor: "#000000" }}
    >
      {/* Three.js Canvas - full background with lazy loading */}
      <Suspense fallback={<BrainLoadingFallback />}>
        <div className="brain-container">
          <LazyWireframeBrain
            className="absolute inset-0"
            brainOpacity={0.13}
            brainScale={1.3}
            rotationSpeed={0.04}
            particleCount={180}
          />
        </div>
      </Suspense>

      {/* Floating glass info cards */}
      {infoCards.map((card) => (
        <div
          key={card.label}
          className={`absolute ${card.position} z-10 glass-card rounded-lg p-5 max-w-[220px]`}
        >
          <span
            className="block text-[10px] tracking-[0.2em] uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {card.label}
          </span>
          <div className="flex flex-col gap-2">
            {card.items.map((item) => (
              <span
                key={item}
                className="text-xs tracking-wide"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Center CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h2
          className="text-3xl md:text-5xl font-light tracking-[-0.02em] mb-4 text-center text-balance"
          style={{ color: "#ffffff" }}
        >
          {"Let's Build"}
        </h2>
        <p
          className="text-xs tracking-[0.2em] uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Something Extraordinary
        </p>
        <ContactForm />
      </div>

      {/* Footer bar */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <span
            className="text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {">_"} 2026 // Abdulrahman Q.
          </span>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-underline text-[10px] tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}
