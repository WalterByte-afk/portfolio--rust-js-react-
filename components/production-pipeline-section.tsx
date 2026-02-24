"use client"

const pipelineStages = [
  {
    stage: "[01] SCULPTING & CHARACTER CREATION",
    description: "Master-level organic anatomy and hard-surface design. ZBrush topology refinement for production-ready high-poly foundations.",
    focus: "Form, anatomy, design philosophy",
  },
  {
    stage: "[02] RETOPOLOGY & UVs",
    description: "Clean, engine-optimized edge-flow. High-efficiency UV unwrapping with minimal distortion for seamless texel density.",
    focus: "Topology efficiency, UV optimization",
  },
  {
    stage: "[03] RIGGING & ANIMATION",
    description: "Complex character deformation systems. Time-based motion capture integration and keyframe animation for cinematic quality.",
    focus: "Skeletal systems, motion dynamics",
  },
  {
    stage: "[04] PBR TEXTURING & BAKING",
    description: "Advanced material layering with realistic surface work. Normal, roughness, and metallic maps baked from high-poly with artistic control.",
    focus: "Material authenticity, surface detail",
  },
]

export function ProductionPipelineSection() {
  return (
    <section
      id="pipeline"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <h2
            className="text-3xl md:text-5xl font-light tracking-[-0.02em] mb-6"
            style={{ color: "#ffffff" }}
          >
            3D PRODUCTION PIPELINE
          </h2>
          <div
            className="w-12 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Pipeline Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pipelineStages.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-lg"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3
                  className="text-sm md:text-base tracking-[0.15em] uppercase font-light"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {item.stage}
                </h3>
              </div>

              <p
                className="text-xs md:text-sm leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {item.description}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  FOCUS:
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-white/5">
          <h3
            className="text-lg tracking-[0.1em] uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {">"} PRODUCTION TOOLSET
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["ZBrush", "Blender", "Cascadeur", "RizomUV"].map((tool) => (
              <div
                key={tool}
                className="text-xs tracking-wide py-3 px-4 rounded border"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
