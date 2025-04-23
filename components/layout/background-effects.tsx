"use client"

import { useEffect, useRef } from "react"

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Subtle gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "#0a0f1f")
    gradient.addColorStop(1, "#070b19")

    // Stars
    class Star {
      x: number
      y: number
      size: number
      opacity: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 1 + 0.1
        this.opacity = Math.random() * 0.5 + 0.1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const stars: Star[] = []

    // Initialize stars
    for (let i = 0; i < 100; i++) {
      stars.push(new Star())
    }

    const animate = () => {
      if (!ctx) return

      // Draw background
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw stars
      stars.forEach((star) => {
        star.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      <span className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f1f]/0 to-[#070b19]/30 pointer-events-none z-0"></span>
      <span className="fixed top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-0 aurora-glow"></span>
      <span className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none z-0 aurora-glow delay-2"></span>
      <span className="fixed top-3/4 left-2/3 w-[250px] h-[250px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none z-0 aurora-glow delay-4"></span>
    </>
  )
}
