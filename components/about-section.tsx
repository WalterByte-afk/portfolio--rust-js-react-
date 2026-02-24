export function AboutSection() {
  const skills = [
    "ZBrush",
    "Blender",
    "Cascadeur",
    "RizomUV",
    "Rust",
    "Python",
    "TypeScript",
    "Three.js",
  ]

  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      {/* Full-width darker background band */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#111111" }}
      />

      {/* Top border accent */}
      <div
        className="absolute top-0 left-6 right-6 md:left-12 md:right-12 h-px"
        style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      />

      <div className="relative max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left column - bio */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {"[~]"} 3D Artist & Polyglot Engineer
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
          </div>

          <p
            className="text-sm leading-[1.8] mb-6"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Focused on the intersection of high-fidelity digital sculpture and performance-critical systems. I specialize in the full production pipeline—from master-level anatomy in ZBrush and physics-based motion in Cascadeur to distortion-free unwrapping in RizomUV and scene assembly in Blender.
          </p>
          <p
            className="text-sm leading-[1.8] mb-8"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            My engineering workflow leverages Rust, Python, and JS to build high-performance 3D environments. By utilizing AI-augmented Vibe Coding, I focus on the architectural soul and artistic precision of every asset, ensuring 120fps delivery without compromising visual complexity.
          </p>
          <div
            className="text-xs tracking-[0.1em] uppercase px-4 py-3 rounded-lg"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderLeft: "2px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            [STATUS: ART_SYSTEM_SYNC_COMPLETE]
          </div>
        </div>

        {/* Right column - capabilities */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {">_"} Capabilities
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-8">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <span
                  className="text-[10px]"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  //
                </span>
                <span
                  className="text-xs tracking-wide"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>

          {/* WASM readiness note */}
          <div
            className="mt-12 glass-card rounded-lg p-5"
          >
            <span
              className="text-[10px] tracking-[0.2em] uppercase block mb-2"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {">_"} architecture note
            </span>
            <p
              className="text-[11px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              This site is structured for Rust/WASM backend integration. Heavy
              3D calculations can be offloaded to compiled WebAssembly modules
              for near-native performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
