"use client"

import { ReactNode, Component } from "react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary for Canvas/WebGL errors.
 * Catches WebGL context creation failures and renders fallback.
 */
export class CanvasErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Canvas Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: "rgba(255,255,255,0.01)",
            width: "100%",
            height: "100%",
          }}
        >
          {this.props.fallback}
        </div>
      )
    }

    return this.props.children
  }
}
