"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import lottie, { type AnimationItem } from "lottie-web"
import { Loader2 } from "lucide-react"

// Default animation data for fallback
const defaultAnimationData = {
  v: "5.7.8",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Fallback Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { t: 60, s: [360] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [50, 50, 0], ix: 2, l: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
        s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              d: 1,
              ty: "el",
              s: { a: 0, k: [40, 40], ix: 2 },
              p: { a: 0, k: [0, 0], ix: 3 },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false,
            },
            {
              ty: "st",
              c: { a: 0, k: [0.23, 0.5, 0.96, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 6, ix: 5 },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Ellipse 1",
          np: 2,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
}

interface LottieAnimationProps {
  animationUrl?: string
  animationData?: any
  loop?: boolean
  autoplay?: boolean
  className?: string
  style?: React.CSSProperties
  fallbackIcon?: React.ReactNode
}

export default function LottieAnimation({
  animationUrl,
  animationData,
  loop = true,
  autoplay = true,
  className = "",
  style = {},
  fallbackIcon,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const loadAnimation = async () => {
      try {
        setLoading(true)
        setError(false)

        // Use provided animation data, or default fallback
        let data = animationData || defaultAnimationData

        // Only try to fetch if URL is provided and we don't already have animation data
        if (animationUrl && !animationData) {
          try {
            const response = await fetch(animationUrl)
            if (!response.ok) {
              console.error(`Failed to fetch: ${response.status}`)
              // Don't throw, just use the default animation
              data = defaultAnimationData
            } else {
              data = await response.json()
            }
          } catch (err) {
            console.error("Failed to load Lottie animation:", err)
            // Use default animation instead of showing error
            data = defaultAnimationData
          }
        }

        if (containerRef.current) {
          if (animationRef.current) {
            animationRef.current.destroy()
          }

          animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            animationData: data,
          })

          animationRef.current.addEventListener("DOMLoaded", () => {
            setLoading(false)
          })

          animationRef.current.addEventListener("error", () => {
            console.error("Lottie animation error event triggered")
            // Don't show error, just use the default animation
            if (containerRef.current && animationRef.current) {
              animationRef.current.destroy()
              animationRef.current = lottie.loadAnimation({
                container: containerRef.current,
                renderer: "svg",
                loop,
                autoplay,
                animationData: defaultAnimationData,
              })
            }
            setLoading(false)
          })
        }
      } catch (error) {
        console.error("Failed to load Lottie animation:", error)
        setError(false) // Don't show error state
        setLoading(false)

        // Load default animation instead
        if (containerRef.current) {
          if (animationRef.current) {
            animationRef.current.destroy()
          }

          animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            animationData: defaultAnimationData,
          })
        }
      }
    }

    loadAnimation()

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationUrl, animationData, loop, autoplay])

  if (loading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={style}>
        <Loader2 className="animate-spin text-blue-400" />
      </div>
    )
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={style}>
        {fallbackIcon || (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-indigo-500/10 rounded-full flex items-center justify-center">
            {/* Fallback gradient */}
          </div>
        )}
      </div>
    )
  }

  return <div ref={containerRef} className={className} style={style} />
}
