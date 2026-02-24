/**
 * ASCII-based loading fallback for the 3D Brain.
 * Displays instantly while Three.js Canvas loads asynchronously.
 * Provides visual feedback without blocking initial render.
 */

interface BrainLoadingFallbackProps {
  className?: string
}

export function BrainLoadingFallback({ className = "" }: BrainLoadingFallbackProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-3">
        <div
          className="text-[9px] tracking-[0.3em] animate-pulse"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {`[ LOADING_NEURAL_MESH... ]`}
        </div>
        <div className="flex gap-1">
          <span
            className="inline-block w-1 h-1 rounded-full animate-bounce"
            style={{ backgroundColor: "#ffffff", animationDelay: "0ms" }}
          />
          <span
            className="inline-block w-1 h-1 rounded-full animate-bounce"
            style={{ backgroundColor: "#ffffff", animationDelay: "150ms" }}
          />
          <span
            className="inline-block w-1 h-1 rounded-full animate-bounce"
            style={{ backgroundColor: "#ffffff", animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  )
}
