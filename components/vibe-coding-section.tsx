"use client"

export function VibeCodingSection() {
  return (
    <section
      id="methodology"
      className="relative w-full py-24 md:py-32"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-5xl font-light tracking-[-0.02em] mb-6"
            style={{ color: "#ffffff" }}
          >
            METHODOLOGY: AI-AUGMENTED VIBE CODING
          </h2>
          <div
            className="w-12 h-px"
            style={{ background: "rgba(255,255,255,0.2)" }}
          />
        </div>

        {/* Main Philosophy Card */}
        <div className="glass-card p-8 md:p-12 rounded-lg mb-12">
          <p
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            I leverage <span style={{ color: "#ffffff", fontWeight: "500" }}>AI as a technical force-multiplier</span>. By delegating syntax, boilerplate, and routine implementation to Copilot, Claude, and Windsurf, I preserve my cognitive energy for the critical layers: high-level architecture, system design decisions, and the artistic soul of the project.
          </p>

          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            This isn't about doing less—it's about building <span style={{ color: "#ffffff", fontWeight: "500" }}>faster, smarter, and with intention</span>. I focus on the 'why' and the 'what,' not the repetitive typing. The result: production-ready systems with zero technical debt and maximum artistic fidelity.
          </p>
        </div>

        {/* Key Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-card p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
            <h3
              className="text-sm tracking-[0.15em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              ARCHITECTURAL FOCUS
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Systems design, scalability, and performance optimization. Every decision rooted in mathematical principles and proven patterns.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
            <h3
              className="text-sm tracking-[0.15em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              AI AS TOOL
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Leverage AI for code generation, not for decision-making. I audit, refactor, and architect the final product personally.
            </p>
          </div>

          <div className="glass-card p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
            <h3
              className="text-sm tracking-[0.15em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              NO TECHNICAL DEBT
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Clean, maintainable code. Strong typing, comprehensive testing, and zero shortcuts that compromise long-term stability.
            </p>
          </div>
        </div>

        {/* Stats/Facts */}
        <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ color: "#ffffff" }}
            >
              100%
            </div>
            <p
              className="text-xs tracking-wide uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Audited Code
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ color: "#ffffff" }}
            >
              5+
            </div>
            <p
              className="text-xs tracking-wide uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Languages
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ color: "#ffffff" }}
            >
              3D+Web
            </div>
            <p
              className="text-xs tracking-wide uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Full Stack
            </p>
          </div>
          <div>
            <div
              className="text-3xl md:text-4xl font-light mb-2"
              style={{ color: "#ffffff" }}
            >
              0
            </div>
            <p
              className="text-xs tracking-wide uppercase"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Shortcuts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
