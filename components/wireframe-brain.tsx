"use client"

import { useRef, useMemo, memo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { CanvasErrorBoundary } from "@/components/canvas-error-boundary"

/**
 * High-performance wireframe brain component.
 * With error boundary to gracefully fail on sandboxed/unsupported environments.
 */

interface BrainSceneProps {
  opacity?: number
  rotationSpeed?: number
  scale?: number
}

const BrainMesh = memo(function BrainMesh({
  opacity = 0.15,
  rotationSpeed = 0.06,
  scale = 1,
}: BrainSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  // Low-poly BufferGeometry: detail=3 (~640 triangles) for peak perf
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.2, 3)
    const pos = geo.attributes.position
    const v = new THREE.Vector3()

    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)

      // Brain-like sulci and gyri folds
      const fold =
        Math.sin(v.x * 3.2 + v.z * 1.8) * 0.14 +
        Math.sin(v.y * 4.5 + v.x * 2.1) * 0.11 +
        Math.cos(v.z * 3.6 + v.y * 1.5) * 0.09 +
        Math.sin(v.x * 6.5 + v.z * 4.8) * 0.05

      // Hemisphere shaping
      const yScale = v.y > 0 ? 1.0 : 0.82

      v.normalize().multiplyScalar(2.2 + fold)
      v.y *= yScale
      v.x *= 1.18
      v.z *= 0.92

      pos.setXYZ(i, v.x, v.y, v.z)
    }

    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime
    
    // Delta check: Skip frame if delta exceeds 50ms (performance safeguard)
    if (delta > 0.05) return
    
    if (meshRef.current) {
      meshRef.current.rotation.y = t * rotationSpeed
      meshRef.current.rotation.x = Math.sin(t * 0.04) * 0.08
      meshRef.current.rotation.z = Math.cos(t * 0.03) * 0.03
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = t * rotationSpeed
      innerRef.current.rotation.x = Math.sin(t * 0.04) * 0.08
      innerRef.current.rotation.z = Math.cos(t * 0.03) * 0.03
    }
  })

  return (
    <group scale={scale}>
      <mesh ref={meshRef} geometry={geometry} frustumCulled={false}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={opacity}
        />
      </mesh>
      <mesh ref={innerRef} geometry={geometry} scale={0.97} frustumCulled={false}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={opacity * 0.25}
        />
      </mesh>
    </group>
  )
})

const FloatingParticles = memo(function FloatingParticles({
  count = 100,
  radius = 3.5,
  spread = 2.5,
}: {
  count?: number
  radius?: number
  spread?: number
}) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius + Math.random() * spread
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius, spread])

  useFrame(({ clock }, delta) => {
    // Delta check: Skip frame if delta exceeds 50ms (performance safeguard)
    if (delta > 0.05) return
    
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.015
    }
  })

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.015}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
})

interface WireframeBrainProps {
  className?: string
  brainOpacity?: number
  brainScale?: number
  rotationSpeed?: number
  particleCount?: number
}

// Safe Canvas wrapper with error boundary
function CanvasContent({
  className = "",
  brainOpacity = 0.15,
  brainScale = 1,
  rotationSpeed = 0.06,
  particleCount = 100,
}: WireframeBrainProps) {
  // Check WebGL support before rendering
  const hasWebGL = (() => {
    if (typeof window === 'undefined') return true
    try {
      const canvas = document.createElement('canvas')
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('webgl2'))
      )
    } catch {
      return false
    }
  })()

  // Skip Canvas if WebGL is not available
  if (!hasWebGL) {
    return (
      <div 
        className={className}
        style={{ background: "rgba(255,255,255,0.01)" }}
      />
    )
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: false,
        }}
        performance={{ min: 0.5, max: 1 }}
        frameloop="always"
        flat
        onCreated={(state) => {
          state.gl.info.reset()
        }}
      >
        <color attach="background" args={["#000000"]} />
        <BrainMesh
          opacity={brainOpacity}
          rotationSpeed={rotationSpeed}
          scale={brainScale}
        />
        <FloatingParticles count={particleCount} />
      </Canvas>
    </div>
  )
}

export function WireframeBrain(props: WireframeBrainProps) {
  return (
    <CanvasErrorBoundary fallback={<div />}>
      <CanvasContent {...props} />
    </CanvasErrorBoundary>
  )
}
