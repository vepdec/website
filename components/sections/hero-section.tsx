"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Globe, GlobeLock } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>

        {/* Extended animated wavy lines with darker colors */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,100 Q250,0 500,100 T1000,100 T1500,100 T2000,100"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 Q250,100 500,200 T1000,200 T1500,200 T2000,200"
            fill="none"
            stroke="rgba(99, 102, 241, 0.2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,300 Q250,200 500,300 T1000,300 T1500,300 T2000,300"
            fill="none"
            stroke="rgba(79, 70, 229, 0.2)"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="container relative z-10 flex flex-col items-center text-center">
      <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <div className="inline-flex items-center text-blue-400 gap-2 py-2 px-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <GlobeLock></GlobeLock>
            <span className="text-sm font-medium text-white">Specialized in Cyber Security</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600"
        >
          Uniting Innovation, Security, and Success.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-blue-100 max-w-3xl mb-8"
        >
          We provide comprehensive cyber security solutions and web development services to protect your digital assets
          and grow your online presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 group"
          >
            <Link href="/services" className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
