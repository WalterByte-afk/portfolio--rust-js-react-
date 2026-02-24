"use client"

import { useState } from "react"

const projects = [
  {
    id: "01",
    title: "Neural Interface",
    tag: ">_ code",
    description:
      "A real-time data visualization platform built with WebGL and custom shaders. Rendering complex datasets at 120fps.",
    tech: ["React", "Three.js", "GLSL", "Rust/WASM"],
  },
  {
    id: "02",
    title: "Void Commerce",
    tag: "[#] system",
    description:
      "Headless e-commerce architecture with sub-100ms response times globally. Edge-first, zero-latency checkout.",
    tech: ["Next.js", "Edge Functions", "Stripe"],
  },
  {
    id: "03",
    title: "Signal Protocol",
    tag: "[~] design",
    description:
      "End-to-end encrypted messaging with a focus on minimal, distraction-free UI. Privacy by default.",
    tech: ["TypeScript", "WebRTC", "Figma"],
  },
  {
    id: "04",
    title: "Lattice CMS",
    tag: "[*] infra",
    description:
      "Content management system with AI-powered generation and real-time collaboration across distributed teams.",
    tech: ["Go", "PostgreSQL", "AI SDK"],
  },
]

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0]
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="glass-card rounded-lg p-8 cursor-pointer transition-all duration-500"
      style={{
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.05)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className="text-[10px] tracking-[0.2em] uppercase block mb-2"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {project.tag}
          </span>
          <h3
            className="text-lg font-light tracking-wide transition-transform duration-300"
            style={{
              color: "#ffffff",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            {project.title}
          </h3>
        </div>
        <span
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          /{project.id}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-xs leading-relaxed mb-6"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full"
            style={{
              color: "rgba(255,255,255,0.3)",
              border: "0.5px solid rgba(255,255,255,0.08)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
