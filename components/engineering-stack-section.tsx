"use client"

import { RustIcon, PythonIcon, TypeScriptIcon } from "@/components/language-icons"

const engineeringStacks = [
  {
    language: "RUST",
    icon: <RustIcon size={24} color="#ffffff" />,
    description: "High-performance systems and memory-safe architecture.",
    useCases: ["High-speed rendering engines", "Blockchain & cryptography", "Systems programming", "WebAssembly modules"],
    level: "EXPERT",
  },
  {
    language: "PYTHON",
    icon: <PythonIcon size={24} color="#ffffff" />,
    description: "Pipeline automation, 3D scripting, and AI-augmented workflows.",
    useCases: ["Blender scripting & automation", "Data processing & analysis", "AI/ML integration", "Image processing"],
    level: "EXPERT",
  },
  {
    language: "TYPESCRIPT / JAVASCRIPT",
    icon: <TypeScriptIcon size={24} color="#ffffff" />,
    description: "Interactive 3D web deployment and UI architecture.",
    useCases: ["Three.js & WebGL applications", "React/Next.js architectures", "Real-time web experiences", "WebXR & immersive"],
    level: "EXPERT",
  },
]

export function EngineeringStackSection() {
  return (
    <section
      id="engineering"
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
            POLYGLOT ENGINEERING STACK
          </h2>
          <p
            className="text-sm leading-relaxed max-w-2xl"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Mastery across multiple languages, each optimized for its specific problem domain. Language selection is intentional—not arbitrary.
          </p>
          <div
            className="w-12 h-px mt-6"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {engineeringStacks.map((stack, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-lg relative overflow-hidden group"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* Language Name with Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div style={{ color: "#ffffff" }}>
                    {stack.icon}
                  </div>
                  <h3
                    className="text-lg md:text-xl font-light tracking-[-0.01em]"
                    style={{ color: "#ffffff" }}
                  >
                    {stack.language}
                  </h3>
                </div>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {stack.level}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {stack.description}
              </p>

              {/* Use Cases */}
              <div>
                <span
                  className="text-[10px] tracking-[0.15em] uppercase block mb-3"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  PRIMARY USE-CASES
                </span>
                <ul className="space-y-2">
                  {stack.useCases.map((useCase, i) => (
                    <li
                      key={i}
                      className="text-xs flex items-start gap-2"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.3)" }}>├</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks & Libraries */}
        <div className="pt-16 border-t border-white/5">
          <h3
            className="text-lg tracking-[0.1em] uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {">"} KEY FRAMEWORKS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              "Next.js",
              "React",
              "Three.js",
              "Tokio",
              "NumPy",
              "TensorFlow",
              "Bevy",
              "WebAssembly",
              "Docker",
              "Tailwind",
            ].map((framework) => (
              <div
                key={framework}
                className="text-xs tracking-wide py-2 px-3 rounded border text-center"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {framework}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
