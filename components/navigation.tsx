"use client"

import { useState, useEffect } from "react"
import { SOCIAL_LINKS } from "@/lib/constants"
import { YouTubeIcon, GitHubIcon, ArtStationIcon } from "@/components/social-icons"

const navLinks = [
  { label: "3D Pipeline", href: "#pipeline" },
  { label: "Engineering", href: "#engineering" },
  { label: "Methodology", href: "#methodology" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

function SocialIcon({ type, size = 14 }: { type: string; size?: number }) {
  switch (type) {
    case "youtube": return <YouTubeIcon size={size} />
    case "github": return <GitHubIcon size={size} />
    case "artstation": return <ArtStationIcon size={size} />
    default: return null
  }
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
      style={{ willChange: "backdrop-filter, transform" }}
    >
      <nav
        className="flex items-center justify-between px-6 md:px-12 max-w-[1400px] mx-auto"
        aria-label="Main navigation"
      >
        {/* Logo / brand */}
        <a
          href="#"
          className="text-sm tracking-[0.2em] uppercase"
          style={{ color: "#ffffff" }}
        >
          {">_"} abdulrahman
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="liquid-underline text-xs tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Prominent social links: [Icon] [ASCII] Label */}
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.ascii}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-underline flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.45)" }}
              title={link.label}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
              }
            >
              <SocialIcon type={link.icon} size={13} />
              <span>{link.ascii}</span>
              <span className="hidden lg:inline">{link.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
