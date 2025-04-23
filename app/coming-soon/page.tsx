"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowRight, Clock, Home, Mail } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 mb-6 backdrop-blur-xl bg-white/10 border border-white/10 rounded-full flex items-center justify-center"
      >
        <Clock className="h-12 w-12 text-blue-400" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
      >
        Coming Soon
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-blue-100 mb-8 max-w-lg"
      >
        We're working hard to bring you something amazing. Stay tuned!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-8 mb-12"
      >
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.days}
          </div>
          <div className="text-sm text-blue-200">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            {countdown.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-blue-200">Seconds</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-md w-full mb-8"
      >
        {submitted ? (
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl p-6 text-center">
            <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-blue-100">We'll notify you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Get Notified When We Launch</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="backdrop-blur-xl bg-white/5 border-white/10 text-white focus:border-blue-500"
                required
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-purple-600 text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Notify Me
              </Button>
            </div>
            <p className="text-xs text-blue-200">We'll never share your email with anyone else.</p>
          </form>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button
          asChild
          variant="outline"
          className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 group"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
