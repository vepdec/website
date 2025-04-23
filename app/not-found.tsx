"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, ArrowLeft, ShieldAlert, Lock, Code, AlertTriangle, AlertCircle } from "lucide-react"

// Add wave animation keyframes
const waveAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Add floating animation for icons
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Add pulse animation for the shield
const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0f1f]"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full w-1 h-1 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-center gap-8">
          {/* 404 Display */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0.5, x: -20 }}
              animate={{ opacity: 0.7, x: 0, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[120px] font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg"
            >
              4
            </motion.div>

            {/* Shield in circular card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 shadow-lg"
            >
              <div className="w-32 h-32 rounded-full bg-navy-800/50 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <motion.div variants={pulseAnimation} animate="animate">
                  <ShieldAlert className="w-16 h-16 text-blue-400" />
                </motion.div>
                <motion.div variants={floatingAnimation} animate="animate" className="absolute top-4 left-4">
                  <Lock className="w-8 h-8 text-indigo-400" />
                </motion.div>
                <motion.div variants={waveAnimation} animate="animate" className="absolute bottom-4 right-4">
                  <Code className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <motion.div variants={floatingAnimation} animate="animate" className="absolute top-4 right-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.div variants={waveAnimation} animate="animate" className="absolute bottom-4 left-4">
                  <AlertCircle className="w-8 h-8 text-red-400" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0.5, x: 20 }}
              animate={{ opacity: 0.7, x: 0, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[120px] font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg"
            >
              4
            </motion.div>
          </div>

          {/* Content */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Security Breach Detected
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto">
              The page you're looking for doesn't exist or has been moved to a secure location. Our security systems
              have logged this attempt.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Return to Safe Zone
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="#" onClick={() => window.history.back()} className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated cyber lines */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"></div>
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20"></div>
    </div>
  )
}
