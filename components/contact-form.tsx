"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"

// Initialize email.js with your public key
// Get this from https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""

console.log("EmailJS Config:", {
  publicKey: EMAILJS_PUBLIC_KEY ? "✓ Loaded" : "✗ Missing",
  serviceId: EMAILJS_SERVICE_ID ? "✓ Loaded" : "✗ Missing",
  templateId: EMAILJS_TEMPLATE_ID ? "✓ Loaded" : "✗ Missing",
})

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setStatus("error")
      setStatusMessage("Email service not configured. Please contact directly.")
      return
    }

    setLoading(true)
    setStatus("idle")

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      })

      setStatus("success")
      setStatusMessage("Message sent successfully. I'll get back to you soon.")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setStatus("error")
      setStatusMessage("Failed to send message. Please try again.")
      console.error("Email error details:", error)
      console.error("Error type:", error instanceof Error ? error.message : JSON.stringify(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 pointer-events-auto"
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-black border text-xs tracking-wide"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#ffffff",
          }}
          disabled={loading}
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-black border text-xs tracking-wide"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#ffffff",
          }}
          disabled={loading}
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-black border text-xs tracking-wide resize-none"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            color: "#ffffff",
          }}
          disabled={loading}
        />

        {/* Status Message */}
        {status === "success" && (
          <div
            className="text-xs p-3 rounded-lg"
            style={{
              background: "rgba(100, 200, 150, 0.1)",
              borderLeft: "2px solid rgba(100, 200, 150, 0.5)",
              color: "rgba(150, 255, 150, 0.8)",
            }}
          >
            {statusMessage}
          </div>
        )}
        {status === "error" && (
          <div
            className="text-xs p-3 rounded-lg"
            style={{
              background: "rgba(255, 100, 100, 0.1)",
              borderLeft: "2px solid rgba(255, 100, 100, 0.5)",
              color: "rgba(255, 150, 150, 0.8)",
            }}
          >
            {statusMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full glass-card rounded-full px-8 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300"
          style={{ color: "rgba(255,255,255,0.7)" }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.currentTarget.style.color = "#ffffff"
              e.currentTarget.style.background = "rgba(255,255,255,0.08)"
            }
          }}
          onMouseLeave={(e) => {
            if (!loading) {
              e.currentTarget.style.color = "rgba(255,255,255,0.7)"
              e.currentTarget.style.background = "rgba(255,255,255,0.05)"
            }
          }}
        >
          {loading ? "SENDING..." : "SEND MESSAGE"}
        </button>
      </form>
    </div>
  )
}
