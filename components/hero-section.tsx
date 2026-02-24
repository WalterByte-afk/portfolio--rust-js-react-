"use client"

import { Suspense, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { BrainLoadingFallback } from "@/components/brain-loading-fallback"

// Lazy-load the heavy Three.js component
const LazyWireframeBrain = dynamic(
  () => import("@/components/wireframe-brain").then(mod => ({ default: mod.WireframeBrain })),
  {
    loading: () => <BrainLoadingFallback />,
    ssr: false,
  }
)

const socialLinks = [
  { label: "[YT]", href: "https://www.youtube.com/@Theduck_kinStudio", title: "YouTube" },
  { label: "[GH]", href: "https://github.com/WalterByte-afk", title: "GitHub" },
  { label: "[AS]", href: "https://www.artstation.com/abdulrahman_q", title: "ArtStation" },
]

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Brain background - positioned right - Lazy loaded in Suspense */}
      <Suspense fallback={<BrainLoadingFallback />}>
        <div className="absolute inset-0 pointer-events-none brain-container">
          <LazyWireframeBrain
            className="absolute top-0 right-0 w-full h-full md:w-[65%] md:right-0"
            brainOpacity={0.1}
            brainScale={1.2}
            rotationSpeed={0.05}
            particleCount={120}
          />
        </div>
      </Suspense>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out hero-text ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Status line */}
          <div className="flex items-center gap-3 mb-8">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#ffffff" }}
            />
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {">"} system_online // available for work
            </span>
          </div>

          {/* Name heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-[1.05]"
            style={{ color: "#ffffff" }}
          >
            <span className="block">ABDULRAHMAN</span>
            <span className="block" style={{ color: "rgba(255,255,255,0.25)" }}>
              3D ARTIST & POLYGLOT ENGINEER
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="mt-8 max-w-md text-sm leading-relaxed tracking-wide"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            High-fidelity sculpting, full-pipeline asset production, and high-performance systems architecture. AI-augmented development across Rust, Python, and TypeScript.
          </p>

          {/* ASCII divider */}
          <div
            className="mt-10 text-xs tracking-[0.3em] select-none"
            style={{ color: "rgba(255,255,255,0.1)" }}
            aria-hidden="true"
          >
            {"─".repeat(36)}
          </div>

          {/* Social links row */}
          <div className="mt-8 flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-underline text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.4)" }}
                title={link.title}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                }
              >
                {link.label}
              </a>
            ))}
            <span
              className="text-[10px] tracking-[0.15em]"
              style={{ color: "rgba(255,255,255,0.15)" }}
            >
              //
            </span>
            <a
              href="mailto:abdulrahman.q.dev@gmail.com"
              className="liquid-underline text-xs tracking-[0.1em] transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
              }
            >
              abdulrahman.q.dev@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-2 z-10">
        <span
          className="text-[9px] tracking-[0.2em] uppercase rotate-90 origin-left translate-x-2.5"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)",
          }}
        />
      </div>
    </section>
  )
}
